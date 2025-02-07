

async function fetchData(){
  try{
  result=await fetch('https://jsonplaceholder.typicode.com/spor/1');
  if (!result.ok) {  // Check if the response is successful
    throw new Error('Network response was not ok');
  }

  let data=await result.json();
  console.log(data)

  }

  catch(error){
console.log('error..',error);
  }
}
fetchData()

// Promise

// fetch('https://jsonplaceholder.typicode.com/todos/1').then((res)=>{return res.json()}).then((res)=>console.log(res))