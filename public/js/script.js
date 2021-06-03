
var gametitle = "Insert Game Name Here";

// Loads the starting screen for the game
function loadstartscreen() {
    var title = document.createElement("h2");
    title.classList.add("mainmenutitle");
    title.textContent = "Welcome to "+gametitle;
    title.setAttribute ("id","title");
    document.body.appendChild(title);

    var startbutton = document.createElement("button");
    startbutton.classList.add("startbutton");
    startbutton.textContent = "Start the Race!";
    startbutton.setAttribute ("onclick","startbutton()");
    startbutton.setAttribute ("id","startbutton");
    document.body.appendChild(startbutton);

    var optionsbutton = document.createElement("button");
    optionsbutton.classList.add("optionsbutton");
    optionsbutton.textContent = "Options";
    optionsbutton.setAttribute ("onclick","optionsbutton()");
    optionsbutton.setAttribute ("id","optionsbutton");
    document.body.appendChild(optionsbutton);


}
// When the start button is clicked, it removes the start screen and changes it to the play screen
function startbutton() {
    document.getElementById("title").remove();
    document.getElementById("startbutton").remove();
    document.getElementById("optionsbutton").remove();
    document.body.style.backgroundColor = "rgb(255, 255, 255)";

    var leaderboard = document.createElement("div");
    leaderboard.classList.add("leaderboard");
    leaderboard.setAttribute ("id","leaderboard");
    document.body.appendChild(leaderboard);
    
    var testplayer = document.createElement("p");
    testplayer.textContent = "SEFF - 1st";
    testplayer.classList.add ("leaderboardname");
    document.getElementById ("leaderboard").appendChild(testplayer);

    var racetrack = document.createElement("canvas");
    racetrack.setAttribute("width", "800px");
    racetrack.setAttribute("height", "600px");
    racetrack.setAttribute("id", "racetrack");
    document.body.appendChild(racetrack);
    var ctx = racetrack.getContext("2d");
    var image = new Image();
    image.src = "src/racetrack.png";
    ctx.drawImage(image, 0, 0);





    };

    console.log("Joined!");
;
loadstartscreen();




