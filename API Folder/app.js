///////////////////////dog images project//////////

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

  

  const getNew = ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json.message)
      dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
    })

  }
  
dogButton.onclick = ()=> getNew();



