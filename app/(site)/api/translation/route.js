import translate from "google-translate-api-x";

export async function getTranslation(text, targetLang = "en") {
  if (!text) return "";
  
  try {
    const { text: translatedText } = await translate(text, { to: targetLang });
    return translatedText;
  } catch (error) {
    console.error("Translation Error:", error);
    return text; // Return original text if translation fails
  }
}
