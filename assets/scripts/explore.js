// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const inputTxt = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");

  const faceImg = document.querySelector('img');
  console.log(faceImg.src);
  let voices = [];
  // TODO
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);

      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', (event) => {
    
    event.preventDefault();
    faceImg.src = 'assets/images/smiling-open.png';
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }


    
    synth.speak(utterThis);
    if(synth.speaking){
      faceImg.src = "assets/images/smiling-open.png";
    }
    
    utterThis.addEventListener("end",function(){
      faceImg.src = "assets/images/smiling.png";
    });
    
    
      
    });
    

}