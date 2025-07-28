let input = document.getElementById("num1");
let ans = document.getElementById("num2");
let buttons = document.querySelectorAll("button");
let exp = "";
let opr = ["+", "-", "*", "/", "."];
let brackettoggle = true;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.target.value;

    if (btn.id === "bracket") {
      value = brackettoggle ? "(" : ")";
      brackettoggle = !brackettoggle; // toggle
    }

    if (value === "C") {
      exp = "";
      input.innerText = "";
      ans.innerText = "";
      brackettoggle = true;
    } else if (value === "=") {
      let result = math.evaluate(exp);
      ans.innerText = result;
      exp = result.toString();
    } else {   
       if (exp === "" && opr.includes(value)) {
         ans.innerText = "Invalid input"; // show error
         return; // stop further processing
       } else {
         ans.innerText = "";
       }
      let lastChar = exp[exp.length - 1];
      if (opr.includes(lastChar) && opr.includes(value)) {
        exp = exp.slice(0, exp.length - 1) + value;
      } else {
        exp += value;
      }
      input.innerText = exp;
      }
     
  });
});
