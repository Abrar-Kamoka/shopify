document.addEventListener('DOMContentLoaded', function() {
    // Ensure we're on the cart page
    if (window.location.pathname === '/cart') {
        // Create the custom button
        var customButton = document.createElement('button');
        customButton.id = 'customButton';
        customButton.className = 'btn';
        customButton.textContent = 'Custom Button';

        // Apply styles to the custom button
        customButton.style.color = 'white'; // Text color
        customButton.style.backgroundColor = 'blue'; // Background color
        customButton.style.border = 'none'; // Remove border
        customButton.style.padding = '10px 20px'; // Padding
        customButton.style.fontSize = '16px'; // Font size
        customButton.style.cursor = 'pointer'; // Pointer cursor on hover
        customButton.style.borderRadius = '5px'; // Rounded corners

        // Insert the button into the cart page
        var cartForm = document.querySelector('form[action="/cart"]');
        if (cartForm) {
            cartForm.appendChild(customButton);
        }

        // Add event listener to the custom button
        customButton.addEventListener('click', function() {
            alert('Custom button clicked!');
            // Add your custom functionality here
        });
    }
});
