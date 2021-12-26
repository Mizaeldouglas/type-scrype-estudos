let idade: string | number = 90

idade = document.getElementById("idade").innerHTML

function mostrarIdade (idade:string | number){
    console.log("minha idade é: "+idade)
}
mostrarIdade(90)
mostrarIdade("90")