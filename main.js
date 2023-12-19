const root = document.querySelector("#root");
const btnAdd = document.querySelector(".btn-add");
const sumInfo = document.querySelector(".show-sum");
let total = 0;
function Counter() {
  //  <div class="counter">
  //       <button class="btn btn-inc">+</button>
  //       <h3 class="number">0</h3>
  //       <button class="btn btn-dec">-</button>
  //       <button class="btn btn-clr">C</button>
  //     </div>

  let countNum = 0;

  const makeElement = (tag, attr_n, attr_v, content) => {
    let output = document.createElement(tag);
    output.setAttribute(attr_n, attr_v);
    output.textContent = content;
    return output;
  };

  //render
  const updateCounter = (n) => {
    //ไม่ให้มันกดเเล้วติดลบ----------
    if (countNum + n < 0) {
      return;
    }
    //--------------------------
    countNum += n;
    total += n;
    number.textContent = countNum;
    sumInfo.textContent = `Sum = ${total}`;
  };
  //ลบ----------------------------
  const delCounter = (e) => {
    //เเบบที่1------------------------------------
    // const parentElement = counter.parentNode;
    // parentElement.removeChild(counter);

    //แบบที่2------------------------------------
    // counter.remove();

    //แบบที่3------------------------------------
    updateCounter(-countNum);
    e.target.closest(".counter").remove();
  };
  //-------------------------------
  const counter = makeElement("div", "class", "counter", "");
  const btnInc = makeElement("button", "class", "btn-inc", "+");
  const number = makeElement("h3", "class", "number", "0");
  const btnDec = makeElement("button", "class", "btn-dec", "-");
  const btnClr = makeElement("button", "class", "btn-clr", "0");
  const btnDel = makeElement("button", "class", "btn-del", "X");

  btnInc.addEventListener("click", () => updateCounter(1));
  btnDec.addEventListener("click", () => updateCounter(-1));
  //รีเซ็ด--------------------------------------
  btnClr.addEventListener("click", () => updateCounter(-countNum));
  //------------------------------------------
  //ลบ----------------------------------------
  btnDel.addEventListener("click", delCounter);
  //------------------------------------------

  // counter.append(btnInc, number, btnDec, btnClr, btnDel);

  counter.append(btnInc);
  counter.append(number);
  counter.append(btnDec);
  counter.append(btnClr);
  counter.append(btnDel);
  return counter;
}

// root.append(Counter());
// root.append(Counter());
// root.append(Counter());

const halAddCounter = () => {
  root.append(Counter());
};

btnAdd.addEventListener("click", halAddCounter);
