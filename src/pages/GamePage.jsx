import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createGame } from "../game.js";
import "./GamePageStyles.css";

function GamePage() {
  const [showHeader, setShowHeader] = useState(false);
  const gameContainerRef = useRef(null);

  useEffect(() => {
    const game = createGame(gameContainerRef.current);
    return () => game.destroy(true);
  }, []);
  useEffect(() => {
    if (!showHeader) return;

    const hideTimer = setTimeout(() => setShowHeader(false), 3000);
    return () => clearTimeout(hideTimer);
  }, [showHeader]);

  return (
    <main className="GamePageRoot">
      <div
        className={`HeaderContainer ${showHeader ? "isShowing" : "isHiding"}`}
      >
        <div className="TopHeader">
          <Link to="/" className="HomePageLink">
            homepage
          </Link>
        </div>
        <button className="ShowHeader btn" onClick={() => setShowHeader(true)}>
          show
        </button>
      </div>
      <div ref={gameContainerRef} className="GameHolder" />
    </main>
  );
}

export default GamePage;
