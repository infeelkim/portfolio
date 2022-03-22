// 변수생성하여 .btnCall 담기
const btnCall = document.querySelector(".btnCall")
const menuMo = document.querySelector(".menuMo")

btnCall.onclick = function(e){
    e.preventDefault();

    btnCall.classList.toggle("on")
    menuMo.classList.toggle("on")
}
