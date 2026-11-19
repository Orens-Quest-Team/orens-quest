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
      <div ref={gameContainerRef} />
    </main>
  );
}

export default SuperMarioPage;
