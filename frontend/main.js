require('jquery')
require.context("./../blocks",true,/\.js$/);
require.context("./fonts",true,/\.css$/);
require("./style.less");

$(".lol").addClass("ololo");
console.log('Hi from main.js!');
