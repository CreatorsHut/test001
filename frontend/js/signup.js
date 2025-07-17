// signup.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;
        const termsAccepted = document.getElementById('terms').checked;

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (!termsAccepted) {
            alert('개인정보처리방침 및 이용약관에 동의해야 합니다.');
            return;
        }

        // Here you would typically send this data to a backend server
        console.log('회원가입 정보:', { username, email, password });
        alert('회원가입이 완료되었습니다! (실제 서버 전송은 구현되지 않았습니다.)');
        // Redirect to login page or main page after successful signup
        // window.location.href = 'login.html';
    });
});
