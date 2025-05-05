
function login() {
  const email = prompt("Podaj e-mail:");
  const password = prompt("Podaj hasło:");
  if(email === "bobixmatix@gmail.com" && password === "Modliborzyce23310") {
    window.location.href = "admin.html";
  } else {
    alert("Nieprawidłowe dane logowania.");
  }
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Wiadomość została wysłana!");
});
