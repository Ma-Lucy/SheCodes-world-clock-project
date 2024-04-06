function updateHongkongSeconds() {
  let hongkongCityElement = document.querySelector("#hongkong");
  let hongkongDateElement = document.querySelector(".date");
  let hongkongTimeElement = document.querySelector(".time");

  hongkongDate = moment().tz("Asia/Hong_Kong").format("dddd Do MMMM");
  hongkongDateElement.innerHTML = hongkongDate;
  hongkongTime = moment()
    .tz("Asia/Hong_Kong")
    .format("h:mm:ss [<small>]A[</small>]");
  hongkongTimeElement.innerHTML = hongkongTime;
}

setInterval(updateHongkongSeconds, 1000);

function updateLondonSeconds() {
  let londonCityElement = document.querySelector("#london");
  let londonDateElement = document.querySelector("#londonDate");
  let londonTimeElement = document.querySelector("#londonTime");

  londonDate = moment().tz("Europe/London").format("dddd Do MMMM");
  londonDateElement.innerHTML = londonDate;
  londonTime = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");
  londonTimeElement.innerHTML = londonTime;
}

setInterval(updateLondonSeconds, 1000);
