function joinWords(a, b){
    var sealed = a + ' ' + b
    return sealed
}

function joinPlaces(a, b){
    var sealed = a + ', ' + b
    return sealed
}

function infoUser() {

fetch('https://randomuser.me/api/')
.then((resp) => resp.json())
.then(function(data) {
  let user = data.results;
  console.log(user)
  var backgroundImage = document.getElementById("photoBackground");
  return user.map(function(user) {
      var userFirstName = user.name.first;
      var userLastName = user.name.last;
      var userLocationCity = user.location.city;
      var userLocationCountry = user.location.country;
      var userPhotoPicture = user.picture.large;
    document.getElementById("userName").innerHTML = joinWords(
      userFirstName,
      userLastName
    );

    document.getElementById("country").innerHTML = joinPlaces(
      userLocationCity,
      userLocationCountry
    );

    document.getElementById("photoPicture").innerHTML =
    `<img src="${userPhotoPicture}">`;

    backgroundImage.style.backgroundImage = `URL(${userPhotoPicture})`;
  })
})
}

infoUser()