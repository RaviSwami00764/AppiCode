// const { data } = require("jquery");
let typingInterval;


let getDataUtilsFun=()=>{
    // fields = document.getElementById('fields').value.split("\n");
    // types = document.getElementById('types').value.split("\n");

    fields =[];
    types = [];
    colDefs = [];
    lengthsInfo = [];
    applyFunctions = [];
    replaceRegex = /^(\s+)/;
    replaceRegex2 = /(\s+)$/;
    replaceRegex3 = /(\,+)$/;

    data = codeEditor.getValue();
    data = data.replace(replaceRegex,"");
    data = data.replace(replaceRegex2,"");
    data = data.replace(replaceRegex3,"");
    data = data.split("\n");

    dataStoreEntity = document.getElementById("entityValue").value;
    

    if(data.length>1){
        // fields = [];
        // types = [];
        
        for (row of data) {
            row = row.replace(replaceRegex,'');
            row = row.replace(replaceRegex2,'');
            applyFunctions.push(row.match(/(?<=\-)\w+/)?row.match(/(?<=\-)\w+/)[0]:"tf");
            lengthsInfo.push(row.match(/(?<=\()\d+\s*\,\s*\d+(?=\))/)?"("+row.match(/(?<=\()\d+\s*\,\s*\d+(?=\))/)[0]+")":row.match(/(?<=\()\d+(?=\))/)?row.match(/(?<=\()\d+(?=\))/)[0]:false);

            row = row.replace(/\,/g," ");
            row = row.replace(/\s+/g,",");
            row = row.replace(replaceRegex3,'');

            if (row.search('\t') > 0) {
                if (row.split('\t').length > 1) {
                    fields.push(row.split('\t')[0].replace(/ /g, ""));
                    types.push(row.split('\t')[1].replace(/ /g, ""));
                    colDefs.push(row.split('\t')[1].replace(/ /g, ""));
                }
                else {
                    fields.push(row.split('\t')[0].replace(/ /g, ""));
                }
            }
            else if (row.search(',') > 0) {
                if (row.split(',').length > 1) {
                    fields.push(row.split(',')[0].replace(/ /g, ""));
                    types.push(row.split(',')[1].replace(/ /g, ""));
                    colDefs.push(row.split(',')[1].replace(/ /g, ""));

                }
                else {
                    fields.push(row.split(',')[0].replace(/ /g, ""));
                }
            }
            else {
                if (row.split(' ').length > 1) {
                    fields.push(row.split(' ')[0].replace(/ /g, ""));
                    types.push(row.split(' ')[1].replace(/ /g, ""));
                    colDefs.push(row.split(' ')[1].replace(/ /g, ""));
                }
                else {
                    fields.push(row.split(' ')[0].replace(/ /g, ""));

                }
            }
        }
    }

    types = types.map(findDataType);
    colDefs = colDefs.map(findColDef);

    gridLayoutData = document.getElementById("gridLayoutData").value;

    checkIsNullFun = document.getElementById("checkIsNullFun").value;
    checkIsNullFun = checkIsNullFun.replace(/\s+/g,"");

    if(checkIsNullFun.length<1){
        checkIsNullFun = "a!isNullOrEmpty";
    }
    else{
        checkIsNullFun = /rule\!/.exec(checkIsNullFun)?checkIsNullFun:`rule!${checkIsNullFun}`;
    }

    cdtName = document.getElementById("cdtName").value;
    cdtName = cdtName.replace(replaceRegex,"");
    cdtName = cdtName.replace(replaceRegex2,"");

    appPrefix = document.getElementById("appPrefix").value;
    appPrefix = appPrefix.replace(replaceRegex,"");
    appPrefix = appPrefix.replace(replaceRegex2,"");

    if(appPrefix.length<1){
        appPrefix = cdtName.split('_')[0];
    }
}



// let getFieldName = (fieldName)=>{
//     if(fieldName.length<1){
//         return "";
//     }
//     if(fieldName.search("_")){
//         fieldName = fieldName.replaceAll("_"," ").split(" ").map((word)=>{return word[0].toUpperCase() + word.substr(1);}).join("");
//     }
//     let getIndexes = [];
//     fieldName = fieldName[0].toUpperCase() + fieldName.substr(1);
//     for(let i=0; i<fieldName.length; i++){
//         if(fieldName.charCodeAt(i)<91){
//             getIndexes.push(i)
//         }
//     };
//     getIndexes.push(fieldName.length);
//     let result = "";
//     for(let i=0; i<getIndexes.length-2; i++){
//         result+= fieldName.slice(getIndexes[i],getIndexes[i+1])+" ";
//     }
//     result+= fieldName.slice(getIndexes[getIndexes.length-2],getIndexes[getIndexes.length-1]);
//     result = result.replace(/id$/i,'');
//     result = result.replace(/\s+$/,'');
//     return result;
// }

function getFieldName(fieldName) {
    fieldName = fieldName.replace(/\_/g," ").replace(/([A-Z])/g,"$1 ").replace(/(?<=[A-Z])\s+(?=[A-Z])/g,"").replace(/([A-Z])\s+(?=[a-z])/g," $1").replace(/\s+/g," ");
    return fieldName.replace(/(^|\s)(\w)/g, function(match, p1, p2) {
      return p1 + p2.toUpperCase();
    }).replace(/\bId\b/g,"").replace(/\s+$/g,"");
}


const filterFunction = (x) =>{
    if(x.search("_")>0){
      if(x.search(" ")<0){
        return 1
      }
    }
    return 0
  } 
  



const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};


function getRandomLightColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}


function twoColorPlatte(){
    let clr = getRandomLightColor();
    let lightColor = shadeColor(clr, 10);
    let darkColor = shadeColor(clr, -40);
    return {lightColor, darkColor};
}


function clrCardUtils(){
    let data = twoColorPlatte();
    return `style: "${data['lightColor']}",\ndecorativeBarColor: "${data['darkColor']}"`;
}

// let getCdtInfo = ()=>{
//     // data.match(/(?<=Move up\nMove down\nRemove\n)\w+/g)
//     let strData = document.getElementById("code-editor").value;
//     document.getElementById("result-wrapper").style.visibility = "visible";
//     document.getElementById("result-wrapper").style.display = "block";
//     let result = strData.split("Remove").map((x)=>{return x.split("\n")[1]});
//     result = result.slice(0,result.length);
//     let cdt_name = result[0];
//     result[0] = strData.split("Key")[1].split("\n")[1];
//     // result = result.slice(0, result.length);
//     result = `${cdt_name}<br><br>${result.join(",<br>")}`;
//     let target = document.getElementById('code');
//     target.innerHTML = result;

//     showDownloadButton(false);    
// }



let getCdtInfo = ()=>{
    // data.match(/(?<=Move up\nMove down\nRemove\n)\w+/g)
    let data = document.getElementById("code-editor").value;


    let cdtName = data.match(/(?<=Data Type Icon\n)(\w+)/g)[0];
    let primaryKey = "";
    
    let cdt_fileds = data.match(/(?<=Move down\nRemove\n)\w+/g);
    cdt_fileds.splice(0,0,data.match(/(?<=Array\nKey\n)\w+/)[0]);

    document.getElementById("result-wrapper").style.visibility = "visible";
    document.getElementById("result-wrapper").style.display = "block";
    
    let result = `
    <div>
    <span class='code-str'>CDT Name:</span> <span class='code-elem'>${cdtName}</span>
    <span class='code-str'>Primary Key:</span> <span class='code-elem'>${primaryKey}</span>
    </div><div>`;
    for(let field of cdt_fileds){
        result+=`<span class='field-name'>${field}</span>\n`
    }
    result+=`</div>`

    let target = document.getElementById('code');
    target.innerHTML = `<pre>${result}</pre>`;

    showDownloadButton(false);    
    document.getElementById("code-run").addEventListener("click", getCdtInfo);

}


function animateTyping(text, element, superText) {
    let i = 0;
      element.textContent = "";
      const typingSpeed = 3000
    //   const animationDuration = Math.min(text.length * typingSpeed / 1000, 3000);
      const typingInterval = setInterval(function() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
          element.innerHTML="";
          element.innerHTML=text;
          syntaxHighlights(); 
        }
      }, 10 / text.length);
  }
  

  function stopTypingAnimation() {
    clearInterval(typingInterval);
  }