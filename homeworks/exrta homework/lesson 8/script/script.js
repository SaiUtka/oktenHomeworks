// Написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив.
// масив вивести в консоль

let res = []
let fn = (item) => {
    let children = item.children;
    for (const child of children) {
        if (child.classList.value) {
            res.push(child.classList.value)
        }
        fn(child);
    }
    return res.join(' ').split(' ');
};
let content = document.body
console.log(fn(content));






