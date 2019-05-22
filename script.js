'use strict';

const tree = document.querySelectorAll('ul')[0]; // why you decided to search tag `ul` instead class `.tree` ?
const liTree = tree.querySelectorAll('li');

//добавляем заголовкам <span>, чтобы click срабатывал именно на тексте
for (let i = 0; i < liTree.length; i++) { // i think you can use here method `forEach`
  const li = liTree[i];
  const span = document.createElement('span');
  li.insertBefore(span, li.firstChild); //<span> перед текстом
  span.appendChild(span.nextSibling);  //<span> после текста
}

tree.onclick = function(event) { // better to use `addEventListener`
  const target = event.target;
  if (!target.closest('span')) return; // клик вне <span>, не интересует

  // нашли нужный элемент
  const childrenList = target.parentNode.querySelectorAll('ul')[0];
  if (!childrenList) return; // нет вложенных элементов

  childrenList.classList.toggle('hide'); // скрывает и открывает список детей
};



