document.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' && event.target.closest('pre')) {
        const preElement = event.target.closest('pre');
        const codeContent = preElement.querySelector('code').innerText;
        copyToClipboard(codeContent);
        event.target.textContent = 'Copied!';
        setTimeout(() => {
            event.target.innerHTML = '<i class="fa-regular fa-clipboard"></i>';
        }, 1500);
    }
});

function copyToClipboard(text) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
}