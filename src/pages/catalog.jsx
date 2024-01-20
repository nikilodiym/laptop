import React from "react";
import s from "../style/catalog.module.css";
import Card from "../components/card";
const Catalog = () => {
  return (
    <div className={s.catalogContainer}>
      <Card />
    </div>
  );
};

export default Catalog;
