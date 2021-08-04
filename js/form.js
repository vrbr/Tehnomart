//форма

const modalLink = document.querySelector(".modal-link");//найти кнопку вызова формы
const modalPopup = document.querySelector(".modal-form");//найти модальное окно
const modalClose = modalPopup.querySelector(".modal-close");//найти кнопку закрытия
const modalForm = modalPopup.querySelector(".form");//найти форму
const modalName = modalPopup.querySelector(".modal-name");//найти поле ввода имени
const modalEmail = modalPopup.querySelector(".modal-email");//найти поле ввода имейла

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

modalLink.addEventListener("click", function (evt) {//клик на кнопку вызова формы
    evt.preventDefault();//отключить действие по умолчанию переход по ссылке
    modalPopup.classList.add("modal-show");//добавить новый класс при клике на кнопку открытия

    if (storage) {//вытащить имя из памяти, если оно так есть
        modalName.value = storage;
        modalEmail.focus();
    } else {
        modalName.focus();//фокус при открытии формы в поле ввода имени
    }
});

modalClose.addEventListener("click", function(evt) {//клик на кнопку закрытия формы
    evt.preventDefault();//отключить действие по умолчанию переход по ссылке
    modalPopup.classList.remove("modal-show");//удалить класс .modal-show
    modalPopup.classList.remove("modal-error");//удалить класс при закрытии формы
});

modalForm.addEventListener("submit", function (evt) {//отправка данных формы
    if (!modalName.value || !modalEmail.value) {//отменить отправку, если не заполнено какое-то поле
    evt.preventDefault();//отключить действие по умолчанию отправка формы
    modalPopup.classList.remove("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("modal-error");//добавить класс, если что-то не так
    } else {
        if (isStorageSupport) {
        localStorage.setItem("login", modalName.value);//запомнить имя в локальное хранилище
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalPopup.classList.contains ("modal-show")) {
            evt.preventDefault();
            modalPopup.classList.remove ("modal-show");
        }
    }
});

//карта

const mapLink = document.querySelector(".map");//найти кнопку открытия
const mapPopup = document.querySelector(".modal-map");//найти модальное окно
const mapClose = mapPopup.querySelector(".modal-close");//найти кнопку закрытия

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains ("modal-show")) {
            evt.preventDefault();
            mapPopup.classList.remove ("modal-show");
        }
    }
});
