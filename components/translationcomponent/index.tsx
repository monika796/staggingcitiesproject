"use client";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    console.log(lang)
    document.cookie = `lang=${lang}; path=/; max-age=31536000`; // Save language in cookie
    router.refresh(); // Refresh page to load translations
  };

  return (
    <div className="flex justify-center items-center">
      <select
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
