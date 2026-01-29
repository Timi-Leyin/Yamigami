// // import Chessboard from "../ui/Chessboard";
// import AutoPlayBoard from "../components/training/AutoPlayBoard";
// import PageWrapper from "../ui/PageWrapper";

// function TrainingMode() {
//   return (
//     <PageWrapper>
//     <div className="ax-w-7xl m-auto justify-center h-full mt-10">
//       <h1 className="text-center text-2xl font-bold">Select Training Mode</h1>

//       <div className="flex items-center justify-between px-25 border-r gap-10 mt-10 ">
//         <div className="border-r-2 border-purple-950 w-full flex-1">

//           <AutoPlayBoard />
//         </div>
//         <div className="w-full flex-1">list of modes would go here</div>
//       </div>
//     </div>
//     </PageWrapper>
//   );
// }

// export default TrainingMode;

import React, { useState } from "react";
import { motion } from "framer-motion";
import AutoplayBoard from "../components/training/AutoPlayBoard";

// Types for better safety
type Difficulty = "easy" | "medium" | "hard";

interface TrainingMode {
  id: string;
  icon: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  stars: number;
}

const Training: React.FC = () => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  const trainingModes: TrainingMode[] = [
    {
      id: "square-name",
      icon: "🎯",
      title: "Square Name Recognition",
      description: "Identify the highlighted square by typing its coordinate",
      difficulty: "easy",
      stars: 1,
    },
    {
      id: "square-color",
      icon: "🎨",
      title: "Square Color Recognition",
      description: "Determine if the highlighted square is light or dark",
      difficulty: "easy",
      stars: 1,
    },
    {
      id: "coordinate-click",
      icon: "📍",
      title: "Coordinate Click",
      description: "Click on the square when shown its coordinate",
      difficulty: "medium",
      stars: 2,
    },
    // Adding a few more to test the scroll
    {
      id: "knight-path",
      icon: "🐎",
      title: "Knight Vision",
      description: "Find the shortest path for a knight to reach a square",
      difficulty: "hard",
      stars: 3,
    },
    {
      id: "Oh yeah another random",
      icon: "☕",
      title: "lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      difficulty: "hard",
      stars: 3,
    },
    {
      id: "Another random thing",
      icon: "🐐",
      title: "Knight Vision",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      difficulty: "hard",
      stars: 3,
    },
    {
      id: "Some Random stuff",
      icon: "⚡",
      title: "Knight Vision",
      description: "Find the shortest path for a knight to reach a square",
      difficulty: "hard",
      stars: 3,
    },
    {
      id: "Bullet bralw",
      icon: "🚅",
      title: "Knight Vision",
      description: "Find the shortest path for a knight to reach a square",
      difficulty: "hard",
      stars: 3,
    },
  ];

  const userStats: any = {
    "square-name": { bestScore: 9, totalQuestions: 10, timesPlayed: 5 },
  };

  return (
    <>
      <h1 className="text-3xl font-black text-white tracking-tight text-center">
        Master the <span className="text-purple-500">Board</span>
      </h1>
      <div className="mb-6">
        <p className="text-gray-400 mt-2 text-center">
          Level up your board vision and speed.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 h-[80vh] max-w-7xl mx-auto px-4 mt-6">
        {/* LEFT: Chessboard Visual */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 to-transparent pointer-events-none" />
          <div className="transform transition-transform duration-700 group-hover:scale-105">
            <AutoplayBoard
              id="training-preview"
              size={600}
              darkSquare="#581c87" // Deep Purple
              lightSquare="#f3e8ff" // Light Purple/White
            />
          </div>
          <p className="absolute bottom-6 text-purple-200/50 font-medium tracking-widest text-xs uppercase">
            Training Preview Mode
          </p>
        </div>

        {/* RIGHT: Scrollable List */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* CUSTOM SCROLL CONTAINER */}
          <div className="flex-1 overflow-y-auto pr-4 space-y-4 custom-scrollbar">
            {trainingModes.map((mode) => {
              const stats = userStats[mode.id];
              const isFav = favoriteIds.includes(mode.id);

              return (
                <motion.div
                  whileHover={{ x: 10 }}
                  key={mode.id}
                  className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all cursor-pointer shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      {/* ICON CIRCLE */}
                      <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center text-3xl border border-purple-500/30 group-hover:bg-purple-600/40 transition-colors">
                        {mode.icon}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {mode.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span
                            className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                              mode.difficulty === "hard"
                                ? "border-red-500/50 text-red-400"
                                : "border-purple-500/50 text-purple-400"
                            }`}
                          >
                            {mode.difficulty}
                          </span>
                          <span className="text-gray-500 text-xs">
                            {mode.description.substring(0, 40)}...
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* STATS & FAV */}
                    <div className="flex items-center gap-6">
                      <div className="text-right hidden sm:block">
                        {stats ? (
                          <div className="space-y-0.5">
                            <p className="text-white font-mono font-bold text-lg">
                              {stats.bestScore}
                              <span className="text-gray-500 text-sm">
                                /{stats.totalQuestions}
                              </span>
                            </p>
                            <p className="text-[10px] text-purple-400 uppercase tracking-tighter font-bold">
                              Played {stats.timesPlayed}x
                            </p>
                          </div>
                        ) : (
                          <p className="text-gray-600 text-xs italic">
                            Unplayed
                          </p>
                        )}
                      </div>

                      <button
                        onClick={(e) => toggleFavorite(mode.id, e)}
                        className={`text-2xl transition-all duration-300 transform hover:scale-125 ${isFav ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" : "text-gray-600 hover:text-gray-400"}`}
                      >
                        {isFav ? "★" : "☆"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tailwind Custom Scrollbar CSS (Add to your global CSS) */}
        <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.4);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
          }
      `}</style>
      </div>
    </>
  );
};

export default Training;
