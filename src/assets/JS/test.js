// function processPattern(result, pattern, patternName, functionName, singlePattern, contentName, functionPatterns) {
//   result = result.replace(pattern, function (match, group) {
//     const words = group.split('.');
//     const patterns = words.m3ap(word => `${patternName}${word}`).join(',\n');
//     console.log(words);
//     console.log(patterns);
//     return `-${functionName}Gh{\n${patterns},\n$shh_1098_value:{`;
//   });

//   result = result.replace(singlePattern, `-${functionName}Gh{\n${patternName}$1,\n$shh_1098_value:{`)
//   result = getFinalResult(result, /(?<=\$shh\_1098\_value\:\s*)\{/g, ` }\n)\n</div>`);
//   result = result.replace(/\$shh\_1098\_value/g, contentName);

//   for (const key in functionPatterns) {
//     const regexPattern = new RegExp(`${key}`, 'g');
//     const patternVal = functionPatterns[key];
//     result = result.replace(regexPattern, patternVal);
//   }

//   result = result.replace(new RegExp(`${patternName}\\$\\d+\\s*,*`, 'g'), '');
//   result = result.replace(new RegExp(`${patternName}\\w+\\s*,*`, 'g'), '');
// }
// result = result.replace(/-card\.(\w+(?:\.\w+)+)\{/g, function (match, group) {
//   const words = group.split('.');
//   const cardPatterns = words.map(word => `cardpattern${word}`).join(',\n');
//   return `-cardGh{\n${cardPatterns},\n$shh_1098_content:{`;
// });
// result = result.replace(/\-card\.(\w+)\{/g, "-cardGh{\ncardpattern$1,\n$shh_1098_content:{")

// result = getFinalResult(result, /(?<=\$shh\_1098\_content\:\s*)\{/g, ` }\n)\n</div>`);
// result = result.replace(/\$shh\_1098\_content/g, "contents");

// for (const cardKey in cardPatterns) {
//   const regexPattern = new RegExp(`${cardKey}`, 'g');
//   const patternVal = cardPatterns[cardKey];
//   result = result.replace(regexPattern, patternVal);
// }

// result = result.replace(/cardpattern\$\d+\s*\,*/g, "");


// result = result.replace(/-rd\.(\w+(?:\.\w+)+)\{/g, function (match, group) {
//   const words = group.split('.');
//   const patterns = words.map(word => `richtextdisplaypattern${word}`).join(',\n');
//   return `-rdGh{\n${patterns},\n$shh_1098_value:{`;
// });
// result = result.replace(/\-rd\.(\w+)\{/g, "-rdGh{\nrichtextdisplaypattern$1,\n$shh_1098_value:{")

// result = getFinalResult(result, /(?<=\$shh\_1098\_value\:\s*)\{/g, ` }\n)\n</div>`);
// result = result.replace(/\$shh\_1098\_value/g, "value");

// for (const key in rdPatterns) {
//   const regexPattern = new RegExp(`${key}`, 'g');
//   const patternVal = rdPatterns[key];
//   result = result.replace(regexPattern, patternVal);
// }

// result = result.replace(/richtextdisplaypattern\$\d+\s*\,*/g, "");
// result = result.replace(/richtextdisplaypattern\w+\s*\,*/g, "");







// result = result.replace(/-rt\.(\w+(?:\.\w+)+)\{/g, function (match, group) {
//   const words = group.split('.');
//   const patterns = words.map(word => `richtextitempattern${word}`).join(',\n');
//   return `-rtGh{\n${patterns},\n$shh_1096_text:{`;
// });
// result = result.replace(/\-rt\.(\w+)\{/g, "-rtGh{\nrichtextitempattern$1,\n$shh_1096_text:{")

// result = getFinalResult(result, /(?<=\$shh\_1096\_text\:\s*)\{/g, ` }\n)\n</div>`);
// result = result.replace(/\$shh\_1096\_text/g, "text");

// for (const key in rtPatterns) {
//   const regexPattern = new RegExp(`${key}`, 'g');
//   const patternVal = rtPatterns[key];
//   result = result.replace(regexPattern, patternVal);
// }

// result = result.replace(/richtextitempattern\$\d+\s*\,*/g, "");
// result = result.replace(/richtextitempattern\w+\s*\,*/g, "");



// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//       console.log("Fizz");
//     }
//     else if (i % 5 === 0) {
//       console.log("Buzz");
//     }
//     else {
//       console.log(i);
//     }
//   }
// }


// function number(phoneNo) {
//   let numbers = {
//     "one": "1",
//     "two": "2",
//     "three": "3",
//     "four": "4",
//     "five": "5",
//     "six": "6",
//     "seven": "7",
//     "eight": "8",
//     "nine": "9",
//     "zero": "0"
//   }

//   phoneNo = phoneNo.split(" ").map((x, index, arr) => {
//     if (numbers[x]) {
//       return numbers[x];
//     } else if (x === "double" && numbers[arr[index + 1]]) {
//       return numbers[arr[index + 1]];
//     } else if (x === "triple" && numbers[arr[index + 1]]) {
//       return numbers[arr[index + 1]] + numbers[arr[index + 1]];
//     } else {
//       return x;
//     }
//   });

//   return phoneNo.join('');
// }


// `-cardGh{
//   contents:{
//     -clsGh{
//       columns:{
//         -clGh{
//           contents:{
//             -cardGh{
//               contents:{
//                 -rdGh{
//                   value:{
//                     -rtGh{
//                       text:{
//                         "Join our 3D World to",
//                         char(10),
//                         "Sculpt, Share and Sell"  
//             }
//           }
//         }
//       },
//       -clGh{
//         contents:{
//           -cardGh{
//             contents:{
//               -rdGh{
//                 value:{
//                   -rtGh{
//                     text:{
//                    "Create Account"
//             }
//           }
//         }
//       }  
//     }
//   }`



fieldName = "SAPCode";
fieldName.replace(/([A-Z])/g,"$1 ").replace(/(?<=[A-Z])\s+(?=[A-Z])/g,"").replace(/([A-Z])\s+(?=[a-z])/g," $1");


const patterns = [
    {key: "rt",      appianFunctionName: "richTextItem"},
    {key: "ri",      appianFunctionName: "richTextIcon"},
    {key: "section", appianFunctionName: "sectionLayout" },
    {key: "card",    appianFunctionName: "cardLayout" },
    {key: "cls",     appianFunctionName: "columnsLayout" },
    {key: "cl",      appianFunctionName: "columnLayout"},
    {key: "rd",      appianFunctionName: "richTextDisplayField" },
    {key: "ss",      appianFunctionName: "sideBySideLayout" },
    {key: "box",     appianFunctionName: "boxLayout" },
    {key: "tags",    appianFunctionName: "tagField" },
    {key: "tag",     appianFunctionName: "tagItem" },
    {key: "stm",     appianFunctionName: "stampField" },
    {key: "img",     appianFunctionName: "imageField" },
    {key: "umg",     appianFunctionName: "userImage" },
    {key: "dmg",     appianFunctionName: "documentImage" },
    {key: "wmg",     appianFunctionName: "webImage" },
     ];