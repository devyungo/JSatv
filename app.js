

function menornum(num1,num2){
    if (num1 >= num2){
        return true;
    }
    else{
        return false;
    }
}
console.log(menornum(1,3))

function idadedias(idade){
    if (idade<=0){
        let errormsg = "Dê uma idade positiva e diferente de zero.";
        return errormsg
    }
    else{
        let dias = idade * 365
        let msg = `A idade é correspondente a aproximadamente ${dias} dias.`
        return msg
    }
}

console.log(idadedias(17))

function meses(num){
    meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ]
    let mes
    let msgerror = "Digite um número válido."
    if (num>=1 && num<=12){
        mes = meses[num-1]
        return mes    
    }   
    else
    {
        return msgerror
    }
}

console.log(meses(3))

function inverter(x){
    let type = typeof(x)
    try{
        switch(type){
            case "boolean":
                if (x==true){
                    return false
                    break
                }
                else{
                    return true
                    break
                }
            case "number":
                return -x
                break
        } 
        }
        catch{
            return "Digite um valor válido"
        }
}

console.log(inverter(false))

function multiplicarsemx(num1,num2){
    let total = 0
    for (let i = 0; i<num2; i++){
        total += num1;
    }
    return total
}
console.log(multiplicarsemx(2,3))

function repetir(valor, num){
    let array = []
    for (let i = 0; i<num; i++){
        array.push(valor)
    }
    return array
}
console.log(repetir(5,3))

function getnum(array){
    for (let i = 0; i<array.length; i++){
        if (typeof array[i] != "number"){
            array.splice(i,1)
            i--
        }
    }
    return array
}

console.log(getnum([1,"a",3,"aedasd",55]))

console.log()

function numsum(array){
    let sum = 0
    for (let i = 0; i<array.length; i++){
        sum += array[i]
    }
    return sum
}

console.log(numsum([1,2,3,4,5]))

function segundomaior(array){
    for (let i=0; i<array.length; i++){
        if (typeof(array[i]) == "number"){
            array.sort()
            array.splice(i-1)
        } return array[array.length-1]
    }
}

console.log(segundomaior([1,2,3,4,5]))

let Heitor = {nome: "Heitor", notas: [3.4, 5, 10]}
let Maria = {nome: "Maria", notas: [10, 10, 10]}
let Junior = {nome: "Junior", notas:[10, 10, 8]}

let alunos = [Heitor, Maria, Junior]

function medias(aluno){
    let sum
    sum = 0
    for (let i = 0; i<aluno.notas.length; i++){
        sum += aluno.notas[i]
    }
    let media 
    media = sum/aluno.notas.length
    let objtotal 
    objtotal = {nome: aluno.nome, media: media}
    return objtotal
}

function sortnotas(a,b){
    return a.media - b.media
}

function melhoraluno(alunos){
    let listamedias = []
    for (let i=0; i<alunos.length; i++){
        listamedias[i] = medias(alunos[i])
    }
    listamedias.sort(sortnotas)
    let melhoraluno = listamedias[listamedias.length-1]
    return melhoraluno
}



console.log(melhoraluno(alunos))