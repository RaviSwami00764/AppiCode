let callCalendarAPI = (result)=>{
    result = result.replace(/\$\s*calendarAPI/g,`<div>a!localVariables(
        <div>local!month: month(today()),
        local!year: year(today()),
        local!startDay: date(local!year, local!month, 1),
        local!endDay: eomonth(local!startDay, 0),
        local!startWeekDay: weekday(local!startDay, 1),
        local!startDayForCal: local!startDay - local!startWeekDay,
        local!datesForCal: a!forEach(
          items: enumerate(42) + 1,
          expression: local!startDayForCal + fv!item
        ),
        local!chunkSize: 7,
        local!chunks: a!forEach(
          items: enumerate(6) + 1,
          expression: if(
            fv!index = 1,
            rdrop(
              local!datesForCal,
              length(local!datesForCal) - local!chunkSize
            ),
            ldrop(
              rdrop(
                local!datesForCal,
                length(local!datesForCal) - (fv!index * local!chunkSize)
              ),
              local!chunkSize * (fv!index - 1)
            )
          )
        ),
        local!loggedInUser,
        local!taskAssignment,
        local!formattedTasks: a!forEach(
          items: local!taskAssignment,
          expression: {
            c1: 0,
            c3: index(fv!item, "RequestedOn", {}),
            c7: index(fv!item, "TaskName", {}),
            c21: todate(index(fv!item, "RequestedOn", {})) + 3,
          }
        ),
        local!tasks,
        local!taskData: append(local!tasks, local!formattedTasks),</div>
        <div>{
          <div>a!cardLayout(
            contents: {
              <div> a!sideBySideLayout(
                items: {
                  <div>a!sideBySideItem(
                    item: <div>a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        <div>a!richTextItem(
                          text: {
                            <div>a!richTextItem(
                              text: text(local!startDay, "MMM") & " ",
                              style: { "STRONG" }
                            ),</div>
                            text(local!startDay, "YYYY")
                          },
                          size: "MEDIUM_PLUS"
                        )</div>
                      }
                    ),</div>
                    width: "AUTO"
                  ),</div>
                  <div>a!sideBySideItem(
                    item: <div>a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        <div>a!richTextItem(
                          text: {
                            <div>a!richTextIcon(
                              icon: "angle-left",
                              link: <div>a!dynamicLink(
                                value: local!month,
                                saveInto: {
                                  a!save(
                                    local!month,
                                    if(
                                      save!value = 1,
                                      12,
                                      tointeger(save!value) - 1
                                    )
                                  ),
                                  a!save(
                                    local!year,
                                    if(save!value = 1, local!year - 1, local!year)
                                  )
                                }
                              ),</div>
                              linkStyle: "STANDALONE"
                            ),</div>
                            " " & text(local!startDay, "MMM") & " ",
                            <div>a!richTextIcon(
                              icon: "angle-right",
                              link: a!dynamicLink(
                                value: local!month,
                                saveInto: {
                                  a!save(
                                    local!month,
                                    if(
                                      save!value = 12,
                                      1,
                                      tointeger(save!value) + 1
                                    )
                                  ),
                                  a!save(
                                    local!year,
                                    if(save!value = 12, local!year + 1, local!year)
                                  )
                                }
                              ),
                              linkStyle: "STANDALONE"
                            )</div>
                          },
                          size: "MEDIUM"
                        )</div>
                      }
                    )</div>,
                    width: "MINIMIZE"
                  )</div>
                },
                alignVertical: "MIDDLE"
              )</div>,
              <div>a!sectionLayout(
                label: "",
                contents: {},
                divider: "ABOVE",
                marginBelow: "NONE"
              ),</div>
              <div>a!sectionLayout(
                label: "",
                contents: {}
              ),</div>
              <div>a!sectionLayout(
                label: "",
                contents: {}
              ),</div>
              <div>a!columnsLayout(
                columns: {
                  <div>a!columnLayout(
                    contents: {
                      <div>a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          <div>a!richTextItem(text: { "SUN" }, style: { "STRONG" })</div>
                        },
                        preventWrapping: true,
                        align: "CENTER"
                      )</div>
                    }
                  ),</div>
                  <div>a!columnLayout(
                    contents: {
                      <div>a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          <div>a!richTextItem(text: { "MON" }, style: { "STRONG" })</div>
                        },
                        preventWrapping: true,
                        align: "CENTER"
                      )</div>
                    }
                  ),</div>
                  <div>a!columnLayout(
                    contents: {
                      <div>a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          <div>a!richTextItem(text: { "TUES" }, style: { "STRONG" })</div>
                        },
                        preventWrapping: true,
                        align: "CENTER"
                      )</div>
                    }
                  ),</div>
                  <div>a!columnLayout(
                    contents: {
                      <div>a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          <div>a!richTextItem(text: { "WED" }, style: { "STRONG" })</div>
                        },
                        preventWrapping: true,
                        align: "CENTER"
                      )</div>
                    }
                  ),</div>
                  <div>a!columnLayout(
                    contents: {
                      <div>a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          <div>a!richTextItem(text: { "THU" }, style: { "STRONG" })</div>
                        },
                        preventWrapping: true,
                        align: "CENTER"
                      )</div>
                    }
                  ),</div>
                  <div>a!columnLayout(
                    contents: {
                      <div>a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          <div>a!richTextItem(text: { "FRI" }, style: { "STRONG" })</div>
                        },
                        preventWrapping: true,
                        align: "CENTER"
                      )</div>
                    }
                  ),</div>
                  <div>a!columnLayout(
                    contents: {
                      <div>a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          <div>a!richTextItem(text: { "SAT" }, style: { "STRONG" })</div>
                        },
                        preventWrapping: true,
                        align: "CENTER"
                      )</div>
                    }
                  )</div>
                },
                stackWhen: { "NEVER" }
              ),</div>
              <div>a!sectionLayout(
                label: "",
                contents: {},
                divider: "ABOVE",
                marginBelow: "NONE"
              ),</div>
              <div>a!forEach(
                items: local!chunks,
                expression: <div>a!columnsLayout(
                  columns: <div>a!forEach(
                    items: fv!item,
                    expression: <div>a!columnLayout(
                      contents: <div>a!localVariables(
                        local!currentDayTasks: index(
                          local!taskData,
                          wherecontains(
                            todate(fv!item),
                            todate(index(local!taskData, "c21", {}))
                          ),
                          {}
                        ),</div>
                        {
                          <div>a!stampField(
                            labelPosition: "COLLAPSED",
                            text: right(concat("00", day(fv!item)), 2),
                            backgroundColor: if(
                              or(
                                todate(index(local!currentDayTasks, "c21", {})) < today()
                              ),
                              "#e73838",
                              if(
                                rule!DCM_UtilsCheckIsNull(local!currentDayTasks),
                                if(
                                  fv!item = today(),
                                  "ACCENT",
                                  if(
                                    month(fv!item) = month(local!startDay),
                                    "#fafafa",
                                    /*Normal*/
                                    /*"#e73838" Red*/
                                    /*"#666666" Dark Grey*/
                                    "SECONDARY"
                                  )
                                ),
                                "#666666"
                              )
                            ),
                            contentColor: if(
                              or(
                                todate(index(local!currentDayTasks, "c21", {})) < today()
                              ),
                              "#FFFFFF",
                              if(
                                rule!DCM_UtilsCheckIsNull(local!currentDayTasks),
                                if(
                                  fv!item = today(),
                                  "#FFFFFF",
                                  if(
                                    month(fv!item) = month(local!startDay),
                                    "#000000",
                                    "#FFFFFF"
                                  )
                                ),
                                "#FFFFFF"
                              )
                            ),
                            link: if(
                              and(
                                month(fv!item) = month(local!startDay),
                                rule!DCM_UtilsCheckIsNull(tostring(local!currentDayTasks)) = false()
                              ),
                              a!dynamicLink(
                                saveInto: a!save(ri!selectedDate, todate(fv!item))
                              ),
                              {}
                            ),
                            size: "TINY",
                            align: "CENTER",
                            tooltip: if(
                              rule!DCM_UtilsCheckIsNull(local!currentDayTasks),
                              {},
                              if(
                                todate(fv!item) < today(),
                                "Overdue Tasks",
                                "Pending Tasks"
                              )
                            )
                          ),</div>
                          <div>a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              <div>a!richTextItem(
                                text: { a!richTextIcon(icon: "circle") },
                                color: "ACCENT",
                                size: "STANDARD",
                                style: { "STRONG" }
                              )</div>
                            },
                            showWhen: if(
                              and(
                                month(fv!item) = month(local!startDay),
                                contains(
                                  todate(index(local!taskData, "c21", {})),
                                  todate(fv!item)
                                )
                              ),
                              true(),
                              false()
                            ),
                            align: "CENTER"
                          )</div>
                        }
                      )</div>
                    )</div>
                  ),</div>
                  stackWhen: { "NEVER" }
                )</div>
              ),</div>
              <div>a!sectionLayout(
                label: "",
                contents: {},
                divider: "ABOVE",
                marginBelow: "NONE"
              ),</div>
              
            },
            height: "AUTO",
            style: "NONE",
            shape: "ROUNDED",
            padding: "STANDARD",
            marginBelow: "STANDARD"
          ),</div>
          <div>a!sectionLayout(
            label: "",
            contents: {},
            divider: "NONE",
            marginBelow: "STANDARD"
          )</div>
        }
      )</div>`);  
    return result;  
}