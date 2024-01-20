import React, { createRef, useState } from "react";
import s from "../style/header.module.css";
const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const searchInput = createRef();
  function onFormBtnClick(e) {
    e.preventDefault();
    console.log(searchInput.current.value);
  }
  function searchInputChange(e) {
    setInputValue(searchInput.current.value);
    localStorage.setItem("inputValue", JSON.stringify(inputValue));
  }
  return (
    <div className={s.frame}>
      <div className={s.div}>
        <form className={s.div2}>
          <div className={s.textWrapper}>Serach any things</div>
          <div className={s.divWrapper}>
            <input
              className={s.textWrapper2}
              placeholder="Search"
              ref={searchInput}
              value={inputValue}
              onChange={searchInputChange}
            />
            <button type="submit" onClick={onFormBtnClick}>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;

// const input = document.querySelector(input)

// input.addListener("input", onInputChange)

// function onInputChange(e){
//     e.preventDefault()
//     const inputValue = e.currentTarget.value
// }