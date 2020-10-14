const getFormData = require('js-getformdata')
const fs = require('fs')
const { JSDOM } = require('jsdom')


let testHTML = fs.readFileSync('index.html').toString();
const jsdom = new JSDOM(testHTML);
const { window } = jsdom;
const $ = global.jQuery = require('jquery')(window);


let form = $("form"),
odata = getFormData(form);
console.log(odata)
