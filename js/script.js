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
