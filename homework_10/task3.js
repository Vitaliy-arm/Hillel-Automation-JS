
async function SendRequestTodo(url1) {
    const response = await fetch(url1)
    const todo = await response.json();
    return todo;
}

async function SendRequestUser(url2) {
    const response = await fetch(url2)
    const user = await response.json();
    return user;
}

async function PromiseAll() {
    try {
        const results = await Promise.all([SendRequestTodo('https://jsonplaceholder.typicode.com/todos/1'), SendRequestUser('https://jsonplaceholder.typicode.com/users/1')]);
        console.log('Results from Promise.all:', results);
    } catch (error) {
        console.error('Error in Promise.all:', error);
    }
}


async function PromiseRace() {
    try {
        const result = await Promise.race([SendRequestTodo('https://jsonplaceholder.typicode.com/todos/1'), SendRequestUser('https://jsonplaceholder.typicode.com/users/1')]);
        console.log('Results from Promise.race:', result);
    } catch (error) {
        console.error('Error in Promise.race:', error);
    }
}


PromiseAll();
PromiseRace();