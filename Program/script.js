let firstName = "Ogunwa";
let otherName = "Anthonia Chinasa";
let fullName = ` My is ${firstName} ${otherName}`;
const btn = document.querySelector(".btn");
const displayName = document.querySelector(".get-name");
console.log(fullName);
btn.addEventListener("click", function showName() {
  displayName.innerHTML = fullName;
});
