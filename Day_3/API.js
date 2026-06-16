//api call using fetch() method
fetch("https://jsonplaceholder.typicode.com/users/2")
.then((response) => response.json())
.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});