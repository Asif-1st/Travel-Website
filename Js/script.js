const a = document.getElementById("burger");
const b = document.getElementById("navbar");
// const c = document.getElementById("search")
a.addEventListener("click", function() {
    b.classList.toggle("navbar_active");
    // c.classList.toggle("index")
})