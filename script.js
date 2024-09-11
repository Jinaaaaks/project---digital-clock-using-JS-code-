// Function to update the clock every second
function updateClock(){
    //get the current time
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');

    // format the time as HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;

    //display the time in the clock div
    document.getElementById('clock').textContent = timeString;

}

//update the clock every second
setInterval(updateClock,1000);

//initialize the clock when the page loads
updateClock();
