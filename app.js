'use strict';

var allPics = [];
var allMall= document.getElementById('allMall');

var imgOne = document.getElementById('imgOne');
var imgTwo = document.getElementById('imgTwo');
var imgThree = document.getElementById('imgThree');


function MallItems(what){
  this.filepath = `images/${what}.jpg`;
  this.what = what;
  this.views = 0;
  allPics.push(this);
}

new MallItems('bag');
new MallItems('banana');
new MallItems('bathroom');
new MallItems('boots');
new MallItems('breakfast');
new MallItems('bubblegum');
new MallItems('chair');
new MallItems('cthulhu');
new MallItems('dog-duck');
new MallItems('dragon');
new MallItems('pen');
new MallItems('pet-sweep');
new MallItems('scissors');
new MallItems('tauntaun');
new MallItems('unicorn');
new MallItems('shark');
new MallItems('sweep');
new MallItems('usb');
new MallItems('water-can');
new MallItems('wine-glass');

function randItem(){
  var random = Math.floor(Math.random() *allPics.length);
  imgOne.src = allPics[0].filepath;
  imgOne.alt = allPics[0].what;
  imgOne.title = allPics[0].what;
  imgTwo.src = allPics[1].filepath;
  imgTwo.alt = allPics[1].what;
  imgTwo.title = allPics[1].what;
  imgThree.src = allPics[2].filepath;
  imgThree.alt = allPics[2].what;
  imgThree.title = allPics[2].what;
  allPics[random].views++;
}

randItem();
