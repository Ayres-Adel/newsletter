        // Retrieve the email from the URL parameters
        let urlParams = new URLSearchParams(window.location.search);
        let email = urlParams.get('email');

        // Update the email placeholder in the HTML
        let emailPlaceholder = document.getElementById('emailPlaceholder');
        emailPlaceholder.textContent = email;