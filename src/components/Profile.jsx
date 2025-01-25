import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import profilePic from "../assets/profilePic.jpg";
import cv from "../assets/marton-roland-cv.pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Profile({ onContactClick }) {
  const smoothScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  const handleContactClick = () => {
    smoothScrollToTop();
    setTimeout(() => {
      onContactClick();
    }, 300); // Increased delay to ensure scroll is fully completed
  };

  const { t } = useTranslation();

  return (
    <div className="m-5 flex flex-col justify-center">
      <div className="flex justify-center">
        <LanguageSwitcher />
      </div>
      <div className="flex flex-col gap-4 items-center text-center m-2 py-4">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="rounded-full w-48 h-48 object-cover border-4 border-emerald-500"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl tracking-wider font-extralight cursor-default">
            Márton Roland
          </h1>
          <h2 className="text-lg text-gray-300 font-semibold tracking-wider cursor-default">
            {t("profile.position")}
          </h2>
          <ul className="flex gap-8 justify-center text-3xl">
            <li className="transition-transform duration-200 ease-in-out hover:scale-125">
              <a href="https://github.com/mroland1" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="transition-transform duration-200 ease-in-out hover:scale-125">
              <a
                href="https://www.linkedin.com/in/marton-roland/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="transition-transform duration-200 ease-in-out hover:scale-125">
              <a
                href="https://www.facebook.com/marton.roland27/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="transition-transform duration-200 ease-in-out hover:scale-125">
              <a href="https://www.instagram.com/marton_roland/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="py-3 text-center leading-7 border-y border-white border-opacity-60 font-light tracking-widest cursor-default"
        dangerouslySetInnerHTML={{
          __html: t("profile.greeting"),
        }}
      ></div>
      <div className="flex gap-3 justify-center my-8">
        <a href={cv} target="_blank" alt="Márton Roland CV" className="flex-1">
          <button className="w-full bg-emerald-500 p-3 rounded-lg font-bold flex justify-center items-center gap-2 transition-transform duration-200 ease-in-out hover:scale-105">
            {t("profile.download_cv")}
            <FontAwesomeIcon icon={faDownload} className="bg-transparent" />
          </button>
        </a>
        <a className="flex-1">
          <button
            onClick={handleContactClick}
            className="w-full bg-gray-700 p-3 rounded-lg font-bold flex justify-center items-center gap-2 transition-transform duration-200 ease-in-out hover:scale-105"
          >
            {t("profile.contact")}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Profile;
