var encontros = [
    {"title": "9. Tenda do conto - 09/04/2024", "uri": "https://limsiva.github.io/poti/encontros/dia_9.html"},
]

window.onload = function() {

    document.getElementById("foot-data").innerHTML += '<h5 style="font-family: Arial, sans-serif; margin: 20px 0 0; font-size: 11pt;">UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE</h5><p>Portfólio de Atividade Interativa Interdisciplinar II: Saúde e Cidadania (SACI II) 2024.1</p><p>Docente: Ana Kalliny de Sousa Severo</p><p>Docente Assistida: Anna Cecilia de Medeiros Lira Câmara</p><p>Discente: Sivaldo Ponciano de Lima Junior</p>';

    for (i = 0; i<= encontros.length; i++) {
        document.getElementById("encontros-list").innerHTML += "<li><a href='" + encontros[i].uri + "'>" + encontros[i].title + "</li>";
    
    }

    if (document.title === "Portfólio"){
        alert("altere o título")
    }
}

