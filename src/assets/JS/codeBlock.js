// ---------Code-editor-syntax-highlighting-with-scroll-sync-and-keyEvents-----------


// Function to highlight matching opening and closing brackets
function highlightBrackets(element) {
    let code = element.innerHTML;
    code = code.replace(/(\{|\(|\[|\')/g, '<span class="highlight-bracket">$1</span>');
    code = code.replace(/(\}|\)|\]|\')/g, '<span class="highlight-bracket">$1</span>');
    element.innerHTML = code;
}

// Function to remove bracket highlighting
function removeBracketHighlights(element) {
    let code = element.innerHTML;
    code = code.replace(/<span class="highlight-bracket">/g, '');
    code = code.replace(/<\/span>/g, '');
    element.innerHTML = code;
}

function update(text) {
    var keywords_regex = /(and|null|true|false|if|else|index)/g;
    let result_element = document.querySelector("#highlighting-content");
    // Handle final newlines
    // if(text[text.length-1] == '\n') { // If the last character is a newline character
    //     text += "\n"; // Add a placeholder space character to the final line 
    // }
    // Update code
    // text = text.replace(/(\w+)(?=\s\-)/g, `<span class='field-name'>$1</span>`);
    text = text.replace(/\n/g,`<br>`);
    text = text.replace(/(\s)/g,`<span>&nbsp;</span>`);
    // text = text.replace(/(\-\-\w+)/g, `<span class='rule-inputs'>$1</span>`);
    text = text.replace(/(\-\w+)/g,`<span class='code-keywords'>$1</span>`);
    text = text.replace(/(\$\w+)/g, `<span class='code-keywords'>$1</span>`);
    text = text.replace(/((type|rule|a|cons)!\w+)/g, `<span class='code-keywords'>$1</span>`);
    

    text = text.replace(/((ri|local)!\w+|\.\w+)/g, `<span class='rule-inputs'>$1</span>`);
    
    text = text.replace(/(\w+:)/g, `<span class='code-key'>$1</span>`);

    text = text.replace(keywords_regex,`<span class='keywords'>$1</span>`);
    text = text.replace(/\/\*/g, `<span class='code-comment'>/*`);
    text = text.replace(/\*\//g, `*/</span>`);
    text = text.replace(/"(.*?)"/g, `<span class='code-blue'>&quot;$1&quot;</span>`);

    result_element.addEventListener("mouseover", function(event) {
        highlightBrackets(event.target);
    });
    result_element.addEventListener("mouseout", function(event) {
        removeBracketHighlights(event.target);
    });
    
    result_element.innerHTML = text;
    // Syntax Highlight
    // Prism.highlightElement(result_element);
    // syntaxHighlights();
}



function sync_scroll(element) {
    /* Scroll result to scroll coords of event - sync with textarea */
    let result_element = document.querySelector("#highlighting");
    // Get and set x and y
    result_element.scrollTop = element.scrollTop;
    result_element.scrollLeft = element.scrollLeft;
}

function execute_keyEvents(element, event, caret_position, event_code){
    let code = element.value;
    event.preventDefault(); // stop normal
    let before_event = code.slice(0, element.selectionStart); // text before event
    // let function_rgx = /\-\w+/g;
    // let data = function_rgx.match(function_rgx);
    
    // console.log(before_event); 
    let after_event = code.slice(element.selectionEnd, element.value.length); // text after event
    let cursor_pos = element.selectionEnd + caret_position; // where cursor moves after event result - moving forward by caret_position char to after event result
    element.value = before_event + event_code + after_event; // add event code
    // move cursor
    element.selectionStart = cursor_pos;
    element.selectionEnd = cursor_pos;

    update(element.value); 
}

function check_keyEvents(element, event) {
    let code = element.value;
    var key = event.which || event.keyCode; // Detecting keyCode

    let count_open_brackets = code.slice(0, element.selectionStart).match(/\{/g)?code.slice(0, element.selectionStart).match(/\{/g).length:0;
    let count_close_brackets = code.slice(0, element.selectionStart).match(/\}/g)?code.slice(0, element.selectionStart).match(/\}/g).length:0;
    
    let steps = count_open_brackets-count_close_brackets>-1?count_open_brackets-count_close_brackets:0;
    // Detecting Ctrl
    var ctrl = event.ctrlKey ? event.ctrlKey : ((key === 17)
        ? true : false);
  
    if (key == 191 && ctrl) {
        execute_keyEvents(element, event, 2, "/**/");
    }
    // if(event.key == "Tab") {
    //     execute_keyEvents(element, event, 4, "\t");
    // }
    if(event.key == "Enter") {
        execute_keyEvents(element, event, steps+1, "\n"+" ".repeat(steps+1));
    }
    if(event.key == "{") {
        execute_keyEvents(element, event, 1, "{\n"+" ".repeat(steps)+"}");
    }
    if(event.key == "(") {
        execute_keyEvents(element, event, 1, "("+")");
    }
    if(event.key == "[") {
        execute_keyEvents(element, event, 1, "["+"]");
    }
    if(event.key == "'") {
        execute_keyEvents(element, event, 1, "'"+"'");
    }
    if(event.key == `"`) {
        execute_keyEvents(element, event, 1, `"`+`"`);
    }
}