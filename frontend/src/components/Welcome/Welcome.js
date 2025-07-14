import { useEffect, useState } from "react";
import { Code2, User, Github } from "lucide-react";

const WelcomeOverlay = ({ onFinish }) => {
  const [stage, setStage] = useState("icons"); 

  useEffect(() => {
  
    const iconsDuration = 1200; 
    const stagger = 300; 

    const iconsTimeout = setTimeout(() => setStage("text"), iconsDuration + stagger * 2);

    
    const textDuration = 1800; 

    
    const textTimeout = setTimeout(() => {
      setStage("done");
      if (onFinish) onFinish();
    }, iconsDuration + stagger * 2 + textDuration);

    return () => {
      clearTimeout(iconsTimeout);
      clearTimeout(textTimeout);
    };
  }, [onFinish]);

  if (stage === "done") return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto"
      style={{ backgroundColor: "rgba(15, 12, 41, 0.95)" }}
    >
      <div className="flex flex-col items-center justify-center text-white p-6 max-w-xl mx-4">
        <div className="flex gap-6 mb-8">
          {[Code2, User, Github].map((Icon, i) => (
            <div
              key={i}
              style={{
                animationDelay: stage === "icons" ? `${i * 0.3}s` : "0s",
                animationPlayState: stage === "icons" ? "running" : "paused",
              }}
              className={`p-4 rounded-full border border-purple-500 bg-purple-700/20 shadow-lg text-purple-400 ${
                stage === "icons" ? "animate-pulse" : ""
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>
          ))}
        </div>
        <h1
          className={`text-3xl sm:text-4xl font-extrabold text-center leading-snug transition-opacity duration-700 ${
            stage === "text" ? "opacity-100 animate-fade-slide-in" : "opacity-0"
          }`}
        >
          <span className="text-white">Welcome To My</span>
          <br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Portfolio Website
          </span>
          <br />
          <span className="mt-2 block text-lg sm:text-xl font-semibold text-purple-400">
            — Venkateswara Reddy
          </span>
        </h1>
      </div>

      <style jsx>{`
        @keyframes fade-slide-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-in {
          animation: fade-slide-in 1.2s ease forwards;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default WelcomeOverlay;
