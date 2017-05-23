$(function() {
	$.fn.loadingBar = function() {
		$(this).removeClass('loading-bar-dark').addClass('loading-bar-light');
	}
	$('#step2, #step3').removeAttr('href').removeAttr('onclick');
	$('#step1').on('click', function() {
		$('#step1').unbind('click').removeAttr('href').removeAttr('onclick').removeClass('active').addClass('inactive');
		$('#0percent').removeClass('show').addClass('hide');
		$('#33percent').removeClass('hide').addClass('show');
		$('#first-third').loadingBar();
		$('#step2').attr('onclick', "window.open('https://twitter.com/home?status=Remember%20how%20the%20chalkboard%20was%20replaced%20by%20the%20whiteboard?%20The%20next%20replacement%20is%20here%3A%20Lightboard%20by%20Centaurific%20http%3A//goo.gl/V5VE5b', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,width=582,height=475'); return false;").removeClass('inactive').addClass('active').on('click', function() {
			$('#step2').unbind('click').removeAttr('href').removeAttr('onclick').removeClass('active').addClass('inactive');
			$('#33percent').removeClass('show').addClass('hide');
			$('#66percent').removeClass('hide').addClass('show');
			$('#second-third').loadingBar();
			$('#step3').attr('onclick', "window.open('https://www.kickstarter.com/projects/1715882363/lightboard-14t/description', '');").removeClass('inactive').addClass('active').on('click', function() {
				$('#step3').unbind('click').removeAttr('onclick').removeClass('active').addClass('inactive');
				$('#66percent').removeClass('show').addClass('hide');
				$('#100percent').removeClass('hide').addClass('show');
				$('#third-third').loadingBar();
			})
		})
	})
});