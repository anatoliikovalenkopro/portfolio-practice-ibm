function addRecommendation(){

    let input =
    document.getElementById("newRecommendation");

    let text = input.value;

    if(text === ""){
        return;
    }

    let div = document.createElement("div");

    div.classList.add("recommendation");

    div.innerText = text;

    document
        .getElementById("allRecommendations")
        .appendChild(div);

    alert("Thank you for your recommendation!");

    input.value = "";
}