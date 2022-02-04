const testString = "}{";
var bracketArray = [];

for (let i = 0; i < testString.length; i++){ 
    let char = testString.charAt(i);

    if(char === "{"){
        bracketArray.push(char);
    }
    else if(char === "}"){
        if(bracketArray.length === 0){
            return console.log(false);
        }
        else if(bracketArray.at(bracketArray.length - 1 === "{")){
            bracketArray.pop();
        }
        else{
            return console.log(false);
        }
    }
}

if (bracketArray.length === 0){
    return console.log(true);
}
else {
    return console.log(false);
}


