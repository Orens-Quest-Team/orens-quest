import Phaser from "phaser";

export function createSuperMarioGame(parent) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: {
      preload() {},
      create() {},
      update() {},
    },
  });
}
