const getViewData = ()=>{
    document.getElementById("result-wrapper").style.visibility = "visible";
    document.getElementById("result-wrapper").style.display = "block";
    let strData = document.getElementById("code-editor").value.split('\n');
    
    let regExp = /((?<=\d+)\s+[a-zA-Z0-9\_]+\s+\w+(\(\d+\))*)/;
    let result = strData.map((x)=>{if(x.match(regExp)){return x.match(regExp)}return "###"});
    result = result.join('\n');
    result = result.replace(/\#{3}\n/g,'');
    result = result.replace(/\n\#{3}/g,'');
    result = result.split('\n');
    
    
    
    replaceRegex = /^(\s+)/;
    replaceRegex2 = /(\s+)$/;



    // let regExp2 = /(\d+\s+)/g;
    // result = result.replace(replaceRegex,"");
    // result = result.replace(replaceRegex2,"");


    finalResult = "";

    for(row of result){
        row = row.replace(replaceRegex,'');
        row = row.replace(replaceRegex2,'');
        row = row.split(',')[0];
        finalResult+=`<span class='code-red'>${row.split('\t')[0]}</span> <span class='code-cyan'>${row.split('\t')[1]}</span>\n`
    }
    

    let target = document.getElementById('code');
    target.innerHTML = `<pre><div>${finalResult}</div></pre>`;
    // syntaxHighlights();

    showDownloadButton(false);    
    document.getElementById("code-run").addEventListener("click", getViewData);

}