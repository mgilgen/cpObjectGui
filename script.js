// UI/UX Stuff
function changeColorIn(object){
    object.setAttribute("class", "p-3 m-5 bg-primary-subtle");
}
function changeColorOut(object){
    object.setAttribute("class", "p-3 m-5 bg-primary");
}

function changeDangerColorIn(object){
    object.setAttribute("class", "p-3 m-5 bg-danger-subtle");
}
function changeDangerColorOut(object){
    object.setAttribute("class", "p-3 m-5 bg-danger");
}

// actual jobs

async function getHosts(){
    const post = await fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json());
    document.getElementById("outputbox").innerText = post.title;
}