// --------- Provide Shorthend functionality for generating billboard layout-----------

const getHeading = (x)=>{
    x = x.split(",");
    let heading = x[0];
    let count = parseInt(x[1]);

    let result = `<pre>a!richTextItem(
        text: "${heading}",
        style: "STRONG",
        color: "",
        size: "MEDIUM_PLUS"
      ),<br></pre>`;

    for(let i=0; i<count; i++){
        result += `<pre>a!richTextItem(
            text: "",
            style: "STRONG",
            size: "MEDIUM_PLUS"
          ),<br></pre>`
    }  

    result = `<pre>a!richTextDisplayField(
        value: {
          ${result}
        },
        align: "CENTER"
      ),</pre>`;
    
    return result;
}

let input = `Add new Document_2_|
(user-circle-o_Created By_Created On_Subsidiary Name),(calender_Modified By_Modified On)`;



let finalResult = `a!billboardLayout(
    backgroundColor: "#f0f0f0",
    height: "SHORT",
    marginBelow: "NONE",
    overlay: a!barOverlay(
      position: "MIDDLE",
      contents: {
        
      }
    ),
  )
`;

// --------- Utility functions -----------


const getSideBySideLayout = (x)=>{
    replaceRegex = /^(\s+)/;
    replaceRegex2 = /(\s+)$/;
    x = x.split(",");
    let icon = x[0];
    let item1 = `<pre>a!sideBySideItem(
        item: a!richTextDisplayField(
          value: {
            a!richTextIcon(
              icon: "${icon}",
              color: "${random_hex_color_code()}",
              size: "LARGE_PLUS"
            )
          }
        ),
        width: "MINIMIZE"
      ),</pre>`
    let item2 = "";
    for(let i=1; i<x.length; i++){
        x[i] = x[i].replace(replaceRegex,'');
        x[i] = x[i].replace(replaceRegex2,'');
        item2+= `<pre>a!richTextItem(
            text: {
              "${x[i]}: "
            },
            style: "STRONG"
          ),
          a!richTextItem(
            text: "",
            color:"ACCENT",
            style: "STRONG"
          ),
          char(10),</pre>`
    }  
    item2 = `<pre>a!sideBySideItem(
        item:a!richTextDisplayField(
            value:{
                ${item2}
            }  
    )),</pre>`;

    let result = `<pre>a!sideBySideLayout(
        alignVertical: "MIDDLE",
        items: {
            ${item1}
            ${item2}
        }
    )</pre>`

    return result;
}

// ---------Buildup-function-----------

const generateBillboardLayout = (input)=>{
    // input = input.replaceAll("\n","");
    // input = input.replaceAll(")","");
    // input = input.replaceAll(",","");
    input = input.split("\n");
    let heading = getHeading(input[0]);
    let columns = "";
    for(let i=1; i<input.length; i++){
        let sideBySideLayout_i = getSideBySideLayout(input[i]);
        columns+=`<pre>a!columnLayout(
            contents: ${sideBySideLayout_i}
        ),</pre>`
    }

    let columnsLayout = `<pre>a!columnsLayout(
        columns: {${columns}}
    )</pre>`

    let result = `<pre>a!billboardLayout(
        backgroundColor: "#f0f0f0",
        height: "SHORT",
        overlay: a!barOverlay(
          position: "MIDDLE",
          contents: {
            ${heading}
            ${columnsLayout}
          },
          style: "LIGHT"
        ),
        marginBelow: "NONE"
      )</pre>`

    return result
}


// ---------On click addEventListener for getBillboardLayout button-----------
// =======================================================================================================

let getBillboardLayout = ()=>{
    let strData = document.getElementById("code-editor").value;
    document.getElementById("result-wrapper").style.visibility = "visible";
    document.getElementById("result-wrapper").style.display = "block";

    let result = generateBillboardLayout(strData);
    
    let target = document.getElementById('code');
    target.innerHTML = result;
    
    syntaxHighlights();
    showDownloadButton(false);    
    document.getElementById("code-run").addEventListener("click", getBillboardLayout);

}