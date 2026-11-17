import Phaser from "phaser";
import sky from "./assets/sky.png";
import useWindowSize from "../../Components/windoeSize";

export default function createSuperMarioGame() {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: window.innerWidth,
    height: window.innerHeights,
    scene: {
      preload() {
        this.load.image(sky, "sky");
      },
      create() {
        this.add.image(0, 0, "sky");
      },
      update() {},
    },
  });
}
