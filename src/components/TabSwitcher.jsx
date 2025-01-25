import { useTranslation } from "react-i18next";

function TabSwitcher({ activeTab, setActiveTab }) {
  const { t } = useTranslation();

  return (
    <div className="flex bg-gray-800 rounded-xl p-2 shadow-lg w-10/12 h-18 justify-center">
      <button
        onClick={() => setActiveTab("MyProjects")}
        className={`px-6 py-2 rounded-lg w-full ${
          activeTab === "MyProjects" ? "bg-gray-900" : ""
        }`}
      >
        {t("tabs.my_projects")}
      </button>

      <button
        onClick={() => setActiveTab("Skills")}
        className={`px-6 py-2 rounded-lg w-full ${
          activeTab === "Skills" ? "bg-gray-900" : ""
        }`}
      >
        {t("tabs.skills")}
      </button>
    </div>
  );
}

export default TabSwitcher;
