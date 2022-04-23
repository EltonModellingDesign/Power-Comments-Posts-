const menuToggle = document.querySelector("#MenuToggle")
const buttonsText = document.querySelector("#buttonsText")
const textArea = document.querySelector("#textArea")
const buttonSend = document.querySelector("#buttonSend")
const comments = document.querySelector("#comments")
const posts = document.querySelector("#post")
const postedText = document.querySelector("#postedText")
const morespace = document.querySelector('#empty')

console.log(menuToggle.childNodes[1])
let morePX = 0

function toggle(){
    if(menuToggle.classList.contains('MenuToggleON')){menuToggle.classList.remove('MenuToggleON');menuToggle.classList.add('MenuToggle')}
    else(menuToggle.classList.add('MenuToggleON'))
    console.log("funfou")
}
buttonsText.childNodes[3].addEventListener("click", toggle)

function small (){

    if (textArea.selectionStart == textArea.selectionEnd) {
        return;
      }
    
      let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
      textArea.setRangeText(`<span class='small'>${selected}</span>`);

}
menuToggle.childNodes[1].onclick = small

function normal (){

    if (textArea.selectionStart == textArea.selectionEnd) {
        return;
      }
    
      let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
      textArea.setRangeText(`<span class='normal'>${selected}</span>`);

}
menuToggle.childNodes[3].onclick = normal

function big (){

    if (textArea.selectionStart == textArea.selectionEnd) {
        return;
      }
    
      let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
      textArea.setRangeText(`<span class='big'>${selected}</span>`);

}
menuToggle.childNodes[5].onclick = big



function upperCase (){

    if (textArea.selectionStart == textArea.selectionEnd) {
        return;
      }
    
      let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
      textArea.setRangeText(`<span class='uppercase'>${selected}</span>`);

}

buttonsText.childNodes[5].onclick = upperCase


function bold (){

    if (textArea.selectionStart == textArea.selectionEnd) {
        return;
      }
    
      let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
      textArea.setRangeText(`<b>${selected}</b>`);

}

buttonsText.childNodes[7].onclick = bold


function justify (){

    if (textArea.selectionStart == textArea.selectionEnd) {
        return;
      }
    
      let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
      textArea.setRangeText(`<div class='justify'>${selected}</div>`);

}

buttonsText.childNodes[9].onclick = justify


function left (){

    if (textArea.selectionStart == textArea.selectionEnd) {
        return;
      }
    
      let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
      textArea.setRangeText(`<div class='left'>${selected}</div>`);

}

buttonsText.childNodes[11].onclick = left


function center (){

    if (textArea.selectionStart == textArea.selectionEnd) {
        return;
      }
    
      let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
      textArea.setRangeText(`<div class='center'>${selected}</div>`);

}

buttonsText.childNodes[13].onclick = center


function italic (){

    if (textArea.selectionStart == textArea.selectionEnd) {
        return;
      }
    
      let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
      textArea.setRangeText(`<i>${selected}</i>`);

}

buttonsText.childNodes[15].onclick = italic


function paragraph (){
      textArea.value += '<p>'
}

buttonsText.childNodes[17].onclick = paragraph


function postText (){
    const regex = /\w/g

    if(textArea.value.match(regex)){
    let newOne = textArea.value

    let commentCreated = posts.cloneNode(true)
    commentCreated.childNodes[3].innerHTML = newOne
    comments.appendChild(commentCreated)

    let moreHr = comments.childNodes[5].cloneNode(true)
    comments.appendChild(moreHr)


    textArea.value = ""
    
    morespace.style.margin = `${morePX +=50}px 0`

    console.log(morePX)
    }
    
}
buttonSend.addEventListener('click', postText)
