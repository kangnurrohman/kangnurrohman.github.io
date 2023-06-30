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

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    function updateButtonBackground() {
      var body = document.body;
      var backToTop = document.getElementById('backToTop');
      if (getComputedStyle(body).getPropertyValue('background-color') === 'rgb(0, 0, 0)') {
        backToTop.style.backgroundColor = 'white';
        backToTop.style.color = 'black';
      } else {
        backToTop.style.backgroundColor = 'black';
        backToTop.style.color = 'white';
      }
    }

    window.addEventListener('DOMContentLoaded', updateButtonBackground);
    window.addEventListener('resize', updateButtonBackground);