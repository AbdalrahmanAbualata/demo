"use strict";
let articleFormEl = document.getElementById('articleForm');
let tableEl =document.getElementById('table');

Article.listOFArticle=[];


function Article(articleAuthor,title,content,subject,date,idA,like){
    this.articleAuthor=articleAuthor;
    this.title=title;
    this.content=content;
    this.subject=subject;
    this.date=date;
    this.idA=idA;
    this.like=like;
    Article.listOFArticle.push(this);

}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
   
  articleFormEl.addEventListener('submit',handelSubmit);

  function handelSubmit(event){
    event.preventDefault();
 let articleAuthor=event.target.articleAuthor.value;
 let title=event.target.title.value;
 let content=event.target.content.value;
 let subject=event.target.subject.value;
 let date=event.target.date.value;
 let idA=event.target.idA.value;
 let like=getRandomIntInclusive(1,500);
   new  Article(articleAuthor,title,content,subject,date,idA,like);
   Article.prototype.saveToLocalStorage();
  }
  
  Article.prototype.saveToLocalStorage=function(){
  localStorage.setItem('article',JSON.stringify(Article.listOFArticle));
  }

  Article.prototype.readFromLocalStorage=function(){
    Article.listOFArticle=JSON.parse(localStorage.getItem('article')||[]);
    }
 