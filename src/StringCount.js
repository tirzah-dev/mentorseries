function isAlpha(character){
    return /[a-zA-Z]/.test(character);
}

//TODO refactor
function isVowel(character){
    return /[aeiouyAEIOUY]/.test(character);
}

// function isVowel(character){
//     switch(character){
//         case 'A':
//             return true;
//         case 'a':
//             return true;
//         case 'E':
//             return true;
//         case 'e':
//             return true;
//         case 'I':
//             return true;
//         case 'i':
//             return true;
//         case 'O':
//             return true;
//         case 'o':
//             return true;
//         case 'U':
//             return true;
//         case 'u':
//             return true;
//         case 'Y': // and sometimes Y
//             return true;
//         case 'y': // and sometimes y
//             return true;
//         default:
//             return false;
//     }
// }
// function isVowel(character){
//     if (/[^aeiouy]/gi){
//         return false;
//     }
//     else {
//         return true;
//     }
// }

//TODO refactor this
function counting(string) {
    let strArr = string.split("");
    let vowelCount = 0;
    let consonantCount = 0;
    let otherCount = 0;
    let counts = [vowelCount, consonantCount, otherCount];
    strArr.forEach((item) => {
        if (isVowel(item)){
            vowelCount++;
        }
        else if(isAlpha(item)){
            consonantCount++;
        }
        else {
            otherCount++;
        }
    //     
    });
    console.log(counts); // not logging

    return {
        vowels: vowelCount,
        consonants: consonantCount,
        others: otherCount,
        total: vowelCount + consonantCount + otherCount,
    };
};

console.log("hello");

export default counting;
