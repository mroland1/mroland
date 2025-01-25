import { useState } from "react";
import Skills from "./Skills";
import TabSwitcher from "./TabSwitcher";
import MyProjects from "./MyProjects";

function Content() {
  const [activeTab, setActiveTab] = useState("MyProjects");

  return (
    <div className="flex justify-center items-center flex-col">
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-4">
        {activeTab === "MyProjects" ? <MyProjects /> : <Skills />}
      </div>
    </div>
  );
}

export default Content;
