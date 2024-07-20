const Buah  = [
    {Buah:"Jeruk"},
    {Buah:"Apel"}
]

Buah.forEach((JumlahBuah, indexOf) =>{
    console.log(`Buah ke ${JumlahBuah.Buah} ${indexOf+1}`)
});

const looping = () => {
    for (let i = 1; i< 5; i++){
        for(let j = 0; j < i; j++){
            console.log("*")
        }
    }
}