let getViewFields = ()=>{
    let data = codeEditor.getValue();

    let recordRegex = /(?<=fv\!row\[\')recordType\!(.*?)(?=\')/g;
    let field_regex = /(\w+)$/g;
    // let record_field_regex = /(?<=fv\!row\[)(.*?)(?=\])/g;
    let set = new Set(data.match(recordRegex));

    data = Array.from(set);
    
    record_uuid = data[0].match(/(?<=recordType\!\{)(.*?)(?=\})/g)[0];
    record_name = data[0].match(/(?<=\})(.*?)(?=\.fields\.)/g)[0];
   
    let result = data.map((x)=>{return `<span class="code-orange">${x.match(field_regex)[0]}</span>`}).join("\n");
    let result1 = data.map((x)=>{return `<span class="code-orange">'${x}'</span>`}).join("\n");
    let result2 = data.map((x)=>{return `<span class="code-red">fv!row[</span><span class="code-cyan">'${x}'</span><span class="code-red">]</span>`}).join("\n");
    recordObj = {};
    for(let i=0; i<data.length; i++){
        let key = data[i].match(field_regex)[0];
        let value = data[i];
        recordObj[key] = value;
    }
    console.log(recordObj);

    let target = document.getElementById('content2');

    target.innerHTML = `<pre>
                        <div><span class="code-cyan">Record uu_id:</span><br>
                        <span class="code-orange">${record_uuid}</span></div>
                        <div><span class="code-cyan">Record Name:</span><br>
                        <span class="code-orange">${record_name}</span></div>    
                        <div>${result}</div>
                        <div>${result1}</div>
                        <div>${result2}</div>`;
}