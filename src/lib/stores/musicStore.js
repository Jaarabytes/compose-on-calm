import { writable } from "svelte/store";

// add more tracks  
const tracks = [
  {name: "Requiem Aranea", by: "Wolfgang Amadues Mozart", link: "https://p.scdn.co/mp3-preview/0706a174add19c63c3b0eac4a7f066afe0f04c73?cid=cfe923b2d660439caf2b557b21f31221"},
  {name: "Mozart's Requiem, K 626 III", by: "Wolfgang Amadues Mozart", link: "https://p.scdn.co/mp3-preview/717a1bb7e7dc29922f1932591f9d01c94433c183?cid=cfe923b2d660439caf2b557b21f31221"},
  {name: "William Tell Overture", by: "Gioachino Rossini",  link: "https://p.scdn.co/mp3-preview/9ec45f1a923064fe6fd5abc21191d9a6e8d4ceae?cid=cfe923b2d660439caf2b557b21f31221"},
  {name: "Clair De Lune", by: "Claude Debussy", link: "https://p.scdn.co/mp3-preview/0fc2d964faceef05adf15932cbc62f4f97e43f1e?cid=cfe923b2d660439caf2b557b21f31221"},
  {name: "Eine kleine Nachtmusik ", by: "Wolfgang Amadues Mozart", link: "https://p.scdn.co/mp3-preview/360c57cc3cd14895e08b0209f19ac49761e15daf?cid=cfe923b2d660439caf2b557b21f31221"},
  {name: "Carmen", by: "Georges Bizet", link: "https://p.scdn.co/mp3-preview/d451853954aa251d9da94d9030494fe97bd0a551?cid=cfe923b2d660439caf2b557b21f31221"},
  {name: "Four seasons", by: "Antonio Vivaldi", link: "https://p.scdn.co/mp3-preview/a888f718820b5217a710590be5df8c7e301e1a22?cid=cfe923b2d660439caf2b557b21f31221"},
  {name: "Schubert: Winterreise, D.911: 20. Der Wegweiser (Mässig)", by: "Schubert", link: "https://p.scdn.co/mp3-preview/6f335ff51cecebee1d63c4390c449d4025672484?cid=cfe923b2d660439caf2b557b21f31221"},
]

// default track value
export let currentTrack = writable({
  name: "Requiem Aranea", 
  link: "https://p.scdn.co/mp3-preview/0706a174add19c63c3b0eac4a7f066afe0f04c73?cid=cfe923b2d660439caf2b557b21f31221",
  by: "Wolfgang Amadeus Mozart"
});

// func that randomly picks any track;
function pickAndRoll() {
  const randomIndex = Math.floor(Math.random() * tracks.length);
  const currentTrack = {
    name: tracks[randomIndex].name,
    link: tracks[randomIndex].link,
    by: tracks[randomIndex].by
  }
  return currentTrack;
}

currentTrack.set(pickAndRoll());
// find a way to update state with this above, DONE AND DUSTED
