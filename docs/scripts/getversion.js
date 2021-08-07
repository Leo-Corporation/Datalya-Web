async function getVersion(url) {
    let response = await fetch(vUrl);
    let data = await response.text();
    document.getElementById("downloadTxt").innerHTML = "Version " + data;
}

const vUrl = "https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Liens/Update%20System/Datalya/Version.txt";
getVersion(vUrl);