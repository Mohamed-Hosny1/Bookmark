var siteName = document.getElementById("siteName");
var siteAdress = document.getElementById("website");
var siteList = [];
var alertText = document.getElementById("alertText");
var alertAdress = document.getElementById("alertAdress");

if (localStorage.getItem("siteContainer") !== null) {
  siteList = JSON.parse(localStorage.getItem("siteContainer"));
  dispalyData();
}

function addData() {
  if (validationName() && validationUrl()) {
    var site = {
      name: siteName.value,
      adress: siteAdress.value,
    };

    siteList.push(site);
    localStorage.setItem("siteContainer", JSON.stringify(siteList));
    dispalyData();
    console.log(siteList);
    clearData();
  }
}

function clearData() {
  siteName.value = "";
  siteAdress.value = "";
}

function dispalyData() {
  var box = "";
  for (var i = 0; i < siteList.length; i++) {
    box += ` <tr class="text-center border-bottom">
    <td class ="fs-6 fw-medium text-danger">${i}</td>
    <td class ="fs-6 fw-medium">${siteList[i].name}</td>
    <td>
    <a href="${siteList[i].adress}" class ="d-inline-block py-1 ">
                <button class="btn visit  px-3 ">
                  <span> <i class="fa-solid fa-eye me-2"></i> </span>
                  <span>Visit</span>
                </button>
              </a>
            </td>
            <td>
                <button class="btn delete d-inline-block py-1 px-3" onclick= "deleteData(${i})">
                  <span> <i class="fa-solid fa-trash me-2"></i></span>
                  <span>Delete</span>
                </button>
            </td>
          </tr>
        `;
  }
  document.getElementById("displaySite").innerHTML = box;
}

function deleteData(index) {
  siteList.splice(index, 1);
  localStorage.setItem("siteContainer", JSON.stringify(siteList));
  dispalyData();
}

function validationName() {
  var regex = /[a-zA-Z]{3}/;
  var sName = siteName.value;
  if (regex.test(sName)) {
    siteName.classList.add("is-valid");
    siteName.classList.remove("is-invalid");
    alertText.classList.add("d-none");
    return true;
  } else {
    siteName.classList.add("is-invalid");
    siteName.classList.remove("is-valid");
    alertText.classList.remove("d-none");
    return false;
  }
}
function validationUrl() {
  var regex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  var sAdress = siteAdress.value;
  if (regex.test(sAdress)) {
    siteAdress.classList.add("is-valid");
    siteAdress.classList.remove("is-invalid");
    alertAdress.classList.add("d-none");
    return true;
  } else {
    siteAdress.classList.add("is-invalid");
    siteAdress.classList.remove("is-valid");
    alertAdress.classList.remove("d-none");
    return false;
  }
}
