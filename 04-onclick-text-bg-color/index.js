const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  const box = document.getElementById('box');

  box.style.backgroundColor = 'coral';

  // 👇️ optionally change text color
  // box.style.color = 'white';
});
