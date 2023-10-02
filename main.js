let inpEmail = document.querySelector(".inp");
let btnNotify = document.querySelector(".btn");
let error = document.querySelector(".span__error");

btnNotify.addEventListener("click", () => {
  let inpValue = inpEmail.value;
  console.log(onInput(inpValue));
  if (!onInput(inpValue)) {
    inpEmail.classList.add("inp__error");
    error.classList.add("span__error__active");
  } else {
    error.classList.remove("span__error__active");
    inpEmail.classList.remove("inp__error");
    inpEmail.classList.add("inp__active");
  }
});

function onInput(email) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  return EMAIL_REGEXP.test(String(email).toLowerCase());
}
