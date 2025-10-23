// flashcardService.ts
import axios from 'axios';
import type { ChatContentModel } from '../models/ChatContentModel';


// Lấy base URL từ .env
const API_URL = import.meta.env.VITE_API_URL;

export async function createFlashCart(word: string): Promise<ChatContentModel> {
  try {
    const response = await axios.get(`${API_URL}/flashcard`, {
      params: { word }
    });

    // Ép kiểu trực tiếp sang ChatContentModel
    const data = response.data as ChatContentModel;

    // Đảm bảo examples luôn là mảng hợp lệ
    const flashCard: ChatContentModel = {
      imageUrl: data.imageUrl || '',
      word: data.word,
      examples: Array.isArray(data.examples)
        ? data.examples.map((ex) => ({
            english: ex.english,
            vietnamese: ex.vietnamese
          }))
        : []
    };

    return flashCard;

  } catch (error) {
    console.error('Axios error:', error);
    return { imageUrl: '', word: '', examples: [] };
  }
}
