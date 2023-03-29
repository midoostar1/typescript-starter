function addTwo(num: number): number {
return num + 2
}

function getUpper(val: string){
return val.toUpperCase()
}


function singnUpUser(name: string, email: string, isPaid: boolean){

}

function loginUser(name: string, email: string, isPaid: boolean = false){

}


// function getValue(myVal: number){
//     if(myVal > 5){
//       return true  
//     }
//     return '200 OK'
// }


const getHello = (s:string):string =>{
return ''
}


const heros = ['thor', 'spiderman', 'ironman']

heros.map((hero): string =>{
    return `this is a ${hero}`
})


function handleError(errmsg: string): never {
throw new Error(errmsg)
}


function consoleError(errmsg: string): void {
    console.log(errmsg)
    }



addTwo(5)
getUpper('mido')
singnUpUser('mido', 'mido@codeup', true)

loginUser('midoostar', 'midoostar@codeup')



export{}