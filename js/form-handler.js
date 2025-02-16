const form = document.querySelector("[name='contact']");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formCritical = document.querySelector(".form-critical");
  const formSuccess = document.querySelector(".form-success");

  formSuccess.hidden = true;
  formCritical.hidden = true;

  try {
    const formData = new FormData(form);
    const reponse = await fetch(form.getAttribute("action"), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (response && response.ok) {
      form.reset();
      formSuccess.hidden = false;
    }
  } catch (error) {
    formCritical.hidden = false;
  }
});
