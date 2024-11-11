// Mouse and Form Events
const form = document.getElementById('myForm');
const textInput = document.getElementById('textInput');
const output = document.getElementById('output');

// Display a message when the mouse hovers over the input field
textInput.addEventListener('mouseenter', () => {
  output.textContent = 'Mouse is over the input field.';
});

// Clear the message when the mouse leaves the input field
textInput.addEventListener('mouseleave', () => {
  output.textContent = '';
});

// Form submission event
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the form from submitting
  output.textContent = `Submitted text: ${textInput.value}`;
  textInput.value = ''; // Clears the input field
});

// Keyboard Event
textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    output.textContent = 'Press Enter to submit the form.';
  }
});

// Window Resize Event
const resizeMessage = document.getElementById('resizeMessage');

window.addEventListener('resize', () => {
  resizeMessage.textContent = `Window resized to ${window.innerWidth}x${window.innerHeight}`;
});

// Window Click Event - Click anywhere on the window to change background color
window.addEventListener('click', () => {
  document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  resizeMessage.textContent = 'Window clicked - background color changed!';
});