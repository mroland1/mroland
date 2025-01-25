import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      profile: {
        greeting: `23-year-old junior frontend developer from Hungary👋<br />Passionate about exploring new technologies and finding creative solutions.🤩`,
        position: "Junior Frontend Developer",
        contact: "Contact",
        download_cv: "Download CV",
      },
      footer: "© Márton Roland. 2024 All rights reserved",
      tabs: {
        my_projects: "My Projects",
        skills: "Skills",
      },
      contact: {
        title: "Get in Touch",
        success: "Your message has been sent successfully! 🎉",
        error: "Something went wrong. Please try again. ❌",
        labels: {
          name: "Name",
          email: "Email",
          message: "Message",
        },
        buttons: {
          send: "Send",
          close: "Close",
        },
      },
      skills: {
        skills_intro:
          "The skills, tools and technologies I have experience at:",
        skills_desc:
          "I am an ambitious and dedicated frontend developer seeking opportunities to bring my creative ideas to life using modern technologies. With my strong problem-solving skills and IT experience, I quickly adapt to any challenge.",
      },
    },
  },
  hu: {
    translation: {
      profile: {
        greeting:
          "23 éves junior frontend fejlesztő vagyok👋<br />Szenvedélyesen fedezek fel új technológiákat és keresek kreatív megoldásokat.🤩",
        position: "Junior Frontend Fejlesztő",
        contact: "Kapcsolat",
        download_cv: "Önéletrajz",
      },
      footer: "© Márton Roland. 2024 Minden jog fenntartva",
      tabs: {
        my_projects: "Projektjeim",
        skills: "Készségek",
      },
      contact: {
        title: "Lépjen velem kapcsolatba",
        success: "Üzenete sikeresen elküldve! 🎉",
        error: "Hiba történt. Kérjük, próbálja újra. ❌",
        labels: {
          name: "Név",
          email: "Email",
          message: "Üzenet",
        },
        buttons: {
          send: "Küldés",
          close: "Bezárás",
        },
      },
      skills: {
        skills_intro: "Az általam ismert képességek, eszközök és technológiák:",
        skills_desc:
          "Ambiciózus és elhivatott frontend fejlesztő vagyok, aki lehetőségeket keres arra, hogy kreatív ötleteit modern technológiák segítségével valósítsa meg. Erős problémamegoldó készségemnek és IT-tapasztalatomnak köszönhetően gyorsan alkalmazkodom bármilyen kihíváshoz.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "hu", // Alapértelmezett nyelv
  interpolation: {
    escapeValue: false, // React automatikusan elkerüli az XSS-t
  },
});

export default i18n;
