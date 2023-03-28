const bodyE1 = document.getElementsByTagName('body');
function changeBackgroundColor(event) {
const backgroundColor = event?.target?.value;
bodyE1[0].style.backgroundColor = backgroundColor;   
}0