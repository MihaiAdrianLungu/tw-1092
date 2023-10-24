// async function getData() {
//     const result = await fetch('https://api.github.com/users/MihaiAdrianLungu');
//     const response = await result.json();

//     console.log(response);
// }

// getData()

fetch('https://api.github.com/users/MihaiAdrianLungu')
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.log(err));