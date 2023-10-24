
// regex for userImage
let umgRegex1 = /\$\s*umg\s+(\w+\!\w+\.\w+)/g;
let umgRegex2 = /\$\s*umg\s+(\w+\!\w+)/g;
let umgRegex3 = /\$\s*umg/g;

// index->wherecontains regex
let matchRegex1 = /\$match\s+(\w+\!\w+)\.(\w+)\.(\w+)\s+(\w+\!\w+)\.(\w+)\s+\-int/g;
let matchRegex2 = /\$match\s+(\w+\!\w+)\.(\w+)\.(\w+)\s+(\w+\!\w+)\.(\w+)\s+\-str/g;
let matchRegex3 = /\$match\s+(\w+\!\w+)\.(\w+)\.(\w+)\s+(\w+\!\w+)\.(\w+)/g;
let matchRegex4 = /\$match\.(\w+)\,\s*(\w+\!\w+)\.(\w+)\.(\w+)\s+(\w+\!\w+)\.(\w+)/g;
let matchRegex5 = /\$match\s+(\w+\!\w+)\.(\w+)\.(\w+)\s+(\w+\!\w+)\.(\w+)\s+\-bool/g;


// value and saveInto regex
let valSiRegEx = /\$v\s*(\w+\!\w+)\.(\w+)/g;
let valSiRegEx2 = /\$v\s*(\w+\!\w+)/g;
let iconRegex1 = /\$icons\.([\w\-]+)\.([\w\-]+)\s+(\w+\!\w+\.\w+)/g
// index regex
let idxRegEx = /\$\s*(\w+\!\w+)\.(\w+)/g;
let idxRegEx2 = /\$\s*(\w+\!\w+)/g;

// QE call regex
let qeRegex = /\$\s*qe\s+(\w+\!\w+\.{0,1}\w*)/g; 
let labelRegex = /\$label\s+\"(.*?)\"/g;
  
let shortHandRegex = /\$i\s+\"(.*?)\"\s+(\w+!\w+)\.(\w+)\s+(\w+!\w+)\.(\w+)\.(\w+)/g;

let setLabelRegex = /\)\s*\<\/div\>\s*\.\$l\.\"(.*?)\"/g;

let recordRegex = /\$rv([\w\s]*)\.(\w+)/g;

let toggleRegex1 = /\$toggle (\w+\!\w+\.\w+)/g;
let toggleRegex2 = /\$toggle (\w+\!\w+)/g;


let getPvRgx = /\$get (\w+\!\w+)/g;

let getCommonRegexReplacement=(data)=>{
    let result = data;
    result = result.replace(
        umgRegex1,`<div>a!userImage(
          user: $ $1,
          altText: "",
          caption: "",
          link: {}
        )</div>`
      );
  
      result = result.replace(
        umgRegex2,`<div>a!userImage(
          user: $1,
          altText: "",
          caption: "",
          link: {}
        )</div>`
      );
  
      result = result.replace(
        umgRegex3,`<div>a!userImage(
          user: loggedInUser(),
          altText: "",
          caption: "",
          link: {}
        )</div>`
      );
      result = result.replace(
        qeRegex, `<div>if(
          or(
            ${checkIsNullFun}($ $1),
          ),
          {},
          ""
        )</div>`
      );


      result = result.replace(valSiRegEx, `value:index($1,"$2",{}),<br>saveInto:$1.$2`);
      result = result.replace(valSiRegEx2, `value:$1,<br>saveInto:$1`);

      let matchRegex4 = /\$match\.(\w+)\,\s*(\w+\!\w+)\.(\w+)\.(\w+)\s+(\w+\!\w+)\.(\w+)/g;
     
      result = result.replace(matchRegex4, `$match $2.$3.$4 $5.$6 -$1`);
      result = result.replace(matchRegex1, `<div>index(\n\tindex($1,"$2",{}),\n\twherecontains(\n\t\ttointeger(index($4,"$5",{})),\n\t\ttointeger(index($1,"$3",{}))\n\t),\n\t{}\n)</div>`);
      result = result.replace(matchRegex2, `<div>index(\n\tindex($1,"$2",{}),\n\twherecontains(\n\t\ttouniformstring(index($4,"$5",{})),\n\t\ttouniformstring(index($1,"$3",{}))\n\t),\n\t{}\n)</div>`);
      result = result.replace(matchRegex5, `<div>index(\n\tindex($1,"$2",{}),\n\twherecontains(\n\t\ttoboolean(index($4,"$5",{})),\n\t\ttoboolean(index($1,"$3",{}))\n\t),\n\t{}\n)</div>`);
      result = result.replace(matchRegex3, `<div>index(\n\tindex($1,"$2",{}),\n\twherecontains(\n\t\tindex($4,"$5",{}),\n\t\tindex($1,"$3",{})\n\t),\n\t{}\n)</div>`);
      
      result = result.replace(iconRegex1,`<div>if(\n\ttoboolean($ $3)=true(),\n\t"$1",\n\t"$2"\n)</div>`)
      
      
      
      result = result.replace(shortHandRegex, `label: "$1",\nvalue: index($2, "$3", {}),\nsaveInto:{$2.$3},\nchoiceValues:index($4, "$5", {}),\nchoiceLabels:index($4, "$6", {})`);
  
      result = result.replace(valSiRegEx,`value:index(fv!item,"$2",{}),<br>saveInto:fv!item.$2`);
  
      result = result.replace(/\$clv[\s+\-\,](\w+!\w+)\.(\w+)\.(\w+)/g,`choiceValues: index($1,"$2",{}),\n\t
      choiceLabels: index($1,"$3",{})`);
      result = result.replace(/\$cb\s+(\w+\!\w+)\.(\w+)/g,`<div>a!checkboxField(
        label: "",
        choiceLabels: {""},
        choiceValues: {true()},
        value: if(
          index($1, "$2",{}),
          true(),
          null()
        ),
        saveInto: a!save($1.$2, if(
          ${checkIsNullFun}(save!value),
          false(),
          true()
        )),
        choiceLayout: "COMPACT"
      )</div>`);
      result = result.replace(/\$cb\s+(\w+\!\w+)/g,`<div>a!checkboxField(
        label: "",
        choiceLabels: {""},
        choiceValues: {true()},
        value: if(
          toboolean($1)=true(),
          true(),
          null()
        ),
        saveInto: a!save($1, if(
          ${checkIsNullFun}(save!value),
          false(),
          true()
        )),
        choiceLayout: "COMPACT"
      )</div>`);
  
      result = result.replace(/\$rb\s+(\w+\!\w+)\.(\w+)/g,`<div>a!richTextDisplayField(
        value: {
          a!richTextIcon(
            color: if(
              index($1, "$2",{}),
              "#5eba61",
              "NEGATIVE"
            ),
            size: "MEDIUM",
            icon: {
              if(
                index($1, "$2", {}),
                "check-circle-o",
                "times-circle-o"
              )
            },
            link: a!dynamicLink(
              value: if(
                index($1, "$2", {}),
                false(),
                true()
              ),
              saveInto: $1.$2
            ),
            caption: if(
              index($1,"$2",{}),
              "Active",
              "Not Active"
            )
          )
        }
      )</div>`);
      
      result = result.replace(toggleRegex1, `<div>a!richTextDisplayField(
        value: {
          <div>a!richTextIcon(
            color: if(
              $ $1,
              "#5eba61",
              "NEGATIVE"
            ),
            size: "MEDIUM",
            icon: {
              if(
                $ $1,
                "toggle-on",
                "toggle-off"
              )
            },
       <div>link: a!dynamicLink(
              value: if(
                $ $1,
                false(),
                true()
              ),
              saveInto: $1
            ),</div>
          )</div>
        }
      )</div>`)

      result = result.replace(toggleRegex2, `<div>a!richTextDisplayField(
        value: {
          <div>a!richTextIcon(
            color: if(
              $ $1,
              "#5eba61",
              "NEGATIVE"
            ),
            size: "MEDIUM",
            icon: {
              if(
                $ $1,
                "toggle-on",
                "toggle-off"
              )
            },
       <div>link: a!dynamicLink(
              value: if(
                $ $1,
                false(),
                true()
              ),
              saveInto: $1
            ),</div>
          )</div>
        }
      )</div>`)


    result = result.replace(getPvRgx,`<div>if(
        <div>or(
        ${checkIsNullFun}(
          $1
        ),
        $1=0
        ),</div>
        null(),
        rule!qe(
          id: pv!quoteRequestId
        )
      )</div>`)

      result = result.replace(idxRegEx,`index($1,"$2",{})`);
      result = result.replace(idxRegEx2,`$1`);  
      result = result.replace(labelRegex,`label:"$1"`);
      return result;
}

let setLabelATFinal=(data)=>{
  let result = data;
  result = result.replace(setLabelRegex,`,\n label:"$1")</div>`);
  result = result.replace(/\,\s*\,/g,",");
  result = result.replace(recordRegex,"fv!row[recordType!{8a22b958-37b4-46b7-89a7-d857a9c5e1c5}$1.fields.$2]")
  return result;
}