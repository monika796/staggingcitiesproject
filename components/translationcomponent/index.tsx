"use client";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (lang) => {
    document.cookie = `lang=${lang}; path=/; max-age=31536000`; // Save language in cookie
    router.refresh(); // Refresh page to load translations
  };

  return (
    <div className="flex justify-center items-center gap-2"> 
      <button onClick={() => changeLanguage("en")}> English</button>
      <button onClick={() => changeLanguage("fr")}> French</button>
      <button onClick={() => changeLanguage("es")}>Spanish</button>
      <button onClick={() => changeLanguage("ru")}>Russian</button>
    </div>
  );
};

export default LanguageSwitcher;
