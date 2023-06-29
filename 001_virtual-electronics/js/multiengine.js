// Как только страничка загрузилась 
  window.onload = function () { 
    // проверяем поддерживает ли браузер FormData 
    if(!window.FormData) {
      alert("Browser does not support file upload");
    }
  }

jQuery(document).ready(function(){
	// =validation
	var errorTxt = 'Ошибка отправки';
	jQuery("#sendform").validate({
		submitHandler: function(form){
			var form = document.forms.sendform,
				formData = new FormData(form),
				xhr = new XMLHttpRequest();
				
			xhr.open("POST", "multisend.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						// jQuery("body").append('<p class="thank">Данные отправлены!<p>');
						console.log('Данные отправлены!')
					}
				}
			};
			xhr.send(formData);
		}
	});	
})

function sendSuccess(callback){
	jQuery(callback).find("form fieldset").html(thank);
	startClock();
}
