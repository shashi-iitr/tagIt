

console.log('tag.js');


var url;
var title;
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    url = tabs[0].url;     //url
    title = tabs[0].title;   //title
    console.log('asynchronous');
    console.log(url);
    console.log(title);
    document.getElementById('pageTitle').value = title;
    console.log(window.location.pathname);
    console.log(window.location.href.toString());

    setTimeout(function() {
        print();
    }, 5000);
});

function print(){
    console.log('print');
    console.log(url);
    console.log(title);

}