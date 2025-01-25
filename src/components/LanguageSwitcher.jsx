import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import hu from "../assets/hungary.svg";
import uk from "../assets/uk.svg";
import { FaChevronDown } from "react-icons/fa"; // Nyíl ikont is hozzáadjuk

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // A legördülő állapotát figyeljük
  const isHungarian = i18n.language === "hu"; // Ellenőrizzük az aktuális nyelvet

  // Nyelv váltás
  const changeLanguage = (lang) => {
    i18n
      .changeLanguage(lang)
      .catch((err) => console.error("Language switch failed:", err));
    setIsOpen(false); // Zárjuk be a legördülőt a váltás után
  };

  return (
    <div className="relative inline-block text-left">
      {/* Nyelvválasztó gomb */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-lg flex items-center justify-center"
      >
        {isHungarian ? (
          <>
            <img
              src={hu}
              alt="Hungarian"
              className="w-5 h-5 mr-2 bg-transparent"
            />
            Magyar
          </>
        ) : (
          <>
            <img
              src={uk}
              alt="English"
              className="w-5 h-5 mr-2 bg-transparent"
            />
            English
          </>
        )}
        <FaChevronDown className="ml-2 bg-transparent" />{" "}
        {/* Nyíl ikon hozzáadása */}
      </button>

      {/* Legördülő menü */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-lg shadow-lg border-2 border-white">
          <ul className="py-1 text-white rounded-lg">
            <li className="rounded-lg">
              <button
                onClick={() => changeLanguage("hu")}
                className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-700"
              >
                <img
                  src={hu}
                  alt="Hungarian"
                  className="w-5 h-5 mr-2 bg-transparent"
                />
                Magyar
              </button>
            </li>
            <li className="rounded-lg">
              <button
                onClick={() => changeLanguage("en")}
                className="flex items-center justify-start w-full px-4 py-2 text-sm hover:bg-gray-700"
              >
                <img
                  src={uk}
                  alt="English"
                  className="w-5 h-5 mr-2 bg-transparent"
                />
                English
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
