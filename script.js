function httpRequest(method, url, callback, headers, body) {

    const xml = new XMLHttpRequest();
    xml.open(method, url);
    xml.onload = () => {
        let data = xml.response;
        callback(data);
    }
    for (key in headers) {
        xml.setRequestHeader(key, headers[key]);
    }
    body ? xml.send(body) : xml.send();
}

async function newTableEntries(table){
    let row = document.createElement("tr");
    for( let i =1; i <arguments.length;i++){
        let box = document.createElement("td");
        box.innerHTML = arguments[i];
        row.appendChild(box);
    }
    table.appendChild(row);
 }

 function getMatches() {
   

    var json;
    var xhr = new XMLHttpRequest();
    var url = "https://api.football-data.org/v2/matches";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json", "X-Auth-Token", "7d5f51dc985842a3a40e692c57244b7b");
    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4 && xhr.status === 200) {
            json = JSON.parse(xhr.responseText);
        
            
    
        for(let i=0;i<json.length;i++){
            let temp = json[i];
            newTableEntries(pubTable,temp["pub"], temp["id"]);
        }
    }
    }

    xhr.send();
    return false;
}

