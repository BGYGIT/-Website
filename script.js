function openRule(code, text, punishment) {
    document.getElementById("modalText").innerHTML =
        `<h2>${code}</h2>
         <p>${text}</p>
         <p><b>Покарання:</b> ${punishment}</p>`;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}