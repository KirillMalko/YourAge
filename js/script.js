let modal = document.querySelector('.modal');
let btnGroup1 = document.querySelectorAll('.btn_1');
let btnGroup2 = document.querySelectorAll('.btn_2');
let btn_3 = document.querySelector('.btn_3');
let btn_4 = document.querySelector('.btn_4');

btnGroup1[0].onclick = function () {
    modal.hidden = false;
    modal.style.border = "9px";
}
btnGroup1[1].onclick = function () {
    modal.hidden = true;

}
btnGroup2[0].onclick = function () {
    modal.hidden = false;
    modal.style.border = "9px";
}

btnGroup2[1].onclick = function () {
    modal.hidden = true;
    modal.style.display = null;
}
btn_3.onclick = function () {
    let yearBorn = document.querySelector(".inp");
    //yearBorn = parseInt(yearBorn);
    let myBorn = 2021 - yearBorn;
    console.log(myBorn);
    let out = document.querySelector(".out");
    out.innerHTML = 'Ваш возраст' + myBorn;
}
btn_4.onclick = function () {
    modal.style.borderWidth = '5px';
    modal.style.boxShadow = '0 0 10px #1564';

}