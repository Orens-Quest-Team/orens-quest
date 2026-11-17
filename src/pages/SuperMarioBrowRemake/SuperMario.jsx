import react from "react";
import { createSuperMarioGame } from "./SuperMario.js";

function SuperMarioPage() {
  return (
    <main>
      <div ref={gameContainerRef} />
    </main>
  );
}

export default SuperMarioPage;
