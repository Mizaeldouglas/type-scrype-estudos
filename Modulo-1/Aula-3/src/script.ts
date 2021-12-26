function firstLetterUpperCase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1)
}
let firstNome =firstLetterUpperCase('Mizael')

function somar(n1:number,n2:number){
    return n1 + n2
}
let alguma = somar(10,20)