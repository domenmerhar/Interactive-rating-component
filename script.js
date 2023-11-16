"use strict"

const mainContainer = document.querySelector(".main-container")
const form = document.querySelector(".main-form")

const ratingsList = document.querySelector(".main-form__ratings-list")
const formRatings = document.querySelectorAll(".main-form__rating")

let currentRating = 0

ratingsList.addEventListener("click", (e) => {
  if (!e.target.href?.includes("#")) return
  removeSelectedClass()
  e.target.classList.add("selected")
  currentRating = +e.target.textContent
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  changeSection()
  outputRating(currentRating)
})

const removeSelectedClass = () => {
  formRatings.forEach((rating) => {
    {
      rating.children[0].classList.remove("selected")
    }
  })
}

const changeSection = () => {
  mainContainer.innerHTML = `<section class="thank-you-container">
  <img
    src="images/illustration-thank-you.svg"
    class="thank-you-container__img"
  />
  <p class="thank-you-container__rating-report">
    You selected
    <span class="thank-you-container__your-rating">1</span>
    out of 5
  </p>

  <h1 class="heading-primary">Thank you!</h1>
  <p class="thank-you-container__thank-you-message">
    We appreciate you taking the time to give a rating. If you ever need
    more support, don’t hesitate to get in touch!
  </p>
</section>`
}

const outputRating = (rating) =>
  (document.querySelector(".thank-you-container__your-rating").textContent =
    rating)
