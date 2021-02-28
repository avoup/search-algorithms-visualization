"user strict"

// Helper functions

const highlight = (arr, from, to = from + 1) => {
    for (let i = 0; i < arr.length; i++) {
        if (from < i + 1 && i < to) {
            arr.item(i).classList.add('active');
        } else {
            arr.item(i).classList.remove('active');
        }
    }
}

const highlightOne = (cl, index, text) => {
    emptyArr.children.item(index).classList.add(cl);
    emptyArr.children.item(index).textContent = text;
}

const removeHighlight = (cl, index) => {
    if (!cl) {
        emptyArr.children.item(index).classList.remove('active');
        emptyArr.children.item(index).classList.remove('warning');
    } else {
        emptyArr.children.item(index).classList.remove(cl);
    }
    emptyArr.children.item(index).textContent = '';
}

const createTd = (text) => {
    const td = document.createElement('td');
    td.textContent = text;
    return td;
}

// Op count
let O = 0;
let lastIndex;