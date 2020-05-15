$(document).ready(function(){

	var formStep = function() {

		if(document.querySelector('#loading-step')){	

			var steps = document.querySelectorAll('.wrapper--form-step .form-step--items');
			var lineDOM = document.querySelector('#loading-step span');
			var countStep = document.querySelector('.count-step');
			var current = 0;
			var dataStep = 0;
			var sumStep = [0];
			var offsetLine = 0,
			lineStep = 1;
			var stepPrev = 0;
			var allSteps = 0;
			for(var j=0; j<steps.length; j++) {
				allSteps += parseInt(steps[j].dataset.step);
				sumStep.push(steps[j].dataset.step);
			}

			step();
			loadinhLine();

			function loadinhLine(){
				offsetLine = offsetLine+parseInt(sumStep[lineStep]);
				lineDOM.style.width = offsetLine + "%";
			}

			var nextSteps = (function(){
				stepPrev += parseInt(sumStep[lineStep]);
				if(offsetLine == allSteps){
					lineStep += 0;
				} else {
					lineStep++;
					loadinhLine();
					animCounter(stepPrev, offsetLine)
				}
				if(current+1 == steps.length) {
					steps[current].classList.remove('step-hide');
				}
				else {
					current++;
				}
				step();
			});


			var prevStep = function(){
				stepPrev = parseInt(sumStep[lineStep]);
				if(steps[0].dataset.step >= offsetLine) {
				} else {
					offsetLine = offsetLine-parseInt(sumStep[lineStep]);
					lineStep--;
				}
				countStep.innerHTML = offsetLine + " %";
				lineDOM.style.width = offsetLine + "%";

				if(current-1 == -1) {
					steps[current].classList.remove('step-hide');
				}
				else {
					current--;
				}
				step();
				animCounter(stepPrev, offsetLine)
			};

			$('.prev-steps').on('click', function(){
				prevStep();
			});

			function step() {
				for(var i=0; i<steps.length; i++) {
					steps[i].classList.add('step-hide');
				}
				steps[current].classList.remove('step-hide');
			}
			function animCounter(curentStep, numStep) {
				$({numberValue: curentStep}).animate({numberValue: numStep}, {
					duration: 500,
					easing: "linear",
					step: function(val) {
						$(".count-step").html(Math.ceil(val) + "% ");
					}
				});
			}

			var stepsOne = $('#stepOne'),
			radioStepOne = $('.step-radio--wrapper .radio input[type="radio"]'),
			stepTwo = $('#stepTwo'),
			stepThree = $('#stepThree'),
			radioStepThree = $('#step-three .radio-parents .radio input[type="radio"]'),
			stepFour = $('#stepFour'),
			radioStepFour = $('#step-four .radio--what-care .radio input[type="checkbox"]'),
			stepFive = $('#stepFive'),
			radioStepFive = $('#step-five .radio--what-care .radio input[type="radio"]');

			stepTwo.on("click", function(){
				nextSteps();
			});


			function stepOne(submite, elements) { // Step One
				submite.on("click", function(){
					if(elements.is(":checked")) {
						$('#step-two').addClass('hideStep')
						$('#step-three').find('.prev-steps').attr('id', 'stepPrevThree');
						nextSteps();
					}
					else {
						$('#step-two').removeClass('hideStep');
						$('#step-three').find('.prev-steps').attr('id', '');
					}
				});
			}
			stepOne(stepsOne, $('#myself'));

			$('body').on('click','#stepPrevThree', function(){
				prevStep();
			});

			function emailVal(submite, element) {
				submite.on("click", function() {
					var regexEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i,
					mailValue = element.val();
					if (regexEmail.test(mailValue)) {
						nextSteps();
					}
					else {
						element.parent().addClass('error');
					}
				});
			}
			emailVal($('#stepNine'), $('.emailChecked'));

			function inputVal(submite, elements) {
				submite.on("click", function(){
					if(elements.val() != '') {
						nextSteps();
					}
					else {
						elements.parent().addClass('error');
					}
				});
			}
			inputVal($('#stepSix'), $('#postCode'));
			inputVal($('#stepSeven'), $('#firstName'));
			inputVal($('#stepEight'), $('#lastName'));
			inputVal($('#stepTen'), $('#phoneNumber'));

			function radioAll(submite, elements) {
				submite.on("click", function(){
					if(elements.is(":checked")) {
						nextSteps();
					}
					else {
						elements.parent().addClass("error")
					}
				});
			}
			radioAll(stepsOne, radioStepOne);
			radioAll(stepThree, radioStepThree);
			radioAll(stepFour, radioStepFour);
			radioAll(stepFive, radioStepFive);

			function radioChange(elements) {
				elements.on("change", function() {
					elements.parent().removeClass("error");
				});
			}
			radioChange(radioStepOne);
			radioChange(radioStepThree);
			radioChange(radioStepFour);
			radioChange(radioStepFive);
			radioChange($('#postCode'));
			radioChange($('.emailChecked'));

			function checkSend(elements, submite) {
				elements.on("click", function() {
					if(elements.is(":checked")) {
						submite.prop('disabled', false);
					}
					else {
						submite.prop('disabled', true);
					}
				});
			}
			checkSend($('#consent input'), $('#stepTen'));

	} // if

};
formStep();

});