document.addEventListener("DOMContentLoaded", function () {
    const questionsItems = document.querySelectorAll(".questions_main_item");

    questionsItems.forEach((item) => {
        item.addEventListener("click", function () {
            questionsItems.forEach((el) => {
                if (el !== item && el.classList.contains("active")) {
                    el.classList.remove("active");
                }
            });

            const isActive = item.classList.contains("active");
            if (isActive) {
                item.classList.remove("active");
            } else {
                item.classList.add("active");
            }
        });
    });
});
