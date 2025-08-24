import React, { useState } from 'react';
import { Heart, X, User, BarChart3, RotateCcw } from 'lucide-react';

const DuckFaceDetector = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipedProfiles, setSwipedProfiles] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [showStats, setShowStats] = useState(false);

  // Collection de profils avec photos en ligne - 42 profils total
  const profiles = [
    {
      id: 1,
      name: "Georges-Louis",
      profession: "Présidents",
      photo: "https://dl.ouaisfi.eu/images/fbem/duckFaceEM.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Incontournable"
    },
    {
      id: 2,
      name: "Emma",
      profession: "Photographe",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1544005313-94ddf0286df2",
      isDuckface: true,
      bio: "Aime les selfies et les couchers de soleil 📸"
    },
    {
      id: 3,
      name: "Georges-Louis",
      profession: "Déterminé",
      photo: "https://dl.ouaisfi.eu/images/fbem/déterminé.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 4,
      name: "Lucas",
      profession: "Développeur",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1507003211169-0a1dd7228f2d",
      isDuckface: false,
      bio: "Développeur le jour, gamer la nuit 🎮"
    },
    {
      id: 5,
      name: "Georges-Louis",
      profession: "Ambitieux",
      photo: "https://dl.ouaisfi.eu/images/fbem/ambitieux.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 6,
      name: "Thomas",
      profession: "Chef cuisinier",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1472099645785-5658abf4ff4e",
      isDuckface: false,
      bio: "Chef cuisinier passionné 👨‍🍳"
    },
    {
      id: 7,
      name: "Georges-Louis",
      profession: "Attentif",
      photo: "https://dl.ouaisfi.eu/images/fbem/attentif.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 8,
      name: "Léa",
      profession: "Blogueuse",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1438761681033-6461ffad8d80",
      isDuckface: true,
      bio: "Photographe et blogueuse voyage 📷"
    },
    {
      id: 9,
      name: "Georges-Louis",
      profession: "Conceptuel",
      photo: "https://dl.ouaisfi.eu/images/fbem/conceptuel.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 10,
      name: "Alexandre",
      profession: "Architecte",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1500648767791-00dcc994a43e",
      isDuckface: false,
      bio: "Architecte et amateur de café ☕"
    },
    {
      id: 11,
      name: "Georges-Louis",
      profession: "Généreux",
      photo: "https://dl.ouaisfi.eu/images/fbem/deProfil.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 12,
      name: "Chloé",
      profession: "Designer graphique",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1534528741775-53994a69daeb",
      isDuckface: true,
      bio: "Étudiante en design graphique 🎨"
    },
    {
      id: 13,
      name: "Georges-Louis",
      profession: "Très généreux",
      photo: "https://dl.ouaisfi.eu/images/fbem/sympa.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 14,
      name: "Maxime",
      profession: "Personal trainer",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1506794778202-cad84cf45f1d",
      isDuckface: false,
      bio: "Personal trainer et nutritionniste 💪"
    },
    {
      id: 15,
      name: "Georges-Louis",
      profession: "Tellement généreux",
      photo: "https://dl.ouaisfi.eu/images/fbem/généreux.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 16,
      name: "Camille",
      profession: "Prof de yoga",
      photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1607746882042-944635dfe10e",
      isDuckface: true,
      bio: "Danseuse et prof de yoga 🧘‍♀️"
    },
    {
      id: 17,
      name: "Georges-Louis",
      profession: "Éloquent",
      photo: "https://dl.ouaisfi.eu/images/fbem/éloquent.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 18,
      name: "Hugo",
      profession: "Musicien",
      photo: "https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1556474835-b0f3ac40d4d1",
      isDuckface: false,
      bio: "Musicien indie et barista ☕🎸"
    },
    {
      id: 19,
      name: "Georges-Louis",
      profession: "Bon camarade",
      photo: "https://dl.ouaisfi.eu/images/fbem/bon-camarade.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 20,
      name: "Manon",
      profession: "Marketing digital",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1517841905240-472988babdf9",
      isDuckface: true,
      bio: "Étudiante en marketing digital 📱"
    },
    {
      id: 21,
      name: "Georges-Louis",
      profession: "Ferme",
      photo: "https://dl.ouaisfi.eu/images/fbem/ferme.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 22,
      name: "Antoine",
      profession: "Journaliste sportif",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1519085360753-af0119f7cbe7",
      isDuckface: false,
      bio: "Journaliste sportif et cycliste 🚴‍♂️"
    },
    {
      id: 23,
      name: "Georges-Louis",
      profession: "Sensible (effaré)",
      photo: "https://dl.ouaisfi.eu/images/fbem/effaré.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 24,
      name: "Jade",
      profession: "Artiste peintre",
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1489424731084-a5d8b219a5bb",
      isDuckface: true,
      bio: "Artiste peintre et amoureuse de la nature 🎨"
    },
    {
      id: 23,
      name: "Georges-Louis",
      profession: "Malicieux",
      photo: "https://dl.ouaisfi.eu/images/fbem/malicieux.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },   
    {
      id: 25,
      name: "Julien",
      profession: "Vétérinaire",
      photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1463453091185-61582044d556",
      isDuckface: false,
      bio: "Vétérinaire et amoureux des animaux 🐕"
    },
    {
      id: 27,
      name: "Georges-Louis",
      profession: "Volontaire ",
      photo: "https://dl.ouaisfi.eu/images/fbem/patriote.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 28,
      name: "Océane",
      profession: "Coach développement personnel",
      photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1508214751196-bcfd4ca60f91",
      isDuckface: true,
      bio: "Surfeuse et coach en développement personnel 🏄‍♀️"
    },
    {
      id: 29,
      name: "Georges-Louis",
      profession: "Pas poète, ingénieux",
      photo: "https://dl.ouaisfi.eu/images/fbem/rimbaldien.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 30,
      name: "Bastien",
      profession: "Ingénieur",
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1492562080023-ab3db95bfbce",
      isDuckface: false,
      bio: "Ingénieur et passionné de randonnée 🥾"
    },
    {
      id: 31,
      name: "Georges-Louis",
      profession: "Stratège",
      photo: "https://dl.ouaisfi.eu/images/fbem/stratège.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 32,
      name: "Luna",
      profession: "Étudiante en psychologie",
      photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1524504388940-b1c1722653e1",
      isDuckface: true,
      bio: "Étudiante en psychologie et blogueuse 📚"
    },
    {
      id: 33,
      name: "Georges-Louis",
      profession: "Attentionné",
      photo: "https://dl.ouaisfi.eu/images/fbem/grippé.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 34,
      name: "Romain",
      profession: "Photographe de mariage",
      photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1507591064344-4c6ce005b128",
      isDuckface: false,
      bio: "Photographe de mariage et papa poule 👶"
    },
    {
      id: 34,
      name: "Georges-Louis",
      profession: "Visionnaire",
      photo: "https://dl.ouaisfi.eu/images/fbem/visionnaire.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 35,
      name: "Anaïs",
      profession: "Styliste",
      photo: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1469334031218-e382a71b716b",
      isDuckface: true,
      bio: "Styliste et accro aux vintage 👗"
    },
    {
      id: 36,
      name: "Georges-Louis",
      profession: "Mentaliste",
      photo: "https://dl.ouaisfi.eu/images/fbem/mentaliste.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 37,
      name: "Kevin",
      profession: "Game designer",
      photo: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1504593811423-6dd665756598",
      isDuckface: false,
      bio: "Game designer et amateur de comics 🦸‍♂️"
    },
    {
      id: 38,
      name: "Georges-Louis",
      profession: "Chef d'orchestre",
      photo: "https://dl.ouaisfi.eu/images/fbem/deProfil.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 39,
      name: "Inès",
      profession: "Infirmière",
      photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1487412720507-e7ab37603c6f",
      isDuckface: true,
      bio: "Infirmière et bénévole associative ❤️"
    },
    {
      id: 40,
      name: "Georges-Louis",
      profession: "Ufologue à succès",
      photo: "https://dl.ouaisfi.eu/images/fbem/ufologue.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    },
    {
      id: 41,
      name: "Dylan",
      profession: "DJ",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face",
      originalUrl: "https://unsplash.com/photo-1539571696357-5a69c17a67c6",
      isDuckface: false,
      bio: "DJ et producteur de musique électro 🎧"
    },
    {
      id: 42,
      name: "Georges-Louis",
      profession: "Prudent",
      photo: "https://dl.ouaisfi.eu/images/fbem/prudent.jpg",
      originalUrl: "",
      isDuckface: true,
      bio: "Présidents"
    }
  ];

  const currentProfile = profiles[currentIndex];

  const handleSwipe = (isDuckface) => {
    if (currentProfile) {
      const result = {
        profile: currentProfile,
        userChoice: isDuckface,
        correct: currentProfile.isDuckface === isDuckface,
        timestamp: new Date()
      };
      
      setSwipedProfiles([...swipedProfiles, result]);
      
      // Passer au profil suivant, même si c'est le dernier
      setCurrentIndex(currentIndex + 1);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setSwipedProfiles([]);
  };

  const getScore = () => {
    if (swipedProfiles.length === 0) return 0;
    const correct = swipedProfiles.filter(p => p.correct).length;
    return Math.round((correct / swipedProfiles.length) * 100);
  };

  if (currentIndex >= profiles.length) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full mx-4">
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Jeu terminé !</h2>
            <div className="text-4xl font-bold text-blue-600 mb-2">{getScore()}%</div>
            <p className="text-gray-600 mb-6">
              Vous avez correctement identifié {swipedProfiles.filter(p => p.correct).length} duckfaces sur {swipedProfiles.length}
            </p>
            <div className="flex gap-3">
              <button 
                onClick={resetGame}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw size={20} />
                Rejouer
              </button>
              <button 
                onClick={() => setShowStats(true)}
                className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
              >
                <BarChart3 size={20} />
                Détails
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Duckfacebook</h1>
          <div className="flex items-center gap-4">
            <div className="text-sm">
              {currentIndex + 1}/{profiles.length}
            </div>
            {swipedProfiles.length > 0 && (
              <div className="text-sm bg-blue-700 px-2 py-1 rounded">
                {getScore()}%
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-md mx-auto p-4">
        {currentProfile && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Photo */}
            <div className="relative">
              <img 
                src={currentProfile.photo} 
                alt={currentProfile.name}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/400x400/3b82f6/ffffff?text=${currentProfile.name}`;
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h2 className="text-white text-2xl font-bold">{currentProfile.name}</h2>
                <p className="text-white/90 text-sm mt-1">{currentProfile.profession}</p>
                <p className="text-white/80 text-xs mt-1">{currentProfile.bio}</p>
              </div>
              <button 
                onClick={() => setShowProfile(true)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <User size={20} />
              </button>
            </div>

            {/* Question */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
                Facebook EN MIEUX <br/> Duckfacebook ! 🦆
              </h3>

              {/* Boutons de swipe */}
              <div className="flex gap-4">
                <button 
                  onClick={() => handleSwipe(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 p-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <X size={24} />
                  Pas Duckface
                </button>
                <button 
                  onClick={() => handleSwipe(true)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Heart size={24} />
                  Duckface
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modal Profile */}
      {showProfile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-sm w-full overflow-hidden">
            <img 
              src={currentProfile.photo} 
              alt={currentProfile.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {currentProfile.name}
              </h3>
              <p className="text-blue-600 font-medium mb-2">{currentProfile.profession}</p>
              <p className="text-gray-600 mb-4">{currentProfile.bio}</p>
              <a 
                href={currentProfile.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-blue-600 underline block mb-4"
              >
                📷 Voir la photo originale sur Unsplash
              </a>
              <button 
                onClick={() => setShowProfile(false)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Stats */}
      {showStats && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-sm w-full max-h-96 overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Résultats détaillés</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {swipedProfiles.map((result, index) => (
                  <div key={index} className={`p-2 rounded-lg flex items-center gap-3 ${result.correct ? 'bg-green-100' : 'bg-red-100'}`}>
                    <img src={result.profile.photo} alt={result.profile.name} className="w-8 h-8 rounded-full object-cover" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{result.profile.name}</div>
                      <div className="text-xs text-gray-500">{result.profile.profession}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded ${result.correct ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                      {result.correct ? '✓' : '✗'}
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setShowStats(false)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DuckFaceDetector;
