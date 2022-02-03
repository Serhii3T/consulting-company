const tabClick = () => {
    // tab click
    let navItemWork = document.querySelectorAll(".c-work__item");
    if (navItemWork != null) {
        navItemWork.forEach(function (element) {

            element.addEventListener('click', function () {
                document.querySelector(".c-work__item.active").classList.remove('active');
                this.classList.add('active');
                let classBlock = this.getAttribute('data-cat');
                let blocks = document.querySelectorAll(".c-chapter__block");
                blocks.forEach(function (item) {
                    item.classList.remove('active');
                });
                let blocksActive = document.querySelectorAll("." + classBlock);
                blocksActive.forEach(function (item) {
                    item.classList.add('active');
                });
            });
        });
    }

    let itemIcon = document.querySelectorAll(".c-comment__circle");
    if (itemIcon != null) {
        itemIcon.forEach(function (element) {
            element.addEventListener('click', function () {
                document.querySelector(".c-comment__circle.active").classList.remove('active');
                this.classList.add('active');
                let classBlock = this.getAttribute('data-id');
                let blocks = document.querySelectorAll(".c-comment__item");
                blocks.forEach(function (item) {
                    item.classList.remove('active');
                });
                let blocksActive = document.querySelectorAll(".data-id-" + classBlock);
                blocksActive.forEach(function (item) {
                    item.classList.add('active');
                });
            });
        });
    }

}

export default tabClick;