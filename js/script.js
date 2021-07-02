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
  return user.map(function(user) {
      var userFirstName = user.name.first;
      var userLastName = user.name.last;
      var userLocationCity = user.location.city;
      var userLocationCountry = user.location.country;
    document.getElementById("userName").innerHTML = joinWords(
      userFirstName,
      userLastName
    );

    document.getElementById("country").innerHTML = joinPlaces(
      userLocationCity,
      userLocationCountry
    );
  })
})
}

infoUser()