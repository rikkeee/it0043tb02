let sim = document.getElementById("flex-container");

function reset(){
    sim.style.flexDirection = "";
    sim.style.justifyContent = "";
    sim.style.alignItems = "";

    document.getElementById('box1').style.flexGrow="0";
    document.getElementById('box2').style.flexGrow="0";
    document.getElementById('box3').style.flexGrow="0";

    document.getElementById('b1').value="0";
    document.getElementById('b2').value="0";
    document.getElementById('b3').value="0";

    let g = document.getElementById("number-gap").value;
    sim.style.gap = 0;

    document.getElementById("number-gap").value = "0";
}

function flexRow(){
    sim.style.flexDirection = "row";
}
    
function flexColumn(){
    sim.style.flexDirection = "column";
}

function justifyStart(){
    sim.style.justifyContent = "start";
}

function justifyCenter(){
    sim.style.justifyContent = "center";
}

function justifyEnd(){
    sim.style.justifyContent = "end";
}

function spaceBetween(){
    sim.style.justifyContent = "space-between";
}

function spaceAround(){
    sim.style.justifyContent = "space-around";
}

function spaceEvenly(){
    sim.style.justifyContent = "space-evenly";
}

function alignStart(){
    sim.style.alignItems = "start";
}

function alignCenter(){
    sim.style.alignItems = "center";
}

function alignEnd(){
    sim.style.alignItems = "end";
}

function changegap(){
    let g = document.getElementById("number-gap").value;
    sim.style.gap = g + "px";
}

function resetGap(){
    let g = document.getElementById("number-gap").value;
    sim.style.gap = 0;

    document.getElementById("number-gap").value = "0";
}

function resetGrow(){
    document.getElementById('box1').style.flexGrow="0";
    document.getElementById('box2').style.flexGrow="0";
    document.getElementById('box3').style.flexGrow="0";

    document.getElementById('b1').value="0";
    document.getElementById('b2').value="0";
    document.getElementById('b3').value="0";
}

function growAll(){
    document.getElementById('box1').style.flexGrow++;
    document.getElementById('box2').style.flexGrow++;
    document.getElementById('box3').style.flexGrow++;

    document.getElementById('b1').value++;
    document.getElementById('b2').value++;
    document.getElementById('b3').value++;
}

function grow1(){
    let gr = document.getElementById('b1').value;
    document.getElementById('box1').style.flexGrow=gr;
}

function grow2(){
    let gr = document.getElementById('b2').value;
    document.getElementById('box2').style.flexGrow=gr;
}

function grow3(){
    let gr = document.getElementById('b3').value;
    document.getElementById('box3').style.flexGrow=gr;
}