import React from "react";
import "../style/pokedex-style.css";

// 建立一個名為 PokedexComponent 的 React 元件
const PokedexComponent = () => {
  return (
    <div className="pokedex-container">
      <h1>Pokedex</h1>
      <div className="pokemon">
        <div className="img-container">
          <img src="..." alt="..." />
        </div>
        <div className="info">
          <span className="number">#001</span>
          <span className="name">皮卡丘</span>
          <small className="type">
            <span>雷</span>
          </small>
        </div>
      </div>

      <div className="pokemon">
        <div className="img-container">
          <img src="..." alt="..." />
        </div>
        <div className="info">
          <span className="number">#002</span>
          <span className="name">妙蛙草</span>
          <small className="type">
            <span>草</span>
          </small>
        </div>
      </div>

      <div className="pokemon">
        <div className="img-container">
          <img src="..." alt="..." />
        </div>
        <div className="info">
          <span className="number">#003</span>
          <span className="name">傑尼龜</span>
          <small className="type">
            <span>水</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default PokedexComponent;
