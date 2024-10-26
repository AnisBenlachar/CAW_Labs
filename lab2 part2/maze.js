window.onload = function() {
    // Get the maze boundaries (only inside the maze) and start/end elements
    let boundaries = document.querySelectorAll("#maze .boundary");  // Only select boundaries inside the maze
    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let status = document.getElementById("status");
    let gameLost = false;

    // Function to turn all boundaries red
    function turnBoundariesRed() {
        boundaries.forEach(boundary => {
            boundary.classList.add("youlose");
        });
        status.textContent = "You lose!";
        gameLost = true;
    }

    // Add event listeners to each boundary for the red color change
    boundaries.forEach(boundary => {
        boundary.addEventListener("mouseover", turnBoundariesRed);
    });

    // Reset maze when the user clicks on the start area
    start.addEventListener("mouseover", function() {
        boundaries.forEach(boundary => {
            boundary.classList.remove("youlose");
        });
        status.textContent = "Move your mouse over the \"S\" to begin.";
        gameLost = false;
    });
    
    // Check if the player reaches the end without hitting a boundary
    end.addEventListener("mouseover", function() {
        if (!gameLost) {
            status.textContent = "You win!";
        }
    });
};
