async function getResponce(){
    let response = await fetch("http://localhost:3000/users")
    let content = await response.json()
    console.log(content)

    const select1 = document.querySelector('.select-1');
    let index = 0 
    for (let id in content){
        const option = document.createElement('option');
        option.value = content[index]["name"];
        option.text = content[index]["name"];
        select1.append(option);
        index+=1
        console.log(index)
    }
}

getResponce()
