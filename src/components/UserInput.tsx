import { useState } from "react";
import SEND_ICON from "../assets/send.png";

type UserInputProps = {
  onSendMessage: (message: string) => void;
};

const UserInput: React.FC<UserInputProps>  = ({onSendMessage}) => {
  const [enteredMessage, setEnteredMessage] = useState<string>("");

  function sendMessage() {
    if (!enteredMessage) return;
    onSendMessage(enteredMessage);
    setEnteredMessage("");
  }


  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center shadow-lg z-20">
      <input 
        type="text" 
        placeholder="Please enter a word..." 
        className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg h-11 outline-none"
        onChange={(e) => setEnteredMessage(e.target.value)}
        value={enteredMessage}
      />
      <button onClick={sendMessage} className="bg-indigo-600 hover:bg-indigo-700transition-colors duration-200 px-4 py-3 rounded-r-lg flex items-center justify-center ">
        <img src={SEND_ICON} alt="Send message" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default UserInput;