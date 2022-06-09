$(document).ready(main);

		function main() {
			
			$('#showAct').click(function() {
				if (this.checked) 
					$('.act').addClass('acts')
				else
					$('.act').removeClass('acts')
			})
			
			$('#showScenes').click(function() {
				if (this.checked) 
					$('.scene').addClass('scenes')
				else
					$('.scene').removeClass('scenes')
			})
			
			$('#showPeople').click(function() {
				if (this.checked) 
					$('.person').addClass('people')
				else
					$('.person').removeClass('people')
			})
			
			$('#showActions').click(function() {
				if (this.checked) 
					$('.actions').addClass('stage')
				else
					$('.actions').removeClass('stage')
			})
			};