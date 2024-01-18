import { renderPlayListHeader } from "./renderPlayListHeader.module.js";
import { renderTrack } from "./renderTrack.module.js";

export function renderPlayList(anyPlayList) {
  renderPlayListHeader(anyPlayList.playListInfo);
  for (let i = 0; i < anyPlayList.track.length; i++) {
    renderTrack(anyPlayList.track[i]);
  }
}
