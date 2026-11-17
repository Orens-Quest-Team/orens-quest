import react from "react";
import { createSuperMarioGame } from "./SuperMario.js";

function SuperMarioPage() {
  return (
    <main>
      <div ref={createSuperMarioGame} />
    </main>
  );
}

export default SuperMarioPage;
