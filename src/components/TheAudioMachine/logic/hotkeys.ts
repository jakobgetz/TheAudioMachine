import store, {select} from '../../../redux'
import {play} from './play'

export const keyMap = {
    LAYER_ID: ["1", "2", "3", "4", "5", "6"],
    PLAY: "space",
  };

  export const handleKeyboardInput = {
    LAYER_ID: (e: any) => {
      console.log(e.key.valueOf());
      const id = e.key.valueOf() - 1;
      store.dispatch(select(id));
    },
    PLAY: play,
  };