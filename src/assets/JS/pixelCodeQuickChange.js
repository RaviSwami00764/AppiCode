let pixelCodeHeightHandler = (data) =>{
    let result = data;

   
    function processPattern(result, pattern, patternName, functionName, singlePattern, contentName, functionPatterns, defaultRegex, appianFunctionName){
      result = result.replace(pattern, function(match, group) {
        const words = group.split('.');
        const patterns = words.map(word => `${patternName}${word}`).join(',\n');
        return `-${functionName}Gh(\n${patterns},\n$shh_1098_value:{`;
      });
      
      
      result = result.replace(singlePattern, `-${functionName}Gh(\n${patternName}$1,\n$shh_1098_value:{`);
      result = result.replace(defaultRegex, `-${functionName}Gh(\n$shh_1098_value:{`);


      result = getFinalResult(result,/(?<=\$shh\_1098\_value\:\s*)\{/g, `\n\t}\n)</div>`);
      result = result.replace(/\$shh\_1098\_value/g, contentName);
      
      if(functionName==="tag"){
        result = result.replace(/\w+st\#(\w+)/g, `backgroundColor: "#$1",`);
        result = result.replace(/\w+cl\#(\w+)/g, `textColor: "#$1",`);
      }
      else if(functionName==="stm"){
        result = result.replace(/\w+st\#(\w+)/g, `backgroundColor: "#$1",`);
        result = result.replace(/\w+cl\#(\w+)/g, `contentColor: "#$1",`);
      }
      else{
        result = result.replace(/\w+st\#(\w+)/g, `style: "#$1",`);
        result = result.replace(/\w+cl\#(\w+)/g, `color: "#$1",`);
      }
      
      for (const key in functionPatterns) {
        const regexPattern = new RegExp(`${patternName}${key}`, 'g');
        let patternVal = functionPatterns[key];
        result = result.replace(regexPattern, patternVal );
      }
      
      let ghRegex = new RegExp(`(\\-${functionName}Gh\\s*\\()`, 'g');
      result = result.replace(ghRegex, `<div>a!${appianFunctionName}(`);

      
      
      result = result.replace(new RegExp(`${patternName}\\$\\d+\\s*,*`, 'g'), '');
      result = result.replace(new RegExp(`${patternName}\\w+\\s*,*`, 'g'), '');

      return result;
    }


    function processSinglePattern(result, pattern, patternName, functionName, singlePattern, contentName, functionPatterns, defaultRegex, appianFunctionName){
      const addonRegex = new RegExp(`\\-${functionName}\\.`,'g');
      result = result.replace(addonRegex,`-${functionName}.kk.`);
      result = result.replace(pattern, function(match, group) {
        const words = group.split('.');
        const patterns = words.map(word => `${patternName}${word}`).join(',\n');
        return `-${functionName}Kh{\n${patterns},\n$shh_1099_value:`;
      });
      
      
      result = result.replace(singlePattern, `-${functionName}Kh{\n${patternName}$1,\n$shh_1099_value:`);
      result = result.replace(defaultRegex, `-${functionName}Kh{\n$shh_1099_value:`);


      // result = getFinalResult(result,/(?<=\$shh\_1099\_value\:\s*)\{/g, `\n\t}\n)</div>`);
      result = result.replace(/\$shh\_1099\_value/g, contentName);
      
      if(functionName==="tag"){
        result = result.replace(/\w+st\#(\w+)/g, `backgroundColor: "#$1",`);
        result = result.replace(/\w+cl\#(\w+)/g, `textColor: "#$1",`);
      }
      else if(functionName==="stm"){
        result = result.replace(/\w+st\#(\w+)/g, `backgroundColor: "#$1",`);
        result = result.replace(/\w+cl\#(\w+)/g, `contentColor: "#$1",`);
      }
      else{
        result = result.replace(/\w+st\#(\w+)/g, `style: "#$1",`);
        result = result.replace(/\w+cl\#(\w+)/g, `color: "#$1",`);
      }
      
      for (const key in functionPatterns) {
        const regexPattern = new RegExp(`${patternName}${key}`, 'g');
        let patternVal = functionPatterns[key];
        result = result.replace(regexPattern, patternVal );
      }
      let KhFunctionRegex = new RegExp(`(?<=\\-${functionName}Kh\\s*)\\{`,'g');
      let ghRegex = new RegExp(`(\\-${functionName}Kh\\s*\\{)`, 'g');

      result = getFinalResult(result,KhFunctionRegex, `\n)</div>`);
      result = result.replace(ghRegex, `<div>a!${appianFunctionName}(`);

      
      
      result = result.replace(new RegExp(`${patternName}\\$\\d+\\s*,*`, 'g'), '');
      result = result.replace(new RegExp(`${patternName}\\w+\\s*,*`, 'g'), '');

      return result;
    }

    const singlePatterns = [
      {type: "gridColumnPattern", key: "gc", patternsArray: gcPatterns, contentName: "value", appianFunctionName: "gridColumn" },
    ];
    
    singlePatterns.forEach(({type, key, patternsArray, contentName, appianFunctionName }) => {
      const regex = new RegExp(`\\-${key}\\.(\\w+(?:\\.\\w+|\\w+\\#\\w+)+)\\{`,'g');
      const singleRegex = new RegExp(`\\-${key}\\.(\\w+)\\{`,'g');
      const defaultRegex = new RegExp(`\\-${key}\\s*\\{`,'g');
      result = processSinglePattern(result, regex, type, key, singleRegex, contentName, patternsArray, defaultRegex, appianFunctionName);
    });  

    const patterns = [
      {type: "richtextitempattern", key: "rt", patternsArray: rtPatterns, contentName: "text", appianFunctionName: "richTextItem"},
      {type: "richtexticonpattern", key: "ri", patternsArray: riPatterns, contentName: "icon", appianFunctionName: "richTextIcon"},
      {type: "sectionpattern", key: "section", patternsArray: sectionPatterns, contentName: "contents",appianFunctionName: "sectionLayout" },
      {type: "cardpattern", key: "card", patternsArray: cardPatterns, contentName: "contents", appianFunctionName: "cardLayout" },
      {type: "columnspattern", key: "cls", patternsArray: clsPattern, contentName: "columns",  appianFunctionName: "columnsLayout" },
      {type: "columnpattern", key: "cl", patternsArray: clPattern, contentName: "contents",    appianFunctionName: "columnLayout"},
      {type: "richtextdisplaypattern", key: "rd", patternsArray: rdPatterns, contentName: "value", appianFunctionName: "richTextDisplayField" },
      {type: "sidebysidelayout", key: "ss", patternsArray: ssPattern, contentName: "items", appianFunctionName: "sideBySideLayout" },
      {type: "boxpattern", key: "box", patternsArray: boxPatterns, contentName: "contents", appianFunctionName: "boxLayout" },
      {type: "tagspattern", key: "tags", patternsArray: tagsPattern, contentName: "tags", appianFunctionName: "tagField" },
      {type: "tagpattern", key: "tag", patternsArray: tagPatterns, contentName: "text", appianFunctionName: "tagItem" },
      {type: "stamppattern", key: "stm", patternsArray: stmPatterns, contentName: "icon", appianFunctionName: "stampField" },
      {type: "imagepattern", key: "img", patternsArray: imgPatterns, contentName: "images", appianFunctionName: "imageField" },
      {type: "userImgpattern", key: "umg", patternsArray: umgPatterns, contentName: "user", appianFunctionName: "userImage" },
      {type: "documentImgpattern", key: "dmg", patternsArray: dmgPatterns, contentName: "document", appianFunctionName: "documentImage" },
      {type: "webImgpattern", key: "wmg", patternsArray: wmgPatterns, contentName: "source", appianFunctionName: "webImage" },
       ];
  
    patterns.forEach(({type, key, patternsArray, contentName, appianFunctionName }) => {
      const regex = new RegExp(`\\-${key}\\.(\\w+(?:\\.\\w+|\\w+\\#\\w+)+)\\{`,'g');
      const singleRegex = new RegExp(`\\-${key}\\.(\\w+)\\{`,'g');
      const defaultRegex = new RegExp(`\\-${key}\\s*\\{`,'g');
      result = processPattern(result, regex, type, key, singleRegex, contentName, patternsArray, defaultRegex, appianFunctionName);
    });  
    

    
    return result;
  }