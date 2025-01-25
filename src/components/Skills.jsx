import angular from "../assets/skills/angular.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import css from "../assets/skills/css.svg";
import github from "../assets/skills/github.png";
import html from "../assets/skills/html.svg";
import mongodb from "../assets/skills/mongodb.svg";
import nodejs from "../assets/skills/node-js.svg";
import reactjs from "../assets/skills/react-js.svg";
import tailwind from "../assets/skills/tailwind-css.svg";
import typescript from "../assets/skills/typescript.svg";
import vite from "../assets/skills/vitejs.svg";
import vscode from "../assets/skills/vscode.svg";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <div className="m-4">
      <div className="text-center tracking-widest cursor-default">
        {t("skills.skills_intro")}
      </div>
      <div className="flex flex-wrap gap-9 justify-center my-6">
        <img
          src={angular}
          alt="Angular"
          className="w-20 h-20 transition-transform duration-200 ease-in-out hover:scale-110"
        />
        <img
          src={bootstrap}
          alt="Bootstrap"
          className="w-20 h-20 transition-transform duration-200 ease-in-out hover:scale-110"
        />
        <img
          src={css}
          alt="CSS"
          className="w-20 h-20 transition-transform duration-200 ease-in-out hover:scale-110"
        />
        <img
          src={github}
          alt="GitHub"
          className="w-20 h-20 transition-transform duration-200 ease-in-out hover:scale-110"
        />
        <img
          src={html}
          alt="HTML"
          className="w-20 h-20 transition-transform duration-200 ease-in-out hover:scale-110"
        />
        <img
          src={mongodb}
          alt="MongoDB"
          className="w-20 h-20 transition-transform duration-200 ease-in-out hover:scale-110"
        />
        <img
          src={nodejs}
          alt="Node.js"
          className="w-20 h-20 transition-transform duration-200 ease-in-out hover:scale-110"
        />
        <img
          src={reactjs}
          alt="React.js"
          className="w-20 h-20 transition-transform duration-200 ease-in-out hover:scale-110"
        />
        <img
          src={tailwind}
          alt="Tailwind CSS"
          className="w-20 h-20 transition-transform duration-200 ease-in-out hover:scale-110"
        />
        <img
          src={typescript}
          alt="TypeScript"
          className="w-20 h-20 transition-transform duration-200 ease-in-out hover:scale-110"
        />
        <img
          src={vite}
          alt="Vite"
          className="w-20 h-20 transition-transform duration-200 ease-in-out hover:scale-110"
        />
        <img
          src={vscode}
          alt="VSCode"
          className="w-20 h-20 transition-transform duration-200 ease-in-out hover:scale-110"
        />
      </div>

      <div className="p-4 border-y border-white border-opacity-60 leading-7 tracking-wider font-light text-center cursor-default">
        {t("skills.skills_desc")}
      </div>
    </div>
  );
}

export default Skills;
