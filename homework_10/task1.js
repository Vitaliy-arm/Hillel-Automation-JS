function Timer (text, time) {
    setTimeout(() => console.log(text), time);
}

Timer("Some text", 3000);