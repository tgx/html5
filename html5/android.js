if (window.innerWidth && window.innerWidth < 1080) {
	$(document).ready(function(){
		$('#header ul').addClass('hide');
		$('#header').append('<div class="leftButton" onClick="toggleMenu()"><img src="img/menu.jpg" width="35px"/></div>');
	});
	function toggleMenu() {
		$('#header ul').toggleClass('hide');
		$('#header leftButton').toggleClass('pressed');
	}
};