const ageInput = document.querySelector("#age");
ageInput.addEventListener("input", (event) => {
  console.log(event.type, event.target.id, event.target.value);
  console.log("event.target.value", event.target.value);
  console.log("typeof event.target.value", typeof event.target.value);
  const added5 = Number(event.target.value) + 5;
  alert(added5);
});
ageInput.addEventListener("keyup", (event) => {
  console.log(event.key);
});
