/*
type User = {
    nome:string,
    idade:number
}
*/

interface User{
    nome:string;
    idade:number;
}


function resumo(usuario:User){
    return `ola ${usuario.nome}, Você tem ${usuario.idade} anos`
}
resumo({
    nome:'Mizael',
    idade:90
})