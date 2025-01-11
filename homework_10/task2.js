function SendRequestTodo(url1) {
    return fetch(url1)
    .then(response => response.json())
    .then(todo => {
      return todo;
    })
}

function SendRequestUser(url2) {
    return fetch(url2)
    .then(response => response.json())
    .then(user => {
      return user;
    })
}

Promise.all([SendRequestTodo('https://jsonplaceholder.typicode.com/todos/1'), SendRequestUser('https://jsonplaceholder.typicode.com/users/1')])
.then(results => {
    console.log('Results from Promise.all:', results);
})
.catch(error => {
    console.error('Error in Promise.all:', error);
});

Promise.race([SendRequestTodo('https://jsonplaceholder.typicode.com/todos/1'), SendRequestUser('https://jsonplaceholder.typicode.com/users/1')])
.then(result => {
    console.log('Result from Promise.race:', result);
})
.catch(error => {
    console.error('Error in Promise.race:', error);
});