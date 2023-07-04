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