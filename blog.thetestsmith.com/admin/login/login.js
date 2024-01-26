document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you should send a request to the server to check the credentials
    console.log('Username:', username, 'Password:', password);

    // Redirect to dashboard if successful
    window.location.href = '../dashboard/dashboard.html';
});
