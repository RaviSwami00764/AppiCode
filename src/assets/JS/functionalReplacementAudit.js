let getFunctionalReplacement=(str,actionTypeId)=>{
    let mRegex2 = /(?<=\=\>\$\m)\.\w+\,\w+\!\w+\.\w+\.\w+/;
    let setMRegex2 = /\=\>\$\m\.\w+\,\w+\!\w+\.\w+\.\w+/;
    let matchVal2 =  mRegex2.exec(str)?mRegex2.exec(str)[0]:"";
    str = str.replace(setMRegex2,"");

    let mRegex1 = /(?<=\=\>\$\m\,)\w+\!\w+\.\w+\.\w+/;
    let setMRegex1 = /\=\>\$\m\,\w+\!\w+\.\w+\.\w+/;
    let matchVal =  mRegex1.exec(str)?mRegex1.exec(str)[0]:"";
    str = str.replace(setMRegex1,"");

    let iconRegex = /(?<=\=\>)\$icons\.[\w\-]+\.[\w\-]+/;
    let setIconRegex = /\=\>\$\icons\.[\w\-]+\.[\w\-]+/;
    let iconVal =  iconRegex.exec(str)?iconRegex.exec(str)[0]:"";
    str = str.replace(setIconRegex,"");

    let widthRegex = /(?<=\=\>)\d*\w*x{0,1}/;
    let setWidthRegex = /\=\>\d*\w*x{0,1}/;
    let widht =  widthRegex.exec(str)?widthRegex.exec(str)[0]:"auto";
    console.log(widht);
    str = str.replace(setWidthRegex,"");
    
    a = str.split(',');
    console.log(matchVal2);
    let valueToSet = "";
    if(actionTypeId == 1){
        valueToSet = matchVal2.length>1?`$match${matchVal2} fv!item.${a[0]}`:matchVal.length>1?`$match ${matchVal} fv!item.${a[0]}`:iconVal.length>1?`${iconVal} fv!item.${a[0]}`:`$ fv!item.${a[0]}`;
    }
    if(actionTypeId == 2){
        valueToSet = matchVal2.length>1?`$match${matchVal2} ${gridLayoutData}.${a[0]}`:matchVal.length>1?`$match ${matchVal} ${gridLayoutData}.${a[0]}`:iconVal.length>1?`${iconVal} ${gridLayoutData}.${a[0]}`:`$ ${gridLayoutData}.${a[0]}`;
    }
    if(actionTypeId == 3){
        valueToSet =  matchVal2.length>1?`$match${matchVal2} fv!row.${a[0]}`:matchVal.length>1?`$match ${matchVal} fv!row.${a[0]}`:iconVal.length>1?`${iconVal} fv!row.${a[0]}`:`$ fv!row.${a[0]}`;
    }
    if(actionTypeId == 4){
        valueToSet = matchVal2.length>1?`$match${matchVal2} ${gridLayoutData}['${recordObj[a[0]]}']`:matchVal.length>1?`$match ${matchVal} ${gridLayoutData}['${recordObj[a[0]]}']`:iconVal.length>1?`${iconVal} ${gridLayoutData}['${recordObj[a[0]]}']`:`${gridLayoutData}['${recordObj[a[0]]}']`;
    }
    if(actionTypeId == 5){
        valueToSet = matchVal2.length>1?`$match${matchVal2} fv!item['${recordObj[a[0]]}']`:matchVal.length>1?`$match ${matchVal} fv!item['${recordObj[a[0]]}']`:iconVal.length>1?`${iconVal} fv!item['${recordObj[a[0]]}']`:`fv!item['${recordObj[a[0]]}']`;
    }

    if(actionTypeId == 1){
        if(matchVal2.length>1){
            valueToSet = `$match${matchVal2} fv!item.${a[0]}`;
        } else if(matchVal.length>1){
            valueToSet = `$match ${matchVal} fv!item.${a[0]}`;
        } else if(iconVal.length>1){
            valueToSet = `${iconVal} fv!item.${a[0]}`;
        } else {
            valueToSet = `$ fv!item.${a[0]}`;
        }
    } else if(actionTypeId == 2){
        if(matchVal2.length>1){
            valueToSet = `$match${matchVal2} ${gridLayoutData}.${a[0]}`;
        } else if(matchVal.length>1){
            valueToSet = `$match ${matchVal} ${gridLayoutData}.${a[0]}`;
        } else if(iconVal.length>1){
            valueToSet = `${iconVal} ${gridLayoutData}.${a[0]}`;
        } else {
            valueToSet = `$ ${gridLayoutData}.${a[0]}`;
        }
    } else if(actionTypeId == 3){
        if(matchVal2.length>1){
            valueToSet = `$match${matchVal2} fv!row.${a[0]}`;
        } else if(matchVal.length>1){
            valueToSet = `$match ${matchVal} fv!row.${a[0]}`;
        } else if(iconVal.length>1){
            valueToSet = `${iconVal} fv!row.${a[0]}`;
        } else {
            valueToSet = `$ fv!row.${a[0]}`;
        }
    } else if(actionTypeId == 4){
        if(matchVal2.length>1){
            valueToSet = `$match${matchVal2} ${gridLayoutData}['${recordObj[a[0]]}']`;
        } else if(matchVal.length>1){
            valueToSet = `$match ${matchVal} ${gridLayoutData}['${recordObj[a[0]]}']`;
        } else if(iconVal.length>1){
            valueToSet = `${iconVal} ${gridLayoutData}['${recordObj[a[0]]}']`;
        } else {
            valueToSet = `${gridLayoutData}['${recordObj[a[0]]}']`;
        }
    } else if(actionTypeId == 5){
        if(matchVal2.length>1){
            valueToSet = `$match${matchVal2} fv!item['${recordObj[a[0]]}']`;
        } else if(matchVal.length>1){
            valueToSet = `$match ${matchVal} fv!item['${recordObj[a[0]]}']`;
        } else if(iconVal.length>1){
            valueToSet = `${iconVal} fv!item['${recordObj[a[0]]}']`;
        } else {
            valueToSet = `fv!item['${recordObj[a[0]]}']`;
        }
    }
    
    return {a,valueToSet,widht};
}



