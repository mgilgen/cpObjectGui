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
function toLoginPage(){
    window.location.href = "/login.html"
}


// Login
async function sendLogin(){

    let username = new String(document.forms["loginForm"]["uidInput"].value)
    let passwd = new String(document.forms["loginForm"]["pwInput"].value)

    let loginHeaders = new Headers({
        'Content-Type': 'application/json'
    });

    const data = {
        user:"admin",
        password:"PAS1dUrotH"
    }

    const requestData = {
        method: "POST",
        mode: "no-cors",
        headers: loginHeaders,
        body: JSON.stringify(data)
    }

    //let request = new Request("https://10.20.1.11:443/web_api/login", requestData)

    let loginData = await fetch("https://localhost:3000/login", requestData)
    .then((res) => res.json)
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    
}

async function mdsLogin(){
    const post = await fetch("https://10.20.1.11:443/web_api/login").then((res) => res.json());
    document.getElementById("outputbox").innerText = post.login-message;
}

/** Test API */
async function getHosts(){
    const post = await fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json());
    document.getElementById("outputbox").innerText = post.title;
}

function resetOutput(){
    document.getElementById("outputbox").innerText = "Output cleared"
}