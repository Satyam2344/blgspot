function filterCards() {
    const searchBox = document.getElementById('searchBox').value.toLowerCase();
    const cardList = document.getElementById('cardList');
    const cards = cardList.getElementsByClassName('card');

    // Loop through all cards
    for (let i = 0; i < cards.length; i++) {
        const cardTitle = cards[i].querySelector('.card-title').textContent.toLowerCase();

        // Show the card if the title matches the search input, otherwise hide it
        if (cardTitle.includes(searchBox)) {
            cards[i].style.display = ""; // Show the card
        } else {
            cards[i].style.display = "none"; // Hide the card
        }
    }
}
//select the tag
const cards = document.querySelectorAll('.card');
const tags = document.querySelectorAll('.drinks__tag'); // Assuming you have a class for your tags
let selectedTags = ['All']; // Start with 'All' selected

// Function to show all cards
function showAllCards() {
    cards.forEach(card => {
        card.classList.add('show');
    });
}

// Function to highlight the 'All' tag
function highlightAllTag() {
    tags.forEach(t => {
        t.classList.remove('highlight');
        t.style.opacity = '0.6'; // Reset opacity
    });
    const allTag = Array.from(tags).find(t => t.textContent.trim() === 'All');
    if (allTag) {
        allTag.classList.add('highlight');
        allTag.style.opacity = '1'; // Highlight 'All' tag
    }
}

// Show all cards and highlight 'All' tag on page load
showAllCards();
highlightAllTag();

// Add click event listener to each tag
tags.forEach(tag => {
    tag.addEventListener('click', function () {
        const tagText = this.textContent.trim();

        // Remove highlight from all tags
        tags.forEach(t => {
            t.classList.remove('highlight');
            t.style.opacity = '0.6';
        });

        // Highlight the clicked tag
        this.classList.add('highlight');
        this.style.opacity = '1';

        // Toggle the selection of the tag
        if (tagText === 'All') {
            selectedTags = []; // Clear all selections if 'All' is clicked
            showAllCards(); // Show all cards
        } else {
            // If the tag is not "All", clear previous selections
            selectedTags = [tagText]; // Set selectedTags to only the clicked tag

            // Filter cards based on selected tags
            cards.forEach(card => {
                const cardTags = card.getAttribute('data-tags').split(' ');
                if (selectedTags.some(tag => cardTags.includes(tag))) {
                    card.classList.add('show'); // Show the card if it matches the selected tag
                } else {
                    card.classList.remove('show'); // Hide the card if it doesn't match
                }
            });
        }
    });
});

//snow-flakes
const NUMBER_OF_SNOWFLAKES = 100; // Number of snowflakes
const snowflakeContainer = document.getElementById('snowflakeContainer');

const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄'; // Snowflake character
    snowflake.style.left = Math.random() * 100 + '%'; // Random horizontal position
    snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; // Random fall duration between 5s and 8s
    snowflakeContainer.appendChild(snowflake);

    // Remove snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, 8000); // Adjust time to match animation duration
};

// Create snowflakes continuously
setInterval(createSnowflake, 300); // Adjust interval for more or fewer snowflakes