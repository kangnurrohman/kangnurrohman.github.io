// switch dark mode
function toggleNightMode() {
  if (document.documentElement.getAttribute('data-theme') == 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('mode-switcher').classList.add('active');
    localStorage.setItem("theme", "dark");
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('mode-switcher').classList.remove('active');
    localStorage.setItem("theme", "");
  }
}

// back to top
window.addEventListener('scroll', function () {
  var backToTop = document.getElementById('backToTop');
  if (window.pageYOffset > 100) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function updateButtonBackground() {
  var body = document.body;
  var backToTop = document.getElementById('backToTop');
  if (getComputedStyle(body).getPropertyValue('background-color') === 'rgb(16, 23, 30)') {
    backToTop.style.backgroundColor = 'white';
    backToTop.style.color = 'black';
  } else {
    backToTop.style.backgroundColor = 'rgb(16, 23, 30)';
    backToTop.style.color = 'rgb(191, 191, 191)';
  }
}

window.addEventListener('DOMContentLoaded', updateButtonBackground);
window.addEventListener('resize', updateButtonBackground);

// collapse navbar
function toggleContent(id) {
  var element = document.getElementById(id);
  element.classList.toggle("hidden");
  var arrow = document.getElementById("arrow-" + id);
  arrow.classList.toggle("collapsed");
}

// view count

// Estimate Reading Time
document.addEventListener("DOMContentLoaded", function () {
  var content = document.getElementsByClassName("blog-post-content")[0];
  var words = content.innerText.split(' ').length;
  var readingTime = Math.ceil(words / 200); // Estimasi waktu membaca dengan kecepatan 200 kata per menit
  var readingTimeText = readingTime + " menit membaca";

  var readingTimeElement = document.getElementById("reading-time");
  readingTimeElement.innerText = readingTimeText;
});

// highlight code
document.querySelectorAll('.copy-button').forEach(button => {
  button.addEventListener('click', copyToClipboard);
});

function copyToClipboard(event) {
  const button = event.target;
  const codeContainer = button.closest('.code-container');
  const codeElement = codeContainer.querySelector('code');
  const codeText = codeElement.textContent.trim();
  const textarea = document.createElement('textarea');
  textarea.value = codeText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  button.innerHTML = '<i class="fas fa-check"></i> Disalin!';
  setTimeout(() => {
    button.innerHTML = '<i class="fas fa-copy"></i> Salin';
  }, 2000);
}

// Datatable
$(document).ready(function () {
  var table = $('#myTable').DataTable({
    dom: 'Bfrtip',
    buttons: [
      'csv', 'excel', 'pdf', 'print'
    ]
  });
});

