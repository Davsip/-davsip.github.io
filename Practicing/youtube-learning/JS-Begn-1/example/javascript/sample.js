var ourHeadline = document.getElementById("our-headline");

var listItems = document.getElementById("our-first-list").getElementsByTagName("li");

for(i=0; i<listItems.length; i++){
    listItems[i].addEventListener("click", activateItem);
}
