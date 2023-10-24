// ---------Rapid-uit-form-development-for-single-dataStore-entity-----------

let codeSetupGridColumn=(str)=>{
    let mRegex1 = /(?<=\=\>\$\m\,)\w+\!\w+\.\w+\.\w+/;
    let setMRegex1 = /\=\>\$\m\,\w+\!\w+\.\w+\.\w+/;
    let matchVal =  mRegex1.exec(str)?mRegex1.exec(str)[0]:"";
    str = str.replace(setMRegex1,"");

    let iconRegex = /(?<=\=\>)\$icons\.[\w\-]+\.[\w\-]+/;
    let setIconRegex = /\=\>\$\icons\.[\w\-]+\.[\w\-]+/;
    let iconVal =  iconRegex.exec(str)?iconRegex.exec(str)[0]:"";
    str = str.replace(setIconRegex,"");

    let widthRegex = /(?<=\=\>)\d*\w*x{0,1}/;
    let setWidthRegex = /\=\>\d*\w*x{0,1}/;
    let widht =  widthRegex.exec(str)?widthRegex.exec(str)[0]:"auto";
    console.log(widht);
    str = str.replace(setWidthRegex,"");
    
    a = str.split(',');
    valueToSet = matchVal.length>1?`$match ${matchVal} fv!row.${a[0]}`:iconVal.length>1?`${iconVal} fv!row.${a[0]}`:`$ fv!row.${a[0]}`;

    let chainingRegex = /\-\>/;
    if(chainingRegex.exec(a[1])){
        let chainItems = a[1].split("->");
        let result =  chainItems.map((x, i, chainItems)=>{return /\-/.exec(x)?i===chainItems.length?`${x}{${valueToSet}}`:`${x}{`:i===chainItems.length?`-${x}{`:`-${x}{${valueToSet}`}).join("\n")+chainItems.map((x)=>{return "}"})+`.$l."${getFieldName(a[0])}"`;          
        return `-gc.${widht}{
                  ${result},
                }.$l."${getFieldName(a[0])}"`
    }
}

const getGridColumn = ()=>{
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

        arr = arr.map((x)=>{return codeSetupGridColumn(x)});
        arr = arr.join(',\n');
    
        code_chef+=arr;


    }

    let result = generateAppianCode(code_chef);

    let target = document.getElementById('code');
    target.innerHTML = result;
    syntaxHighlights();

    showDownloadButton(false);    
    document.getElementById("code-run").addEventListener("click", getGridColumn);

}