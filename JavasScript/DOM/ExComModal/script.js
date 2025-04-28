document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const open = document.getElementById("openModal");
    const close = document.getElementById("closeModal");

    open.addEventListener('click', function(){
        modal.style.display = 'block';
    });

    close.addEventListener('click', function(){
        modal.style.display = 'none';
    });
})