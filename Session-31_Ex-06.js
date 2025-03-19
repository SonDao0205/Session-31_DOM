const username = `huanrose@gmail.com`
const password = `123456`
const form = document.getElementById("formLogin")
form.addEventListener("submit",function (params) {
    event.preventDefault()
    const usernameValue = form.username.value
    const passwordValue = form.password.value
    if (usernameValue === username && passwordValue === password) {
        console.log(`Dang nhap thanh cong`);
    }
    else{
        console.log(`Dang nhap that bai`);
    }
})