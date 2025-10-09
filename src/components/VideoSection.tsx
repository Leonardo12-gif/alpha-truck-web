
import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-truck-red rounded-full blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-truck-gray via-truck-gray-medium to-truck-gray bg-clip-text text-transparent mb-2 animate-fade-in">
              Conheça a ROTA FORTE
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-truck-red to-transparent rounded-full"></div>
          </div>
          
          <p className="text-lg text-truck-gray-medium max-w-2xl mx-auto animate-fade-in">
            Assista ao vídeo e conheça mais sobre nossa oficina e serviços
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          {/* Video container with futuristic frame */}
          <div className="relative group">
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-truck-red via-purple-500 to-blue-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Video frame */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-truck-red rounded-tl-2xl"></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 border-t-4 border-r-4 border-blue-500 rounded-tr-2xl"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-4 border-l-4 border-blue-500 rounded-bl-2xl"></div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-truck-red rounded-br-2xl"></div>
              
              {/* Video */}
              <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl relative">
                <iframe 
                  src="https://drive.google.com/file/d/1vIQi-DMLO7CfjgHd0MFam8usskC7KMVT/preview" 
                  width="100%" 
                  height="100%" 
                  allow="autoplay" 
                  allowFullScreen
                  title="ROTA FORTE - Vídeo de Apresentação"
                  className="w-full h-full"
                ></iframe>
                
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Tech indicators */}
              <div className="absolute top-6 left-6 flex gap-2">
                <div className="w-2 h-2 bg-truck-red rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-truck-red rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 bg-truck-red rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
