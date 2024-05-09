window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti();

function init() {
  // Step 1: Select the dropdown menu
  const dropdown = document.getElementById('horn-select');
  const hornAudio = document.querySelector('.hidden');
  
  const volumeIcon = document.getElementById('volume-icon');

  const hornImg = document.querySelector('img');
  // Step 2: Attach event listener for dropdown change
  dropdown.addEventListener('change', function() {
    // Get the selected horn value
    const selectedHorn = dropdown.value;

    // Update image source and audio source based on selected horn
    if(selectedHorn == 'air-horn'){
      hornAudio.src = 'assets/audio/air-horn.mp3';
      hornImg.src = 'assets/images/air-horn.svg';
    }
    else if(selectedHorn == 'car-horn'){
      hornAudio.src = 'assets/audio/car-horn.mp3';
      hornImg.src = 'assets/images/car-horn.svg';
    }
    else {
      hornAudio.src = 'assets/audio/party-horn.mp3';
      hornImg.src = 'assets/images/party-horn.svg';
    }

  });

  // Step 3: Select the volume slider
  const volumeSlider = document.getElementById('volume');

  // Step 4: Attach event listener for volume change
  volumeSlider.addEventListener('input', function() {
    // Get the value of the volume slider
    const volumeValue = volumeSlider.value;

    // Update volume of the audio element
    hornAudio.volume = volumeValue / 100;

    // Update volume icon based on slider value
    const volumeIcon = document.getElementById('volume-icon');


    if (volumeValue === '0') {
      volumeIcon.src = 'assets/icons/volume-level-0.svg'; 
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg'; 
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg'; 
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg'; 
    }

  });

  // Step 5: Select the "Play Sound" button
  const playButton = document.querySelector('button');

  // Step 6: Attach event listener for button click
  playButton.addEventListener('click', (event) => {
    // Play the audio corresponding to the selected horn
    // Trigger confetti effect if "Party Horn" is selected
    // (code implementation needed here)
    

    if (dropdown.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
    hornAudio.play();
    
  });
}
