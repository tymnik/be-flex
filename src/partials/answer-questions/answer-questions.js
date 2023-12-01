document.addEventListener("DOMContentLoaded", function () {
    const questionsItems = document.querySelectorAll(".questions_main_item");

    questionsItems.forEach((item) => {
        item.addEventListener("click", function () {
            questionsItems.forEach((el) => {
                if (el !== item) {
                    el.classList.remove("active");
                    el.querySelector(".questions_svg").classList.remove("rotate");
                }
            });

            item.classList.toggle("active");
            item.querySelector(".questions_svg").classList.toggle("rotate");
        });
    });
});
