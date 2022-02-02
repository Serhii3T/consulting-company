const btnLoadMore = () => {
    //  Tab show hidden
    let btnLoadMore = document.querySelector('.c-chapter__btn');
    if(btnLoadMore != null) {
        btnLoadMore.addEventListener('click', function () {
            let blocks = document.querySelectorAll(".c-chapter__block");
            btnLoadMore.classList.add('hidden');
            blocks.forEach(function (item) {
                item.classList.add('active');
            });
        })
    }
}

export default btnLoadMore;