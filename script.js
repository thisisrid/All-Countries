fetch("https://restcountries.eu/rest/v2/all")
.then((response) => response.json())
.then((data) => country(data));
const div = document.getElementById("countries");
function country(info) {
info.forEach((obj) => {
    const newdiv = document.createElement("div");
    newdiv.className = "infoClass";
    const countryInfo = `<h1> ${obj.name} </h1>
    <h3> ${obj.capital} </h3>
    <button onclick="getDetails('${obj.name}')"> DETAILS </button>`;
    newdiv.innerHTML = countryInfo;
    div.appendChild(newdiv);
});
}

const getDetails = name => {
fetch(`https://restcountries.eu/rest/v2/name/${name}`)
.then(res=> res.json())
.then(data => setInfo(data));
document.getElementById('countries').style.display = 'none';
document.getElementById('viewInfo').style.display = 'block';
}

const setInfo = info => {
const inf = document.getElementById('viewInfo');
inf.innerHTML = `<h4>${info[0].name}</h4>
<p>Region : ${info[0].region} </p>
<p>Population: ${info[0].population} </p>
<p>Area: ${info[0].area} </p>
<img src='${info[0].flag}'></img><br>
<button onclick="location.reload()">Go-Back</button>`

}
