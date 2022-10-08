console.log("Hello World");

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params);
const name = params.name;

const showNames = () => {
  if (data != "") {
    for (let i = 0; i < data.length; i++) {
      showData.innerHTML += `
          <div class="singlePerson" >
            <a href="http://127.0.0.1:5500/index.html?name=${data[i].username}" target="blank"><button id="${i}" onclick="getElement(this.id)">${data[i].username}</button></a>
            </div>
          `;
    }
  }
};

const getElement = (clicked_id) => {
  var personName = document.getElementById(`${clicked_id}`).innerText;
  console.log(personName);
  console.log(buildUrl(url, personName));
};

function buildUrl(url, parameters) {
  var qs = "";
  qs += encodeURIComponent(parameters);

  if (qs.length > 0) {
    url = url + "?" + qs;
  }
  return url;
}
var url = "http://127.0.0.1:5500/index.html";

const fetchData = async () => {
  try {
    const alldata = await fetch(`./data.json`);
    data = await alldata.json();
    await showNames();
    console.log(data);
  } catch (e) {
    throw new Error(e);
  }
};

fetchData();
