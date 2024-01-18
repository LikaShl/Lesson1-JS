export function renderPlayListHeader(anyPlayListInfo) {
  const playlistTitleEl = document.createElement("h1");
  playlistTitleEl.append(anyPlayListInfo.title);
  document.body.append(playlistTitleEl);
  const playlistCoverEl = document.createElement("img");
  playlistCoverEl.src = anyPlayListInfo.coverImageUrl;
  playlistCoverEl.style.width = "100px";
  document.body.append(playlistCoverEl);
  const playlstTrackCountEl = document.createElement("span");
  playlstTrackCountEl.append(anyPlayListInfo.totalInfo.totalTreckCount);
  document.body.append(playlstTrackCountEl);
}
