import React, { useState } from "react";
import Select from "react-select";

const langOptions = [
  { value: null, label: "All languages" },
  { value: "en", label: "English only" },
  { value: "french", label: "French only" },
  { value: "german", label: "German only" },
];

const modeOptions = [
  { value: null, label: "Popular" },
  { value: "latest", label: "Latest" },
]

const Sidebar = ({ onQueryParameters }) => {
  const [language, setLanguage] = useState(langOptions[0]);
  const [mode, setMode] = useState(modeOptions[0]);

  const handleChange = (lang, mode) => {
    onQueryParameters(lang, mode);
    console.log("hello")
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="text-lg text-slate-700 font-semibold mb-3">
            Settings
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <p className="text-slate-400">Sort</p>
              <Select
                defaultValue={mode}
                onChange={setMode}
                options={modeOptions}
                isSearchable={false}
                className="bg-red-400"
              />
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-slate-400">Language</p>
              <Select
                defaultValue={language}
                onChange={setLanguage}
                options={langOptions}
                isSearchable={false}
              />
            </div>
            {/* <button onClick={handleChange(language, mode)}>
              Filter
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
