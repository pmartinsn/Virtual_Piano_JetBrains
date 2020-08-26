
    document.addEventListener("keydown", function(event){
        if (event.code === "KeyA") {
            let audio = new Audio("audio/A.mp3");
            audio.play();
            console.log("The 'A' is pressed.");
        } else if (event.code === "KeyS"){
            let audio = new Audio("audio/S.mp3");
            audio.play();
            console.log("The 'S' is pressed.");
        } else if (event.code==="KeyD"){
            let audio = new Audio("audio/D.mp3");
            audio.play();
            console.log("The 'D' is pressed.");
        } else if (event.code==="KeyF"){
            let audio = new Audio("audio/F.mp3");
            audio.play();
            console.log("The 'F' is pressed.");
        } else if (event.code==="KeyG"){
            let audio = new Audio("audio/F.mp3");
            audio.play();
            console.log("The 'G' is pressed.");
        } else if (event.code==="KeyH"){
            let audio = new Audio("audio/H.mp3");
            audio.play();
            console.log("The 'H' is pressed.");
        } else if (event.code==="KeyJ"){
            let audio = new Audio("audio/J.mp3");
            audio.play();
            console.log("The 'J' is pressed.");
        } else if (event.code==="KeyW") {
            let audio = new Audio("audio/W.mp3");
            audio.play();
            console.log("The 'W' is pressed.");
        } else if (event.code==="KeyE") {
            let audio = new Audio("audio/E.mp3");
            audio.play();
            console.log("The 'J' is pressed.");
        } else if (event.code==="KeyT") {
            let audio = new Audio("audio/T.mp3");
            audio.play();
            console.log("The 'J' is pressed.");
        } else if (event.code==="KeyY") {
            let audio = new Audio("audio/Y.mp3");
            audio.play();
            console.log("The 'Y' is pressed.");
        } else if (event.code==="KeyU") {
            let audio = new Audio("audio/U.mp3");
            audio.play();
            console.log("The 'J' is pressed.");
        } else {
            console.log("wrong key pressed");
        }
    });
    document.addEventListener("click", function(event) {
        A.onclick = function (event){
            let audio = new Audio("audio/A.mp3");
            audio.play();
        }
        S.onclick = function (event){
            let audio = new Audio("audio/S.mp3");
            audio.play();
        }
        D.onclick = function (event){
            let audio = new Audio("audio/D.mp3");
            audio.play();
        }
        F.onclick = function (event){
            let audio = new Audio("audio/F.mp3");
            audio.play();
        }
        G.onclick = function (event){
            let audio = new Audio("audio/G.mp3");
            audio.play();
        }
        H.onclick = function (event){
            let audio = new Audio("audio/H.mp3");
            audio.play();
        }
        J.onclick = function (event){
            let audio = new Audio("audio/J.mp3");
            audio.play();
        }
        W.onclick = function (event){
            let audio = new Audio("audio/W.mp3");
            audio.play();
        }
        E.onclick = function (event){
            let audio = new Audio("audio/E.mp3");
            audio.play();
        }
        T.onclick = function (event){
            let audio = new Audio("audio/T.mp3");
            audio.play();
        }
        Y.onclick = function (event){
            let audio = new Audio("audio/Y.mp3");
            audio.play();
        }
        U.onclick = function (event){
            let audio = new Audio("audio/U.mp3");
            audio.play();
        }
    });





