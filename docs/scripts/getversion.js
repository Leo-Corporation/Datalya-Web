function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send();
    console.log("HTTP Result:\n\n" + xmlHttp.responseText);
    return xmlHttp.responseText;
}

const vUrl = "https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Liens/Update%20System/Datalya/Version.txt";

var response = httpGet(vUrl);
document.getElementById("downloadTxt").innerHTML = "Version " + response;