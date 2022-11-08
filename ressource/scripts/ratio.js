const body = document.querySelector('body')

const blocRatio = document.createElement('div')
blocRatio.setAttribute('class','bloc')
blocRatio.setAttribute('id','ratio')
var flag = 0

const primaryDiv = document.createElement('div')
primaryDiv.setAttribute('id','ratioCoco')
primaryDiv.setAttribute('class','caseRatio')

const form = document.createElement('form')
form.setAttribute('id','formmNom')
const inputText = document.createElement('input')
inputText.setAttribute('type','text')
inputText.setAttribute('placeholder','Entre ton nom')
inputText.setAttribute('id','nom')
inputText.setAttribute('class','input')
const inputSubmit = document.createElement('input')
inputSubmit.setAttribute('type','submit')
inputSubmit.setAttribute('id','submitButton')
inputSubmit.setAttribute('class','input')
inputSubmit.setAttribute('value','RATIO')

form.appendChild(inputText)
form.appendChild(inputSubmit)

const resetButton = document.createElement('div')
resetButton.setAttribute('id','reset')
resetButton.appendChild(document.createTextNode('Reset'))










function setForm() {
    primaryDiv.appendChild(form)
}

function setRatio() {
    form.remove()
    let nom = inputText.value.toLowerCase()
    if (nom === 'corentin') {
        primaryDiv.remove()
        let coco = document.createElement("img")
        coco.setAttribute('src','ressource/pics/coco.JPG')
        coco.setAttribute('class','coco')
        body.appendChild(coco)
        return
    }
    if (flag === 0) {
        primaryDiv.appendChild(document.createTextNode('Mange ce ratio mon petit ' + nom.charAt(0).toUpperCase() + nom.substring(1)))
        flag = 1
    }
}

function reset() {
    window.location.reload();
}



body.appendChild(resetButton)
blocRatio.appendChild(primaryDiv)
body.appendChild(blocRatio)

setForm()





inputSubmit.addEventListener('click',setRatio)
resetButton.addEventListener('click',reset)


