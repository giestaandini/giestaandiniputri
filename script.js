const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Cek preferensi sebelumnya di localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.textContent = '🌙';
}

// Toggle tema saat tombol diklik
toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');

  // Simpan pilihan ke localStorage
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
    setTimeout(typeWriter, isDeleting ? 2000 : 500); // jeda sebelum hapus & ketik ulang
  }
}

window.onload = typeWriter;

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // hapus semua 'active'
    navLinks.forEach(nav => nav.classList.remove('active'));
    // tambahkan ke yang diklik
    link.classList.add('active');
  });
});
