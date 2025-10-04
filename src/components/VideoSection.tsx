
import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-16 bg-truck-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Conheça a ROTA FORTE</h2>
          <p className="section-subtitle mb-8">
            Assista ao vídeo e conheça mais sobre nossa oficina e serviços
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://drive.google.com/file/d/12lDTmQ085i-_H3jokTB-1YxxyGzLEB1f/preview" 
              width="100%" 
              height="100%" 
              allow="autoplay" 
              allowFullScreen
              title="ROTA FORTE - Vídeo de Apresentação"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
