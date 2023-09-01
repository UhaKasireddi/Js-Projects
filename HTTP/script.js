let data ={
        name : "Uha",
        gender : "female",
        status : "Active",
        email : "uha@gmail.com"
    }
    

    let url="https://gorest.co.in/public/v2/users"
    let options ={
        method : "POST",  
        headers: {
            "Content-Type" : "application/Json",
            Accept : "application/Json",
            Authorization : "Bearer ab71be41aafa8dd6e93d3450becfdb53f7c73dbbd37f2360c08948a723988086"
        },
    
    
          body : JSON.stringify(data)
    }
    
    
    fetch(url,options)	
    .then((response)=>{
        // console.log(response)
        // console.log(response.json())
       return response.json();
    })
    .then((a)=>{
        console.log(a)
    })
    