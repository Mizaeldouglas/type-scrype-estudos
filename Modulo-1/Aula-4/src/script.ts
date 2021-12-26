let firstNames = ['mizael','douglas','mello']

firstNames.forEach(function(names){
    if(typeof names === 'string'){
        console.log(names.toUpperCase())
    }else{
    console.log(names)
}
})