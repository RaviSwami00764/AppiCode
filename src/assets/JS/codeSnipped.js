// ---------Code-Copy-button-design-V1-and-V2-----------
// There are two ways commonly used for copying context to clipboard
// =====================================================
// var $ = require("jquery");

document.addEventListener('DOMContentLoaded', () => {
    const codeBlock = document.getElementById("code");
    const copyButton = document.getElementById("copy-button");
    const copySuccess = document.getElementById("copy-success");


    const copyTextHandler = () => {
        let text = codeBlock.innerText;
        text = text.replace(/\,(\n+)/g,",\n").replace(/\n+/g,"\n");
        // version 1
        // var element = document.createElement('textarea');
        // document.body.appendChild(element);
        // element.value = text;
        // element.select();
        // document.execCommand('copy');
        // document.body.removeChild(element);

        // copySuccess.classList.add("show-message");
        // setTimeout(() => {
        //     copySuccess.classList.remove("show-message");
        // }, 2500);

        // version 2
        navigator.clipboard.writeText(text).then(
            () => {
                copySuccess.classList.add("show-message");
                setTimeout(() => {
                    copySuccess.classList.remove("show-message");
                }, 2500);
            },
            () => {
                console.log("Error writing to the clipboard");
            }
        )
    };




    copyButton.addEventListener('click', copyTextHandler)
});



// $("div").on("click",function(){
//     const codeBlock = $(this);
//     const copySuccess = document.getElementById("copy-success");


//     let text = codeBlock.text();
    
//     navigator.clipboard.writeText(text).then(
//         () => {
//             copySuccess.classList.add("show-message");
//             setTimeout(() => {
//                 copySuccess.classList.remove("show-message");
//             }, 2500);
//         },
//         () => {
//             console.log("Error writing to the clipboard");
//         }
//     )
// })



$("#toggleInput").on("click", function(){
    $("#rule-inputs").toggle("slow");
    var innerText = $(this).text();
    
    if(innerText.match(/Hide/g)){
        $(this).html(`<a class="nav-link"  href="#resultContainer"><i class="fa-solid fa-window-maximize"></i>Show Input</a>`);
        $(".code-input").css("height","95vh");
    }
    else{
        $(".code-input").css("height","75vh");
        $(this).html(`<a class="nav-link"  href="#resultContainer"><i class="fa-solid fa-window-minimize"></i>Hide Input</a>`);
    }
})

$(".nav-item").on("click", function(){
    $(".nav-item").css("border","none");
    $(".nav-item").children("a").removeClass("code-orange");
    $(".nav-item").children("a").children("i").removeClass("code-cyan");
    
    $(this).children("a").addClass("code-orange");
    $(this).children("a").children("i").addClass("code-cyan");
    $(this).css("border","1px solid #f7f7f7");
})




$("#nothing").on("click", function(){
    $(".nav-item").toggle(1000);
    $("input").toggle(1800);
    $(".nav-item").toggle(1500);
    $("input").toggle(2800);
    // $("div").toggle(100);
    // $("div").toggle(100);
})
$(".resize-button").on("click", function () {
        $(".resize-button").addClass("active-btn");
        $(this).removeClass("active-btn");
        
        if($(this).hasClass("maximize-result-view")){
            $(".sectoin-1").removeClass("col-57");
            $(".section-1").addClass("col-100");
            $(".section-2").removeClass("col-50");
            $(".section-2").addClass("col-20");


        }
        else{
            $(".sectoin-1").addClass("col-57");
            $(".section-1").removeClass("col-100");
            $(".section-2").removeClass("col-20");
            $(".section-2").addClass("col-50");
        }
    }
)




