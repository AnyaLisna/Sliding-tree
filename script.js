'use strict';

const tree = document.querySelector('.tree');
const liTree = tree.querySelectorAll('li');

//добавляем заголовкам <span>, чтобы click срабатывал именно на тексте
liTree.forEach((li) => {
  const span = document.createElement('span');
  li.insertBefore(span, li.firstChild); //<span> перед текстом
  span.appendChild(span.nextSibling);  //<span> после текста
})

tree.addEventListener('click', function(event) {
  const target = event.target;
  if (!target.closest('span')) return; // клик вне <span>, не интересует

  // нашли нужный элемент
  const childrenList = target.parentNode.querySelectorAll('ul')[0];
  if (!childrenList) return; // нет вложенных элементов

  childrenList.classList.toggle('hide'); // скрывает и открывает список детей
});



