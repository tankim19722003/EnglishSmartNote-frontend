import { useState } from "react";
import Header from "../components/Header";
import UserInput from "../components/UserInput";
import { sendMessage } from "../services/ChatService";
import type { ChatContentModel } from "../models/ChatContentModel";
import Flashcard from "../components/FlashCard";

const ChatLayout = () => {
  const [chatContent, setChatContent] = useState<ChatContentModel>();
  const [loading, setLoading] = useState(false);

  async function handleSendChatMessage(message: string) {
    console.log("Message sent:", message);

    setLoading(true);
    const response = await sendMessage(message);
    setLoading(false);

    setChatContent({ word: message, ...response });
  }

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex-1 flex flex-col justify-center items-center px-4 py-8 md:px-8 lg:px-16">
          <div className="max-w-2xl w-full text-center space-y-6 mt-3">
            {/* Welcome Message */}
            {!chatContent && !loading && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Welcome to Smart Note AI
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                  I'm your AI companion designed to help you remember new
                  vocabulary more easily.
                </p>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="flex flex-col items-center justify-center space-y-3 text-gray-600">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-lg font-medium">
                  Generating your flashcard...
                </p>
              </div>
            )}

            {/* Flashcard Result */}
            {!loading && chatContent && <Flashcard {...chatContent} />}

            {/* Input Section */}
            <div className="w-full">
              <UserInput
                onSendMessage={handleSendChatMessage}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ChatLayout;
