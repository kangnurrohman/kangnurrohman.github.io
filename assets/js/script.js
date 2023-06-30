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

window.addEventListener('scroll', function() {
      var backToTop = document.getElementById('backToTop');
      if (window.pageYOffset > 100) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });

    function scrollToTop(event) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
						event.preventDefault();
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