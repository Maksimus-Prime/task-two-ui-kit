require('jquery');
require('jquery-ui');
require("./../../frontend/vendor/jquery.progressbar.js");
require("./../../frontend/vendor/jquery.progressbar.css");

require('./stages.less');

$('.stages').each(function(i){
	var stageSteps = $(this).data("steps"), currentStep = $(this).data("current");
	var stepArr = [];
	makeSteps(stageSteps,currentStep);
	$(this).progressbar({
		steps: stepArr
	});

	function makeSteps(steps,current) {
		for(let i = 0; i < stageSteps; i++){
			if(i == currentStep-1) {
				stepArr.push('@');
			}else {
				stepArr.push('');
			}
		}
	}
});

