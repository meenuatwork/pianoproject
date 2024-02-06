const pianokeys = document.querySelectorAll(".piano-keys .key ");
volumeSlider = document.querySelector(".volume-slider input ");
keysCheckbox = document.querySelector(".key-checkbox input ");
let allkeys = []
let audio = new Audio()
const playTune = (key) => {
   audio.src = `tunes/${key}.wav`;
   //console.log(key)
   audio.play()
   console.log(allkeys);
   const clickedkey = document.querySelector(`[data-key-${key}"]`);
   clickedkey.classList.add("active");
   setTimeout(() =>{
clickedkey.classList.remove("active");
}, 150);

}
//setTimeout(() =>{
//clickedKey.classList.remove("active");
//}, 150);
pianokeys.forEach(key => {
   allkeys.push(key.dataset.key);
   key.addEventListener("click", () => playTune(key.dataset.key));
   // let audio = new A
   // udio("audio/keys-of-relaxation-21135.mp3")
   // setTimeout(function () { audio.play() }, 300)
});
const handleVolume = (e) =>{
   audio.volume = e.target.value;
}
 const showHideKeys = () =>{
   pianokeys.forEach(key => key.classList.toggle("hide"));
 }

 
const pressedKey = (e) => {
  if(allkeys.includes(e.key)) playTune(e.key);
   // console.log(e);
}
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey); 


