"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [lang, setLang] = useState("en"); // Default to English

  // Read language from cookies when the component loads
  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const langCookie = cookies.find((row) => row.startsWith("lang="));
    if (langCookie) {
      setLang(langCookie.split("=")[1]); // Extract the language value
    }
  }, []);

  const changeLanguage = (selectedLang: string) => {
    console.log(selectedLang);
    document.cookie = `lang=${selectedLang}; path=/; max-age=31536000`; // Save language in cookie
    setLang(selectedLang); // Update state
    router.refresh(); // Refresh page to apply changes
  };

  return (
    <div className="flex justify-center items-center">
      <select
        value={lang} // Controlled component
        onChange={(e) => changeLanguage(e.target.value)}
        className="border rounded-md px-3 py-2"
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
