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
  // console.log("hello yrrr");
  const storePersonName = localStorage.getItem("personNameKey");
  // console.log(storePersonName);
  const alldata = await fetch(`./data.json`);
  data = await alldata.json();
  // console.log("data",data);
  let i;
  for (i = 0; i < data.length; i++) {
    // console.log("in loop");
    // console.log(storePersonName);
    console.log(data[i].username);
    const string1 = data[i].username;
    const string2 = storePersonName;
    const result = string1.localeCompare(string2);
    // console.log("result",result);
    // const result = data[i].username === abhay;
    if (result == 0) {
      // console.log("in if");
      // console.log(storePersonName);
      const showDetails = document.getElementById("showDetails");
      console.log(showDetails);
      showDetails.innerHTML = `<div class="userHead">
      <div class="userName">
        ${data[i].name}
        <span>(${data[i].username})</span>
      </div>
      <div class="userBio"><i class="fa fa-briefcase"></i>${data[i].bio}</div>
    </div>`;
      // console.log(data[i].links.length);
      for (let j = 0; j < data[i].links.length; j++) {
        // console.log("in loop");
        const linksData = document.getElementById("linksData");
        linksData.innerHTML += `
          <li class="link"><i class="fa fa-bookmark"></i><a href=${data[i].links[j]} target="_blank">${data[i].links[j]}</a></li>`;
        // console.log(data[i].links[j]);
      }
      // console.log("loop chal gaya");
      const socialLinks = document.getElementById("socialLinks");
      socialLinks.innerHTML = `
      <a href=${data[i].social[0].twitter} target="_blank"><button>Twitter</button></a>
      <a href=${data[i].social[1].linkedin} target="_blank"><button>Linkedin</button></a>`;
      // console.log("social");
      // console.log(data[i].social[0].twitter);
      break;
    }
  }
};

const fetchData = async () => {
  try {
    const alldata = await fetch(`./data.json`);
    data = await alldata.json();
    await showNames();
    // console.log(data);
  } catch (e) {
    throw new Error(e);
  }
};

fetchData();

// Scroll to Top Button Code Starts Here

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if(pos>100){
      scrollProgress.style.display = "grid";
  }
  else{
      scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#4b7df2 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};



window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Scroll to Top Button Code Ends Here





document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"

var theme = "dark";
  const root = document.querySelector(":root");
  const container = document.getElementsByClassName("theme-container")[0];
  const themeIcon = document.getElementById("theme-icon");
  container.addEventListener("click", setTheme);
  function setTheme() {
    switch (theme) {
      case "dark":
        setLight();
        theme = "light";
        break;
      case "light":
        setDark();
        theme = "dark";
        break;
    }
  }
  function setLight() {
    root.style.setProperty(
      "--bs-dark",
      "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
    );
    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
  }
  function setDark() {
    root.style.setProperty("--bs-dark", "#212529");
    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
  }