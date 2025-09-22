let input = document.getElementById("input")
let display = document.getElementById("display");

function addN(n) {
    if (input.textContent.length < 4) {
        input.textContent += n;
    }
}

function deleteN() {
    input.textContent = input.textContent.slice(0, -1);
}

async function search() {
    display.textContent = input.textContent;
    input.textContent = "";

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${display.textContent}/`)
    let data = await response.json()


    document.getElementById("name").innerHTML = data.name
    console.log(data)
    console.log(data.name)
    if (data.types.length === 2) {
        document.getElementById("type").innerHTML = `${data.types[0].type.name}/${data.types[1].type.name}`
        console.log(`${data.types[0].type.name}/${data.types[1].type.name}`)
    }
    else {
        document.getElementById("type").innerHTML = data.types[0].type.name
        console.log(data.types[0].type.name)
    }
    document.getElementById("height").innerHTML = `${data.height} decimetres`
    console.log(data.height)
    document.getElementById("weight").innerHTML = `${data.weight} hectograms`
    console.log(data.weight)
    document.getElementById("pic").src = data.sprites.front_default
}