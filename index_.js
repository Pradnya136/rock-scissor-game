let userCount = parseInt(localStorage.getItem('userCount')) || 0;
let pcCount = parseInt(localStorage.getItem('pcCount')) || 0;
let contents = document.getElementById("content");
let showbtn = document.getElementById("show");

showbtn.addEventListener("click", function(){
    contents.style.visibility = 'visible'; 
})
document.getElementById('user-count').textContent = `${userCount}`;
document.getElementById('pc-count').textContent = `${pcCount}`;


let selectedItems = document.querySelectorAll(".item");
selectedItems.forEach(item => {
    item.addEventListener('click', function() {
        const value_ = item.getAttribute('data-value');
        localStorage.setItem('userSelection', value_);
        console.log("Selected value is =", value_);
        window.location.href = "index2.html";
    });
});
