// template_ujyba8h
// service_cf2pcf4
// srU5YOcDS1ay8lnZC

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(`.modal__overlay--loading`);
  const success = document.querySelector(`.modal__overlay--success`);
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_cf2pcf4",
      "template_ujyba8h",
      event.target,
      "srU5YOcDS1ay8lnZC"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporaly unavailable. Please contact me directly at w.jayrivera@gmail.com."
      );
    });
}
