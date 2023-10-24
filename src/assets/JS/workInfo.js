let getWorkInfo = ()=>{
    let strData = document.getElementById("code-editor").value;
    document.getElementById("result-wrapper").style.visibility = "visible";
    document.getElementById("result-wrapper").style.display = "block";

    let regExp = /(Select\srow\s\d+\n(.*)\n(.*)\n)/g;
    let data = strData.match(regExp);
    
    let result="";
    let counter=1;
    for(ele of data){
        ele = ele.split("\n");
        result += `<div><span class="work-info">${counter}. </span> <span class="artifact-name">${ele[2]}</span> <span class="artifact-type">${ele[1]}</span><br></div>`;
        // result += `<span class="artifact-name">${ele[1]}</span><br>`;
        counter+=1;
        // style="margin-top: 5px; padding:10px 0px;"
    }
    
    let target = document.getElementById('code');
    target.innerHTML = `<pre><pre>${result}</pre></pre>`;

    showDownloadButton(false);    
    document.getElementById("code-run").addEventListener("click", getWorkInfo);

}