import type React from "react";
import type { ChatContentModel } from "../models/ChatContentModel";

const Flashcard: React.FC<ChatContentModel> = ({ imageUrl, word, examples }) => {
  console.log(imageUrl, word, examples);

  return (
    <div className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg max-w-sm mx-auto shadow-md bg-white hover:shadow-lg transition-shadow duration-300 w-full">
      {/* Image Section - Smaller */}
      <img
        src={imageUrl}
        alt={word}
        className="w-full h-32 object-contain rounded-md mb-4"
      />

      {/* Word Section - Smaller */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {word}
        </h2>
      </div>

      {/* Examples Section - Smaller */}
      <div className="w-full">
        <h3 className="text-base font-semibold mb-3 text-green-600 border-b border-green-200 pb-1">
          Examples
        </h3>

        <div className="space-y-3">
          {examples.map((example, index) => (
            <div
              key={index}
              className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 rounded-r-md hover:bg-green-100 transition-colors duration-200 text-sm"
            >
              <p className="font-semibold text-gray-800 mb-1">
                {example.english}
              </p>
              <p className="text-gray-600 italic text-xs">
                {example.vietnamese}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;