// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember_me').checked;

        // Here you would typically send this data to a backend server for authentication
        console.log('로그인 정보:', { email, password, rememberMe });

        // Simulate a successful login for demonstration purposes
        if (email === 'test@example.com' && password === 'password123') {
            alert('로그인 성공! (실제 인증은 구현되지 않았습니다.)');
            // Redirect to profile page or main page after successful login
            // window.location.href = 'profile.html';
        } else {
            alert('이메일 또는 비밀번호가 올바르지 않습니다.');
        }
    });
});
