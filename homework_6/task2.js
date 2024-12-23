function recur (num) {
    console.log(num);

    if (num <= 0) {
        return;
    } else {return recur(num-1)}
}

recur(5);