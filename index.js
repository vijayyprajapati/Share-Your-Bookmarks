const showData = document.getElementById("showData");
const showDetails = document.getElementById("showDetails");

const linksData = document.getElementById("linksData");
const socialLinks = document.getElementById("socialLinks");

const showNames = () => {
  if (data != "") {
    for (let i = 0; i < data.length; i++) {
      showData.innerHTML += `
          <div class="singlePerson" >
            <a href="./details.html"><button id="${i}" onclick="getElement(this.id)">${data[i].username}</button></a>
            </div>
          `;
    }
  }
};

let personName;
const getElement = (clicked_id) => {
  personName = document.getElementById(`${clicked_id}`).innerText;
  const storePersonName = personName;
  localStorage.setItem("personNameKey", storePersonName);
  // console.log(personName);
};

const userDetails = async () => {
  const storePersonName = localStorage.getItem("personNameKey");
  const alldata = await fetch(`https://bookmark-vqbz.onrender.com/${storePersonName}`);
  data = await alldata.json();

  showDetails.innerHTML = `<div class="userHead">
      <div class="userName">
        ${data.name}
        <span>(${data.username})</span>
      </div>
      <div class="userBio"><i class="fa fa-briefcase"></i>${data.bio}</div>
    </div>`;

  for (let j = 0; j < data.links.length; j++) {

    linksData.innerHTML += `
          <li class="link"><i class="fa fa-bookmark"></i><a href=${data.links[j]} target="_blank">${data.links[j]}</a></li>`;

  }
  socialLinks.innerHTML = `
      <a href=${data.social.twitter} target="_blank"><button>Twitter</button></a>
      <a href=${data.social.linkedin} target="_blank"><button>Linkedin</button></a>`;

};

const fetchData = async () => {
  try {
    const alldata = await fetch(`https://bookmark-vqbz.onrender.com/`);
    data = await alldata.json();
    await showNames();
    // console.log(data);
  } catch (e) {
    throw new Error(e);
  }
};

fetchData();
