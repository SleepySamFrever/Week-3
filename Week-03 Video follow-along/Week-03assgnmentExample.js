function challengeOne(){
    const ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log(ages[ages.length =1] - ages[0])
    ages.push(45);
    console.log(ages[ages.length =1] - ages[0])
    let sum = 0;
    for(let i = 0; i < ages.length; i++){
        sum+= ages[i];
    }
    console.log(Math.round(sum/ages.length))
}

function challengeTwo(){
    const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
    let totalChars = 0;
    for (let i = 0; i < names.length; i++){
        totalChars+= names[i].length;
    }
    console.log(totalChars / names.length);
    
    let newName = "";
    for (let i = 0; i < names.length; i++){
        newName += names[i] + " ";
    }
    console.log(newName.trim());
}