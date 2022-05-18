
//=================================================== TASK 1 =====================================================

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//   створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//   який буде змістом того, що знаходиться на сторінці.
//   Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
/*
const content = document.getElementById('content');
const list = document.createElement('ul');
content.appendChild(list);
let findHeadings = (item) => {
    const itemChildren = item.children;
    for (const element of itemChildren) {
        if (element.tagName === 'H2') {
            const listItem = document.createElement('li');
            listItem.innerText = element.innerHTML;
            list.appendChild(listItem);
        }
        findHeadings(element);
    }
}
findHeadings(document.body);
*/
