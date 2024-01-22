import "./02-widget.css";

import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

function bodyStyling() {
  document.body.style.backgroundColor = "#f4f6f8";
}

bodyStyling();

const weather = {
  currentTemp: -0.9,
  prevTemp: -2.2,
};

const renderWidget = ({ currentTemp, prevTemp }) => {
  const getTemperatureState = () => {
    const absCurrentTemp = Math.abs(currentTemp);
    const absPrevTemp = Math.abs(prevTemp);

    if (absCurrentTemp > absPrevTemp) {
      return `어제보다 ${Math.abs(currentTemp - prevTemp).toFixed(1)}° 높아요`;
    } else if (absPrevTemp > absCurrentTemp) {
      return `어제보다 ${Math.abs(prevTemp - currentTemp).toFixed(1)}° 낮아요`;
    } else {
      return "어제와 동일해요";
    }
  };

  return (
    <article>
      <h2 className="sr-only">오늘의 날씨 정보</h2>
      <div role="group">
        <p className="current-temp">{currentTemp}°</p>
        <p className="temp-state">{getTemperatureState()}</p>
      </div>
      <img src="/src/assets/partly cloudy.svg" alt="맑음" />
    </article>
  );
};

createRoot(document.getElementById("root")).render(renderWidget({ ...weather }));
