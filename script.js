// DOM elements
const radioInputs = document.querySelectorAll(".radioBox input");
const sumbitBtn = document.querySelector("form button");
let ratingText = document.querySelector(".ratingText span");
const thanksCard = document.querySelector("main .thanksCard");

// Sumbit Action
sumbitBtn.addEventListener("click", () => {
	radioInputs.forEach((input) => {
		if (input.checked) {
			ratingText.textContent = input.id.toString();
			thanksCard.classList.add("show");
		}
	});
});
