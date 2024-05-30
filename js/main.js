let selectedRating = undefined;

document.querySelectorAll('.rating').forEach((rating) => {
    rating.addEventListener('click', (event) => {
        selectedRating = event.target.innerText;
    });
});

document.querySelector('.submit').addEventListener('click', () => {
    // Hide the question
    document.querySelector('.question').classList.add('hide');

    // Show appreciation
    document.querySelector('.appreciation').classList.remove('hide');
    document.querySelector('.appreciation').classList.add('flex');

    // Update the selected rating in the appreciation message
    document.querySelector('.selected-rating').innerText = selectedRating;
});