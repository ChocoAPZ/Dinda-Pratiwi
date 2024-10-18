// JavaScript to show the surprise message when the button is clicked
document.getElementById('surpriseButton').addEventListener('click', function () {
  const surprise = document.getElementById('surprise');
  surprise.classList.toggle('hidden');
});
