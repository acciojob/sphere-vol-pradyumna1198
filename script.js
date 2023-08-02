function volume_sphere() {
    //Write your code here
	const volume = (4/3) * Math.PI * Math.pow(radius, 3);
  return volume;
  
} 
const radiusInput = document.getElementById('radius');
const calculateButton = document.getElementById('submit');
const volumeField = document.getElementById('volume');

calculateButton.addEventListener('click', calculateVolume);

function calculateVolume() {
  const radius = parseFloat(radiusInput.value);
  
  if (isNaN(radius)) {
    volumeField.textContent = 'Invalid input';
    return;
  }

  const volume = volume_sphere(radius);
  volumeField.textContent = `Volume: ${volume.toFixed(2)}`;
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
