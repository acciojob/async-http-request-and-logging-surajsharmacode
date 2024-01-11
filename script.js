//your JS code here. If required.
let API = "https://jsonplaceholder.typicode.com/todos/1"
async function fetchData(){
	const res = await fetch(API);
	const data = res.json();
	console.log(data);
}
fetchData();