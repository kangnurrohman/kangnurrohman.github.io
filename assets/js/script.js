// switch dark mode
function toggleNightMode(){
	if(document.documentElement.getAttribute('data-theme') == 'light'){
		document.documentElement.setAttribute('data-theme', 'dark');
		document.getElementById('mode-switcher').classList.add('active');
		localStorage.setItem("theme","dark");
	}
	else{
		document.documentElement.setAttribute('data-theme', 'light');
		document.getElementById('mode-switcher').classList.remove('active');
		localStorage.setItem("theme","");
	}
}

// back to top
window.addEventListener('scroll', function() {
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
 // Mendapatkan URL unik untuk posting saat ini
  var postUrl = window.location.href;

  // Cek apakah jumlah tampilan sudah ada dalam localStorage
  if (!localStorage.getItem(postUrl)) {
    // Jika belum ada, inisialisasi dengan 0
    localStorage.setItem(postUrl, 0);
  }

  // Mendapatkan jumlah tampilan dari localStorage
  var viewCount = parseInt(localStorage.getItem(postUrl));

  // Meningkatkan jumlah tampilan
  viewCount++;

  // Menyimpan kembali jumlah tampilan yang sudah ditingkatkan
  localStorage.setItem(postUrl, viewCount);

  // Menampilkan jumlah tampilan di elemen HTML dengan ID 'countNumber'
  document.getElementById('countNumber').innerHTML = viewCount;

// Estimate Reading Time
  document.addEventListener("DOMContentLoaded", function() {
    var content = document.getElementsByClassName("blog-post-content")[0];
    var words = content.innerText.split(' ').length;
    var readingTime = Math.ceil(words / 200); // Estimasi waktu membaca dengan kecepatan 200 kata per menit
    var readingTimeText = readingTime + " menit membaca";

    var readingTimeElement = document.getElementById("reading-time");
    readingTimeElement.innerText = readingTimeText;
  });

// highlight code
 document.addEventListener("DOMContentLoaded", highlightcode => {
      // Initialize highlight.js
      hljs.initHighlightingOnLoad();

      // Get the code element
      var codeElement = document.getElementById("code");

      // Get the copy button
      var copyButton = document.getElementById("copy-button");

      // Add click event to the copy button
      copyButton.addEventListener("click", function() {
        var textarea = document.createElement("textarea");
        textarea.value = codeElement.innerText;
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand("copy");

        document.body.removeChild(textarea);

        copyButton.innerHTML = "<i class='fas fa-copy'></i> Terkopi!";
        
        setTimeout(function() {
          copyButton.innerHTML = "<i class='fas fa-copy'></i> Salin";
        }, 1500);
      });
    });