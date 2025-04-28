function selectById() {
    const title = document.getElementById("title");
    console.log(title);
}

function selectByClass() {
    const paragraph = document.getElementsByClassName("paragraph");
    console.log(paragraph)
}

function selectByTag() {
    const tag = document.getElementsByTagName("li");
    console.log(tag)
}



selectById();
selectByClass();
selectByTag();