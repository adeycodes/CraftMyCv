
        // Handle password visibility toggle
        const passwordToggle = document.querySelector('.password-toggle');
        const passwordInput = document.getElementById('password');
        passwordToggle.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                passwordToggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
            } else {
                passwordInput.type = 'password';
                passwordToggle.innerHTML = '<i class="fas fa-eye"></i>';
            }
        });
        
        // Handle login button click
        const loginButton = document.querySelector('.login-button');
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, you would validate credentials here
            alert('Login successful!')
            window.location.href = 'dashboard.html';
        });
        
        // Handle sign up link click
        const signupLink = document.querySelector('.signup-link a');
        signupLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecting to sign up page...');
        });