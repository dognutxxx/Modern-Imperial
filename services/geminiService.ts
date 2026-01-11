
import { GoogleGenAI, Type } from "@google/genai";
import { Recommendation } from "../types";

const API_KEY = process.env.API_KEY || "";

export const getConciergeRecommendation = async (userPreferences: string, lang: string = 'EN'): Promise<Recommendation> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Suggest a luxury 3-course set menu for a fine-dining Chinese restaurant called 'Modern Imperial' based on these preferences: ${userPreferences}. 
    The menu should sound authentic yet innovative. 
    PLEASE PROVIDE THE RESPONSE IN THE FOLLOWING LANGUAGE: ${lang}.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          setMenuName: { type: Type.STRING },
          items: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          pairing: { type: Type.STRING },
          reasoning: { type: Type.STRING }
        },
        required: ["setMenuName", "items", "pairing", "reasoning"]
      }
    }
  });

  try {
    return JSON.parse(response.text.trim()) as Recommendation;
  } catch (error) {
    console.error("Failed to parse recommendation:", error);
    throw new Error("Could not generate a recommendation at this time.");
  }
};
