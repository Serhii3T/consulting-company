const formBlock = () => {
    //  form block submit
    const formBlock = document.querySelector(".form-contact");
    if (formBlock != null) {
        formBlock.addEventListener('submit', function (e) {
            e.preventDefault();
            formBlock.classList.add('hidden');
            let thankBlock = document.querySelector('.thank-mess');
            thankBlock.classList.add('active');
        });
    }
}

export default formBlock;