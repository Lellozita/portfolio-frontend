const btn = document.getElementById('btnContacto');
const email = document.getElementById('email');

btn.addEventListener('click', () => {
    if(email.style.display === "none") {
        email.style.display = "block";
    } else {
        email.style.display = "none";
    }
});
