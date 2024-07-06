import { writable } from "svelte/store";

// add more tracks  
const tracks = [
  {name: "Requiem Aranea", link: "https://p.scdn.co/mp3-preview/0706a174add19c63c3b0eac4a7f066afe0f04c73?cid=cfe923b2d660439caf2b557b21f31221"},
  {name: "Requiem Lacrimosa, K 626 III", link: "https://p.scdn.co/mp3-preview/7163d81fa06e3939bf3572d186c22d712f806318?cid=cfe923b2d660439caf2b557b21f31221"},
]

// default track value
export let currentTrack = writable({
  name: "Requiem Aranea", 
  link: "https://p.scdn.co/mp3-preview/0706a174add19c63c3b0eac4a7f066afe0f04c73?cid=cfe923b2d660439caf2b557b21f31221"
});

// func that randomly picks any track;
function pickAndRoll() {
  const randomIndex = Math.floor(Math.random() * tracks.length);
  const currentTrack = {
    name: tracks[randomIndex].name,
    link: tracks[randomIndex].link
  }
  return currentTrack;
}

currentTrack.set(pickAndRoll());
// find a way to update state with this above
