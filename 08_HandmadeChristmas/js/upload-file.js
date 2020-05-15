window.onload = function() {
	function uploadsFile() {
		var fileInput = document.querySelector('input[type=file]');
		var filenameContainer = document.querySelector('.filename');
		var filenameContainerText = document.querySelector('.filename span');
		var dropzone = document.querySelector('div');


		fileInput.addEventListener('change', function() {
			filenameContainerText.innerText = fileInput.value.split('\\').pop();
			filenameContainer.className += ' is-show';
		});

		fileInput.addEventListener('dragenter', function() {
			dropzone.classList.add('dragover');
		});

		fileInput.addEventListener('dragleave', function() {
			dropzone.classList.remove('dragover');
		});
	}
	if($('.input-file').length>0) {
		uploadsFile();
	}
}