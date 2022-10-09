const showDetails = document.getElementById("userDetails");
const showData = document.getElementById("showData");
const linksData = document.getElementById("linksData");
const socialLinks = document.getElementById("socialLinks");

const showNames = () => {
  if (data != "") {
    for (let i = 0; i < data.length; i++) {
      showData.innerHTML += `
          <div class="singlePerson" >
            <a href="./details.html" target="_blank"><button id="${i}" onclick="getElement(this.id)">${data[i].username}</button></a>
            </div>
          `;
    }
  }
};

var personName;
const getElement = (clicked_id) => {
  personName = document.getElementById(`${clicked_id}`).innerText;
  var storePersonName = personName;
  localStorage.setItem("personNameKey", storePersonName);
  // console.log(personName);
};

const userDetails = async () => {
  // console.log("hello yrrr");
  var storePersonName = localStorage.getItem("personNameKey");
  // console.log(storePersonName);
  const alldata = await fetch(`./data.json`);
  data = await alldata.json();
  // console.log(data);
  let i;
  for (i = 0; i < data.length; i++) {
    // console.log("in loop");
    // console.log(storePersonName);
    // console.log(data[i].username);
    var string1 = data[i].username;
    var string2 = storePersonName;
    var result = string1.localeCompare(string2);
    // const result = data[i].username === abhay;
    if (result == 0) {
      // console.log("in if");
      // console.log(storePersonName);
      // console.log(data[i].username);
      showDetails.innerHTML = `<div class="userHead">
      <div class="userName">
        ${data[i].name}
        <span>(${data[i].username})</span>
      </div>
      <div class="userBio">${data[i].bio}</div>
    </div>`;
      console.log(data[i].links.length);
      for (let j = 0; j < data[i].links.length; j++) {
        console.log("in loop");
        linksData.innerHTML += `<div><a
          href=${data[i].links[j]}
        ></li>
          
          ${data[i].links[j]}</li>
          
        </a></div>`;
        console.log(data[i].links[j]);
      }
      console.log("loop chal gaya");

      socialLinks.innerHTML = `
      <a href=${data[i].social[0].twitter}><button>Twitter</button></a>
      <a href=${data[i].social[0].linkedin}><button>Linkedin</button></a>`;
      console.log("social");
      console.log(data[i].social[0].twitter);
      break;
    }
  }
};

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
