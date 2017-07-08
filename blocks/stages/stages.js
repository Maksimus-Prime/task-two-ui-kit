require('jquery');
require('jquery-ui');
require("./../../frontend/vendor/jquery.progressbar.js");
require("./../../frontend/vendor/jquery.progressbar.css");

require('./stages.less');

$('.stages').progressbar({
	steps: ['Setp 1','Sept 2','@Setp 3 ( Current )','Sept 4']
});