let socket = io();
var gametitle = "Insert Game Name Here";

// Loads the starting screen for the game
function loadstartscreen() {
    var title = document.createElement("h2");
    title.classList.add("mainmenutitle");
    title.textContent = "Welcome to "+gametitle;
    title.setAttribute ("id","title");
    document.body.appendChild(title);

    var namebox = document.createElement("input");
    namebox.classList.add("namebox");
    namebox.setAttribute("placeholder","Enter Name Here!");
    namebox.setAttribute("id","namebox");
    document.body.appendChild(namebox);
    var gap1 = document.createElement("br");
    document.body.appendChild(gap1);

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
    document.body.style.backgroundColor = "rgb(255, 255, 255)"

    var leaderboard = document.createElement("div");
    leaderboard.classList.add("leaderboard");
    leaderboard.setAttribute ("id","leaderboard");
    document.body.appendChild(leaderboard)
    
    var testplayer = document.createElement("p")
    testplayer.textContent = "SEFF - 1st"
    testplayer.classList.add ("leaderboardname")
    document.getElementById ("leaderboard").appendChild(testplayer);

    socket.emit('joined');
    console.log("Joined!")
}
loadstartscreen();

// When people press play, it will join them into a lobby that is in the "waiting for people" state
// Once 4 people are in that lobby, a new one will be created and the cycle is repeated.


