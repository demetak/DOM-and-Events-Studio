window.addEventListener("load", init);
function init () {
        const missionAbort = document.getElementById("missionAbort");
        const takeoffButton = document.getElementById("takeoff");
        const landButton = document.getElementById("landing");
        const upButton = document.getElementById("up");
        const downButton = document.getElementById("down");
        const leftButton = document.getElementById("left");
        const rightButton = document.getElementById("right");

        const rocket = document.getElementById("rocket");

        const flightStatus = document.getElementById("flightStatus");
        const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

        const shuttleBackground = document.getElementById("shuttleBackground");

        
        takeoffButton.addEventListener("click",function(){
            if (confirm("Confirm that the shuttle is ready for takeoff.")){
                flightStatus.innerHTML="Shuttle in flight.";
                shuttleBackground.style.backgroundColor = "blue";
                spaceShuttleHeight.innerHTML=10000+parseInt(spaceShuttleHeight.innerHTML);
            }
        });
        landButton.addEventListener("click",function(){
            alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML="The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        })
        missionAbort.addEventListener("click",function(){
            if (confirm("Confirm that you want to abort the mission.")){
                flightStatus.innerHTML="Mission aborted.";
                shuttleBackground.style.backgroundColor = "green";
                spaceShuttleHeight.innerHTML = 0;
            }
        })
        upButton.addEventListener("click",function(){
            spaceShuttleHeight.innerHTML=10000+parseInt(spaceShuttleHeight.innerHTML);
            rocket.style.top = `${rocket.offsetTop - 10}px`;   
        })
    
        downButton.addEventListener("click",function(){
            spaceShuttleHeight.innerHTML=parseInt(spaceShuttleHeight.innerHTML)-10000;
            rocket.style.top = `${rocket.offsetTop + 10}px`;   
        })
        leftButton.addEventListener("click",function(){
            rocket.style.left = `${rocket.offsetLeft - 10}px`      
        })
        rightButton.addEventListener("click",function(){
            rocket.style.left = `${rocket.offsetLeft + 10}px`      
        })

}