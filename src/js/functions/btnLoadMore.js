const btnLoadMore = () => {
    //  Tab show hidden
    let btnLoad = document.querySelector('.c-chapter__btn');
    if(btnLoad != null) {
        btnLoad.addEventListener('click', function () {
            let blocks = document.querySelectorAll(".c-chapter__block");
            btnLoad.classList.add('hidden');
            blocks.forEach(function (item) {
                item.classList.add('active');
            });
        })
    }
}

export default btnLoadMore;