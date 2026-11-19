import Phaser from "phaser";
import sky from "./assets/sky.png";
import marioStandingRight from "./assets/player/MarioStandingRight.png";
import marioStandingLeft from "./assets/player/MarioStandingLeft.png";
import marioRunningRight from "./assets/player/MarioRunningRight.png";
import marioRunningLeft from "./assets/player/MarioRunningLeft.png";
import marioCharacters from "./assets/player/characters.png";
import levelOneBackground from "./assets/BackGrounds/bg-1-1.png";
import useWindowSize from "../../Components/windoeSize";
import { World } from "matter";

export default function createSuperMarioGame(parent) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: window.innerWidth,
    height: window.innerHeight,

    scene: {
      preload() {
        this.load.spritesheet("MarioRunningLeft", marioRunningLeft, {
          frameWidth: 16,
          frameHeight: 16,
        });
        this.load.spritesheet("MarioRunningRight", marioRunningRight, {
          frameWidth: 16,
          frameHeight: 16,
        });
        this.load.image("MarioStandingLeft", marioStandingLeft);
        this.load.image("MarioStandingRight", marioStandingRight);
        this.load.image("WorldOneBackGround", levelOneBackground);
      },
      create() {
        this.add.image(0, 200, "WorldOneBackGround");
      },
      update() {},
    },
  });
}
