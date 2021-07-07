var currentUser

function getInfoUser() {
  fetch("https://randomuser.me/api/")
    .then((resp) => resp.json())
    .then(function (data) {
      let user = data.results;
      currentUser = user;
      var backgroundImage = document.getElementById("photoBackground");
      return user.map(function (user) {
        var userFirstName = user.name.first;
        var userLastName = user.name.last;
        var userLocationCity = user.location.city;
        var userLocationCountry = user.location.country;
        var userPhotoPicture = user.picture.large;

        document.getElementById("userName").innerHTML = [
          userFirstName,
          userLastName,
        ].join(" ");

        document.getElementById("country").innerHTML = [
          userLocationCity,
          userLocationCountry,
        ].join(", ");

        document.getElementById(
          "photoPicture"
        ).innerHTML = `<img class="user-photo" src="${userPhotoPicture}">`;

        backgroundImage.style.backgroundImage = `URL(${userPhotoPicture})`;
      });
    });
}

function store(key, data) {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, JSON.stringify([data]));
  }
  else {
    localStorage.setItem(key, JSON.stringify([ ...JSON.parse(localStorage.getItem(key)), data ]))
  }
}

function followUser() {
  store("users", currentUser)
}