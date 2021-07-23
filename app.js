"use strict";
let articleFormEl = document.getElementById('articleForm');
let tbodyEl = document.getElementById('tbodyEl');

Article.listOFArticle = [];


function Article(articleAuthor, title, content, subject, date, idA, like) {
    this.articleAuthor = articleAuthor;
    this.title = title;
    this.content = content;
    this.subject = subject;
    this.date = date;
    this.idA = idA;
    this.like = like;
    Article.listOFArticle.push(this);

}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

articleFormEl.addEventListener('submit', handelSubmit);

function handelSubmit(event) {
    event.preventDefault();
    let articleAuthor = event.target.articleAuthor.value;
    let title = event.target.title.value;
    let content = event.target.content.value;
    let subject = event.target.subject.value;
    let date = event.target.date.value;
    let idA = event.target.idA.value;
    let like = getRandomIntInclusive(1, 500);
    new Article(articleAuthor, title, content, subject, date, idA, like);
    Article.prototype.saveToLocalStorage();
    renderTable();
}

Article.prototype.saveToLocalStorage = function () {
    localStorage.setItem('article', JSON.stringify(Article.listOFArticle));
}

Article.prototype.readFromLocalStorage = function () {
    Article.listOFArticle = JSON.parse(localStorage.getItem('article')) || [];
}

function renderTable() {
    Article.prototype.readFromLocalStorage();
    tbodyEl.textContent = '';
    for (let i = 0; i < Article.listOFArticle.length; i++) {
        let trEl = document.createElement('tr');
        let tdEL0 = document.createElement('td');
        tdEL0.textContent = Article.listOFArticle[i].articleAuthor;
        trEl.appendChild(tdEL0);

        let tdEL1 = document.createElement('td');
        tdEL1.textContent = Article.listOFArticle[i].title;
        trEl.appendChild(tdEL1);

        let tdEL2 = document.createElement('td');
        tdEL2.textContent = Article.listOFArticle[i].content;
        trEl.appendChild(tdEL2);

        let tdEL3 = document.createElement('td');
        tdEL3.textContent = Article.listOFArticle[i].subject;
        trEl.appendChild(tdEL3);

        let tdEL4 = document.createElement('td');
        tdEL4.textContent = Article.listOFArticle[i].date;
        trEl.appendChild(tdEL4);

        let tdEL5 = document.createElement('td');
        tdEL5.textContent = Article.listOFArticle[i].idA;
        trEl.appendChild(tdEL5);

        let tdEL6 = document.createElement('td');
        tdEL6.textContent = Article.listOFArticle[i].like;
        trEl.appendChild(tdEL6);

        tbodyEl.appendChild(trEl);
    }
}
renderTable();