"use strict";

const binarySearch = (num, arr, offset = 0) => {
    let index = Math.floor(arr.length / 2);
    lastIndex = offset + index;
    O++

    highlight(arrEl.children, offset, offset + arr.length)

    highlightOne('warning', offset + index, num + '?');

    setTimeout(() => {

        if (num > arr[index]) {
            removeHighlight('warning', offset + index)
            binarySearch(num, arr.slice(index + 1, arr.length), offset + index + 1);
        }
        else if (num < arr[index]) {
            removeHighlight('warning', offset + index)
            binarySearch(num, arr.slice(0, index), offset);
        }
        else if (num === arr[index]) {
            removeHighlight('warning', offset + index)
            highlightOne('active', offset + index, num);
            highlight(arrEl.children, 0, 0);
            return index;
        }
        else {
            highlightOne('warning', offset + index, 'null')
            return null;
        }

    }, 1000);
}
