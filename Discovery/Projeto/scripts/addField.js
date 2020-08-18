//Procurar o botão e quando clicar, duplicar campos em um determinado local

//Procura e captura do clique
document.querySelector("#add-time")
.addEventListener("click", cloneField)


function cloneField()
{
    /*console.log("cheguei!!!");*/

    //Duplicar
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //Limpar os campo, caso estejam preenchidos
    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEach(function(field) 
    {
        //pega o field do momento e limpa ele
        field.value = "";
    });
    fields[0].value = ""
    fields[1].value = ""

    //Local
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
