require('jquery');
require('jquery-ui');
require("./../../frontend/vendor/jquery.progressbar.js");
require("./../../frontend/vendor/jquery.progressbar.css");

require('./stages.less');

var stages = document.querySelectorAll(".stages");
var stageSteps = stages[0].dataset.steps, currentStep = stages[0].dataset.current;

var stepArr = [];
makeSteps(stageSteps,currentStep);

function makeSteps(steps,current) {
	for(let i = 0; i < stageSteps; i++){
		if(i == currentStep-1) {
			stepArr.push('@');
		}else {
			stepArr.push('');
		}
	}
}

$('.stages').progressbar({
	steps: stepArr
});

