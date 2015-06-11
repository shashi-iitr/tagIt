// Send a message containing the page details back to the event page
chrome.runtime.sendMessage({
    'title': document.title
});

chrome.tabs.getCurrent(function(tab) {
    alert(tab.title);
});

console.log("testing")

alert(document.title)