function CreateEntry() {
  const form = document.querySelector(".template-formCreateEntry");
  const btnClearEntry = document.querySelector("#btnClearEntry");

  function onClearEntry(evt) {
    evt.preventDefault(); // don't submit the form, we just want to clear it
    console.log("Clearing the form");
    form.querySelector("input[name='owner']").value = "";
    form.querySelector("input[name='text']").value = "";
  }

  btnClearEntry.addEventListener("click", onClearEntry);
}

export default CreateEntry;