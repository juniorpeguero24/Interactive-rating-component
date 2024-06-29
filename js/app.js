let selectedRating = null;

document.addEventListener("DOMContentLoaded", () => {
  const ratings = document.querySelectorAll(".rating");

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      if (selectedRating === rating) {
        rating.classList.remove("selected");
        selectedRating = null;
      } else {
        if (selectedRating) {
          selectedRating.classList.remove("selected");
        }
        rating.classList.add("selected");
        selectedRating = rating;
      }
      console.log(
        "Selected rating:",
        selectedRating ? selectedRating.dataset.value : "None"
      );
    });
  });

  document.getElementById("submit-btn").addEventListener("click", () => {
    if (selectedRating) {
      document.getElementById("rating-section").style.display = "none";
      document.getElementById("submitted-section").style.display = "block";
      let selectionText = document.getElementById("selected");
      console.log("Selected rating value:", selectedRating.dataset.value);
      selectionText.textContent = `You selected ${selectedRating.dataset.value} out of 5`;
    } else {
      alert("Error");
    }
  });
});
