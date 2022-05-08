//カムリの値段計算関数
function clickBotton() {
    const q1 = document.getElementById("q1").checked;
    const q2 = document.getElementById("q2").checked;
    const q3 = document.getElementById("q3").checked;
    const o1 = document.getElementById("o1").checked;
    const o2 = document.getElementById("o2").checked;
    const o3 = document.getElementById("o3").checked;
    let totalResult = 0;
    console.log(q1);
    if (q1) {
        totalResult = totalResult + 3794000;
    } else if (q2) {
        totalResult = totalResult + 3937000;
    } else if (q3) {
        totalResult = totalResult + 4672000;
    }
    if (o1) {
        totalResult = totalResult + 143000;
    }
    if (o2) {
        totalResult = totalResult + 44000;
    }
    if (o3) {
        totalResult = totalResult + 51700;
    }
    let totalM = document.getElementById("totalM");
    totalM.append(`は${totalResult}円です。`);
}

// ラジオボタンの選択解除関数
function radioDeselection() {
    for (const element of document.getElementsByName('radio')) {
        element.checked = false;
    }
    for (const element of document.getElementsByName('o1')) {
        element.checked = false;
    }
    for (const element of document.getElementsByName('o2')) {
        element.checked = false;
    }
    for (const element of document.getElementsByName('o3')) {
        element.checked = false;
    }
}

// ラジオボタンの２度押しで選択解除関数
let remove = 0;

function radioDeselection1(already, numeric) {
    if (remove == numeric) {
        already.checked = false;
        remove = 0;
    } else {
        remove = numeric;
    }
}