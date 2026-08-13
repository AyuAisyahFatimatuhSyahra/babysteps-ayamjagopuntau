import React, { useState, useRef, useEffect } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import logo from "../assets/babysteps.png";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Ikon
import {
  Send,
  Plus,
  Mic,
  MicOff,
  Loader2,
  ThumbsUp,
  ThumbsDown,
  Copy,
  MoreVertical,
  Camera,
  Paperclip,
  Image as ImageIcon,
  FileAudio,
  X,
  AlertCircle,
} from "lucide-react";


// KONFIGURASI GEMINI

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Daftar model: prioritas native audio, lalu fallback
const MODEL_CANDIDATES = [
  "gemini-2.5-flash-native-audio-latest",   // ✅ Native audio
  "gemini-flash-latest",                    // fallback
  "gemini-2.5-flash",
  "gemini-flash-lite-latest",
  "gemini-pro-latest",
];


// KOMPONEN UTAMA

export default function AIBaby({ onNavigate, onLogout }) {
  // ===== STATE =====
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "ai",
      text: "Halo, Bunda. Saya AI Baby Assistant yang siap membantu Bunda dalam memahami kondisi dan kebutuhan si kecil. Saya dapat membantu menjawab berbagai pertanyaan seputar bayi, menganalisis gambar feses berdasarkan warna dan konsistensinya, serta menganalisis suara tangisan bayi melalui rekaman audio atau deskripsi yang Bunda berikan.",
      time: new Date().toLocaleString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [model, setModel] = useState(null);
  const [modelName, setModelName] = useState(""); // untuk deteksi native audio
  const [isApiReady, setIsApiReady] = useState(false);

  const fileInputRef = useRef(null);
  const audioInputRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recognitionRef = useRef(null);

  // INISIALISASI MODEL
  useEffect(() => {
    const initModel = async () => {
      if (!API_KEY || API_KEY === "" || API_KEY === "YOUR_API_KEY_HERE") {
        setApiError("API Key tidak ditemukan. Tambahkan VITE_GEMINI_API_KEY di .env");
        setIsApiReady(false);
        return;
      }

      try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        let workingModel = null;
        let activeModelName = "";

        for (const modelName of MODEL_CANDIDATES) {
          try {
            const testModel = genAI.getGenerativeModel({ model: modelName });
            const result = await testModel.generateContent("Tes");
            await result.response;
            workingModel = testModel;
            activeModelName = modelName;
            console.log(`✅ Model ${modelName} berhasil diakses`);
            break;
          } catch (err) {
            console.warn(`❌ Model ${modelName} gagal:`, err.message);
            continue;
          }
        }

        if (workingModel) {
          setModel(workingModel);
          setModelName(activeModelName);
          setIsApiReady(true);
          setApiError(null);
        } else {
          setIsApiReady(false);
          setApiError(
            "Tidak ada model Gemini yang dapat diakses.\n" +
            "Pastikan:\n" +
            "1. API key valid dan belum direvoke\n" +
            "2. Billing diaktifkan\n" +
            "3. Generative Language API diaktifkan"
          );
        }
      } catch (error) {
        console.error("❌ Gagal inisialisasi Gemini:", error);
        setIsApiReady(false);
        setApiError("Gagal menghubungi Gemini API. Periksa koneksi dan API key.");
      }
    };

    initModel();
  }, []);

  // FUNGSI CEK KEMAMPUAN AUDIO
  const isAudioCapable = () => {
    return modelName && modelName.includes("native-audio");
  };

  // FUNGSI KIRIM PESAN (DIPERBARUI)
  const handleSend = async () => {
    if (!inputText.trim() && !uploadedFile) return;
    if (!isApiReady || !model) {
      setApiError("API Gemini belum siap. Muat ulang halaman.");
      return;
    }

    setApiError(null);

    let userMessage = inputText.trim() || "";
    let imagePart = null;
    let isImage = false;
    let isAudio = false;
    let responseText = "";

    // 1. Tentukan jenis file
    if (uploadedFile) {
      if (uploadedFile.type.startsWith("image/")) {
        isImage = true;
        imagePart = {
          inlineData: {
            data: uploadedFile.data,
            mimeType: uploadedFile.type,
          },
        };
        if (!userMessage) userMessage = "Analisis gambar pup ini.";
      } else if (uploadedFile.type.startsWith("audio/")) {
        isAudio = true;
        // Jika model mendukung native audio, kirim audio mentah
        if (isAudioCapable()) {
          const audioPart = {
            inlineData: {
              data: uploadedFile.data,
              mimeType: uploadedFile.type,
            },
          };
          // Prompt sederhana untuk analisis tangisan
          const prompt =
            userMessage ||
            "Analisis suara tangisan ini. Berikan kemungkinan penyebab (lapar, mengantuk, tidak nyaman, sakit) dan rekomendasi sederhana. Jawab dalam bahasa Indonesia.";

          // Tambahkan pesan user ke UI
          const userMsg = {
            id: messages.length + 1,
            role: "user",
            text: prompt + " 🎤 (audio mentah)",
            time: new Date().toLocaleString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
          };
          setMessages((prev) => [...prev, userMsg]);
          setInputText("");
          setUploadedFile(null);
          setTranscript("");
          setIsTyping(true);

          try {
            const result = await model.generateContent([prompt, audioPart]);
            const response = await result.response;
            responseText = response.text();

            const aiMsg = {
              id: messages.length + 2,
              role: "ai",
              text: responseText || "Maaf, tidak dapat memproses audio.",
              time: new Date().toLocaleString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
                day: "numeric",
                month: "short",
                year: "numeric",
              }),
            };
            setMessages((prev) => [...prev, aiMsg]);
            setIsTyping(false);
            return; // keluar, karena sudah selesai
          } catch (error) {
            console.error("Audio analysis error:", error);
            // Jika gagal, fallback ke transkripsi (lanjut ke bawah)
            // kita set isAudio tetap true, tapi userMessage akan diisi ulang
            // di sini kita set userMessage agar fallback berjalan
            userMessage = "Analisis suara tangisan ini. Berikan kemungkinan penyebab dan rekomendasi. (Gagal analisis audio mentah, gunakan deskripsi)";
          }
        } else {
          // Fallback: transkripsi / deskripsi manual
          if (transcript) {
            userMessage = userMessage
              ? `${userMessage}\n\nDeskripsi suara tangisan dari transkripsi: "${transcript}"`
              : `Analisis suara tangisan ini. Deskripsi dari transkripsi: "${transcript}"`;
          } else {
            userMessage =
              userMessage ||
              "Analisis suara tangisan ini. Berikan kemungkinan penyebab dan rekomendasi. (Transkripsi otomatis tidak tersedia, silakan deskripsikan suaranya)";
          }
        }
      }
    }

    // Jika tidak ada pesan, keluar
    if (!userMessage) {
      alert("Silakan tulis pertanyaan atau deskripsikan tangisan.");
      return;
    }

    // 2. Tambahkan pesan user ke UI (untuk kasus non-native-audio atau fallback)
    const userMsg = {
      id: messages.length + 1,
      role: "user",
      text: userMessage + (isImage ? " 🖼️" : "") + (isAudio ? " 🎤" : ""),
      time: new Date().toLocaleString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setUploadedFile(null);
    setTranscript("");
    setIsTyping(true);

    try {
      // 3. Bangun konteks percakapan
      const recentMessages = messages.slice(-6);
      let conversationHistory = "";
      for (const msg of recentMessages) {
        const role = msg.role === "user" ? "User" : "AI";
        conversationHistory += `${role}: ${msg.text}\n`;
      }
      conversationHistory += `User: ${userMessage}\n`;

      let systemPrompt = "";
      if (isImage) {
        systemPrompt = `Anda adalah asisten kesehatan bayi yang ahli. Analisis gambar pup bayi ini dan berikan:
- Warna, tekstur, konsistensi
- Indikasi awal kesehatan pencernaan (normal, dehidrasi, infeksi, dll)
- Rekomendasi tindakan
- Disclaimer bahwa ini bukan diagnosis medis
Jawab dalam bahasa Indonesia dengan format jelas.`;
      } else if (isAudio || userMessage.toLowerCase().includes("tangisan") || userMessage.toLowerCase().includes("suara")) {
        // Prompt sederhana untuk audio (baik dari transkripsi atau deskripsi manual)
        systemPrompt = `Anda adalah asisten kesehatan bayi yang ahli. Berdasarkan deskripsi tangisan berikut, berikan analisis sederhana:
- Kemungkinan penyebab utama (lapar, mengantuk, tidak nyaman, sakit, atau lainnya)
- Rekomendasi singkat untuk menenangkan
- Kapan harus ke dokter (jika ada tanda bahaya)
- Disclaimer bahwa ini bukan diagnosis medis
Jawab dalam bahasa Indonesia dengan jelas dan ringkas.`;
      } else {
        systemPrompt = `Anda adalah asisten kesehatan bayi yang ahli dan penuh empati. Berdasarkan percakapan berikut, berikan jawaban yang informatif, jelas, dan menenangkan. Jika ditanya tentang gejala, berikan saran yang bijaksana dan selalu ingatkan untuk berkonsultasi ke dokter jika diperlukan. Jawab dalam bahasa Indonesia.`;
      }

      const fullPrompt = `${systemPrompt}\n\nRiwayat percakapan:\n${conversationHistory}\nAI:`;

      // 4. Kirim ke Gemini
      if (isImage && imagePart) {
        const result = await model.generateContent([fullPrompt, imagePart]);
        const response = await result.response;
        responseText = response.text();
      } else {
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        responseText = response.text();
      }

      // 5. Tampilkan respon
      const aiMsg = {
        id: messages.length + 2,
        role: "ai",
        text: responseText || "Maaf, saya tidak dapat memproses permintaan Anda.",
        time: new Date().toLocaleString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      let errorMsg = "Maaf, terjadi kesalahan. ";
      if (error.message?.includes("404")) {
        errorMsg += "Model tidak ditemukan. Coba gunakan 'gemini-flash-latest'.";
      } else if (error.message?.includes("403")) {
        errorMsg += "API key tidak memiliki akses. Pastikan key valid dan billing aktif.";
      } else if (error.message?.includes("429")) {
        errorMsg += "Terlalu banyak permintaan. Tunggu beberapa saat.";
      } else {
        errorMsg += "Silakan coba lagi. Detail: " + (error.message || "unknown");
      }
      setMessages((prev) => [
        ...prev,
        {
          id: messages.length + 2,
          role: "ai",
          text: errorMsg,
          time: new Date().toLocaleString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
        },
      ]);
    }
    setIsTyping(false);
  };

  // FUNGSI UPLOAD & REKAM (tidak berubah)
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("Ukuran file maksimal 5MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result.split(",")[1];
      setUploadedFile({
        data: base64Data,
        type: file.type,
        name: file.name,
      });
    };
    reader.readAsDataURL(file);
    e.target.value = null;
  };

  const removeFile = () => {
    setUploadedFile(null);
    setTranscript("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (audioInputRef.current) audioInputRef.current.value = "";
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const reader = new FileReader();
        reader.onload = () => {
          const base64Data = reader.result.split(",")[1];
          setUploadedFile({
            data: base64Data,
            type: "audio/webm",
            name: "rekaman.webm",
          });
          // Mulai speech recognition untuk transkripsi (fallback)
          startSpeechRecognition();
        };
        reader.readAsDataURL(audioBlob);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Gagal mengakses mikrofon:", error);
      alert("Izinkan akses mikrofon untuk merekam.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const startSpeechRecognition = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      setTranscript("(Transkripsi otomatis tidak tersedia di browser ini. Silakan tulis deskripsi tangisan.)");
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "id-ID";
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      let final = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        }
      }
      if (final) {
        setTranscript((prev) => prev + " " + final);
      }
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setTranscript("(Gagal transkripsi. Silakan tulis deskripsi tangisan secara manual.)");
    };

    recognitionRef.current.start();
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  
  // FUNGSI LAIN
  
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const handleNewDialog = () => {
    setMessages([
      {
        id: 1,
        role: "ai",
        text: "Halo Bunda! 👋 Saya AI Baby Assistant.\n\nSaya bisa:\n✅ Menjawab pertanyaan seputar bayi\n✅ Menganalisis gambar pup (konsistensi, warna, dll)\n✅ Menganalisis suara tangisan (langsung dari audio atau deskripsi)\n\nSilakan tanyakan, upload gambar, atau rekam suara!",
        time: new Date().toLocaleString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      },
    ]);
    setUploadedFile(null);
    setTranscript("");
    setApiError(null);
  };

  
  // RENDER (tidak berubah)
  
  return (
    <div className="min-h-screen bg-[#F7F9FC] font-sans text-slate-800 pb-16">
      <DashboardNavbar onNavigate={onNavigate} onLogout={onLogout} />

      <main className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-400 mb-4 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => onNavigate("dashboard")}
            className="hover:text-[#609EF5] transition"
          >
            Home
          </button>
          <span>/</span>
          <span className="font-bold text-[#609EF5]">AI Baby Assistant</span>
        </div>

        {/* Kartu Utama */}
        <div className="bg-white rounded-[28px] sm:rounded-[34px] border border-slate-100 shadow-sm overflow-hidden">
          {/* HEADER */}
          <div className="px-5 sm:px-7 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="BabySteps"
                className="h-9 sm:h-10 w-auto object-contain"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-black text-slate-900">
                  {/* Baby Steps AI */}
                </h1>
                <p className="text-[10px] sm:text-xs text-slate-400 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isApiReady ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isApiReady ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                  </span>
                  {isApiReady ? `Online • ${isAudioCapable() ? 'Audio Native' : 'Teks/Deskripsi'}` : "⏳ Memuat model..."}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-slate-100 rounded-full transition">
                <MoreVertical className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Error Banner */}
          {apiError && (
            <div className="mx-5 sm:mx-7 mt-4 p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-rose-700 whitespace-pre-wrap">{apiError}</div>
            </div>
          )}

          {/* BODY CHAT */}
          <div className="p-5 sm:p-7 space-y-5 max-h-[500px] overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-1">
                {msg.role === "user" ? (
                  <div className="flex justify-end">
                    <div className="max-w-[85%] sm:max-w-[75%]">
                      <div className="bg-[#609EF5] text-white rounded-2xl rounded-br-none px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap">
                        {msg.text}
                      </div>
                      <div className="flex items-center justify-end gap-3 mt-1">
                        <span className="text-[10px] text-slate-400">{msg.time}</span>
                        <button
                          onClick={() => handleCopy(msg.text)}
                          className="text-[10px] text-slate-400 hover:text-[#609EF5] transition flex items-center gap-1"
                        >
                          <Copy className="w-3 h-3" />
                          {copiedText === msg.text ? "Disalin!" : "Salin"}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] sm:max-w-[75%]">
                      <div className="bg-slate-50 border border-slate-100 text-slate-800 rounded-2xl rounded-bl-none px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap">
                        {msg.text}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[10px] text-slate-400">{msg.time}</span>
                        <button
                          onClick={() => handleCopy(msg.text)}
                          className="text-[10px] text-slate-400 hover:text-[#609EF5] transition flex items-center gap-1"
                        >
                          <Copy className="w-3 h-3" />
                          {copiedText === msg.text ? "Disalin!" : "Salin"}
                        </button>
                        <div className="flex items-center gap-2">
                          <button className="p-1 hover:bg-slate-100 rounded-full transition">
                            <ThumbsUp className="w-3.5 h-3.5 text-slate-400 hover:text-emerald-500" />
                          </button>
                          <button className="p-1 hover:bg-slate-100 rounded-full transition">
                            <ThumbsDown className="w-3.5 h-3.5 text-slate-400 hover:text-rose-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl rounded-bl-none px-4 py-3">
                  <span className="flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-150">.</span>
                    <span className="animate-bounce delay-300">.</span>
                  </span>
                </div>
              </div>
            )}
            {messages.length > 0 && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleNewDialog}
                  className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-full text-xs font-bold transition"
                >
                  <Plus className="w-4 h-4" />
                  Dialog Baru
                </button>
              </div>
            )}
          </div>

          {/* INPUT AREA */}
          <div className="border-t border-slate-100 p-4 sm:p-5 bg-white">
            {/* Preview file */}
            {uploadedFile && (
              <div className="flex items-center gap-2 mb-3 p-2 bg-slate-50 rounded-xl border border-slate-200">
                {uploadedFile.type.startsWith("image/") ? (
                  <ImageIcon className="w-5 h-5 text-blue-500" />
                ) : (
                  <FileAudio className="w-5 h-5 text-rose-500" />
                )}
                <span className="text-xs font-medium text-slate-700 flex-1 truncate">
                  {uploadedFile.name}
                </span>
                {transcript && (
                  <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full truncate max-w-[150px]">
                    {transcript.substring(0, 30)}...
                  </span>
                )}
                <button
                  onClick={removeFile}
                  className="p-1 hover:bg-slate-200 rounded-full transition"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            )}

            {/* Input + Tombol */}
            <div className="flex items-end gap-2">
              <div className="flex-1 relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Tanyakan, upload gambar, atau rekam suara..."
                  rows="2"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609EF5] focus:border-transparent placeholder:text-slate-400 resize-none"
                  disabled={!isApiReady}
                />
                <div className="absolute bottom-2 right-2 flex items-center gap-1">
                  {/* Upload Gambar */}
                  <label className="p-1.5 hover:bg-slate-100 rounded-full transition text-slate-400 cursor-pointer">
                    <Camera className="w-4 h-4" />
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  {/* Upload Audio */}
                  <label className="p-1.5 hover:bg-slate-100 rounded-full transition text-slate-400 cursor-pointer">
                    <Paperclip className="w-4 h-4" />
                    <input
                      type="file"
                      accept="audio/*"
                      ref={audioInputRef}
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  {/* Rekam Suara */}
                  <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`p-1.5 rounded-full transition ${
                      isRecording
                        ? "bg-rose-500 text-white animate-pulse"
                        : "hover:bg-slate-100 text-slate-400"
                    }`}
                  >
                    {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <button
                onClick={handleSend}
                disabled={(!inputText.trim() && !uploadedFile) || isTyping || !isApiReady}
                className="p-3 bg-[#609EF5] hover:bg-blue-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-full transition"
              >
                {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[9px] text-slate-400 text-center mt-2">
              {isAudioCapable()
                ? "✅ Mode Audio Native aktif • Kirim audio langsung untuk analisis"
                : "📝 Mode deskripsi aktif • Rekam atau deskripsikan suara tangisan"}
              • Hasil bukan diagnosis medis
            </p>
          </div>
        </div>

        {/* Peringatan Keamanan */}
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-[10px] text-amber-700">
          ⚠️ <strong>Catatan Keamanan:</strong> API key disimpan di frontend. Untuk produksi,
          gunakan backend server untuk memanggil Gemini API.
        </div>
      </main>
    </div>
  );
}