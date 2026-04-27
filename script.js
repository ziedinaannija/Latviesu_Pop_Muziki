document.getElementById("forma")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let vards = document.getElementById("vards").value;

    if (vards === "") {
        document.getElementById("rezultats").innerText = "Lūdzu ievadi vārdu!";
        return;
    }

    document.getElementById("rezultats").innerText = "Paldies par atbildi, " + vards + "!";
});