function showData(data){
    if(data == null){
        alert("Not Found");
    }
    let displayBox = document.getElementById("result");

    displayBox.innerHTML = ""
    data.forEach(function(ele,i){
        console.log(ele)
        let img = document.createElement("img");
        img.src = ele.strMealThumb;
        let div = document.createElement("div")

        let name = document.createElement('h2');
        name.innerText = `${ele.strMeal}`;
        let p1 = document.createElement("p")
        p1.textContent = `Type: ${ele.strArea}`
        let p2 = document.createElement("p")
        p2.textContent = `Category: ${ele.strCategory}`

        div.append(name,p1,p2)

        displayBox.append(img,div);
    });
}

export default showData;