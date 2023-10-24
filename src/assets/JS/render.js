var checkIsNullFun = "a!isNullOrEmpty";
var fields = ["id", "name"];
var lengthsInfo = [];
var cdtName = "CDT_name";
var appPrefix = cdtName.split('_')[0];
var magicDictionary = {"int":"int","tin":"boolean", "flo":"float", "dec":"float", "dou":"double","bin":"string","str":"string","cha":"string", "var":"string","tex":"string","boo":"boolean","date":"date", "datetime":"dateTime","nva":"string"};
var magicDictionaryColDef = {"int":"INT","tin":"TINYINT(1)", "flo":"FLOAT", "dec":"DECIMAL", "dou":"DECIMAL","bin":"VARCHAR","str":"VARCHAR","cha":"VARCHAR", "var":"VARCHAR","tex":"VARCHAR","boo":"TINYINT(1)","date":"DATE", "datetime":"DATETIME","nva":"NVARCHAR"};
var gridData = "ri!invoiceDetails";
var gridLabel = "Sage Invoice Details";
var labelSize = "MEDIUM";
var dataStoreEntity= "cons!_DSE_Tables[1]";
var gridLayoutData = "local!data";
var applyFunctions = [];
var colDefs = [];
var record_uuid = "";
var record_name = "";
// const {writeFile} = require('fs');

let logicalUtils=(x)=>{
    return `${checkIsNullFun}(ri!${x})`;
}

let logicalUtilsMaster=()=>{
    let result = [];
    for (x of fields){
        result.push(logicalUtils(x));
    }
    return result.join(",<br>");
}


let filtersUtils=(x)=>{
    let value = "{ri!"+x+"}";
    return `<div>\tif(<br>\t  ${checkIsNullFun}(ri!${x}),<br>\t  {},<br>\t  a!queryFilter(<br>\t\tfield: "${x}", <br>\t\toperator: "IN", <br>\t\tvalue: ${value}<br>\t  )<br>\t)</div>`;
}

let makeQE=(entity,pagingInfoSortField="Id")=>{
    let selectionQuery = `<div>  selection: if(<br>\t${checkIsNullFun}(ri!Columns),<br>\t{},<br>\ta!querySelection(<br>\t columns: a!forEach(<br>\t items: ri!Columns,<br>\t expression: a!queryColumn(<br>\t field: fv!item<br>\t )<br>\t)<br>   )<br>),</div>`;
    let logicalExpression = fields.map(logicalUtils).join(",<br>");
    let filters = "{<br>"+fields.map(filtersUtils).join(",<br>")+"\n   }";
    let queryLogicalExpression = `a!queryLogicalExpression(<br>operator: "AND",<br>filters:${filters}<br>  )`;
    let pagingInfo = `<div>pagingInfo: if(<br>\t${checkIsNullFun}(ri!PagingInfo),<br>\ta!pagingInfo(<br>\t  startIndex: 1,<br>\t  batchSize: -1,<br>\t  sort: a!sortInfo(field: "${pagingInfoSortField}", ascending: true())<br>\t),<br>\tri!PagingInfo<br>)</div>`;
    return `<pre>
a!queryEntity(<br>  entity:${entity},<br>  query: a!query(<br>  ${selectionQuery}<br>logicalExpression:if(<br><div>and(<br>${logicalExpression}<br>)</div>,<br>null,<br>${queryLogicalExpression}<br>),<br>${pagingInfo}<br>)<br>).data</pre>`;	
}	




let castingRuleUtils=(cdtName)=>{
    return fields.map((x)=>`<div>${x}:if(<br>\t${checkIsNullFun}(ri!${x}),<br>\tindex(<br>\t\tri!${cdtName},<br>\t\t"${x}",<br>\t\t{}<br>\t),<br>\tri!${x}<br>)</div>`).join(",<br>");
}

let makeCastingRule=()=>{
    let targetNamespaceCDT = `type!{urn:com:appian:types:${appPrefix}}${cdtName}`;
    return `<pre>if(<br><div>and(<br>${logicalUtilsMaster()}<br>)</div>,<br>ri!${cdtName},<br>${targetNamespaceCDT}(<br>${castingRuleUtils(cdtName)}<br>)<br>)</pre>`;

}


let xsdUtils=( Name, dataType, length,isPrimary=false,colDef)=>{
    if(isPrimary){
return `<pre>&lt;xsd:element name="${Name}" type="xsd:${dataType}">
&lt;xsd:annotation>
  &lt;xsd:appinfo source="appian.jpa">@Id @GeneratedValue @Column(name="${Name}" ${length?", length="+length:""})&lt;/xsd:appinfo>
&lt;/xsd:annotation>
&lt;/xsd:element></pre>`
    }
    else{
return `<pre>&lt;xsd:element name="${Name}" nillable="true" type="xsd:${dataType}">
&lt;xsd:annotation>
  &lt;xsd:appinfo source="appian.jpa">@Column(name="${Name}" ${length?", length="+length:""})&lt;/xsd:appinfo>
&lt;/xsd:annotation>
&lt;/xsd:element></pre>`
    }
}

let findDataType = (type)=>{
    for(key of Object.keys(magicDictionary)){
        if( type.toLocaleLowerCase().slice(0,3)===key){
            return magicDictionary[key];
        }
    }
    if (type.toLocaleLowerCase().search("date")!=-1){
        if (type.toLocaleLowerCase().search("time")!=-1)
            return magicDictionary['datetime'];
		else
			return magicDictionary['date'];
    }
    return "";
}    


let findColDef = (type)=>{
    for(key of Object.keys(magicDictionaryColDef)){
        if( type.toLocaleLowerCase().slice(0,3)===key){
            return magicDictionaryColDef[key];
        }
    }
    if (type.toLocaleLowerCase().search("date")!=-1){
        if (type.toLocaleLowerCase().search("time")!=-1)
            return magicDictionaryColDef['datetime'];
		else
			return magicDictionaryColDef['date'];
    }
    return "";
}   


let generateQE = ()=>{
    getDataUtilsFun();
    //let appianCode = new AppianCode(fields, types, checkIsNullFun, cdtName);

    result = makeQE(dataStoreEntity, fields[0]);
    
    let target = document.getElementById('content2');
    target.innerHTML = result;

    syntaxHighlights();
    // showDownloadButton(true);    
}  


let generateCast = ()=>{
    
    getDataUtilsFun();
    //let appianCode = new AppianCode(fields, types, checkIsNullFun, cdtName);
    
    result = makeCastingRule();
    
    let target = document.getElementById('content2');
    target.innerHTML = result;

    syntaxHighlights();
    // showDownloadButton(true);  


} 


let generateXSD=()=>{
    
    getDataUtilsFun();

    targetNamespace=`urn:com:appian:types:${appPrefix}`;    
            
    let xsd_body = [];
    let primaryKeyIndex = 1;
    for(let i=0; i<fields.length; i++){
        if(primaryKeyIndex-1!=i)
            // xsd_body.push(xsdUtils(fields[i],types[i],lengthsInfo[i], isPrimary=false,colDef=colDefs[i]));
            xsd_body.push(xsdUtils(fields[i],types[i],lengthsInfo[i], isPrimary=false));
        else
            // xsd_body.push(xsdUtils(fields[i],types[i],lengthsInfo[i],isPrimary=true,colDefs[i])); 
            xsd_body.push(xsdUtils(fields[i],types[i],lengthsInfo[i],isPrimary=true)); 
    }
    xsd_body = xsd_body.join("");
    
    xsdHeader=`<pre>&lt;xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:tns="${targetNamespace}" targetNamespace="${targetNamespace}">
    &lt;xsd:complexType name="${cdtName}">
        &lt;xsd:annotation>
            &lt;xsd:appinfo source="appian.jpa">@Table(name="${cdtName}")&lt;/xsd:appinfo>
            &lt;xsd:documentation>&lt;![CDATA[Contains ${cdtName}]]>&lt;/xsd:documentation>
        &lt;/xsd:annotation>
        &lt;xsd:sequence>
            ${xsd_body}
        &lt;/xsd:sequence>
    &lt;/xsd:complexType>
&lt;/xsd:schema></pre>`;
    // let xsdBody = document.getElementById("xsdBody");
    // xsdBody.innerHTML = xsd_body;      

    let target = document.getElementById('content2');
    target.innerHTML = result;

    xsdSyntaxHighlights();

}


let expandConsole=()=>{
    input = document.getElementById("viewInputs");
    appianCodeShell = document.getElementById("appian-codes");

    if(input.innerText == 'Hide Inputs'){
        ruleInputs = document.getElementById("rule-inputs");

        ruleInputs.style.display = "none";
        ruleInputs.style.visibility = "hidden";
        input.innerText = 'Show Inputs';

        appianCodeShell.classList.remove("col-42");
        appianCodeShell.classList.add("col-57");

    }
    else{
        ruleInputs = document.getElementById("rule-inputs");
        ruleInputs.style.display = "block";
        ruleInputs.style.visibility = "visible";
        input.innerText = 'Hide Inputs';
        appianCodeShell.classList.add("col-42");
        appianCodeShell.classList.remove("col-57");

    }
     
}

// let showDownloadButton=(flag)=>{
//     if(flag){
//         document.getElementById("download-xsd").style.display="block";
//         document.getElementById("download-xsd").style.visibility="visible";
//     }
//     else{
//         document.getElementById("download-xsd").style.display="none";
//         document.getElementById("download-xsd").style.visibility="hidden";
//     }
// }


// document.getElementById("generateQE").addEventListener("click", generateQE);
// document.getElementById("generateXSD").addEventListener("click", generateXSD);
// document.getElementById("getGridLayout").addEventListener("click", getGridLayout);
// document.getElementById("generateCast").addEventListener("click", generateCast);
// document.getElementById("generateRecordCast").addEventListener("click", generateRecordCast);
// document.getElementById("getCDTInfo").addEventListener("click", getCdtInfo);
// document.getElementById("getWorkInfo").addEventListener("click", getWorkInfo);
// document.getElementById("getBillboard").addEventListener("click", getBillboardLayout);
// document.getElementById("getAppianCode").addEventListener("click", generateAppianCode);
document.getElementById("runCode").addEventListener("click", generateAppianCode);
document.getElementById("generateGridFieldCDT").addEventListener("click", generateGridCodeForCDTs);
// document.getElementById("getViewData").addEventListener("click", getViewData);
// document.getElementById("getForm").addEventListener("click", getForm);
// document.getElementById("getGridColumn").addEventListener("click", getGridColumn);
document.getElementById("getViewDetails").addEventListener("click",getViewFields);
// document.getElementById("getRcdForm").addEventListener("click",getRecordForm);
// document.getElementById("getGridColumnRCD").addEventListener("click",getGridColumnRCD);
// document.getElementById("getGridLayoutRCD").addEventListener("click",getGridLayoutRCD);

// document.getElementById("form1").addEventListener("click",form1Action);
// document.getElementById("form2").addEventListener("click",form2Action);
// document.getElementById("viewInputs").addEventListener("click",expandConsole);

// window.addEventListener('DOMContentLoaded', form1Action, false);




