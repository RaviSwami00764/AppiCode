// var $ = require( "jquery" );

// var keywords = ["SELECT","(",")","FROM","WHERE","LIKE","BETWEEN","NOT LIKE","FALSE","NULL","FROM","TRUE","NOT IN"];
// // Keyup event
 // SQL keywords
 var keywords = ["-c", "-cl", "-r", "-ri", "-rt", "--w", "--h", "--m", "{", "}", "(", ")", ",", ";", "-"];
 // Keyup event
 document.querySelector('#code-editor').addEventListener('keyup', e => {
 // Space key pressed
 if (e.keyCode == 32) {
     var newHTML = "";
     // Loop through words
     str = e.target.innerText;
     chunks = str
       .split(RegExp(keywords.map(w => `(${w})`).join('|'), 'i'))
       .filter(Boolean)
     markup = chunks.reduce((acc, chunk) => {
       acc += keywords.includes(chunk.toUpperCase()) ?
       `<span class="statement">${chunk}</span>` :
       `<span class='other'>${chunk}</span>`
       return acc
     }, '')      
     e.target.innerHTML = markup;

     // Set cursor postion to end of text
     var child = e.target.children;
// Create the new range object. 
     var range = document.createRange();
// Here 'sel' is created object for window 
     var sel = window.getSelection();
// Setting start position of a Range 
     range.setStart(child[child.length - 1], 1);
// Collapses the Range to one of its 
     range.collapse(true);
// Remove all old range 
     sel.removeAllRanges();
// Add new range
     sel.addRange(range);
// Focus the element 
     this.focus();
         
     }
 });


// document.querySelector('#edi').addEventListener('keyup', e => {
//   // Space key pressed
//   if (e.keyCode == 32) {
//       // var newHTML = "";
//       // Loop through words
//       data = e.target.innerText;
//       // str.replace(/[\s]+/g, " ").trim().split(" ").forEach(val => {
//       //     // If word is statement
//       //     if (keywords.indexOf(val.trim().toUpperCase()) > -1)
//       //         newHTML += "<span class='statement'>" + val + "&nbsp;</span>";
//       //     else
//       //         newHTML += "<span class='other'>" + val + "&nbsp;</span>";
//       // });
//       var keywords_regex = /(and|null|true|false|if|else|type!)/ig;
//       data = data.replace(/&lt;(.*?)&gt;/g, `<span class='code-elem'>&lt;$1&gt;</span>`);
//       // data = data.replace(/\/\*(.*?)\*\//g, `<span class="code-comment">/* $1 */</span>`);
//       data = data.replace(/(\w+!\w+)/g, `<span class='code-keywords'>$1</span>`);
//       data = data.replace(/(\w+:)/g, `<span class='code-key'>$1</span>`);
//       data = data.replace(keywords_regex,`<span class='keywords'>$1</span>`);
//       data = data.replace(/\/\*/g, `<span class='code-comment'>/*`);
//       data = data.replace(/\*\//g, `*/</span>`);
//       data = data.replace(/"(.*?)"/g, `<span class='code-str'>&quot;$1&quot;</span>`);


//       console.log(data);
//       e.target.innerHTML = data;

//       // Set cursor postion to end of text
//       //    document.querySelector('#editor').focus()
//       var child = e.target.children;
//       var range = document.createRange();
//       var sel = window.getSelection();
//       range.setStart(child[child.length - 1], 1);
//       range.collapse(true);
//       sel.removeAllRanges();
//       sel.addRange(range);
//       this.focus();
          
//   }
// });

// $(document).ready(function(){
//   $('#editor').on("keydown", function(e){
    
//     console.log("Hello world!")
//     var keywords_regex = /(and|null|true|false|if|else|type!)/ig;
//     var data = $(this).text();
//     data = data.replace(/&lt;(.*?)&gt;/g, `<span class='code-elem'>&lt;$1&gt;</span>`);
//     // data = data.replace(/\/\*(.*?)\*\//g, `<span class="code-comment">/* $1 */</span>`);
//     data = data.replace(/(\w+!\w+)/g, `<span class='code-keywords'>$1</span>`);
//     data = data.replace(/(\w+:)/g, `<span class='code-key'>$1</span>`);
//     data = data.replace(keywords_regex,`<span class='keywords'>$1</span>`);
//     data = data.replace(/\/\*/g, `<span class='code-comment'>/*`);
//     data = data.replace(/\*\//g, `*/</span>`);
//     data = data.replace(/"(.*?)"/g, `<span class='code-str'>&quot;$1&quot;</span>`);
//     $(this).html(data);

//     var child = $(this).children();
//     var range = document.createRange();
//     var sel = window.getSelection();
//     console.log(child);
//     // e.preventDefault();
//     // range.setStart(child, 1);
//     range.collapse(true);
//     sel.removeAllRanges();
//     sel.addRange(range);
//     this.focus();

//   })   
// })




// $('#editor').on("keyup", function(e){
//   // Space key pressed
//   var keywords_regex = /(and|null|true|false|if|else|type!)/ig;
//   if (e.keyCode == 32){
//     var data = $(this).text();
//     data = data.replace(/&lt;(.*?)&gt;/g, `<span class='code-elem'>&lt;$1&gt;</span>`);
//     // data = data.replace(/\/\*(.*?)\*\//g, `<span class="code-comment">/* $1 */</span>`);
//     data = data.replace(/(\w+!\w+)/g, `<span class='code-keywords'>$1</span>`);
//     data = data.replace(/(\w+:)/g, `<span class='code-key'>$1</span>`);
//     data = data.replace(keywords_regex,`<span class='keywords'>$1</span>`);
//     data = data.replace(/\/\*/g, `<span class='code-comment'>/*`);
//     data = data.replace(/\*\//g, `*/</span>`);
//     data = data.replace(/"(.*?)"/g, `<span class='code-str'>&quot;$1&quot;</span>`);
//     // Loop through words
//     // $(this).text().replace(/[\s]+/g, " ").trim().split(" ").forEach(function(val){
//     //   // If word is statement
//     //   if (keywords.indexOf(val.trim().toUpperCase()) > -1)
//     //     newHTML += "<span class='statement'>" + val + "&nbsp;</span>";
//     //   else
//     //     newHTML += "<span class='other'>" + val + "&nbsp;</span>"; 
//     // });
//     $(this).html(data);

//     // Set cursor postion to end of text
//     var child = $(this).children();
//     var range = document.createRange();
//     var sel = window.getSelection();
//     range.setStart(child[child.length-1], 1);
//     range.collapse(true);
//     sel.removeAllRanges();
//     sel.addRange(range);
//     this.focus();
//     console.log("hello world")
//   }
// }); 
// $("#editor").on("keyup", function(e){
//   // Space key pressed
//   if (e.keyCode == 32){
//     var newHTML = "";
//     // Loop through words
//     $(this).text().replace(/[\s]+/g, " ").trim().split(" ").forEach(function(val){
//       // If word is statement
//       if (keywords.indexOf(val.trim().toUpperCase()) > -1)
//         newHTML += "<span class='statement'>" + val + "&nbsp;</span>";
//       else
//         newHTML += "<span class='other'>" + val + "&nbsp;</span>"; 
//     });
//     $(this).html(newHTML);

//     // Set cursor postion to end of text
//     var child = $(this).children();
//     var range = document.createRange();
//     var sel = window.getSelection();
//     range.setStart(child[child.length-1], 1);
//     range.collapse(true);
//     sel.removeAllRanges();
//     sel.addRange(range);
//     this.focus();
//   }
// });  


// console.log(showResult);