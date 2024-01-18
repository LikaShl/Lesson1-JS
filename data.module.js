import { renderPlayList } from "./render/renderPlayList.module.js";
const playlists = [
  {
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
  },
  {
    playlistId: "2",
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
  },
  {
    playlistId: "3",
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
  },
];
for (let i = 0; i < playlists.length; i++) {
  renderPlayList(playlists[i]);
}
