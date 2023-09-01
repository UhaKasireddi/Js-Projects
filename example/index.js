// let a = [1,2,3,4,5,6]
// let output = a.map((each_element) =>each_element+5).filter((each_element)=>each_element>=10).reduce((accumulator,current) => accumulator+current)
// console.log(output)

const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("An error occurred");
        //throw error; // Optionally re-throw the error
    }
};

fetchData()
// const processData = async () => {
//     try {
//         const result = await fetchData();
//         console.log(result);
//     } catch (error) {
//         console.log("An error occurred:", error);
//     }
// };

// processData()

// const url = "https://gorest.co.in/public/v2/users";

// const fechData = async()=>{
//     try{
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data)

//     }
//     catch(error){
//         console.log("An Error Occured")

//     }

// }
// fechData()

// `${}`
// condiotion?true:false;

// let day=6;
// switch(day)

// let add  = (a,b)=>{
//     return (a+b);
// }
// let aaddi = (a,b) => a+b;

