// let input = document.getElementById('inputbox');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button =>{
//     button.addEventListener('click' , (e)=>{
//         if(e.target.innerHTML=='='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML=='AC'){
//           string = '';
//           input.value=string;
//         }
//         else if(e.target.innerHTML=='DEL'){
//              string = string.substring(0 ,string.length-1);
//              input.value=string;
//         }
//         else{
//         string += e.target.innerHTML;
//         input.value = string;
//         }
//     })
// })


// Select input box and all buttons
// let input = document.getElementById("inputbox");
// let buttons = document.querySelectorAll("button");

// let string = ""; // to store the current input expression

// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener("click", (e) => {
//         const btnText = e.target.innerText;

//         // Handle Clear (AC)
//         if (btnText === "AC") {
//             string = "";
//             input.value = "";
//         }
//         // Handle Delete (DEL)
//         else if (btnText === "DEL") {
//             string = string.slice(0, -1);
//             input.value = string;
//         }
//         // Handle Equal (=)
//         else if (btnText === "=") {
//             try {
//                 string = eval(string); // Evaluate the expression
//                 input.value = string;
//             } catch {
//                 input.value = "Error";
//             }
//         }
//         // Handle numbers and operators
//         else {
//             string += btnText;
//             input.value = string;
//         }
//     });
// });



let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let isResultShown = false; // Flag to check if result was just displayed

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const btnText = e.target.innerText;

        if (btnText === "AC") {
            string = "";
            input.value = "";
            isResultShown = false;
        }
        else if (btnText === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        }
        else if (btnText === "=") {
            try {
                string = eval(string).toString();
                input.value = string;
                isResultShown = true;
            } catch {
                input.value = "Error";
                string = "";
                isResultShown = false;
            }
        }
        else {
            // If result was shown and now new input is given, reset string
            if (isResultShown) {
                // If number or dot entered, start new expression
                if (!isNaN(btnText) || btnText === '.') {
                    string = btnText;
                } 
                // If operator entered, continue with result
                else {
                    string += btnText;
                }
                isResultShown = false;
            } else {
                string += btnText;
            }
            input.value = string;
        }
    });
});



























