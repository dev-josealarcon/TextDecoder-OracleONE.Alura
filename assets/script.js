
let txtInput = document.getElementById('txt-input');
let txtOutput = document.getElementById('txt-output');

let imgShow = document.getElementById('img-show');
let txtShow = document.getElementById('txt-show');

let txtEncrypt,
    txtDecrypt;


function encrypt() {
    txtEncrypt = txtInput.value;
    txtEncrypt = txtEncrypt.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    txtOutput.value = txtEncrypt;
}

function decrypt() {
    txtOutput.value = '';
    txtDecrypt = txtInput.value;
    txtDecrypt = txtDecrypt.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    txtOutput.value = txtDecrypt;

    txtDecrypt = txtOutput.value;
    txtDecrypt = txtDecrypt.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    txtOutput.value = txtDecrypt;
}

function copy() {
    if (navigator.clipboard.writeText(txtOutput.value)) alert('Copied message!!');
    txtOutput.value = '';
    imgShow.style.display = 'block';
    txtShow.style.display = 'none';
}



txtInput.addEventListener('keyup', (e) => {

    if (e) {
        imgShow.style.display = 'none';
        txtShow.style.display = 'block';
    } else {
        imgShow.style.display = 'block';
        txtShow.style.display = 'none';
    }


    if (e.target.matches('textarea[required]')) {
        let txtareaInput = e.target;
        let pattern = txtareaInput.dataset.pattern;
        if (pattern && txtareaInput.value !== '') {
            let regEx = new RegExp(pattern);
             if(!regEx.exec(txtareaInput.value)){
                document.getElementById('info').style.color = 'red';
                 document.querySelector('.btn-encrypt').setAttribute('disabled','disabled');
                 document.querySelector('.btn-decrypt').setAttribute('disabled','disabled');
             }else{
                 document.getElementById('info').style.color = '#8e8e8e';
                 document.querySelector('.btn-encrypt').removeAttribute('disabled');
                 document.querySelector('.btn-decrypt').removeAttribute('disabled');
             }
        }
    }


});

document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-encrypt')) encrypt();
    if (e.target.matches('.btn-decrypt')) decrypt();
    if (e.target.matches('.btn-copy')) copy();
});