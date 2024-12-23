function HandleNum (num, numEven, numOdd) {
    if (num % 2 === 0) {
        numEven();
    } else {numOdd()};
}


function handleEven () {
    console.log(`number is even`);
};

function handleOdd () {
    console.log(`number is odd`);
};

HandleNum(4, handleEven, handleOdd);
HandleNum(7, handleEven, handleOdd);