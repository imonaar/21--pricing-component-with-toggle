import "./styles/styles.scss";

const jsSwitch = document.querySelector('.js-toggle')

const basic = document.querySelector('.basic-price')
const professional = document.querySelector('.professional-price')
const master = document.querySelector('.master-price')

const changePrice = () =>{
    if(jsSwitch.checked){
        basic.textContent = 19.99
        professional.textContent = 24.99
        master.textContent = 39.99
    } else{
        basic.textContent = 199.99
        professional.textContent = 249.99
        master.textContent = 399.99
    }
}

jsSwitch.addEventListener('change', changePrice)