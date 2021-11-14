function view() {
    if (document.getElementById("block-search-form").style.display == "none")
        document.getElementById("block-search-form").style.display = "block"
    else 
        document.getElementById("block-search-form").style.display = "none"
}

function viewNav() {
    if (document.getElementById("navigation").style.display == "none")
        document.getElementById("navigation").style.display = "block"
    else 
        document.getElementById("navigation").style.display = "none"
}

function viewSideNews() {
    if (document.getElementById("side-news").style.left == "-340px")
        document.getElementById("side-news").style.left = "0px"
}

function closeSideNews() {
    if (document.getElementById("side-news").style.left == "0px")
        document.getElementById("side-news").style.left = "-340px"
}




