let inpEmail = document.querySelector(".inp");
let btnNotify = document.querySelector(".btn");

btnNotify.addEventListener("click", () => {
  let inpValue = inpEmail.value;
  console.log(onInput(inpValue));
  if (!onInput(inpValue)) {
    console.log("No");
  } else {
    console.log("YES");
  }
});

function onInput(email) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  return EMAIL_REGEXP.test(String(email).toLowerCase());
}
