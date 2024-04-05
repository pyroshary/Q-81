function objectProperties (obj:object){
    for (let property in obj){
        console.log(`${property}: ${obj[property]}`);
    }
}

objectProperties({make: "TOYOTA", model:"COROLLA",year:2021,colour:"BLUE"});