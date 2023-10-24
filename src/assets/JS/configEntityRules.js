// ---------Under development-----------
// =====================================
// Recommend design configurations using Record


const getMainConfigColumnLayout=(fieldName, toConfig)=>{
    return `<pre>a!columnLayout(
                  contents: {
                    a!dropdownField(
                      label: "${fieldName}",
                      labelPosition: "ABOVE",
                      placeholder: "--- Select a ${fieldName} ---",
                      choiceLabels: index(local!${fieldName}, "${fieldName}Name", {}),
                      choiceValues: index(local!${fieldName}, "Id", {}),
                      value: index(local!${toConfig}, "${fieldName}Id", {}),
                      saveInto: { local!${toConfig}.${fieldName}Id },
                      searchDisplay: "AUTO",
                      required: true(),
                      validations: {}
                    )
                  }
                )</pre>`
}


// const mainConfigColumnsLayout=(fieldNames, toConfig)=>{
//     return fieldNames.map((fieldName)=>{return getDropDown(fieldName,toConfig)}).join(",\n");
// }


const mainConfigColumnsLayout=(fieldNames, toConfig)=>{
    return `<pre>a!columnsLayout(
                    columns: {
                        ${fieldNames.map((fieldName)=>{return getDropDown(fieldName,toConfig)}).join(",\n")}  
                    }
                )</pre>`
}


const getButtonLayout=(toConfig,cdtName,fieldIds,dseTable,checkIsNullFun,castingRule)=>{
    return `<pre>a!buttonLayout(
                    primaryButtons: {
                        a!buttonWidget(
                        label: "Add ${toConfig}",
                        tooltip: "Add ${toConfig}",
                        saveInto: {
                            a!save(
                            local!${toConfig},
                            a!forEach(
                                items: local!${toConfig},
                                expression: ${castingRule}(
                                ${cdtName}: fv!item,
                                ${fieldIds.map((x)=>{return `${x}: tointeger(local!${x})`}).join(",\n")}
                                )
                            )
                            ),
                            a!writeToDataStoreEntity(
                            dataStoreEntity: ${dseTable},
                            valueToStore: { local!${toConfig} },
                            onSuccess: {
                                a!save(local!show, 0),
                                a!save(local!${toConfig}, null),
                                ${fieldIds.map((x)=>{return `a!save(local!${x}, null)`}).join(",\n")}
                            }
                            )
                        },
                        submit: true(),
                        style: "PRIMARY",
                        disabled: or(
                            ${fieldIds.map((x)=>{return `${checkIsNullFun}(local!${x})`}).join(",\n")}
                        ),
                        showWhen: if(
                            toboolean(local!isUpdate),
                            false(),
                            true()
                        ),
                        validate: true()
                        ),
                        a!buttonWidget(
                        label: "Update ${toConfig}",
                        saveInto: {
                            a!save(
                            local!${toConfig},
                            a!forEach(
                                items: local!${toConfig},
                                expression: ${castingRule}(
                                ${cdtName}: fv!item,
                                ${fieldIds.map((x)=>{return `${x}: tointeger(local!${x})`}).join(",\n")}
                                )
                            )
                            ),
                            a!writeToDataStoreEntity(
                            dataStoreEntity: ${dseTable},
                            valueToStore: { local!${toConfig} },
                            onSuccess: {
                                a!save(local!show, 0),
                                a!save(local!isUpdate,0),
                                a!save(local!${toConfig}, null),
                                ${fieldIds.map((x)=>{return `a!save(local!${x}, null)`}).join(",\n")}
                            }
                            )
                        },
                        disabled: or(
                            ${fieldIds.map((x)=>{return `${checkIsNullFun}(local!${x})`}).join(",\n")}
                        ),
                        submit: true(),
                        style: "PRIMARY",
                        showWhen: if(
                            toboolean(local!isUpdate),
                            true(),
                            false()
                        ),
                        validate: true()
                        )
                    },
                    secondaryButtons: {
                        a!buttonWidget(
                        label: "Close",
                        saveInto: {
                            a!save(local!show, 0),
                            a!save(local!isUpdate,0),
                            a!save(local!${toConfig}, null),
                            ${fieldIds.map((x)=>{return `a!save(local!${x}, null)`}).join(",\n")}
                        },
                        style: "SECONDARY"
                        )
                    }
                    )</pre>`}