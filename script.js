function calculoMedia() {
    var notaPrimeiroBimestre = parseInt(document.getElementById("nota-primeiro-bimestre").value);
    var notaSegundoBimestre = parseInt(document.getElementById("nota-segundo-bimestre").value);
    var notaTerceiroBimestre = parseInt(document.getElementById("nota-terceiro-bimestre").value);
    var notaQuartoBimestre = parseInt(document.getElementById("nota-quarto-bimestre").value);

    var mediaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;

    var calculoMedia = document.getElementById("calculo-media");
    calculoMedia.innerHTML = "A sua média final é " + mediaFinal.toFixed(1);

    if (mediaFinal >= 6) {
        var statusMedia = document.getElementById("status-da-media");
        statusMedia.innerHTML = "Você está <p id='status-aprovado'>APROVADO!</p>";
    } else {
        var statusMedia = document.getElementById("status-da-media");
        statusMedia.innerHTML = "Você está <p id='status-reprovado'>REPROVADO!</p>";
    }
}