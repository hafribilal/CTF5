// IDEA: variables
const signin = document.querySelector("#signin");
const signup = document.querySelector("#signup");
const signinForm = document.querySelector(".signin");
const signupForm = document.querySelector(".signup");
const aside = document.querySelector("#aside");
let signinClosed = true,
  signupClosed = true;
// IDEA: click events
signin.addEventListener("click", function() {
  if (signinClosed) {
    openAside(signinForm, signin);
    signinClosed = false;
    signupClosed = true;
  } else {
    closeAside();
    signinClosed = true;
  }
});
signup.addEventListener("click", function() {
  if (signupClosed) {
    openAside(signupForm, signup);
    signupClosed = false;
    signinClosed = true;
  } else {
    closeAside();
    signupClosed = true;
  }
});
// IDEA: functions
function openAside(form, selected) {
  aside.style.width = "40vw";
  aside.style.opacity = "75%";
  signin.className = "";
  signup.className = "";
  selected.className = "selected";
  signinForm.style.display = "none";
  signupForm.style.display = "none";
  form.style.display = "flex";
  document.querySelector("#five").style.top = "30%";
}
function closeAside() {
  aside.style.width = "5px";
  aside.style.opacity = "1";
  signin.className = "";
  signup.className = "selected";
  signinForm.style.display = "none";
  signupForm.style.display = "none";
  document.querySelector("#five").style.top = "50%";
  const animationText = document.querySelectorAll(".text");
  animationText[0].style.bottom = "0%";
  animationText[1].style.bottom = "0%";
}
window.onload = closeAside();
