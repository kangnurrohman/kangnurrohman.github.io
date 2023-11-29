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

// DataTable
$(document).ready(function() {
  $('#tabel-interaktif').DataTable();
});

// SweetAlert
document.addEventListener('DOMContentLoaded', function () {
      // Select all ordered lists (ol)
      var orderedLists = document.querySelectorAll('ol');

      orderedLists.forEach(function (ol) {
        // Select all list items (li) within the ordered list
        var listItems = ol.querySelectorAll('li');

        listItems.forEach(function (li) {
          // Select the anchor tag within the list item
          var link = li.querySelector('a[href="javascript:void(0);"]');

          if (link) {
            link.addEventListener('click', function (event) {
              // Prevent the default action (e.g., navigating to "#")
              event.preventDefault();

              // Show SweetAlert with a message
              Swal.fire({
                icon: 'info',
                title: 'Maaf 🙏',
                text: 'Tulisan masih tahap proses pengerjaan. Mohon bersabar ya 😊',
              });
            });
          }
        });
      });
    });

//  Reading progress bar
document.addEventListener("DOMContentLoaded", function () {
  var progressContainer = document.getElementById("reading-progress-container");
  var progressBar = document.createElement("div");
  progressBar.id = "reading-progress";
  progressContainer.appendChild(progressBar);

  var getMaxScroll = function () {
    var documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    return documentHeight - window.innerHeight;
  };

  var updateProgressBar = function () {
    var scrollPercentage = (window.scrollY / getMaxScroll()) * 100;
    progressBar.style.width = scrollPercentage + "%";
  };

  var toggleDarkMode = function () {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  var updateProgressBarColor = function () {
    var isDarkMode = toggleDarkMode();

    if (isDarkMode) {
      progressBar.style.backgroundColor = "var(--primary-font-color)"; // Ganti dengan variabel CSS untuk dark mode
    } else {
      progressBar.style.backgroundColor = "#4caf50"; // Ganti dengan warna untuk light mode
    }
  };

  document.addEventListener("scroll", updateProgressBar);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateProgressBarColor);

  // Pembaruan warna progress bar saat halaman dimuat
  updateProgressBarColor();
});

// Venn Diagram
    // Data untuk diagram Venn dengan Interseksi A dan B
    var setsIntersect = [
      { sets: ['A'], size: 4 },
      { sets: ['B'], size: 4 },
      { sets: ['A', 'B'], size: 2 }
    ];

    // Konfigurasi opsi
    var optionsIntersect = {
      width: 150,
      height: 150
    };

    // Gambar diagram Venn
    var diagramIntersect = venn.VennDiagram()
      .width(optionsIntersect.width)
      .height(optionsIntersect.height);

    d3.select("#venn-diagram-intersect")
      .datum(setsIntersect)
      .call(diagramIntersect);

    // Data untuk diagram Venn yang Saling Lepas
    var setsDisjoint = [
      { sets: ['A'], size: 3 },
      { sets: ['B'], size: 3 }
    ];

    // Konfigurasi opsi
    var optionsDisjoint = {
      width: 200,
      height: 200
    };

    // Gambar diagram Venn
    var diagramDisjoint = venn.VennDiagram()
      .width(optionsDisjoint.width)
      .height(optionsDisjoint.height);

    d3.select("#venn-diagram-disjoint")
      .datum(setsDisjoint)
      .call(diagramDisjoint);

    // Data untuk diagram Venn dengan Interseksi Tiga Himpunan
    var setsIntersectThree = [
      { sets: ['A'], size: 3 },
      { sets: ['B'], size: 3 },
      { sets: ['C'], size: 3 },
      { sets: ['A', 'B'], size: 1 },
      { sets: ['A', 'C'], size: 1 },
      { sets: ['B', 'C'], size: 1 },
      { sets: ['A', 'B', 'C'], size: 1 }
    ];

    // Konfigurasi opsi
    var optionsIntersectThree = {
      width: 150,
      height: 150
    };

    // Gambar diagram Venn
    var diagramIntersectThree = venn.VennDiagram()
      .width(optionsIntersectThree.width)
      .height(optionsIntersectThree.height);

    d3.select("#venn-diagram-intersect-three")
      .datum(setsIntersectThree)
      .call(diagramIntersectThree);