import "./../../frontend/vendor/jquery.progressbar.js";
import "./../../frontend/vendor/jquery.progressbar.css";

$(document).ready(function(){
    $('.js-stages').each(function(i){
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
});