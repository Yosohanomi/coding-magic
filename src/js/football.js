const pitch = document.querySelector('#football-pitch');
const ball = document.querySelector('#ball');
const body = document.querySelector('body')
pitch.addEventListener('click', onPitchClick);

function onPitchClick(event) {
  const rect = pitch.getBoundingClientRect();

  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  const ballSize = ball.naturalWidth;
  const ballRadius = ballSize / 2;

  const newX = clickX - ballRadius;
  const newY = clickY - ballRadius;

  const maxX = pitch.clientWidth - ballSize;
  const maxY = pitch.clientHeight - ballSize;

  ball.style.left = Math.max(0, Math.min(newX, maxX)) + 'px';
  ball.style.top = Math.max(0, Math.min(newY, maxY)) + 'px';

  ball.style.animation = 'none';
  void ball.offsetWidth;
  ball.style.animation = 'bounce 0.6s ease';
}