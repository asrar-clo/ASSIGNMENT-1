console.log("assignemnt 3");

let jsonObject =[2];

let url =": https://jsonplaceholder.typicode.com/todos";
///syntx!!
//fetch(url)
//.then(response=>response.json())
//.then(data=>conosle.log(data))
//.catch(error=>console.log(error));


async function completedTodos(){
    const response =await fetch(url);
 
    let data = await response.json();
    console.log(data);
}
for(let i = 1; i<200; i++) {
 
    jsonObject = JSON.stringify(data[i]);

    if(jsonObject.includes("true"))
    {
        console.log(jsonObject);
    }
}  
  
completedTodos();
let str = JSON.stringify.array.forEach(element => {
    JSON.stringify(element);
});

let data =JSON.stringify(jsonObject);
console.log(data);
console.log(str);

then(error);
    console.log(error);
