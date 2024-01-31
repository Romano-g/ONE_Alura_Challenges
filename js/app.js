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
    let result = userTxt.replace(/[EÉÈÊèéêe]/g, 'enter').replace(/[IÍÌÎìíîi]/g, 'imes').replace(/[AÁÃÀÂaáãàâ]/g, 'ai').replace(/[ÒÓÔÕOòóôõo]/g, 'ober').replace(/[UÛÚÙuùúû]/g, 'ufat').replace(/[Çç]/g, 'c');

    userTxt == '' ? editBackground("https://thumbs.dreamstime.com/b/gato-com-lupa-e-pesquisa-55046971.jpg") : editBackground("");
    editText('main__messagetxt_result', result)
    editText('copyButton', 'Copiar')
    clearFieldUserMsg()
}

function translateButton() {
    let userTxt = document.getElementById('main__messagetxt').value;
    let result = userTxt.replace(/[EÉÈÊèéêe]/g, 'enter').replace(/[IÍÌÎìíîi]/g, 'imes').replace(/[AÁÃÀÂaáãàâ]/g, 'ai').replace(/[ÒÓÔÕOòóôõo]/g, 'ober').replace(/[UÛÚÙuùúû]/g, 'ufat').replace(/[Çç]/g, 'c');

    userTxt == '' ? editBackground("https://thumbs.dreamstime.com/b/gato-com-lupa-e-pesquisa-55046971.jpg") : editBackground("");
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