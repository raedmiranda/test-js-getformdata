var getFormData = require('js-getformdata')
const fs = require('fs')
let testHTML = fs.readFileSync('index.html').toString();

const { JSDOM } = require('jsdom');
const jsdom = new JSDOM(testHTML);

const { window } = jsdom;
const { document } = window;
const $ = global.jQuery = require('jquery')(window);


let form = $("form");
let odata = getFormData(form);
console.log(odata)
