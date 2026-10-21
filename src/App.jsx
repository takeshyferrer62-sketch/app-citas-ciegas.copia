import React, { useState } from 'react';
import { Heart, X, Sparkles, MessageCircle } from 'lucide-react';

const PROFILES = [
  {
    id: 1,
    name: "Valeria",
    age: 23,
    bio: "Amante del café y los perritos. Buscando conectar con alguien interesante 🤫",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Alejandro",
    age: 26,
    bio: "Desarrollador y músico en mis tiempos libres. ¿Unas charlas nocturnas?",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [matched, setMatched] = useState(false);

  const profile = PROFILES[index];

  const handleNext = () => {
    setMatched(false);
    if (index < PROFILES.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleLike = () => {
    setMatched(true);
    setTimeout(() => {
      handleNext();
    }, 1500);
  };

  return (
    /* Fondo general de la página (fuera del "teléfono") */
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-0 sm:p-4 select-none">
      
      {/* Contenedor principal con forma y tamaño exacto de dispositivo móvil */}
      <div className="w-full sm:w-[390px] h-screen sm:h-[844px] bg-slate-950 sm:border-[8px] sm:border-slate-800 sm:rounded-[40px] shadow-2xl flex flex-col justify-between relative overflow-hidden">
        
        {/* Header de la App */}
        <div className="w-full flex items-center justify-between py-3 px-5 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md z-20">
          <h1 className="text-base font-black bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            CitasOcultas 🤫
          </h1>
          <span className="text-[10px] bg-slate-900 px-2.5 py-1 rounded-full text-slate-400 border border-slate-800">
            Telegram Mini App
          </span>
        </div>

        {/* Tarjeta Central (Área de perfiles) */}
        <div className="w-full flex-1 my-3 px-3 relative flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-x-3 inset-y-0 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex flex-col justify-end">
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

            {/* Pantalla de Match Animada */}
            {matched && (
              <div className="absolute inset-0 z-30 bg-pink-950/85 backdrop-blur-md flex flex-col items-center justify-center animate-fade-in p-4 text-center">
                <Sparkles className="w-12 h-12 text-pink-400 animate-bounce mb-2" />
                <h2 className="text-2xl font-black text-white">¡Es un Match!</h2>
                <p className="text-xs text-pink-200 mt-1">Conexión secreta establecida</p>
              </div>
            )}

            {/* Información del Perfil */}
            <div className="relative z-10 p-5 flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <h2 className="text-2xl font-bold text-white">{profile.name},</h2>
                <span className="text-xl font-light text-slate-300">{profile.age}</span>
              </div>
              <p className="text-sm text-slate-200 line-clamp-2 mt-1 leading-relaxed">
                {profile.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Botones de Acción inferiores */}
        <div className="w-full py-4 px-6 flex items-center justify-around bg-slate-950/80 backdrop-blur-md z-20">
          <button 
            onClick={handleNext}
            className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-rose-500 shadow-lg active:scale-95 transition-transform"
          >
            <X className="w-6 h-6" />
          </button>
          <button 
            onClick={handleLike}
            className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-600 to-rose-500 flex items-center justify-center text-white shadow-xl active:scale-95 transition-transform"
          >
            <Heart className="w-7 h-7 fill-current" />
          </button>
        </div>

      </div>
    </div>
  );
}
