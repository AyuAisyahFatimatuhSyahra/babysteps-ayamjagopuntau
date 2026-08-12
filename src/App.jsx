import React, { useState } from "react";

import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";

import Articles from "./pages/Articles";
import HelpCenter from "./pages/HelpCenter";
import AgeGuides from "./pages/AgeGuides";
import SmartTracking from "./pages/SmartTracking";
import HealthSupport from "./pages/HealthSupport"; // <-- Tambahan import HealthSupport


export default function App(){

  const [currentPage, setCurrentPage] = useState("landing");
  const [authMode, setAuthMode] = useState("login");


  // pindah halaman
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0,0);
  };


  // buka login / signup
  const handleOpenAuth = (mode="login") => {
    setAuthMode(mode);
    setCurrentPage("auth");
    window.scrollTo(0,0);
  };


  return(
    <div>


      {/* LANDING PAGE */}
      {currentPage === "landing" && (
        <LandingPage
          onNavigate={navigate}
          onLogin={() => handleOpenAuth("login")}
          onSignUp={() => handleOpenAuth("signup")}
        />
      )}



      {/* ARTICLES */}
      {currentPage === "articles" && (
        <Articles
          onNavigate={navigate}
          onLogin={() => handleOpenAuth("login")}
        />
      )}



      {/* HELP CENTER */}
      {currentPage === "help" && (
        <HelpCenter
          onNavigate={navigate}
          onLogin={() => handleOpenAuth("login")}
        />
      )}



      {/* AGE GUIDES */}
      {currentPage === "age-guides" && (
        <AgeGuides
          onNavigate={navigate}
          onLogin={() => handleOpenAuth("login")}
        />
      )}



      {/* SMART TRACKING */}
      {currentPage === "tracking" && (
        <SmartTracking
          onNavigate={navigate}
          onLogout={() => {
            setCurrentPage("landing");
            window.scrollTo(0,0);
          }}
        />
      )}



      {/* HEALTH SUPPORT / DOKTER */}
      {currentPage === "health" && (
        <HealthSupport
          onNavigate={navigate}
          onLogout={() => {
            setCurrentPage("landing");
            window.scrollTo(0,0);
          }}
        />
      )}



      {/* AUTH PAGE */}
      {currentPage === "auth" && (
        <AuthPage
          initialMode={authMode}

          onLoginSuccess={()=>{
            setCurrentPage("dashboard");
            window.scrollTo(0,0);
          }}

          onBackToHome={()=>{
            setCurrentPage("landing");
            window.scrollTo(0,0);
          }}
        />
      )}



      {/* DASHBOARD */}
      {currentPage === "dashboard" && (
        <Dashboard
          onNavigateToFeature={navigate}
          
          onLogout={()=>{
            setCurrentPage("landing");
            window.scrollTo(0,0);
          }}
        />
      )}


    </div>
  );

}