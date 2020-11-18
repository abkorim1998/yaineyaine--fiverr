document.getElementById("uninstallbtn").addEventListener("click", function(){
    chrome.runtime.sendMessage("uninstallthisext");
});
