console.time('time');
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    console.timeEnd('time');
    var url = tabs[0].url;     //url
    var title = tabs[0].title;   //title
    console.log(url);
    console.log(title);
    document.getElementById('pageTitle').value = title;
});