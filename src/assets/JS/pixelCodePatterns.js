let cardPatterns = {   
    'mb0'  : `marginBelow: "NONE"`,
    'mb1'  : `marginBelow: "EVEN_LESS"`,
    'mb2'  : `marginBelow: "LESS"`,
    'mb3'  : `marginBelow: "STANDARD"`,
    'mb4'  : `marginBelow: "MORE"`,
    'mb5'  : `marginBelow: "EVEN_MORE"`,   
    'pd0'  : `padding: "NONE"`,
    'pd1'  : `padding: "EVEN_LESS"`,
    'pd2'  : `padding: "LESS"`,
    'pd3'  : `padding: "STANDARD"`,
    'pd4'  : `padding: "MORE"`,
    'pd5'  : `padding: "EVEN_MORE"`,
    'ma0'  : `marginAbove: "NONE"`,
    'ma1'  : `marginAbove: "EVEN_LESS"`,
    'ma2'  : `marginAbove: "LESS"`,
    'ma3'  : `marginAbove: "STANDARD"`,
    'ma4'  : `marginAbove: "MORE"`,
    'ma5'  : `marginAbove: "EVEN_MORE"`,
    'ssd'  : `showShadow: true`,
    'hb'   : `showBorder: false`,  
    'sr'   : `shape: "SEMI_ROUNDED"`,
    'es'   : `height: "EXTRA_SHORT"`,
    'ss'   : `height: "SHORT_PLUS"`,
    'mm'   : `height: "MEDIUM_PLUS"`,
    's'    : `height: "SHORT"`,
    'tt'   : `height: "TALL_PLUS"`,
    'm'    : `height: "MEDIUM"`,
    'et'   : `height: "EXTRA_TALL"`,
    't'    : `height: "TALL"`,
    'r'    : `shape: "ROUNDED"`,
    'dbt'  : `decorativeBarPosition: "TOP"`,
    'dbb'  : `decorativeBarPosition: "BOTTOM"`,
    'dbs'  : `decorativeBarPosition: "START"`,
    'dbe'  : `decorativeBarPosition: "END"`,
    'dba'  : `decorativeBarColor: "ACCENT"`,
    'dbps'  : `decorativeBarColor: "POSITIVE"`,
    'dbn'  : `decorativeBarColor: "NEGATIVE"`,
    'dbw'  : `decorativeBarColor: "WARN"`,
  };

  let rdPatterns = {   
    'mb0'  : `marginBelow: "NONE"`,
    'mb1'  : `marginBelow: "EVEN_LESS"`,
    'mb2'  : `marginBelow: "LESS"`,
    'mb3'  : `marginBelow: "STANDARD"`,
    'mb4'  : `marginBelow: "MORE"`,
    'mb5'  : `marginBelow: "EVEN_MORE"`,   
    'ma0'  : `marginAbove: "NONE"`,
    'ma1'  : `marginAbove: "EVEN_LESS"`,
    'ma2'  : `marginAbove: "LESS"`,
    'ma3'  : `marginAbove: "STANDARD"`,
    'ma4'  : `marginAbove: "MORE"`,
    'ma5'  : `marginAbove: "EVEN_MORE"`,
    'lpad' : `labelPosition: "ADJACENT"`,
    'lpa'  : `labelPosition: "ABOVE"`,
    'lpc'  : `labelPosition: "COLLAPSED"`,
    'lpj'  : `labelPosition: "JUSTIFIED"`,
    'l'    : `align: "LEFT"`,
    'c'    : `align: "CENTER"`,
    'r'    : `align: "RIGHT"`,
    'pw'   : `preventWrapping: true`,
  };
  
  let rtPatterns = {   
    'lsn' : `linkStyle: "STANDALONE"`,   
    'em'  : `style: "EMPHASIS"`,
    'st'  : `style: "STRONG"`,
    'ul'  : `style: "UNDERLINE"`,
    'mm'  : `size: "MEDIUM_PLUS"`,   
    'm'   : `size: "MEDIUM"`,
    'll'  : `size: "LARGE_PLUS"`,   
    'el'  : `size: "EXTRA_LARGE"`,   
    'l'   : `size: "LARGE"`,   
    's'   : `size: "SMALL"`,
    'cla' : `color: "ACCENT"`,   
    'clps': `color: "POSITIVE"`,   
    'cln' : `color: "NEGATIVE"`,   
    'cls' : `color: "SECONDARY"`,   
  };

  let riPatterns = {   
    'lsn' : `linkStyle: "STANDALONE"`,   
    'mm'  : `size: "MEDIUM_PLUS"`,   
    'm'   : `size: "MEDIUM"`,
    'll'  : `size: "LARGE_PLUS"`,   
    'el'  : `size: "EXTRA_LARGE"`,   
    'l'   : `size: "LARGE"`,   
    's'   : `size: "SMALL"`,
    'cla' : `color: "ACCENT"`,   
    'clps': `color: "POSITIVE"`,   
    'cln' : `color: "NEGATIVE"`,   
    'cls' : `color: "SECONDARY"`,   
  };

  let clsPattern = {   
    'mb0'  : `marginBelow: "NONE"`,
    'mb1'  : `marginBelow: "EVEN_LESS"`,
    'mb2'  : `marginBelow: "LESS"`,
    'mb3'  : `marginBelow: "STANDARD"`,
    'mb4'  : `marginBelow: "MORE"`,
    'mb5'  : `marginBelow: "EVEN_MORE"`,   
    'ma0'  : `marginAbove: "NONE"`,
    'ma1'  : `marginAbove: "EVEN_LESS"`,
    'ma2'  : `marginAbove: "LESS"`,
    'ma3'  : `marginAbove: "STANDARD"`,
    'ma4'  : `marginAbove: "MORE"`,
    'ma5'  : `marginAbove: "EVEN_MORE"`,
    'swph'   : `stackWhen: "PHONE"`,
    'swtpt'   : `stackWhen: "TABLET_PORTRAIT"`,
    'swtl'   : `stackWhen: "TABLET_LANDSCAPE"`,
    'swdw'    : `stackWhen: "DESKTOP_WIDE"`,
    'swd'   : `stackWhen: "DESKTOP"`,
    'swn'    : `stackWhen: "NEVER"`,
    'sd'    : `showDividers: true`,
    'std'  : `spacing: "STANDARD"`,
    'non'  : `spacing: "NONE"`,
    'den'  : `spacing: "DENSE"`,
    'sar'  : `spacing: "SPARSE"`,
    't'  : `alignVertical: "TOP"`,
    'm'  : `alignVertical: "MIDDLE"`,
    'b'  : `alignVertical: "BOTTOM"`,
  };

  let clPattern = {   
    'en'   : `width: "EXTRA_NARROW"`,
    'nn'   : `width: "NARROW_PLUS"`,
    'n'    : `width: "NARROW"`,
    'mm'   : `width: "MEDIUM_PLUS"`,
    'ww'   : `width: "WIDE_PLUS"`,
    'w'    : `width: "WIDE"`,
    'm'    : `width: "MEDIUM"`,
    '1x'   : `width: "1X"`,
    '2x'   : `width: "2X"`,
    '3x'   : `width: "3X"`,
    '4x'   : `width: "4X"`,
    '5x'   : `width: "5X"`,
    '6x'   : `width: "6X"`,
    '7x'   : `width: "7X"`,
    '8x'   : `width: "8X"`,
    '9x'   : `width: "9X"`,
    '10x'  : `width: "10X"`,
  };

  let sectionPatterns = {   
    'mb0'  : `marginBelow: "NONE"`,
    'mb1'  : `marginBelow: "EVEN_LESS"`,
    'mb2'  : `marginBelow: "LESS"`,
    'mb3'  : `marginBelow: "STANDARD"`,
    'mb4'  : `marginBelow: "MORE"`,
    'mb5'  : `marginBelow: "EVEN_MORE"`,   
    'col'  : `isCollapsible: true`,   
    'inicol'  : `isInitiallyCollapsed: true`,      
    'da'  : `divider: "ABOVE"`, 
    'db'  : `divider: "BELOW"`, 
    'dn'  : `divider: "NONE"`,    
    'ma0'  : `marginAbove: "NONE"`,
    'ma1'  : `marginAbove: "EVEN_LESS"`,
    'ma2'  : `marginAbove: "LESS"`,
    'ma3'  : `marginAbove: "STANDARD"`,
    'ma4'  : `marginAbove: "MORE"`,
    'ma5'  : `marginAbove: "EVEN_MORE"`,
    'es'   : `labelSize: "EXTRA_SHORT"`,
    'mm'   : `labelSize: "MEDIUM_PLUS"`,
    's'    : `labelSize: "SHORT"`,
    'll'   : `labelSize: "LARGE_PLUS"`,
    'm'    : `labelSize: "MEDIUM"`,
    'l'    : `labelSize: "LARGE"`,
    'cla'  : `labelColor: "ACCENT"`,
    'clps' : `labelColor: "POSITIVE"`,
    'cln'  : `labelColor: "NEGATIVE"`,
    'clsc' : `labelColor: "SECONDARY"`,
    'clsd' : `labelColor: "STANDARD"`,
    'dcla'  : `dividerColor: "ACCENT"`,
    'dclsc' : `dividerColor: "SECONDARY"`,
    'dclsd' : `dividerColor: "STANDARD"`,
    't1' : `dividerWeight: "THIN"`,
    't2' : `dividerWeight: "MEDIUM"`,
    't3' : `dividerWeight: "THICK"`,
  };

  let ssPattern = {   
    'mb0'    : `marginBelow: "NONE"`,
    'mb1'    : `marginBelow: "EVEN_LESS"`,
    'mb2'    : `marginBelow: "LESS"`,
    'mb3'    : `marginBelow: "STANDARD"`,
    'mb4'    : `marginBelow: "MORE"`,
    'mb5'    : `marginBelow: "EVEN_MORE"`,   
    'ma0'    : `marginAbove: "NONE"`,
    'ma1'    : `marginAbove: "EVEN_LESS"`,
    'ma2'    : `marginAbove: "LESS"`,
    'ma3'    : `marginAbove: "STANDARD"`,
    'ma4'    : `marginAbove: "MORE"`,
    'ma5'    : `marginAbove: "EVEN_MORE"`,
    'swph'   : `stackWhen: "PHONE"`,
    'swtpt'  : `stackWhen: "TABLET_PORTRAIT"`,
    'swtl'   : `stackWhen: "TABLET_LANDSCAPE"`,
    'swdw'   : `stackWhen: "DESKTOP_WIDE"`,
    'swd'    : `stackWhen: "DESKTOP"`,
    'swn'    : `stackWhen: "NEVER"`,
    'sd'     : `showDividers: true`,
    'std'    : `spacing: "STANDARD"`,
    'non'    : `spacing: "NONE"`,
    'den'    : `spacing: "DENSE"`,
    'sar'    : `spacing: "SPARSE"`,
    't'      : `alignVertical: "TOP"`,
    'm'      : `alignVertical: "MIDDLE"`,
    'b'      : `alignVertical: "BOTTOM"`,
  
  };

  let boxPatterns = {   
    'sr'   : `shape: "SEMI_ROUNDED"`,
    'r'   : `shape: "ROUNDED"`,
    'sq'   : `shape: "SQUARED"`,
    'hb'   : `showBorder: false`,
    'ssd'   : `showShadow: true`,
    'accent'  : `style: "ACCENT"`,
    'ac'  : `style: "ACCENT"`,
    'success'  : `style: "SUCCESS"`,
    'info'  : `style: "INFO"`,
    'inf'  : `style: "INFO"`,
    'warn'  : `style: "WARN"`,
    'error'  : `style: "ERROR"`,
    'sc'  : `style: "SUCCESS"`,
    'pd0'  : `padding: "NONE"`,
    'pd1'  : `padding: "EVEN_LESS"`,
    'pd2'  : `padding: "LESS"`,
    'pd3'  : `padding: "STANDARD"`,
    'pd4'  : `padding: "MORE"`,
    'pd5'  : `padding: "EVEN_MORE"`,
    'mb0'  : `marginBelow: "NONE"`,
    'mb1'  : `marginBelow: "EVEN_LESS"`,
    'mb2'  : `marginBelow: "LESS"`,
    'mb3'  : `marginBelow: "STANDARD"`,
    'mb4'  : `marginBelow: "MORE"`,
    'mb5'  : `marginBelow: "EVEN_MORE"`,   
    'col'  : `isCollapsible: true`,   
    'inicol'  : `isInitiallyCollapsed: true`,   
    'ma0'  : `marginAbove: "NONE"`,
    'ma1'  : `marginAbove: "EVEN_LESS"`,
    'ma2'  : `marginAbove: "LESS"`,
    'ma3'  : `marginAbove: "STANDARD"`,
    'ma4'  : `marginAbove: "MORE"`,
    'ma5'  : `marginAbove: "EVEN_MORE"`,
    'es'   : `labelSize: "EXTRA_SHORT"`,
    'mm'   : `labelSize: "MEDIUM_PLUS"`,
    's'    : `labelSize: "SHORT"`,
    'll'   : `labelSize: "LARGE_PLUS"`,
    'm'    : `labelSize: "MEDIUM"`,
    'l'    : `labelSize: "LARGE"`, 
    'cla'  : `labelColor: "ACCENT"`,
    'clps' : `labelColor: "POSITIVE"`,
    'cln'  : `labelColor: "NEGATIVE"`,
    'clsc' : `labelColor: "SECONDARY"`,
    'clsd' : `labelColor: "STANDARD"`,
    'dcla'  : `dividerColor: "ACCENT"`,
    'dclsc' : `dividerColor: "SECONDARY"`,
    'dclsd' : `dividerColor: "STANDARD"`,
    't1' : `dividerWeight: "THIN"`,
    't2' : `dividerWeight: "MEDIUM"`,
    't3' : `dividerWeight: "THICK"`,
  };

  let tagsPattern = {   
    'mb0'  : `marginBelow: "NONE"`,
    'mb1'  : `marginBelow: "EVEN_LESS"`,
    'mb2'  : `marginBelow: "LESS"`,
    'mb3'  : `marginBelow: "STANDARD"`,
    'mb4'  : `marginBelow: "MORE"`,
    'mb5'  : `marginBelow: "EVEN_MORE"`,   
    'ma0'  : `marginAbove: "NONE"`,
    'ma1'  : `marginAbove: "EVEN_LESS"`,
    'ma2'  : `marginAbove: "LESS"`,
    'ma3'  : `marginAbove: "STANDARD"`,
    'ma4'  : `marginAbove: "MORE"`,
    'ma5'  : `marginAbove: "EVEN_MORE"`,
    'lpad' : `labelPosition: "ADJACENT"`,
    'lpa'  : `labelPosition: "ABOVE"`,
    'lpc'  : `labelPosition: "COLLAPSED"`,
    'lpj'  : `labelPosition: "JUSTIFIED"`,
    'sm'  : `size: "SMALL"`,
    'sd'  : `size: "STANDARD"`,
    'l'    : `align: "LEFT"`,
    'c'    : `align: "CENTER"`,
    'r'    : `align: "RIGHT"`,
    'pw'   : `preventWrapping: true`,
  };
  
  let gcPatterns = {   
    'ac'   : `backgroundColor: "ACCENT"`,
    'sc'   : `backgroundColor: "SUCCESS"`,
    'info'    : `backgroundColor: "INFO"`,
    'wn'   : `backgroundColor: "WARN"`,
    'er'   : `backgroundColor: "ERROR"`,
    'HexCode' : `backgroundColor: "#HexCode"`, 

    'at'   : `width: "AUTO"`,
    'ii'   : `width: "ICON_PLUS"`,
    'i'   : `width: "ICON"`,
    'nn'    : `width: "NARROW_PLUS"`,
    'n'    : `width: "NARROW"`,
    'mm'   : `width: "MEDIUM_PLUS"`,
    'w'    : `width: "WIDE"`,
    'm'    : `width: "MEDIUM"`,
    '1x'   : `width: "1X"`,
    '2x'   : `width: "2X"`,
    '3x'   : `width: "3X"`,
    '4x'   : `width: "4X"`,
    '5x'   : `width: "5X"`,
    '6x'   : `width: "6X"`,
    '7x'   : `width: "7X"`,
    '8x'   : `width: "8X"`,
    '9x'   : `width: "9X"`,
    '10x'  : `width: "10X"`,
    
    'l'  : `align: "START"`,
    'c'  : `align: "CENTER"`,
    'r'  : `align: "END"`,
  };
  let tagPatterns = {   
    'ac'   : `backgroundColor: "ACCENT"`,
    'ps'   : `backgroundColor: "POSTIVE"`,
    'n'    : `backgroundColor: "NEGATIVE"`,
    'sc'   : `backgroundColor: "SECONDARY"`,
  };

  let stmPatterns = {  
    'lpad' : `labelPosition: "ADJACENT"`,
    'lpa'  : `labelPosition: "ABOVE"`,
    'lpc'  : `labelPosition: "COLLAPSED"`,
    'lpj'  : `labelPosition: "JUSTIFIED"`,

    'ac'   : `backgroundColor: "ACCENT"`,
    'ps'   : `backgroundColor: "POSTIVE"`,
    'n'    : `backgroundColor: "NEGATIVE"`,
    'sc'   : `backgroundColor: "SECONDARY"`,

    'cla' : `contentColor: "ACCENT"`,   
    'clps': `contentColor: "POSITIVE"`,   
    'cln' : `contentColor: "NEGATIVE"`,   
    'cls' : `contentColor: "STANDARD"`, 

    'tn' : `size: "TINY"`,   
    'sm' : `size: "SMALL"`,   
    'md' : `size: "MEDIUM"`,   
    'lg' : `size: "LARGE"`,   


    'l'    : `align: "START"`,
    'c'    : `align: "CENTER"`,
    'r'    : `align: "END"`,
  };

  let imgPatterns = {  
    'lpad' : `labelPosition: "ADJACENT"`,
    'lpa'  : `labelPosition: "ABOVE"`,
    'lpc'  : `labelPosition: "COLLAPSED"`,
    'lpj'  : `labelPosition: "JUSTIFIED"`,

    'tn'   : `size: "TINY"`,   
    'icon' : `size: "ICON"`,   
    'gc'   : `size: "GALLERY"`,   
    'sm'   : `size: "SMALL"`,   
    'md'   : `size: "MEDIUM"`,   
    'lg'   : `size: "LARGE"`,  
    'fit'  : `size: "FIT"`,  
    
    'view' : `isThumbnail: true`,  

    'av' : `style: "AVATAR"`,  

    'l'    : `align: "START"`,
    'c'    : `align: "CENTER"`,
    'r'    : `align: "END"`,
  };

  let dmgPatterns = {  
  
  };

  let umgPatterns = {  
  
  };

  let wmgPatterns = {  
  
  };

  let pixelGhPatternsCode = {
    "card"   : cardPatterns,
    "rd"     : rdPatterns,
    "rt"     : rtPatterns,
    "ri"     : riPatterns,
    "cls"    : clsPattern,
    "cl"     : clPattern,
    "section": sectionPatterns,
    "ss"     : ssPattern,
    "box"    : boxPatterns,
    "tags"   : tagsPattern,
    "tag"    : tagPatterns,
    "stm"    : stmPatterns,
    "img"    : imgPatterns,
    "dmg"    : dmgPatterns,
    "umg"    : umgPatterns,
    "wmg"    : wmgPatterns,
    "gc"     : gcPatterns
  }


function pixelCodeTablePatterns(functionName){
    let currentFunctionPatterns = {};
    const finalSet = {};
    if(pixelGhPatternsCode.hasOwnProperty(functionName)){
      currentFunctionPatterns = pixelGhPatternsCode[functionName];
    }
    
    for (const key in currentFunctionPatterns) {
        if (currentFunctionPatterns.hasOwnProperty(key)) {
        const [value, description] = currentFunctionPatterns[key].split(":");
        finalSet[value] = (finalSet[value] || "") + `${key}: ${description}\n`;
        }
    }
    
   return finalSet;
}


