const inpEmail = document.querySelector(".inp");
const btnNotify = document.querySelector(".btn");

btnNotify.addEventListener("click", () => {
  let inpValue = inpEmail.value;
  console.log(onInput(inpValue));
  if (onInput(inpValue)) {
    
  }
});

function onInput(email) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  return EMAIL_REGEXP.test(String(email).toLowerCase());
}
