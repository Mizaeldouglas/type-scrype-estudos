function mostrarTexto(
    texto:string,
    alinhamento:'left' | 'rigth' | 'center'
    ){
        return `<div style="text-aling: ${alinhamento}">${texto}</div>`

}

mostrarTexto('Mizael', 'left')
mostrarTexto('Mizael', 'rigth')
mostrarTexto('Mizael', 'center')


type Opcoes = {
    width:number,
    heigth:number
}

function configurar(props:Opcoes | 'auto'){

}

configurar({width:100,heigth:200})
configurar('auto')