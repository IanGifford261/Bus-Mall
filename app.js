'use strict';

var allPics = [];
var allMall= document.getElementById('allMall');

function mallItems(what){
  this.filepath = `images/${what}.jpg`;
  this.what = what;
  this.views = 0;
  allPics.push(this);
}

new MallPic('bag');
new MallPic('banana');
new MallPic('bathroom');
new MallPic('boots');
new MallPic('breakfast');
new MallPic('bubblegum');
new MallPic('chair');
new MallPic('cthulhu');
new MallPic('dog-duck');
new MallPic('dragon');
new MallPic('pen');
new MallPic('pet-sweep');
new MallPic('scissors');
new MallPic('tauntaun');
new MallPic('unicorn');
new MallPic('usb');
new MallPic('water-can');
new MallPic('wine-glass');
