// InfoGrid regex
let infoGridRegex1 = /\$\s*infoGrid1\s+\"(.*?)\"\s+\"(.*?)\"\s+(\w+\!\w+\.\w+)\s+(\w+\!\w+\.\w+\.\w+)\s+(\-\w+)/g;
let infoGridRegex2 = /\$\s*infoGrid1\s+\"(.*?)\"\s+\"(.*?)\"\s+(\w+\!\w+\.\w+)\s+(\w+\!\w+\.\w+\.\w+)/g;
let infoGridRegex3 = /\$\s*infoGrid1\s+\"(.*?)\"\s+\"(.*?)\"\s+(\w+\!\w+\.\w+)/g;
let infoGridRegex4 = /\$\s*infoGrid1\s+\"(.*?)\"\s+\"(.*?)\"\s+(\w+\!\w+)/g;

let infoGrid2Regex1 = /\$\s*infoGrid2\s+\"(.*?)\"\s+\"(.*?)\"\s+(\w+\!\w+\.\w+)\s+(\w+\!\w+\.\w+\.\w+)\s+(\-\w+)/g;
let infoGrid2Regex2 = /\$\s*infoGrid2\s+\"(.*?)\"\s+\"(.*?)\"\s+(\w+\!\w+\.\w+)\s+(\w+\!\w+\.\w+\.\w+)/g;
let infoGrid2Regex3 = /\$\s*infoGrid2\s+\"(.*?)\"\s+\"(.*?)\"\s+(\w+\!\w+\.\w+)/g;
let infoGrid2Regex4 = /\$\s*infoGrid2\s+\"(.*?)\"\s+\"(.*?)\"\s+(\w+\!\w+)/g;


let infoCardRegex1 = /\$\s*infoCard1\s+\"(.*?)\"\s+\"(.*?)\"\s+(\w+\!\w+\.\w+)\s+(\w+\!\w+\.\w+\.\w+)\s+(\-\w+)/g;
let infoCardRegex2 = /\$\s*infoCard1\s+\"(.*?)\"\s+\"(.*?)\"\s+(\w+\!\w+\.\w+)\s+(\w+\!\w+\.\w+\.\w+)/g;
let infoCardRegex3 = /\$\s*infoCard1\s+\"(.*?)\"\s+\"(.*?)\"\s+(\w+\!\w+\.\w+)/g;
let infoCardRegex4 = /\$\s*infoCard1\s+\"(.*?)\"\s+\"(.*?)\"\s+(\w+\!\w+)/g;


let getInfoGrids=(data)=>{
    let result = data;
    result = result.replace(infoGridRegex1, `-ss{
      -si.3x{
       -rd.c{
        -ri{
         "$1" 
        },
        char(10),
        -rt{
         "$2" 
        }    
       } 
      },
      -si.8x{
       -rd{
        -rt.st.st{
         " ",
         $match $4 $3 $5  
        }, 
       } 
      }  
     },
     -section{
     } `); 
  
      result = result.replace(infoGridRegex2, `<div>a!sideBySideLayout(
        alignVertical: "MIDDLE",
        items: {
          <div>a!sideBySideItem(
            width: "3X",
            item: a!richTextDisplayField(
              align: "CENTER",
              value: {
                a!richTextIcon(
                  color: "#000",
                  size: "MEDIUM",
                  icon: { "$1" }
                ),
                char(10),
                a!richTextItem(
                  style: "PLAIN",
                  color: "#8f93a2",
                  text: { "$2" }
                )
              }
            )
          )</div>,
          <div>a!sideBySideItem(
            width: "8X",
            item: a!richTextDisplayField(
              value: {
                a!richTextItem(
                  style: "STRONG",
                  color: "STANDARD",
                  text: { "    " }
                ),
                a!richTextItem(
                  style: "STRONG",
                  color: "STANDARD",
                  text: { $match $4 $3}
                )
              }
            )
          )</div>
        }
      )</div>,
      <div>a!sectionLayout(
        divider: "ABOVE",
        marginBelow: "NONE"
      )</div>`); 
  
      result = result.replace(infoGridRegex3, `<div>a!sideBySideLayout(
        alignVertical: "MIDDLE",
        items: {
          <div>a!sideBySideItem(
            width: "3X",
            item: a!richTextDisplayField(
              align: "CENTER",
              value: {
                a!richTextIcon(
                  color: "#000",
                  size: "MEDIUM",
                  icon: { "$1" }
                ),
                char(10),
                a!richTextItem(
                  style: "PLAIN",
                  color: "#8f93a2",
                  text: { "$2" }
                )
              }
            )
          )</div>,
          <div>a!sideBySideItem(
            width: "8X",
            item: a!richTextDisplayField(
              value: {
                a!richTextItem(
                  style: "STRONG",
                  color: "STANDARD",
                  text: { "    " }
                ),
                a!richTextItem(
                  style: "STRONG",
                  color: "STANDARD",
                  text: { $ $3}
                )
              }
            )
          )</div>
        }
      )</div>,
      <div>a!sectionLayout(
        divider: "ABOVE",
        marginBelow: "NONE"
      )</div>`); 
  
      result = result.replace(infoGrid2Regex1, `<div>a!sideBySideLayout(
        items: {
          a!sideBySideItem(
            item: a!richTextDisplayField(
              value: {
                a!richTextIcon(
                  icon: { "$1" },
                  color: "#000000",
                  size: "MEDIUM"
                )
              }
            ),
            width: "MINIMIZE"
          ),
          a!sideBySideItem(
            item: a!richTextDisplayField(
              value: {
                a!richTextItem(
                  text: { "$2" },
                  color: "STANDARD",
                  style: "PLAIN"
                )
              }
            ),
            width: "MINIMIZE"
          ),
          a!sideBySideItem(
            item: a!tagField(
              label: "",
              labelPosition: "ABOVE",
              tags: {
                a!tagItem(
                  text: {
                    $match $4 $3 $5,
                  },
                  backgroundColor: "#f7f7f7"
                )
              },
              align: "START",
              /*size: "SMALL",*/
              marginAbove: "NONE",
              marginBelow: "NONE"
            ),
            width: "MINIMIZE"
          )
        },
        alignVertical: "MIDDLE"
      )
      </div>`);
  
      result = result.replace(infoGrid2Regex2, `<div>a!sideBySideLayout(
        items: {
          a!sideBySideItem(
            item: a!richTextDisplayField(
              value: {
                a!richTextIcon(
                  icon: { "$1" },
                  color: "#000000",
                  size: "MEDIUM"
                )
              }
            ),
            width: "MINIMIZE"
          ),
          a!sideBySideItem(
            item: a!richTextDisplayField(
              value: {
                a!richTextItem(
                  text: { "$2" },
                  color: "STANDARD",
                  style: "PLAIN"
                )
              }
            ),
            width: "MINIMIZE"
          ),
          a!sideBySideItem(
            item: a!tagField(
              label: "",
              labelPosition: "ABOVE",
              tags: {
                a!tagItem(
                  text: {
                    $match $4 $3,
                  },
                  backgroundColor: "#f7f7f7"
                )
              },
              align: "START",
              /*size: "SMALL",*/
              marginAbove: "NONE",
              marginBelow: "NONE"
            ),
            width: "MINIMIZE"
          )
        },
        alignVertical: "MIDDLE"
      )
      </div>`);
  
      result = result.replace(infoGrid2Regex3, `<div>a!sideBySideLayout(
        items: {
          a!sideBySideItem(
            item: a!richTextDisplayField(
              value: {
                a!richTextIcon(
                  icon: { "$1" },
                  color: "#000000",
                  size: "MEDIUM"
                )
              }
            ),
            width: "MINIMIZE"
          ),
          a!sideBySideItem(
            item: a!richTextDisplayField(
              value: {
                a!richTextItem(
                  text: { "$2" },
                  color: "STANDARD",
                  style: "PLAIN"
                )
              }
            ),
            width: "MINIMIZE"
          ),
          a!sideBySideItem(
            item: a!tagField(
              label: "",
              labelPosition: "ABOVE",
              tags: {
                a!tagItem(
                  text: {
                    $ $3,
                  },
                  backgroundColor: "#f7f7f7"
                )
              },
              align: "START",
              /*size: "SMALL",*/
              marginAbove: "NONE",
              marginBelow: "NONE"
            ),
            width: "MINIMIZE"
          )
        },
        alignVertical: "MIDDLE"
      )
      </div>`);
    
    return result  
}