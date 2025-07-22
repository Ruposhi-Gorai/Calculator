let input = document.getElementById('num1');
let ans = document.getElementById('num2');
let buttons = document.querySelectorAll('button');
let exp = "";
let brackettoggle = true;

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let value = btn.value;
        if (btn.id === "bracket") {
          value = brackettoggle ? "(" : ")";
          brackettoggle = !brackettoggle; // toggle
        }
        if (value === 'C') {
            exp = "";
            input.innerText = "";
            ans.innerText = "";
            brackettoggle = true;
        } else if (value === '=') {
            try {
                let result = math.evaluate(exp);
                ans.innerText = result;
                exp = result.toString();
            }
            catch {
                ans.innerText = 'error';
                exp = "";
            }
            
        } else {
            exp += value;
            input.innerText = exp;
        }
    });
});