'use strict';

var allPics = [];

var imgStore = [
  document.getElementById('imgOne'),
  document.getElementById('imgTwo'),
  document.getElementById('imgThree')
];
var totalClicks = 0;

function MallItems(name){
  this.filepath = `images/${name}.jpg`;
  this.name = name;
  this.views = 0;
  this.votes = 0;
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


var dupCatch = [];

function randItem(){
  dupCatch = [];
  while(3 > dupCatch.length){
    var random = Math.floor(Math.random() * allPics.length);
    if(dupCatch.indexOf(random) === -1){
      dupCatch.push(random);
    } else {
      alert('dupey poopy has been caught');
    }
    //I want to create an if statement that says if a duplicate is caught, a random number gets pushed into the array if it is unique
  }
}
randItem();

function renderItems(){
  for(var i = 0; i < 3; i++){
    imgStore[i].src = allPics[dupCatch[i]].filepath;
    imgStore[i].alt = allPics[dupCatch[i]].name;
    imgStore[i].title = allPics[dupCatch[i]].name;
    allPics[dupCatch[i]].views++;
  }
}
renderItems();

var listImg = document.getElementById('painintheass');

function handleClick(event){

  // console.log(event.target.alt);
  for(var i = 0; i < allPics.length; i++){
    if(event.target.alt ===allPics[i].name){
      // console.log('click', event.target.alt);
      allPics[i].votes++;
    }
  }
  totalClicks++;
  if(totalClicks === 25){
    // console.log('clicked like hell', totalClicks);
    listImg.removeEventListener('click', handleClick);
    return;
  }
  randItem();
  renderItems();
}


listImg.addEventListener('click', handleClick);