document.addEventListener('DOMContentLoaded', function() {
    // Basic Login Example (Replace with real authentication)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value; // Corrected line

            // Basic check (replace with server-side authentication)
            if (username === 'user' && password === 'password') {
                window.location.href = 'home.html'; // Redirect on successful login
            } else {
                alert('Invalid username or password.');
            }
        });
    }
});