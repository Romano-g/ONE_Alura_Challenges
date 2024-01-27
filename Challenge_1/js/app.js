function clearFieldUserMsg() {
    let userTxt = document.getElementById('main__messagetxt');
    userTxt.value = '';
}

function editText(id, text) {
    let field = document.getElementById(id);
    field.innerHTML = text;
}

function editBackground (imgPath) {
    document.getElementById('main__messagetxt_result').style.backgroundImage = `url("${imgPath}")`
}

function encrypt() {
    let userTxt = document.getElementById('main__messagetxt').value;
    let result = userTxt.replace(/[èéêe]/g, 'enter').replace(/[ìíîi]/g, 'imes').replace(/[aáãàâ]/g, 'ai').replace(/[òóôõo]/g, 'ober').replace(/[uùúû]/g, 'ufat').replace(/ç/g, 'c');

    userTxt == '' ? editBackground("./imgs/High.svg") : editBackground("./imgs/white.svg");
    editText('main__messagetxt_result', result)
    editText('copyButton', 'Copiar')
    clearFieldUserMsg()
}

function translateButton() {
    let userTxt = document.getElementById('main__messagetxt').value;
    let result = userTxt.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    userTxt == '' ? editBackground("./imgs/High.svg") : editBackground("./imgs/white.svg");
    editText('main__messagetxt_result', result)
    editText('copyButton', 'Copiar')
    clearFieldUserMsg()
}

function copyText() {
    let text = document.getElementById('main__messagetxt_result');
    text.select();
    navigator.clipboard.writeText(text.value);

    editText('copyButton', 'Copiado!')
}