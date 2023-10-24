// ---------File-download-action-with-file-downloading-location-selection-----------
// may get variation in popup window based on the os environment
// =================================================================================

function download(file, text) {
			
    //creating an invisible element
    var element = document.createElement('a');
    element.setAttribute('href',
    'data:text/plain;charset=utf-8, '
    + encodeURIComponent(text));
    element.setAttribute('download', file);

    // Above code is equivalent to
    // <a href="path of file" download="file name">

    document.body.appendChild(element);

    //onClick property
    element.click();

    document.body.removeChild(element);
    
}

// Start file download.
document.getElementById("download-xsd")
.addEventListener("click", function() {
    // Generate download of hello.txt
    // file with some content
    getDataUtilsFun();
    var text = document.getElementById("code").innerText;
    // text = text.replace(/\,(\n+)/g,",\n").replace(/\n+/g,"\n");
    var filename = `${cdtName}.xsd`;

    download(filename, text);
}, false);