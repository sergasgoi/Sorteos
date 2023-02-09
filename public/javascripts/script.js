const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
    document.activeElement.classList.toggle("dark");
    btnSwitch.classList.toggle("active");

    //guardar modo

    if (document.activeElement.classList.contains("dark")) {
        localStorage.setItem("dark-mode", "true");
    } else{
        localStorage.setItem("dark-mode", "false");
    }
})


//optener modo al actualizar

if(localStorage.getItem("dark-mode") === "true"){
    document.activeElement.classList.add("dark");
    btnSwitch.classList.add("active");
} else {
    document.activeElement.classList.remove("dark");
}