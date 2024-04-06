function updateSeconds() {
  let hongkongCityElement = document.querySelector("#hongkong");
  if (hongkongCityElement) {
    let hongkongDateElement = document.querySelector(".date");
    let hongkongTimeElement = document.querySelector(".time");

    hongkongDate = moment().tz("Asia/Hong_Kong").format("dddd Do MMMM");
    hongkongDateElement.innerHTML = hongkongDate;
    hongkongTime = moment()
      .tz("Asia/Hong_Kong")
      .format("h:mm:ss [<small>]A[</small>]");
    hongkongTimeElement.innerHTML = hongkongTime;
  }

  let londonCityElement = document.querySelector("#london");
  if (londonCityElement) {
    let londonDateElement = document.querySelector("#londonDate");
    let londonTimeElement = document.querySelector("#londonTime");

    londonDate = moment().tz("Europe/London").format("dddd Do MMMM");
    londonDateElement.innerHTML = londonDate;
    londonTime = moment()
      .tz("Europe/London")
      .format("h:mm:ss [<small>]A[</small>]");
    londonTimeElement.innerHTML = londonTime;
  }
}

function selectCityFunction(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let newCityDate = moment().tz(cityTimezone).format("MMMM Do YYYY");
  let newCityTime = moment()
    .tz(cityTimezone)
    .format("h:mm:ss [<small>]A[</small>]");
  let newCityElement = document.querySelector("#cities");
  newCityElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${newCityDate}</div>
        </div>
        <div class="time">
          ${newCityTime}
        </div>
      </div>
    <a class="homepage-link"href = "index.html">Back to homepage</a>`;
}

let selectDrop = document.querySelector("#select-drop");
selectDrop.addEventListener("change", selectCityFunction);

updateSeconds();
setInterval(updateSeconds, 1000);
