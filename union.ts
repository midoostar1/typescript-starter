let score: number | string = 33

score = 44
score   = '45'


type User2 = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let mido: User2 | Admin = {name: 'mido', id: 11234}

function getDbId(id: number | string){
    console.log(`DB id is ${id}`)
}

getDbId(3)
getDbId('3')

//Array
const data: number[] = [6,7,8,9]
const data2: string[] = ['1', '2', '3', '4', '5']
const data3: (string | number)[] = [...data, ...data2]

let seatAllotment: 'aisle' | 'middle' | 'window'
seatAllotment = 'aisle'

//seatAllotment = 'crew'