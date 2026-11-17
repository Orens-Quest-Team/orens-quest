import Phaser from "phaser";
import useWindowSize from "../Components/windoeSize";

export function createGame(parent) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: {
      preload,
      create,
      update,
    },
  });
}

function preload() {}

function create() {}

function update() {}
