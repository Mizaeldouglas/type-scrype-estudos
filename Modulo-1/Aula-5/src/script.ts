function resumo(usuario:{nome:string, idade?: number}){
    if (usuario.idade !== undefined){
        return `Olá ${usuario.nome}, Tudo Bem ? Você tem ${usuario.idade} anos`
    }else{
        return `Olá ${usuario.nome}, Tudo Bem ?`
    }
}


// Implementaçao Da funçao
let u = {
    nome:'Mizael'
}
resumo(u)