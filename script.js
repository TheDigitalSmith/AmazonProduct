const url = "https://striveschool.herokuapp.com/api/product";
const username = "user22";
const password = "ykeZdCYNLs2dqbMc";

window.onload = async () => {
  let response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(username + ":" + password)
    }
  });
  console.log(response);
};

saveProduct = async event => {
    const response = await fetch (url, {
        method: "POST",
        body: JSON.stringify(event),
        headers: new Headers ({ 
            Authorization: "Basic " + btoa(username + ":" + password),
            "Content-Type": "application/json"
        })
    });
    console.log(response)
    return response;
};

handleSubmit = async () => {
    event.preventDefault();
    const myProduct = {
        name: document.querySelector("#name").value,
        description: document.querySelector ("#description").value,
        brand: document.querySelector ("#brand").value,
        image: document.querySelector ("#imgUrl").value,
        price: document.querySelector ("#price").value
    };
    console.log("myProduct", JSON.stringify(myProduct));

    const response = await saveProduct(myProduct);

    if (response.ok) {
        //checking the ok property which stores the successfull result of the operation
        alert("the event was saved successfully");
      } else {
        alert("the event was NOT saved successfully");
      }
}
