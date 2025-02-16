const dialogForm = document.querySelector("#dialog-contact-form");
const trigger = document.querySelector("#show-dialog");

trigger.addEventListener("click", () => {
  dialogForm.showModal();
});
