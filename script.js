var encontros = [
    {"title": "1. Aula Inaugural - 05/03/2024", "uri": "https://limsiva.github.io/poti/encontros/dia_1.html"},
    {"title": "2. Apresentação do Componente Curricular - 12/03/2024", "uri": "https://limsiva.github.io/poti/encontros/dia_2.html"},
    {"title": "3. Conhecendo a unidade de saúde da família - 19/03/2024", "uri": "https://limsiva.github.io/poti/encontros/dia_3.html"},
    {"title": "4. Atenção Primária à Saúde - 26/03/2024 ", "uri": "https://limsiva.github.io/poti/encontros/dia_4.html"},
    {"title": "5. Política Nacional de Atenção Básica - 02/04/2024 ", "uri": "https://limsiva.github.io/poti/encontros/dia_5.html"},
    {"title": "6. Tenda do conto - 09/04/2024", "uri": "https://limsiva.github.io/poti/encontros/dia_6.html"},
    {"title": "7. Sistemas de Informação na Atenção Básica - 23/07/2024", "uri": "https://limsiva.github.io/poti/encontros/dia_7.html"},
    {"title": "8. Ferramentas para o cuidado familiar - 30/07/2024", "uri": "https://limsiva.github.io/poti/encontros/dia_8.html"},
    {"title": "9. Visitas Domiciliares - 06/08/2024", "uri": "https://limsiva.github.io/poti/encontros/dia_9.html"},
    {"title": "10. A Saúde do Trabalhador e Sua Rede - 13/08/2024", "uri": "https://limsiva.github.io/poti/encontros/dia_10.html"},
    {"title": "11. Preparação da Intervenção - 20/08/2024", "uri": "https://limsiva.github.io/poti/encontros/dia_11.html"},
    {"title": "12. A Saúde do Trabalhador e o Mural do Afeto - 27/08/2024", "uri": "https://limsiva.github.io/poti/encontros/dia_12.html"},
    {"title": "Carta aberta à USF Pedra do Sino", "uri": "https://limsiva.github.io/poti/encontros/carta_aberta.html"},
]

window.onload = function() {

    document.getElementById("foot-data").innerHTML += '<h5 style="font-family: Arial, sans-serif; margin: 20px 0 0; font-size: 11pt;">UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE</h5><p>Portfólio de Atividade Interativa Interdisciplinar II: Saúde e Cidadania (SACI II) 2024.1</p><p>Docente: Ana Kalliny de Sousa Severo</p><p>Docente Assistida: Anna Cecilia de Medeiros Lira Câmara</p><p>Discente: Sivaldo Ponciano de Lima Junior</p>';

    for (i = 0; i< encontros.length; i++) {
        document.getElementById("encontros-list").innerHTML += "<li><a href='" + encontros[i].uri + "'>" + encontros[i].title + "</li>";
    
    }

    if (document.title === "Portfólio"){
        alert("altere o título")
    }
}

