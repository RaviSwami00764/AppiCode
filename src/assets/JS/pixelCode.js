function formatAppianCode(appianCode) {
    // Split the code into lines
    const lines = appianCode.split('\n');
    
    // Define the indentation level and the result
    let indentationLevel = 0;
    let formattedCode = '';
  
    // Regular expression to match indentation and dedentation
    const indentRegex = /^(\s*)\{/;
    const dedentRegex = /^(\s*)\}/;
  
    // Loop through each line
    for (const line of lines) {
      const indentMatch = line.match(indentRegex);
      const dedentMatch = line.match(dedentRegex);
  
      if (indentMatch) {
        // Increase the indentation level
        indentationLevel++;
      } else if (dedentMatch) {
        // Decrease the indentation level
        indentationLevel--;
      }
  
      // Add the formatted line with the appropriate indentation
      formattedCode += ' '.repeat(indentationLevel * 2) + line.trim() + '\n';
    }
  
    return formattedCode.trim(); // Remove trailing whitespace
  }

//   function formatHTML(htmlString) {
//     // Create a DOMParser to parse the HTML string
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlString, 'text/html');
  
//     // Create an XMLSerializer to serialize the parsed document
//     const serializer = new XMLSerializer();
  
//     // Serialize the document with proper indentation and line breaks
//     const formattedHTML = serializer.serializeToString(doc);
  
//     return formattedHTML;
//   }
  

function formatHTML(htmlString) {
    // Create a DOMParser to parse the HTML string
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
  
    // Create an XMLSerializer to serialize the parsed document
    const serializer = new XMLSerializer();
  
    // Helper function to recursively format the inner content
    function formatInnerContent(node) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        for (let i = 0; i < node.childNodes.length; i++) {
          formatInnerContent(node.childNodes[i]);
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        // Trim and reassign the formatted text
        node.textContent = node.textContent.trim();
      }
    }
  
    // Format the inner content of the document
    formatInnerContent(doc);
  
    // Serialize the document with proper indentation and line breaks
    const formattedHTML = serializer.serializeToString(doc);
  
    return formattedHTML;
  }

  
  

const generateAppianCode=()=>{
    var result = codeEditor.getValue();
    result = result.replace(/^\s+/gm, ' ');
    result = quickRegexCodeGenerator(result);
    result = pixelCodeForSingleValueHolder(result);
    result = pixelCodeForMultipleValueHolder(result);
    console.log(result);
    result = setLabelATFinal(result);
    // APIs Call
    result = result.replace(/\n+/g,"\n");
    result = callCalendarAPI(result);
    result = formatHTML(result);
    let target = document.getElementById('content2');
    target.innerHTML = `<pre>${result}</pre>`;

    // return result;
    syntaxHighlights();
}


const getAppianCode=()=>{
    let data = codeEditor.getValue();
    let result = generateAppianCode(data);
    
    let target = document.getElementById('content2');
    target.innerHTML = `<pre>${result}</pre>`;
    console.log(result);
    // showDownloadButton(false);    
    // syntaxHighlights();
    // document.getElementById("code-run").addEventListener("click", getAppianCode);    
}


