const select = document.querySelector("#one");
const rusUz = document.querySelector(".rus_uz");
const english = document.querySelector(".english");
const btn = document.querySelector(".btn");
// const translate = new Promise(function (resolve, reject) {

// });

const options = {
  method: "GET",
  headers: {
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    "X-RapidAPI-Key": "93cc493846mshae65c31d1500471p13b722jsn3452235c9618",
  },
};

let a = fetch(
  "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response.data.languages[102]))
  .catch((err) => console.error(err));

btn.addEventListener("click", function () {
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", rusUz.value);
  encodedParams.append("target", "ru");
  encodedParams.append("source", "uz");

  console.log(rusUz.value);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      "X-RapidAPI-Key": "c175fc0d4amsh2cc30f474c9651ep11db64jsn59260858054e",
    },
    body: encodedParams,
  };

  fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2",
    options
  )
    .then((response) => response.json())
    .then((response) => english.value=response.data)
    .catch((err) => console.error(err));
});

