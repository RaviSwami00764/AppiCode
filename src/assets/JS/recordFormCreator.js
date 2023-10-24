// ---------Rapid-uit-form-development-for-single-dataStore-entity-----------

let code_setup_rcd=(str)=>{
    let functionalReplacement = getFunctionalReplacement(str,4);
    let a = functionalReplacement['a'];
    let valueToSet = functionalReplacement['valueToSet'];
    let widht = functionalReplacement['widht'];
    
    let chainingRegex = /\-\>/;
    if(chainingRegex.exec(a[1])){
        let chainItems = a[1].split("->");
        return `-cl.${widht}{`+chainItems.map((x, i, chainItems)=>{return /\-/.exec(x)?i===chainItems.length?`${x}{${valueToSet}`:`${x}{`:i===chainItems.length?`-${x}{`:`-${x}{${valueToSet}`}).join("\n")+chainItems.map((x)=>{return "}"})+`.$l."${getFieldName(a[0])}"}`;
    }
    
    if(a[1] == '-dd'){
        return `-cl.${widht}{
            ${a[1]}{
              placeholder: "--Select ${getFieldName(a[0])}--",
              label: "${getFieldName(a[0])}",
              labelPosition: "ABOVE",
              value: ${gridLayoutData}['${recordObj[a[0]]}'],
              saveInto: ${gridLayoutData}['${recordObj[a[0]]}'],
              ${code_utils(a)}
            }
          }`
    }
    return `-cl.${widht}{
        ${a[1]}{
          label: "${getFieldName(a[0])}",
          labelPosition: "ABOVE",
          value: ${gridLayoutData}['${recordObj[a[0]]}'],
          saveInto: ${gridLayoutData}['${recordObj[a[0]]}'],
          ${code_utils(a)}
        }
      }`
      
}

const getRecordForm = ()=>{
    document.getElementById("result-wrapper").style.visibility = "visible";
    document.getElementById("result-wrapper").style.display = "block";
    
    getDataUtilsFun();
    let data = document.getElementById("code-editor").value;
    data = data.replace(/\n\s*\n/g,'\n\n');
    data = data.split('\n\n');

    let code_chef = "";

    for(content of data){
        let arr = content.split('\n');
        arr = arr.map((x)=>{return x.replace(/^(\s+)/,'')});
        arr = arr.map((x)=>{return x.replace(/(\s+)$/,'')});

        arr = arr.map((x)=>{return x.replace(/\,/g,'')});
        arr = arr.map((x)=>{return x.replace(/\s+/g,',')});

        arr = arr.map((x)=>{return code_setup_rcd(x)});
        arr = arr.join(',\n');
        code_chef+=`-cls{${arr}},`;
        // code_chef+=arr;


    }
    code_chef = `${code_chef}`;
    let result = generateAppianCode(code_chef);



    let target = document.getElementById('code');
    target.innerHTML = result;
    syntaxHighlights();

    showDownloadButton(false);    
    document.getElementById("code-run").addEventListener("click", getForm);

}