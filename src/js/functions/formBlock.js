const formBlock = () => {
    //  form block submit
    const formBlock = document.querySelector(".c-form__contact");
    if (formBlock != null) {
        formBlock.addEventListener('submit', function (e) {
            e.preventDefault();
            formBlock.classList.add('hidden');
            let thankBlock = document.querySelector('.thank-message');
            thankBlock.classList.add('active');
        });
    }
}

export default formBlock;
