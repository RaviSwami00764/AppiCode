// regex for qe call

let quickRegexCodeGenerator = (data) => {
  let result = data;
  result = getInfoGrids(result);
  result = getInfoCards(result);
  result = getCommonRegexReplacement(result);

  return result;
}


let pixelCodeForSingleValueHolder = (data) => {
  let result = data;

  result = getFinalResult(result, /(?<=\-si|p|pug|date|drop|dd|gc|tf|cb\s*)\{/g, ")\n</div>");



  result = getFinalResult(result, /(?<=\-gc\.i\s*)\{/g, `   ,\n width: "ICON"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.n\s*)\{/g, `   ,\n  width: "NARROW"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.nn\s*)\{/g, `  ,\n width: "NARROW_PLUS"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.m\s*)\{/g, `   ,\n width: "MEDIUM"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.mm\s*)\{/g, `  ,\n  width: "MEDIUM_PLUS"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.w\s*)\{/g, `   ,\n width: "WIDE"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.ii\s*)\{/g, `  ,\n width: "ICON_PLUS"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.auto\s*)\{/g, `,\n width: "AUTO"\n)\n</div>`);

  result = getFinalResult(result, /(?<=\-gc\.1x\s*)\{/g, `  ,\n width: "1X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.2x\s*)\{/g, `  ,\n width: "2X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.3x\s*)\{/g, `  ,\n width: "3X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.4x\s*)\{/g, `  ,\n width: "4X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.5x\s*)\{/g, `  ,\n width: "5X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.6x\s*)\{/g, `  ,\n width: "6X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.7x\s*)\{/g, `  ,\n width: "7X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.8x\s*)\{/g, `  ,\n width: "8X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.9x\s*)\{/g, `  ,\n width: "9X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-gc\.10x\s*)\{/g, ` ,\n width: "10X"\n)\n</div>`);

  result = result.replace(/(\-gc\.\w+\s*\{)/g, "-gc{");


  result = getFinalResult(result, /(?<=\-si\.a\s*)\{/g, `  ,\n width: "AUTO"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-si\.min\s*)\{/g, `  ,\n width: "MINIMIZE"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-si\.1x\s*)\{/g, `  ,\n width: "1X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-si\.2x\s*)\{/g, `  ,\n width: "2X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-si\.3x\s*)\{/g, `  ,\n width: "3X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-si\.4x\s*)\{/g, `  ,\n width: "4X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-si\.5x\s*)\{/g, `  ,\n width: "5X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-si\.6x\s*)\{/g, `  ,\n width: "6X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-si\.7x\s*)\{/g, `  ,\n width: "7X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-si\.8x\s*)\{/g, `  ,\n width: "8X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-si\.9x\s*)\{/g, `  ,\n width: "9X"\n)\n</div>`);
  result = getFinalResult(result, /(?<=\-si\.10x\s*)\{/g, ` ,\n width: "10X"\n)\n</div>`);

  result = result.replace(/(\-si\.\w+\s*\{)/g, "-si{");

  result = result.replace(/(\-gc\s*\{)/g, `<div>a!gridColumn(
      value: `);
  result = result.replace(/(\-si\s*\{)/g, `<div>a!sideBySideItem(            
      item:`);



  result = result.replace(/(\-date\s*\{)/g, `<div>a!dateField(`);

  result = result.replace(/(\-pug\s*\{)/g, `<div>a!pickerFieldUsers(
      maxSelections: 1,`);

  result = result.replace(/(\-p\s*\{)/g, `<div>a!paragraphField(`);

  result = result.replace(/(\-(drop|dd)\s*\{)/g, `<div>a!dropdownField(`);

  result = result.replace(/(\-tf\s*\{)/g, `<div>a!textField(`);

  return result;
}

let pixelCodeUtils = (data) => {
  let result = data;
  
  result = result.replace(/(\-img\s*\{)/g, `<div>a!imageField(
        style: "AVATAR",
        showWhen: true(),
        isThumbnail: false(),
        align: "",
        size: "SMALL",
        images:{ `);

  result = result.replace(/(\-umg\s*\{)/g, `<div>a!userImage(
        user:{ `);

  result = result.replace(/(\-wmg\s*\{)/g, `<div>a!webImage(
        source:{ `);

  result = result.replace(/(\-dmg\s*\{)/g, `<div>a!documentImage(
        document:{ `);


  result = result.replace(/(\-clsGh\s*\()/g, `<div>a!columnsLayout(`);
  result = result.replace(/(\-cls\s*\{)/g, `<div>a!columnsLayout(
        columns:{ `);

  result = result.replace(/(\-clGh\s*\()/g, `<div>a!columnLayout(`);
  result = result.replace(/(\-cl\s*\{)/g, `<div>a!columnLayout(
        contents:{ `);

  result = result.replace(/(\-ssGh\s*\()/g, `<div>a!sideBySideLayout(`);
  result = result.replace(/(\-ss\s*\{)/g, `<div>a!sideBySideLayout(
        alignVertical: "MIDDLE",35
        items:{ `);

  result = result.replace(/(\-tags\s*\{)/g, `<div>a!tagField(
        labelPosition: "ABOVE",
        marginAbove: "NONE",
        marginBelow: "NONE",
        tags:{ `);

  result = result.replace(/(\-tag\s*\{)/g, `<div>a!tagItem(
        backgroundColor: "${getRandomLightColor()}",
        text:{ `);


  result = result.replace(/(\-rd\s*\{)/g, `<div>a!richTextDisplayField(
        value:{ `);

  result = result.replace(/(\-rdGh\s*\()/g, `<div>a!richTextDisplayField(`);


  result = result.replace(/(\-rtGh\s*\()/g, `<div>a!richTextItem(`);
  result = result.replace(/(\-rt\s*\{)/g, `<div>a!richTextItem(
        color: "STANDARD",
        text:{ `);


  result = result.replace(/(\-riGh\s*\()/g, `<div>a!richTextIcon(`);
  result = result.replace(/(\-ri\s*\{)/g, `<div>a!richTextIcon(
        color: "${random_hex_color_code()}",
        icon:{ `);

  result = result.replace(/(\-sectionGh\s*\()/g, `<div>a!sectionLayout(`);      
  result = result.replace(/(\-section\s*\{)/g, `<div>a!sectionLayout(
        divider: "ABOVE",
        dividerColor: "${random_hex_color_code()}",
        labelSize: "MEDIUM",
        labelColor: "${random_hex_color_code()}",
        contents:{ `);


  result = result.replace(/(\-stm\s*\{)/g, `<div>a!stampField(
        backgroundColor: "#000",
        text: {},
        icon: { `);

  return result;
}



let pixelCodeForMultipleValueHolder = (data) => {
  let result = data;
  // result = getFinalResult(result, /(?<=\-\w+\s*)\{/g, `\n}\n)</div>`);
  result = pixelCodeHeightHandler(result);
  result = pixelCodeUtils(result);
  return result;
}