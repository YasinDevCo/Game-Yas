import React, { useState } from "react";
import style from "./SearchFilter.module.css";
import { CgChevronDown } from "react-icons/cg";

function SearchFilter() {
  const [selectedOption, setSelectedOption] = useState("پرفروش‌ترین‌ها");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={style.selectMenue}>
      <div className={style.selectBtn} onClick={toggleDropdown}>
        <span className={style.selectBtnText}>{selectedOption}</span>
        <CgChevronDown color="var(--text-color)" size={25} />
      </div>
      {isOpen && (
        <ul className={style.options}>
          <li className={style.option} onClick={() => selectOption("جدیدترین")}>
            جدیدترین
          </li>
          <li
            className={style.option}
            onClick={() => selectOption("پرفروش‌ترین‌ها")}
          >
            پرفروش‌ترین‌ها
          </li>
          <li
            className={style.option}
            onClick={() => selectOption("محبوب‌ترین‌ها")}
          >
            محبوب‌ترین‌ها
          </li>
        </ul>
      )}
    </div>
  );
}

export default SearchFilter;
