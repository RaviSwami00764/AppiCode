
// Info Card Regex
let infoCard2Regex1_1 = /\$\s*infoCard2\s+\"(.*?)\"\s+\"(\w)(\w+)\s+(\w)(\w+)\s+(.*?)\"\s+(\w+\!\w+\.\w+)\s+(\w+\!\w+\.\w+\.\w+)\s+(\-\w+)/g;
let infoCard2Regex1_2 = /\$\s*infoCard2\s+\"(.*?)\"\s+\"(\w)(\w+)\s+(\w)(\w+)\s*\"\s+(\w+\!\w+\.\w+)\s+(\w+\!\w+\.\w+\.\w+)\s+(\-\w+)/g;
let infoCard2Regex1_3 = /\$\s*infoCard2\s+\"(.*?)\"\s+\"(\w)(\w+)\s*\"\s+(\w+\!\w+\.\w+)\s+(\w+\!\w+\.\w+\.\w+)\s+(\-\w+)/g;

let infoCard2Regex2_1 = /\$\s*infoCard2\s+\"(.*?)\"\s+\"(\w)(\w+)\s+(\w)(\w+)\s+(.*?)\"\s+(\w+\!\w+\.\w+)\s+(\w+\!\w+\.\w+\.\w+)/g;
let infoCard2Regex2_2 = /\$\s*infoCard2\s+\"(.*?)\"\s+\"(\w)(\w+)\s+(\w)(\w+)\s*\"\s+(\w+\!\w+\.\w+)\s+(\w+\!\w+\.\w+\.\w+)/g;
let infoCard2Regex2_3 = /\$\s*infoCard2\s+\"(.*?)\"\s+\"(\w)(\w+)\s*\"\s+(\w+\!\w+\.\w+)\s+(\w+\!\w+\.\w+\.\w+)/g;

let infoCard2Regex3_1 = /\$\s*infoCard2\s+\"(.*?)\"\s+\"(\w)(\w+)\s+(\w)(\w+)\s+(.*?)\"\s+(\w+\!\w+\.\w+)/g;
let infoCard2Regex3_2 = /\$\s*infoCard2\s+\"(.*?)\"\s+\"(\w)(\w+)\s+(\w)(\w+)\s*\"\s+(\w+\!\w+\.\w+)/g;
let infoCard2Regex3_3 = /\$\s*infoCard2\s+\"(.*?)\"\s+\"(\w)(\w+)\s*\"\s+(\w+\!\w+\.\w+)/g;

let infoCard2Regex4_1 = /\$\s*infoCard2\s+\"(.*?)\"\s+\"(\w)(\w+)\s+(\w)(\w+)\s+(.*?)\"\s+(\w+\!\w+)/g;
let infoCard2Regex4_2 = /\$\s*infoCard2\s+\"(.*?)\"\s+\"(\w)(\w+)\s+(\w)(\w+)\s*\"\s+(\w+\!\w+)/g;
let infoCard2Regex4_3 = /\$\s*infoCard2\s+\"(.*?)\"\s+\"(\w)(\w+)\s*\"\s+(\w+\!\w+)/g;

let getInfoCards=(data)=>{
    let result = data;
    result = result.replace(infoCardRegex1, `<div>a!cardLayout(
        contents: {
          a!cardLayout(
            contents: {
              a!columnsLayout(
                columns: {
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: { "$2" },
                            color: "#fff",
                            size: "MEDIUM_PLUS",
                            style: "STRONG"
                          )
                        }
                      )
                    },
                    width: "AUTO"
                  ),
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        value: {
                          a!richTextIcon(
                            icon: { "$1" },
                            color: "#fff",
                            size: "MEDIUM_PLUS"
                          )
                        },
                        align: "RIGHT"
                      )
                    },
                    width: "AUTO"
                  )
                },
                alignVertical: "MIDDLE"
              )
            },
            height: "AUTO",
            style: "#0496FF",
            shape: "ROUNDED",
            padding: "STANDARD",
            marginAbove: "LESS",
            marginBelow: "LESS",
            showShadow: true()
          ),
          a!richTextDisplayField(
            value: {
              a!richTextItem(
                text: {
                  "Heading"
                },
                color: "STANDARD",
                size: "MEDIUM",
                style: "STRONG"
              )
            }
          ),
          a!richTextDisplayField(
            value: {
              a!richTextItem(
                text: {
                  $match $4 $3 $5
                },
                color: "STANDARD",
                style: "PLAIN"
              )
            }
          ),
          a!richTextDisplayField(
            value: {
              a!richTextIcon(
                icon: { "circle" },
                color: "#000",
                size: "SMALL"
              ),
              a!richTextIcon(
                icon: { "circle" },
                color: "#000",
                size: "SMALL"
              ),
              a!richTextIcon(
                icon: { "circle" },
                color: "#000",
                size: "SMALL"
              )
            },
            align: "RIGHT"
          )
        },
        height: "AUTO",
        style: "NONE",
        shape: "ROUNDED",
        padding: "STANDARD",
        marginAbove: "LESS",
        marginBelow: "LESS",
        showBorder: false(),
        showShadow: true()
      )
      
      </div>`);
  
      result = result.replace(infoCardRegex2, `<div>a!cardLayout(
        contents: {
          a!cardLayout(
            contents: {
              a!columnsLayout(
                columns: {
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: { "$2" },
                            color: "#fff",
                            size: "MEDIUM_PLUS",
                            style: "STRONG"
                          )
                        }
                      )
                    },
                    width: "AUTO"
                  ),
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        value: {
                          a!richTextIcon(
                            icon: { "$1" },
                            color: "#fff",
                            size: "MEDIUM_PLUS"
                          )
                        },
                        align: "RIGHT"
                      )
                    },
                    width: "AUTO"
                  )
                },
                alignVertical: "MIDDLE"
              )
            },
            height: "AUTO",
            style: "#0496FF",
            shape: "ROUNDED",
            padding: "STANDARD",
            marginAbove: "LESS",
            marginBelow: "LESS",
            showShadow: true()
          ),
          a!richTextDisplayField(
            value: {
              a!richTextItem(
                text: {
                  "Heading"
                },
                color: "STANDARD",
                size: "MEDIUM",
                style: "STRONG"
              )
            }
          ),
          a!richTextDisplayField(
            value: {
              a!richTextItem(
                text: {
                  $match $4 $3
                },
                color: "STANDARD",
                style: "PLAIN"
              )
            }
          ),
          a!richTextDisplayField(
            value: {
              a!richTextIcon(
                icon: { "circle" },
                color: "#000",
                size: "SMALL"
              ),
              a!richTextIcon(
                icon: { "circle" },
                color: "#000",
                size: "SMALL"
              ),
              a!richTextIcon(
                icon: { "circle" },
                color: "#000",
                size: "SMALL"
              )
            },
            align: "RIGHT"
          )
        },
        height: "AUTO",
        style: "NONE",
        shape: "ROUNDED",
        padding: "STANDARD",
        marginAbove: "LESS",
        marginBelow: "LESS",
        showBorder: false(),
        showShadow: true()
      )
      
      </div>`);
      
      result = result.replace(infoCardRegex3, `<div>a!cardLayout(
        contents: {
          a!cardLayout(
            contents: {
              a!columnsLayout(
                columns: {
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: { "$2" },
                            color: "#fff",
                            size: "MEDIUM_PLUS",
                            style: "STRONG"
                          )
                        }
                      )
                    },
                    width: "AUTO"
                  ),
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        value: {
                          a!richTextIcon(
                            icon: { "$1" },
                            color: "#fff",
                            size: "MEDIUM_PLUS"
                          )
                        },
                        align: "RIGHT"
                      )
                    },
                    width: "AUTO"
                  )
                },
                alignVertical: "MIDDLE"
              )
            },
            height: "AUTO",
            style: "#0496FF",
            shape: "ROUNDED",
            padding: "STANDARD",
            marginAbove: "LESS",
            marginBelow: "LESS",
            showShadow: true()
          ),
          a!richTextDisplayField(
            value: {
              a!richTextItem(
                text: {
                  "Heading"
                },
                color: "STANDARD",
                size: "MEDIUM",
                style: "STRONG"
              )
            }
          ),
          a!richTextDisplayField(
            value: {
              a!richTextItem(
                text: {
                  $ $3
                },
                color: "STANDARD",
                style: "PLAIN"
              )
            }
          ),
          a!richTextDisplayField(
            value: {
              a!richTextIcon(
                icon: { "circle" },
                color: "#000",
                size: "SMALL"
              ),
              a!richTextIcon(
                icon: { "circle" },
                color: "#000",
                size: "SMALL"
              ),
              a!richTextIcon(
                icon: { "circle" },
                color: "#000",
                size: "SMALL"
              )
            },
            align: "RIGHT"
          )
        },
        height: "AUTO",
        style: "NONE",
        shape: "ROUNDED",
        padding: "STANDARD",
        marginAbove: "LESS",
        marginBelow: "LESS",
        showBorder: false(),
        showShadow: true()
      )
      
      </div>`);
      
      result = result.replace(infoCard2Regex1_1, `<div>a!cardLayout(
            contents: {
              a!richTextDisplayField(
                value: {
                  a!richTextIcon(
                    icon: { "$1" },
                    color: "#000000",
                    size: "LARGE"
                  )
                  },
                  align: "CENTER",
                  marginBelow: "NONE"),
              
              a!richTextDisplayField(
                value: {
                  a!richTextItem(
                    text: { "$2" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$3  " },
                    color: "STANDARD",
                    style: "PLAIN"
                 
                  ),
                  a!richTextItem(
                    text: { "$4" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$5 " },
                    color: "STANDARD",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$6" },
                    color: "STANDARD",
                    style: "PLAIN"
                  )
                },
                align: "CENTER",
                marginAbove: "NONE"
              ),
              a!tagField(
                label: "",
                labelPosition: "ABOVE",
                tags: {
                  a!tagItem(
                    text: { $match $8 $7 $9 },
                    backgroundColor: "#CFCBCA"
                  )
                },
                align: "CENTER",
                size: "",
                marginAbove: "NONE",
                marginBelow: "NONE"
              )
            },
            height: "AUTO",
            shape: "SEMI_ROUNDED",
            padding: "STANDARD",
            marginAbove: "LESS",
            marginBelow: "LESS",
            showShadow: true(),
            decorativeBarPosition: "BOTTOM",
  
            decorativeBarColor: "#0496FF"
          )
        </div>`);
  
      result = result.replace(infoCard2Regex1_2, `<div>a!cardLayout(
            contents: {
              a!richTextDisplayField(
                value: {
                  a!richTextIcon(
                    icon: { "$1" },
                    color: "#000000",
                    size: "LARGE"
                  )
                  },
                  align: "CENTER",
                  marginBelow: "NONE"),
              
              a!richTextDisplayField(
                value: {
                  a!richTextItem(
                    text: { "$2" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$3  " },
                    color: "STANDARD",
                    style: "PLAIN"
                 
                  ),
                  a!richTextItem(
                    text: { "$4" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$5 " },
                    color: "STANDARD",
                    style: "PLAIN"
                  ),
                },
                align: "CENTER",
                marginAbove: "NONE"
              ),
              a!tagField(
                label: "",
                labelPosition: "ABOVE",
                tags: {
                  a!tagItem(
                    text: { $match $7 $6 $8 },
                    backgroundColor: "#CFCBCA"
                  )
                },
                align: "CENTER",
                size: "",
                marginAbove: "NONE",
                marginBelow: "NONE"
              )
            },
            height: "AUTO",
            shape: "SEMI_ROUNDED",
            padding: "STANDARD",
            marginAbove: "LESS",
            marginBelow: "LESS",
            showShadow: true(),
            decorativeBarPosition: "BOTTOM",
  
            decorativeBarColor: "#0496FF"
          )
        </div>`);
  
      result = result.replace(infoCard2Regex1_3, `<div>
          a!cardLayout(
            contents: {
              a!richTextDisplayField(
                value: {
                  a!richTextIcon(
                    icon: { "$1" },
                    color: "#000000",
                    size: "LARGE"
                  )
                  },
                  align: "CENTER",
                  marginBelow: "NONE"),
              
              a!richTextDisplayField(
                value: {
                  a!richTextItem(
                    text: { "$2" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$3  " },
                    color: "STANDARD",
                    style: "PLAIN"
                 
                  ),
                },
                align: "CENTER",
                marginAbove: "NONE"
              ),
              a!tagField(
                label: "",
                labelPosition: "ABOVE",
                tags: {
                  a!tagItem(
                    text: { $match $5 $4 $6 },
                    backgroundColor: "#CFCBCA"
                  )
                },
                align: "CENTER",
                size: "",
                marginAbove: "NONE",
                marginBelow: "NONE"
              )
            },
            height: "AUTO",
            shape: "SEMI_ROUNDED",
            padding: "STANDARD",
            marginAbove: "LESS",
            marginBelow: "LESS",
            showShadow: true(),
            decorativeBarPosition: "BOTTOM",
  
            decorativeBarColor: "#0496FF"
          )
        </div>`);
  
      result = result.replace(infoCard2Regex2_1, `<div>
          a!cardLayout(
            contents: {
              a!richTextDisplayField(
                value: {
                  a!richTextIcon(
                    icon: { "$1" },
                    color: "#000000",
                    size: "LARGE"
                  )
                  },
                  align: "CENTER",
                  marginBelow: "NONE"),
              
              a!richTextDisplayField(
                value: {
                  a!richTextItem(
                    text: { "$2" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$3  " },
                    color: "STANDARD",
                    style: "PLAIN"
                 
                  ),
                  a!richTextItem(
                    text: { "$4" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$5 " },
                    color: "STANDARD",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$6" },
                    color: "STANDARD",
                    style: "PLAIN"
                  )
                },
                align: "CENTER",
                marginAbove: "NONE"
              ),
              a!tagField(
                label: "",
                labelPosition: "ABOVE",
                tags: {
                  a!tagItem(
                    text: { $match $8 $7},
                    backgroundColor: "#CFCBCA"
                  )
                },
                align: "CENTER",
                size: "",
                marginAbove: "NONE",
                marginBelow: "NONE"
              )
            },
            height: "AUTO",
            shape: "SEMI_ROUNDED",
            padding: "STANDARD",
            marginAbove: "LESS",
            marginBelow: "LESS",
            showShadow: true(),
            decorativeBarPosition: "BOTTOM",
  
            decorativeBarColor: "#0496FF"
          )
        </div>`);
  
      result = result.replace(infoCard2Regex2_2, `<div>
          a!cardLayout(
            contents: {
              a!richTextDisplayField(
                value: {
                  a!richTextIcon(
                    icon: { "$1" },
                    color: "#000000",
                    size: "LARGE"
                  )
                  },
                  align: "CENTER",
                  marginBelow: "NONE"),
              
              a!richTextDisplayField(
                value: {
                  a!richTextItem(
                    text: { "$2" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$3  " },
                    color: "STANDARD",
                    style: "PLAIN"
                 
                  ),
                  a!richTextItem(
                    text: { "$4" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$5 " },
                    color: "STANDARD",
                    style: "PLAIN"
                  ),
                },
                align: "CENTER",
                marginAbove: "NONE"
              ),
              a!tagField(
                label: "",
                labelPosition: "ABOVE",
                tags: {
                  a!tagItem(
                    text: { $match $7 $6 },
                    backgroundColor: "#CFCBCA"
                  )
                },
                align: "CENTER",
                size: "",
                marginAbove: "NONE",
                marginBelow: "NONE"
              )
            },
            height: "AUTO",
            shape: "SEMI_ROUNDED",
            padding: "STANDARD",
            marginAbove: "LESS",
            marginBelow: "LESS",
            showShadow: true(),
            decorativeBarPosition: "BOTTOM",
  
            decorativeBarColor: "#0496FF"
          )
        </div>`);
  
      result = result.replace(infoCard2Regex2_3, `<div>
          a!cardLayout(
            contents: {
              a!richTextDisplayField(
                value: {
                  a!richTextIcon(
                    icon: { "$1" },
                    color: "#000000",
                    size: "LARGE"
                  )
                  },
                  align: "CENTER",
                  marginBelow: "NONE"),
              
              a!richTextDisplayField(
                value: {
                  a!richTextItem(
                    text: { "$2" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$3  " },
                    color: "STANDARD",
                    style: "PLAIN"
                 
                  ),
                },
                align: "CENTER",
                marginAbove: "NONE"
              ),
              a!tagField(
                label: "",
                labelPosition: "ABOVE",
                tags: {
                  a!tagItem(
                    text: { $match $5 $4 },
                    backgroundColor: "#CFCBCA"
                  )
                },
                align: "CENTER",
                size: "",
                marginAbove: "NONE",
                marginBelow: "NONE"
              )
            },
            height: "AUTO",
            shape: "SEMI_ROUNDED",
            padding: "STANDARD",
            marginAbove: "LESS",
            marginBelow: "LESS",
            showShadow: true(),
            decorativeBarPosition: "BOTTOM",
  
            decorativeBarColor: "#0496FF"
          )
        </div>`);
  
      result = result.replace(infoCard2Regex3_1, `<div>
          a!cardLayout(
            contents: {
              a!richTextDisplayField(
                value: {
                  a!richTextIcon(
                    icon: { "$1" },
                    color: "#000000",
                    size: "LARGE"
                  )
                  },
                  align: "CENTER",
                  marginBelow: "NONE"),
              
              a!richTextDisplayField(
                value: {
                  a!richTextItem(
                    text: { "$2" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$3  " },
                    color: "STANDARD",
                    style: "PLAIN"
                 
                  ),
                  a!richTextItem(
                    text: { "$4" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$5 " },
                    color: "STANDARD",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$6" },
                    color: "STANDARD",
                    style: "PLAIN"
                  )
                },
                align: "CENTER",
                marginAbove: "NONE"
              ),
              a!tagField(
                label: "",
                labelPosition: "ABOVE",
                tags: {
                  a!tagItem(
                    text: { $ $7 },
                    backgroundColor: "#CFCBCA"
                  )
                },
                align: "CENTER",
                size: "",
                marginAbove: "NONE",
                marginBelow: "NONE"
              )
            },
            height: "AUTO",
            shape: "SEMI_ROUNDED",
            padding: "STANDARD",
            marginAbove: "LESS",
            marginBelow: "LESS",
            showShadow: true(),
            decorativeBarPosition: "BOTTOM",
  
            decorativeBarColor: "#0496FF"
          )
        </div>`);
  
      result = result.replace(infoCard2Regex3_2, `<div>
          a!cardLayout(
            contents: {
              a!richTextDisplayField(
                value: {
                  a!richTextIcon(
                    icon: { "$1" },
                    color: "#000000",
                    size: "LARGE"
                  )
                  },
                  align: "CENTER",
                  marginBelow: "NONE"),
              
              a!richTextDisplayField(
                value: {
                  a!richTextItem(
                    text: { "$2" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$3  " },
                    color: "STANDARD",
                    style: "PLAIN"
                 
                  ),
                  a!richTextItem(
                    text: { "$4" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$5 " },
                    color: "STANDARD",
                    style: "PLAIN"
                  ),
                },
                align: "CENTER",
                marginAbove: "NONE"
              ),
              a!tagField(
                label: "",
                labelPosition: "ABOVE",
                tags: {
                  a!tagItem(
                    text: { $ $6 },
                    backgroundColor: "#CFCBCA"
                  )
                },
                align: "CENTER",
                size: "",
                marginAbove: "NONE",
                marginBelow: "NONE"
              )
            },
            height: "AUTO",
            shape: "SEMI_ROUNDED",
            padding: "STANDARD",
            marginAbove: "LESS",
            marginBelow: "LESS",
            showShadow: true(),
            decorativeBarPosition: "BOTTOM",
  
            decorativeBarColor: "#0496FF"
          )
        </div>`);
  
      result = result.replace(infoCard2Regex3_3, `<div>
          a!cardLayout(
            contents: {
              a!richTextDisplayField(
                value: {
                  a!richTextIcon(
                    icon: { "$1" },
                    color: "#000000",
                    size: "LARGE"
                  )
                  },
                  align: "CENTER",
                  marginBelow: "NONE"),
              
              a!richTextDisplayField(
                value: {
                  a!richTextItem(
                    text: { "$2" },
                    color: "STANDARD",
                    size: "MEDIUM_PLUS",
                    style: "PLAIN"
                  ),
                  a!richTextItem(
                    text: { "$3  " },
                    color: "STANDARD",
                    style: "PLAIN"
                 
                  ),
                },
                align: "CENTER",
                marginAbove: "NONE"
              ),
              a!tagField(
                label: "",
                labelPosition: "ABOVE",
                tags: {
                  a!tagItem(
                    text: { $ $4 },
                    backgroundColor: "#CFCBCA"
                  )
                },
                align: "CENTER",
                size: "",
                marginAbove: "NONE",
                marginBelow: "NONE"
              )
            },
            height: "AUTO",
            shape: "SEMI_ROUNDED",
            padding: "STANDARD",
            marginAbove: "LESS",
            marginBelow: "LESS",
            showShadow: true(),
            decorativeBarPosition: "BOTTOM",
  
            decorativeBarColor: "#0496FF"
          )
        </div>`);
    
    return result;    
}