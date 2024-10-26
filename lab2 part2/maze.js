window.onload = function() {
    // Get the maze boundaries (only inside the maze) and start/end elements
    let boundaries = document.querySelectorAll("#maze .boundary");
    let maze = document.getElementById("maze");
    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let status = document.getElementById("status");
    let gameStarted = false;
    let gameLost = false;

    // Function to turn all boundaries red and display "You lose!"
    function turnBoundariesRed() {
        boundaries.forEach(boundary => {
            boundary.classList.add("youlose");
        });
        status.textContent = "You lose!";
        gameLost = true;
    }

    // Add event listeners to each boundary to mark the game as lost
    boundaries.forEach(boundary => {
        boundary.addEventListener("mouseover", function() {
            if (gameStarted && !gameLost) {
                turnBoundariesRed();
            }
        });
    });

    // Add event listener to detect mouse leaving the maze area
    maze.addEventListener("mouseleave", function() {
        if (gameStarted && !gameLost) {
            turnBoundariesRed();
        }
    });

    // Reset maze when the user moves the mouse over the start area
    start.addEventListener("mouseover", function() {
        boundaries.forEach(boundary => {
            boundary.classList.remove("youlose");
        });
        status.textContent = "Move your mouse over the \"S\" to begin.";
        gameStarted = true;
        gameLost = false;
    });

    // Check if the player reaches the end without hitting a boundary
    end.addEventListener("mouseover", function() {
        if (gameStarted && !gameLost) {
            status.textContent = "You win!";
            gameStarted = false;  // End the game to prevent further actions
        }
    });
};
