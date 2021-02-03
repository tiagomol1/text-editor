//elements
const container = document.querySelector('.paper');
const boldMarkup = document.getElementById('bold');
const italicMarkup = document.getElementById('italic');
const underlineMarkup = document.getElementById('underline');
const alignLeftMarkup = document.getElementById('justifyLeft');
const alignRightMarkup = document.getElementById('justifyRight');
const alignJustifyMarkup = document.getElementById('justifyFull');
const alignCenterMarkup = document.getElementById('justifyCenter');
//array
const alignTypesExecCommand = ['justifyLeft', 'justifyRight', 'justifyFull', 'justifyCenter'];

let focus = 0
let lastElementFocus = ''
container.focus()

function format(command, value) {
    document.execCommand(command, false, value);

    if(document.getElementById(command).classList.contains('selected') == true){
        document.getElementById(command).classList.remove('selected')
    }else{
        document.getElementById(command).classList.add('selected')
    }
    container.focus()
}

function setFocus(x){
    return focus = x;
}

const intevalVerify = setInterval(() => {

    if(focus == 1){

        if(window.getSelection().focusNode.textContent.length == 0){
            return;
        }
        
        const selectedElement = window.getSelection().focusNode.parentNode;
        const getStyles = window.getComputedStyle(selectedElement);        

        const classfier = new Classfier(getStyles);
        const configuration = classfier.getConfiguration;

        setTextStyle(configuration.style);
        setTextAlign(configuration.align);
    }

}, 50)


function setTextStyle(data){
    data.indexOf('bold') >= 0 ? boldMarkup.classList.add('selected') : boldMarkup.classList.remove('selected')
    data.indexOf('underline') >= 0 ? underlineMarkup.classList.add('selected') : underlineMarkup.classList.remove('selected')
    data.indexOf('italic') >= 0 ? italicMarkup.classList.add('selected') : italicMarkup.classList.remove('selected')
}

function setTextAlign(data){
    if(data == 'start'){
        alignLeftMarkup.classList.add('selected');
    }else if(data == 'left'){
            alignLeftMarkup.classList.add('selected');
        }else{
                alignLeftMarkup.classList.remove('selected');
            }   
            
    data == 'right' ? alignRightMarkup.classList.add('selected') : alignRightMarkup.classList.remove('selected')
    data == 'justify' ? alignJustifyMarkup.classList.add('selected') : alignJustifyMarkup.classList.remove('selected')
    data == 'center' ? alignCenterMarkup.classList.add('selected') : alignCenterMarkup.classList.remove('selected')
}