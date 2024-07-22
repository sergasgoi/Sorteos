document.addEventListener("DOMContentLoaded", function() {
    const switchButton = document.getElementById("switch");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === "dark") {
            switchButton.classList.add("active");
        }
    }

    switchButton.addEventListener("click", function() {
        document.body.classList.toggle("dark");
        let theme = "light";
        if (document.body.classList.contains("dark")) {
            theme = "dark";
            switchButton.classList.add("active");
        } else {
            switchButton.classList.remove("active");
        }
        localStorage.setItem("theme", theme);
    });
});
