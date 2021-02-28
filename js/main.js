"user strict"

const arr = [3, 4, 6, 8, 9, 12, 15, 18, 23, 36, 48, 58, 69, 70, 72, 73, 74, 77, 80, 87];

const arrEl = document.getElementById('array');
const emptyArr = document.getElementById('underArray');

const binaryBtn = document.getElementById('binary');
const linearBtn = document.getElementById('linear');

binaryBtn.addEventListener('click', e => {
    const num = +document.getElementById('number').value;
    removeHighlight('', lastIndex)
    binarySearch(num, arr);
})
linearBtn.addEventListener('click', e => {
    const num = +document.getElementById('number').value;
    removeHighlight('', lastIndex)
    linearSearch(num, arr);
})

for (const n of arr) {
    arrEl.append(createTd(n))
    emptyArr.append(createTd(''))
}