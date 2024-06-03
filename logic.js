function copyToClipboard(){
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("Copied the link to Clipboard")
}