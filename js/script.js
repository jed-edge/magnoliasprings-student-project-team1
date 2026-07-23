// For Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const applicationType = document.getElementById('applicationType').value;
    const businessName = document.getElementById('businessName').value;
    const website = document.getElementById('website').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const contactName = document.getElementById('contactName').value; 
    const businessLocation = document.getElementById('businessLocation').value;
    const businessDescription = document.getElementById('businessDescription').value;


    // Display an alert with the submitted information
    alert(`Thank you, \${businessName}! Your application has been received.`);

    // Reset the form fields
    this.reset();
});


// Simple client-side search/filter for the Meet the Artists page
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('artistSearchInput');
    const searchButton = document.getElementById('artistSearchButton');
    const artistCards = document.querySelectorAll('.artist-card');
    const emptyMessage = document.getElementById('artistEmptyMessage');

    function filterArtists() {
        const query = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        artistCards.forEach(function (card) {
            const searchText = card.getAttribute('data-search') || '';
            const isMatch = searchText.toLowerCase().includes(query);
            card.style.display = isMatch ? '' : 'none';
            if (isMatch) {
                visibleCount++;
            }
        });

        if (emptyMessage) {
            emptyMessage.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterArtists);
    }

    if (searchButton) {
        searchButton.addEventListener('click', function (e) {
            e.preventDefault();
            filterArtists();
        });
    }
});
