import "./SuperMario.css";
import React, { useEffect, useRef } from "react";
import createSuperMarioGame from "./SuperMario.js";

function SuperMarioPage() {
  const gameContainerRef = useRef(null);

  useEffect(() => {
    const parent = gameContainerRef.current;
    if (!parent) return;

    const game = createSuperMarioGame(parent);
    return () => game.destroy(true);
  }, []);

  return (
    <main>
      <div id="supermario-game-container" ref={gameContainerRef} >
        <div> 
          <h1 className="MainWelcome"> Super Mario Bros!</h1>
        </div>
      </div>
    </main>
  );
}

export default SuperMarioPage;
