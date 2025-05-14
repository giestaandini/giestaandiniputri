const toggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.textContent = '🌙';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');

  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  toggle.textContent = isDark ? '🌙' : '🌞';
});

const text = "Junior Web Programming";
const typingText = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;

function typeWriter() {
  if (!isDeleting && index <= text.length) {
    typingText.textContent = text.substring(0, index);
    index++;
    setTimeout(typeWriter, 100);
  } else if (isDeleting && index >= 0) {
    typingText.textContent = text.substring(0, index);
    index--;
    setTimeout(typeWriter, 50);
  } else {
    isDeleting = !isDeleting;
    setTimeout(typeWriter, isDeleting ? 2000 : 500); 
  }
}

window.onload = typeWriter;

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
  });
});
