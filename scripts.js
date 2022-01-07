// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeoff = document.getElementById("takeoff");
    const missionAbort = document.getElementById("missionAbort");
    const landing = document.getElementById("landing");
    const status = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
// let  rocketleft = 0
// const up = document.getElementsByTagName("Up");
// const down = document.getElementsByTagName("Down");
// const right = document.getElementsByTagName("Right");
// const left = document.getElementsByTagName("Left");
// const rocket = document.getElementsById("rocket");



     takeoff.addEventListener("click",function(event){
         let response = window.confirm("Confirm that the shuttle is ready for takeoff");
         if(response)
         {
             status.innerHTML = "Shuttle in flight.";
             shuttleBackground.style.backgroundColor = "blue";
             spaceShuttleHeight.innerHTML = 10000;
         }
     })

     landing.addEventListener("click",function(event){
        let response = window.alert("The shuttle is landing. Landing gear engaged.");
        if(response)
        {
            status.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    })

    missionAbort.addEventListener("click",function(event){
        let response = window.confirm("Confirm that you want to abort the mission.");
        if(response)
        {
            status.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    })

//  left.addEventListener("click",function(event){
//     rocketleft += 20;
//     rocket.style.position = "reletive";
//         rocket.style.left = (rocketleft) + "px";
//         event.preventDefault();
//  })

}

window.addEventListener("load", init);