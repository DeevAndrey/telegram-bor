async function getResponce(){
    let response = await fetch("http://77.222.37.119:5000/api/users/", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    let content = await response.json()
    console.log(content)

    const select1 = document.querySelector('.select-1');
    let index = 0 
    for (let id in content['users']){
        const option = document.createElement('option');
        option.value = content['users'][index]["name"];
        option.text = content['users'][index]["name"];
        select1.append(option);
        index+=1
        console.log(index)
    }
}
//console.log(getResponce())
getResponce()
