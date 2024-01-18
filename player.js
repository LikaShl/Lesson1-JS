const playlist = {
  playlistId: "1",
  playListInfo: {
    title: "Hip-hop hits",
    coverImageUrl: "playlistCover.png",
    totalInfo: {
      totalTreckCount: 4,
      totalTreckDurationInSec: 733,
    },
  },
  track: [
    {
      trackId: "11",
      trackCoverImageUrl: "eminemCover.png",
      artistName: "Eminem",
      trackTitle: "Rap God",
      trackFileUrl:
        "https://cdn.muzsky.net/?h=JGraYpdVSCoYvat_wghCIdDuaticL5G7DKZfUVIL8lExYuFhUWN_Rh_JsFeG",
      trackDurationInSec: 185,
      isHot: false,
    },
    {
      trackId: "12",
      trackCoverImageUrl: "50centCover.png",
      artistName: "50 cent",
      trackTitle: "In da clab",
      trackFileUrl:
        "https://cdn.muzsky.net/?h=JGraYpdVSBrbdIB_w1wQCc7uZ8pYTJTMMX-Ga0ka13c6X7I4lCVWPtHHsXvJXWP9tECYzg\\",
      trackDurationInSec: 204,
      isHot: true,
    },
  ],
};

//const playlistCoverEl = document.createElement("img");
//playlistCoverEl.src = playlist.coverImageUrl;
//playlistCoverEl.style.width = "100px";
//document.body.append(playlistCoverEl);
//
//const track1_E2 = document.createElement("li");
//track1_E2.append(
//playlist.track[1].artistName + ": " + playlist.track[1].trackTitle
//);
//trackListEl.append(track1_El, track1_E2);

//const trackListEl = document.createElement("ul");
//document.body.append(trackListEl);
//const track1_El = document.createElement("li");

function renderPlayList(anyPlayList) {
  renderPlayListHeader(anyPlayList.playListInfo);
  renderTrack(anyPlayList.track[0]);
  renderTrack(anyPlayList.track[1]);
}

function renderPlayListHeader(anyPlayListInfo) {
  const playlistTitleEl = document.createElement("h1");
  playlistTitleEl.append(anyPlayListInfo.title);
  document.body.append(playlistTitleEl);
  const playlistCoverEl = document.createElement("img");
  playlistCoverEl.src = anyPlayListInfo.coverImageUrl;
  playlistCoverEl.style.width = "100px";
  document.body.append(playlistCoverEl);
}
function renderTrack(anyTrack) {
  const track1_El = document.createElement("div");
  const coverTrack = document.createElement("img");
  coverTrack.src = anyTrack.trackCoverImageUrl;
  coverTrack.style.width = "50px";
  track1_El.append(coverTrack);
  const nameTrack1_El = document.createElement("p");
  nameTrack1_El.append(anyTrack.artistName + ": " + anyTrack.trackTitle);
  track1_El.append(nameTrack1_El);
  const audioTrack = document.createElement("audio");
  audioTrack.controls = true;
  const sourceTrack = document.createElement("source");
  sourceTrack.src = anyTrack.trackFileUrl;

  audioTrack.append(sourceTrack);
  track1_El.append(audioTrack);
  document.body.append(track1_El);
}

renderPlayList(playlist);
