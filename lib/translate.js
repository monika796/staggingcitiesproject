import translate from "google-translate-api-x";

export async function getTranslation(text, targetLang = "en") {
  if (!text) return "";
  
  try {
    //const { text: translatedText } = await translate(text, { from: 'en', to: targetLang });
   
    const res = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: "auto",
        target: targetLang,
        format: "text",
        api_key: ""
      }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json(); 
    console.log(data); // Log the translated text
return data.translatedText;

    // return NextResponse.json({ translatedText }, { 
    //   status: 200, 
    //   headers: { "Access-Control-Allow-Origin": "*" } // Allow CORS
    // });
  } catch (error) {
    console.error("Translation Error:", error);
    return text; // Return original text if translation fails
  }
}
 