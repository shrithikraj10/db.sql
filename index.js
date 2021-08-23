const topdisplay = document.querySelector(".display-1");
const bottomdisplay = document.querySelector(".display-2");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
let dis1Num = "";
let dis2Num = "0";
let result = null;
let lastOperation = "";
let haveDot = false;

var comma = "."


numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "," && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "," && haveDot) {
      return;
    }
    if(e.target.innerText == 0 && dis2Num == "0"){
      dis2Num = "0";
    }else if(e.target.innerText == ","){
      dis2Num += comma;
      bottomdisplay.innerText = dis2Num;
    }else{
      dis2Num += e.target.innerText;
      bottomdisplay.innerText = dis2Num;
    }


  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});
function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  topdisplay.innerText = dis1Num;
  bottomdisplay.innerText = "";
  dis2Num = "";

}

function mathOperation() {
  if (lastOperation === "x"){
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    if(dis2Num == 0){
      alert("please insert a number greater than 0")
    }else{
        result = parseFloat(result) / parseFloat(dis2Num);
    }
  } else if (lastOperation === "%") {
    result = (parseFloat(result)/parseFloat(dis2Num))*100;
  }
}


equalEl.addEventListener("click", () => {
  if (!dis2Num || !dis1Num){
     alert("Please enter valid values into the calculator.");
     return;
  };
  haveDot = false;
  mathOperation();
  clearVar();

  if(lastOperation === "%"){
    bottomdisplay.innerText = result
  }

  bottomdisplay.innerText = result;

  dis2Num = result;
  dis1Num = "";
});

clearAllEl.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  topdisplay.innerText = "";
  bottomdisplay.innerText = "";
  result = "";

});

clearLastEl.addEventListener("click", () => {
  bottomdisplay.innerText = "";
  dis2Num = "";
});
