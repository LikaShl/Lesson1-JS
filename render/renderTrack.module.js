export function renderTrack(anyTrack) {
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
