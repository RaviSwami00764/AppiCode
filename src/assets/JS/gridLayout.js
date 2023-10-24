// ---------Editable-GridLayout-Appian-code-generation-----------


let code_setupGridLayout = (str) => {
  let functionalReplacement = getFunctionalReplacement(str,1);
  let a = functionalReplacement['a'];
  let valueToSet = functionalReplacement['valueToSet'];
  let widht = functionalReplacement['widht'];

  let chainingRegex = /\-\>/;
  if (chainingRegex.exec(a[1])) {
    let chainItems = a[1].split("->");
    return chainItems.map((x, i, chainItems) => { return /\-/.exec(x) ? i === chainItems.length ? `${x}{${valueToSet}` : `${x}{` : i === chainItems.length ? `-${x}{` : `-${x}{${valueToSet}` }).join("\n") + chainItems.map((x) => { return "}" });
  }
  if (a[1] == '-dd') {
    return `${a[1]}{
        placeholder: "--Select ${getFieldName(a[0])}--",
        label: "${getFieldName(a[0])}",
        $v fv!item.${a[0]},
        ${code_utils(a)}
      }`
  }
  if (a[1] == "-rb") {
    return `$rb fv!item.${a[0]}`;
  }
  if (a[1] == "-cb") {
    return `$cb fv!item.${a[0]}`;
  }
  return `${a[1]}{
    label: "${getFieldName(a[0])}",
    $v fv!item.${a[0]},
    ${code_utils(a)}
  }`
}




// let gridLayoutHeaderCellUtils = (label) => {
//   return `a!gridLayoutHeaderCell(label: "${label}", align: "LEFT"),`
// }
// let gridLayoutColumnConfigUtils = () => {
//   return `a!gridLayoutColumnConfig(width: "DISTRIBUTE"),`
// }

// let gridLayoutConfigMaster = (fieldData) => {
//   return `
// <pre>
// <div>headerCells:{<br>${fieldData.map(getFieldName).map(gridLayoutHeaderCellUtils).join("<br>")}<br>a!gridLayoutHeaderCell(label: "", align: "LEFT",showWhen: count(${gridLayoutData})>1),<br>a!gridLayoutHeaderCell(label: "", align: "LEFT",showWhen: count(${gridLayoutData})>1),<br>a!gridLayoutHeaderCell(
//     label: "",
//     showWhen: not(and(tointeger(index(${gridLayoutData},"id",{}))>0)),
//     )<br>},</div>\n<div>columnConfigs:{<br>${fieldData.map(gridLayoutColumnConfigUtils).join("<br>")}<br>a!gridLayoutColumnConfig(width: "ICON",showWhen: count(${gridLayoutData})>1),<br>a!gridLayoutColumnConfig(width: "ICON",showWhen: count(${gridLayoutData})>1),<br>a!gridLayoutColumnConfig(
//         width: "ICON",
//         showWhen: not(and(tointeger(index(${gridLayoutData},"id",{}))>0)),
//     )
//   }</div>
// </pre>`;
// }





let addRowLinkUtils = () => {
  let label = "Add new row"
  let targetNamespaceCDT = `type!{urn:com:appian:types:${appPrefix}}${cdtName}`;
  return `
<pre>
addRowLink: a!dynamicLink(
    label: "${label}",
    value: '${targetNamespaceCDT}'(
        CreatedBy: loggedInUser(),
        CreatedOn: now(),
        IsActive: true()
    ),
    saveInto: a!save(
    ${gridLayoutData},
    append(${gridLayoutData}, save!value)
    )
)
</pre>  
`
}

let makeGridLayout = (fieldData, functionsInfo) => {
  getDataUtilsFun();
  let data = document.getElementById("code-editor").value;
  // data = data.replace(/\n\s*\n/g,'\n\n');
  // data = data.split('\n\n');
  let gridLayoutContent = "";

  let arr = data.split('\n');
  arr = arr.map((x) => { return x.replace(/^(\s+)/, '') });
  arr = arr.map((x) => { return x.replace(/(\s+)$/, '') });

  arr = arr.map((x) => { return x.replace(/\,/g, '') });
  arr = arr.map((x) => { return x.replace(/\s+/g, ',') });

  arr = arr.map((x) => { return code_setupGridLayout(x) });
  gridLayoutContent = arr.join(',\n');

  gridLayoutContent = generateAppianCode(gridLayoutContent);
  gridLayoutContent += ",<br>";
  // for(let i=0; i<fieldData.length; i++){
  //     gridLayoutContent+=gridRowLayoutContentUtils(fieldData[i], functionsInfo[i]);
  //     gridLayoutContent+="<br>";
  // }

  return `
<pre>
/* Replace "id" with the primary key*/
a!gridLayout(<div>
    ${gridLayoutConfigMaster(fieldData)},<br>
    rows: a!forEach(<div>
    items: ${gridLayoutData},
    expression: a!gridRowLayout(<div>
        id: fv!index,
        contents:{<div>
        ${gridLayoutContent}<br>
        <div>a!richTextDisplayField(
          value:{
            a!richTextIcon(
              color: "#387d2c",
              icon:{ 
                if(
                  fv!isLast,
                  "",
                  "arrow-down" 
                )
              },
              size: "MEDIUM",
              link: a!dynamicLink(
                value: fv!item,
                saveInto: {
                  a!save(
                    ${gridLayoutData},
                    insert(
                      ${gridLayoutData},
                      fv!item,
                      fv!index+2
                    )
                  ),
                  a!save(
                    ${gridLayoutData},
                    remove(
                      ${gridLayoutData},
                      fv!index
                    )
                  )
                }
              ),
              linkStyle: "STANDALONE"
            )
          },
          showWhen: count(${gridLayoutData})>1
        ),</div>
        <div>a!richTextDisplayField(
          value:{ 
            a!richTextIcon(
              color: "#387d2c",
              icon:{ 
                if(
                  fv!isFirst,
                  "",
                  "arrow-up" 
                )
              },
              link: a!dynamicLink(
                value: fv!item,
                saveInto: {
                  a!save(
                    ${gridLayoutData},
                    insert(
                      ${gridLayoutData},
                      fv!item,
                      fv!index-1
                    )
                  ),
                  a!save(
                    ${gridLayoutData},
                    remove(
                      ${gridLayoutData},
                      fv!index+1
                    )
                  )
                }
              ),
              linkStyle: "STANDALONE",
              size: "MEDIUM"
            )
          },
          showWhen: count(${gridLayoutData})>1
        ),</div>
        <div>if( 
            ${checkIsNullFun}(index(fv!item, "id", {})), 
            a!imageField(
              label: "Delete " & fv!index,
              images: a!documentImage(
                document: a!iconIndicator("REMOVE"),
                link: a!dynamicLink(
                  value: fv!index,
                  saveInto: {
                    a!save(
                      ${gridLayoutData},
                      remove(${gridLayoutData}, save!value)
                    )
                  }
                )
              ),
              size: "ICON"
            ), 
            a!richTextDisplayField(
              value: {
                a!richTextItem(
                  style: "PLAIN",
                  color: "STANDARD",
                  text: { "" }
                )
              },
              showWhen: not(and(tointeger(index(${gridLayoutData},"id",{}))>0))
            )
          ),</div>
        }</div>
      )</div>
    ),</div>
    <div>${addRowLinkUtils()}</div>
)</div>
</pre>
`
}


let getGridLayout = () => {
  document.getElementById("result-wrapper").style.visibility = "visible";
  document.getElementById("result-wrapper").style.display = "block";

  getDataUtilsFun();

  let result = makeGridLayout(fields, applyFunctions);

  let target = document.getElementById('code');
  target.innerHTML = result;
  syntaxHighlights();

  showDownloadButton(false);

  document.getElementById("code-run").addEventListener("click", getGridLayout);

}