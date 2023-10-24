async function f() {     
    try {
        let promise = new Promise((resolve, reject) => { 
            setTimeout(() => resolve("done!"), 1000) 
        }); 

        let result = await promise; // wait until the promise resolves (*) 
        console.log(result); // "done!" 
    } catch (error) {
        console.log(error);
    }
} 

f();