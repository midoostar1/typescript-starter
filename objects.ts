const user = {
    name: 'Mido',
    email: 'mido@gmail.com',
    isActive: true
}

//function createUser({name: string, isPaid: boolean = false}){

//}

//createUser({name: 'mido', isPaid: false})


function createCourse():{name: string, price: number}{
    return {name:'reactJs', price:399}
}


type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return user

}

createUser({name: "John", email: "james@gmail.com", isActive: false})



type myUser = {
  readonly  _id : string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number
}

let mido: myUser = { 
    _id: '1234',
    name: 'John',
    email: 'john@example.com',
    isActive: false


}


type CardNumber ={
    cardnumber: string
}

type CardDate ={
    carddate : string
}

type CardDetails = CardNumber & CardDate & {
    CVV : number
}




mido.email = '@example.com';
//mido._id = '1234';




export{}