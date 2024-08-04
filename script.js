var encontros = [
    {"title": "1. Apresentação Geral da Disciplina - 24/08/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_1.html"},
    {"title": "2. Aula Inaugural: Direitos, Saúde, Cidadania e Diversidade - 31/08/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_2.html"},
    {"title": "3. Primeiro dia na Unidade - 14/09/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_3.html"},
    {"title": "4. Trabalho em Equipe e Técnicas Etnográficas - 21/09/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_4.html"},
    {"title": "5. IV Seminário de Saúde Coletiva - 28/09/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_5.html"},
    {"title": "6. Passeio Exploratório - 05/10/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_6.html"},
    {"title": "7. Mapa do Território - 19/10/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_7.html"},
    {"title": "8. Saúde e seus determinantes, e desigualdades no contexto da saúde da população - 26/10/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_8.html"},
    {"title": "9. Conselho Comunitário do Soledade I - 09/11/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_9.html"},
    {"title": "10. Educação em saúde e reflexões sobre Experiências de Educação em Saúde - 16/11/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_10.html"},
    {"title": "11. Tenda do Conto - 23/11/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_11.html"},
    {"title": "12. Planejamento do Produto de Intervenção - 30/11/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_12.html"},
    {"title": "13. Apresentação do Produto/ação de Intervenção - 07/12/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_13.html"},
]

for (i = 0; i<= encontros.length; i++) {
    document.getElementById("encontros-list").innerHTML += "<li><a href='" + encontros[i].uri + "'>" + encontros[i].title + "</li>";
}