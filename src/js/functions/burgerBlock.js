const burgerBlock = () => {
    // burger menu
    const burger = document.querySelector("#burger");
    const popup = document.querySelector("#popup");
    const menu = document.querySelector("#menu").cloneNode(1);
    const body = document.body;

    burger.addEventListener("click", burgerHandler);

    function burgerHandler(e) {
        e.preventDefault();
        popup.classList.toggle("open");
        burger.classList.toggle("active");
        body.classList.toggle("noscroll");
        renderPopup();
    }

    function renderPopup() {
        popup.appendChild(menu);
    }
}

export default burgerBlock;