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
