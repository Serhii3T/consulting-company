const formBlock = () => {
    //  contact form submit
    const formBlock = document.querySelector(".c-form__contact");
    const subscribleBlock = document.querySelector(".c-newsletter__form");

    if (formBlock != null) {
        formBlock.addEventListener('submit', function (e) {
            e.preventDefault();
            formBlock.classList.add('hidden');
            let thankBlock = document.querySelector('.thank-message');
            thankBlock.classList.add('active');
        });
    }

    if (subscribleBlock != null) {

        subscribleBlock.addEventListener('submit', function (e) {
            e.preventDefault();
            subscribleBlock.classList.add('hidden');
            let thankBlock = document.querySelector('.thank-message');
            thankBlock.classList.add('active');
        });
    }
}

export default formBlock;
