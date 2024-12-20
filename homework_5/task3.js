function checkOrder (available, ordered) {
    let messege;
    switch (true) {
        case available < ordered:
        messege = 'Your order is too large, we don’t have enough goods.';
        break;
        
        case ordered === 0:
        messege = 'Your order is empty';
        break;

        case ordered < 0:
        messege = 'Your order is wrong, check the order is correct.';
        break;

        default:
            messege = 'Your order is accepted';
    }
    return messege;
}

console.log (checkOrder(4, 3));