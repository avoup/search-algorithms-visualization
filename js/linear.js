"use strict";

const linearSearch = (num, arr) => {

    let i = 0;
    function next() {

        if (i !== 0) removeHighlight('warning', i - 1);

        highlightOne('warning', i, num + '?')
        
        if (arr[i] === num) {
            lastIndex = i;
            removeHighlight('warning', i)
            highlightOne('active', i, num)
        } else if (i < arr.length)
            setTimeout(next, 200)
        i++;
    }
    next()

}
