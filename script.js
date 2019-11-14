window.onload = async()=> {
   let username = "user22" 
   let passkey = "ykeZdCYNLs2dqbMc"
   let token = btoa( username + ":" + passkey)

   let response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/product/", {
       headers: {
            "Authorization": "Basic " + token
       }
    })
    let responseJson= await response.json ()
    console.log(responseJson)
}

newProduct = async (product) => {
    let username = "user22"
    let passkey = "ykeZdCYNLs2dqbMc"
    let token = btoa(username + ":" + passkey)

    let response = await fetch ("https://strive-school-testing-apis.herokuapp.com/api/product/",{
        method:"POST",
        body: JSON.stringify(product),
        headers: {
            "Authorization":"Basic " + token,
            "Content-type" :"application/json"
        }
    })

    let responseJson= await response.json ()

    // let newDiv = document.querySelector("#")
    

}