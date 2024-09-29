let isModalOpen = false;
let contrastToggle = false; 

function toggleContrast() {
    contrastToggle = !contrastToggle ;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            "service_70wex3d",
            "template_7t54bfy",
            event.target,
            "qaN8q6pBP8JR-_MyV"
    )
    .then(() => {
        loading.classList.remove ('modal__overlay--visible')
        success.classList += " modal__overlay--visible"
    })
    .catch(() => {
        loading.classList.remove ('modal__overlay--visible')
        alert(
            "The email service is temporarily unavailable. Please contact me directly at aidanlmcmurray@gmail.com"
        );
    });
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}