"use strict";
let formEl = document.getElementById('moveForm');
let selectEl = document.getElementById('movieCategory');
let tbodyEl = document.getElementById('tbody');
let btnEl = document.getElementById('button');

let Category = ["Action", " Adventure", "Animation", "Comedy", "Detective", "Fantasy", "History", "Horror", "Musical", "Pirate", "Romantic", "SCI-FI", "War", "Western"];

function renderOption() {
    for (let i = 0; i < Category.length; i++) {
        let optionEl = document.createElement('option');
        optionEl.textContent = Category[i];
        optionEl.setAttribute('value', `${Category[i]}.png`);
        selectEl.appendChild(optionEl);
    }

}
renderOption();

Movie.myList = [];


function Movie(movieName, movieCategory, IssueYear) {
    this.movieName = movieName;
    this.movieCategory = movieCategory;
    this.IssueYear = IssueYear;

    Movie.myList.push(this);
}

formEl.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
    event.preventDefault();
    let movieName = event.target.movieName.value;
    let movieCategory = event.target.movieCategory.value;
    let IssueYear = event.target.IssueYear.value;

    new Movie(movieName, movieCategory, IssueYear);

    console.log(Movie.myList);
    saveToLocalStorage();
    renderTable();
}

function saveToLocalStorage (){
    localStorage.setItem("list",JSON.stringify(Movie.myList));
}
function readFromLocalStorage (){
    Movie.myList=JSON.parse(localStorage.getItem('list'))||[];

}

function renderTable (){
    readFromLocalStorage ();
    console.log(Movie.myList);
    tbodyEl.textContent="";

    for (let i=0 ; i<Movie.myList.length;i++) {
       let trEL = document.createElement('tr');
       let tdEL0= document.createElement('td');
       let aEl = document.createElement('a');
       aEl.textContent='X';
       aEl.setAttribute("id",i);
       aEl.addEventListener("click", removFromLocalStorage);
       tdEL0.appendChild(aEl);
       trEL.appendChild(tdEL0);

       
       let tdEL1= document.createElement('td');
       tdEL1.textContent=Movie.myList[i].movieName;
       trEL.appendChild(tdEL1);
        
       let tdEL2= document.createElement('td');
     let imgEl = document.createElement('img');
     imgEl.setAttribute("src", './img/'+ Movie.myList[i].movieCategory);
     imgEl.setAttribute('class',"img");
     tdEL2.appendChild(imgEl);
       trEL.appendChild(tdEL2);

       let tdEL3= document.createElement('td');
       tdEL3.textContent=Movie.myList[i].IssueYear;
       trEL.appendChild(tdEL3);
       tbodyEl.appendChild(trEL);
    }

}
function removFromLocalStorage (event){
    event.preventDefault();
    Movie.myList.splice(event.target.id,1);
    saveToLocalStorage();
    renderTable();
}
renderTable();

btnEl.addEventListener('click',clerList);

function clerList(event){
event.preventDefault(),
Movie.myList=[];
saveToLocalStorage();
renderTable();
}
