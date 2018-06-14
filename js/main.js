// declare variables and constants
let minA = 0,
    maxA = 100,
    minB = 100,
    maxB = 150,
    minC = 150,
    maxC = 250,
    minD = 250,
    maxD = 350,
    minE = 350,
    maxE = 450;

const inputBtn = document.querySelector("#input-btn"),
    inputValA = document.querySelector("#val-A"),
    inputValB = document.querySelector("#val-B"),
    inputValC = document.querySelector("#val-C"),
    inputValD = document.querySelector("#val-D"),
    inputValE = document.querySelector("#val-E"),
    lineA = document.querySelector("#line-A"),
    lineB = document.querySelector("#line-B"),
    lineC = document.querySelector("#line-C"),
    lineD = document.querySelector("#line-D"),
    lineE = document.querySelector("#line-E"),
    msg = "Please submit correct values";

// add an event listener on click

inputBtn.addEventListener("click", function() {
    let valA = inputValA.value,
        valB = inputValB.value,
        valC = inputValC.value,
        valD = inputValD.value,
        valE = inputValE.value;

    // if any value is left unfilled then prompt user to fill the value
    if ((valA < minA || valA > maxA || valA == "") || (valB < minB || valB > maxB || valB == "") || (valC < minC || valC > maxC || valC == "") || (valD < minD || valD > maxD || valD == "") || (valE < minE || valE > maxE || valE == "")) {

        // Prompt the user for correct values
        showAlert(msg, `text-danger lead`);

        //console.log("Please fill all the values");
        // else all values are filled then assign those values as x1, x2 values for 
        // the lines. The end point of the previous line will be the origin point of 
        // the next.
    } else {
        // lineA's point of origin (x1) is 0. It's end point (x2) is assigned the
        // value extracted from the first input from the left (valA). 
        lineA.setAttribute("y2", valA);

        // if lineA's value is 0 then the origin point for the next line will be
        // the min value assigned to its input (valB), which is the second input from 
        // the left   
        if (lineA.getAttribute("y2") === minA) {
            lineB.setAttribute("y1", minB);

            // else the orgin point for lineB (x1) will be value extracted from 
            // valA (the first input from the left)
        } else {
            lineB.setAttribute("y1", valA);
        }
        // set the value extracted from valB as the x2 of lineB 
        lineB.setAttribute("y2", valB);

        // if lineB's x2 equals 100 then set lineC's x1 as the min value extracted 
        // from valC (third input from the left)
        if (lineB.getAttribute("y2") === minB) {
            lineC.setAttribute("y1", minC);
            // else set lineC's x1 as valB
        } else {
            lineC.setAttribute("y1", valB);
        }
        // set lineC's x2 to valC
        lineC.setAttribute("y2", valC);

        // if lineC's x2 equals 150 set lineD's x1 to valD's minimum value
        if (lineC.getAttribute("y2") === minC) {
            lineD.setAttribute("y1", minD);
            // else set lineD's x1 to valC
        } else {
            lineD.setAttribute("y1", valC);
        }
        // set lineC's x2 to valD 
        lineD.setAttribute("y2", valD);

        // if lineD's x2 equals 250 set lineD's x1 to valD's minimum value
        if (lineD.getAttribute("y2") === minD) {
            lineE.setAttribute("y1", minE);
        } else {
            lineE.setAttribute("y1", valD);
        }
        lineE.setAttribute("y2", valE);
    }
})


function showAlert(msg, className) {
        // create div
        let h4 = document.createElement("h4");
        // add class
        h4.className = `alert ${className}`;
        // add text
        h4.innerHTML = msg;
        //get parent
        let elem = document.querySelector(".card-body")
        // insert alert
        elem.insertBefore(h4, elem.childNodes[0]);
        // timeout after 1 seconds
        setTimeout(function() {
            document.querySelector(".alert").remove();
        }, 1000);
    }