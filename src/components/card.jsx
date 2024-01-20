import React, { useEffect, useState } from "react";
import style from "../style/cart.module.css";
import getData from "../utils/getData";
// import testData from "../utils/test_db.json";

const Card = () => {
  const [notebookData, setNotebookData] = useState([]);
  //   const parsData = testData.notebook;
  //   console.log(parsData);
  useEffect(() => {
    async function fetchDataForCard() {
      try {
        const cardData = await getData("notebook");
        console.log(cardData);
        setNotebookData(cardData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataForCard();
  }, []);
  return (
    <div className={style.cartContainer}>
      {notebookData?.map((goodItem) => {
        return (
          <div className={style.cartBox} key={goodItem.id}>
            <img src={goodItem.img} alt="demo" />
            <h1 className={style.cartBoxTitle}>{goodItem.name}</h1>
            <p className={style.description}>Процесор: {goodItem.processor}</p>
            <p className={style.description}>
              Обʼєм памяті: {goodItem.storage}
            </p>
            <button>Купити {goodItem.price} USD </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
