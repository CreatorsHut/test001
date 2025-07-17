// profile.js

document.addEventListener('DOMContentLoaded', () => {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const changePasswordBtn = document.getElementById('changePasswordBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    const editProfileForm = document.getElementById('editProfileForm');
    const changePasswordForm = document.getElementById('changePasswordForm');

    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const cancelPasswordChangeBtn = document.getElementById('cancelPasswordChangeBtn');

    // Function to hide all forms
    const hideAllForms = () => {
        editProfileForm.classList.add('hidden');
        changePasswordForm.classList.add('hidden');
    };

    editProfileBtn.addEventListener('click', () => {
        hideAllForms();
        editProfileForm.classList.remove('hidden');
    });

    changePasswordBtn.addEventListener('click', () => {
        hideAllForms();
        changePasswordForm.classList.remove('hidden');
    });

    logoutBtn.addEventListener('click', () => {
        if (confirm('로그아웃 하시겠습니까?')) {
            alert('로그아웃 되었습니다.');
            // In a real application, you would clear session/local storage and redirect to login
            window.location.href = 'login.html';
        }
    });

    cancelEditBtn.addEventListener('click', (event) => {
        event.preventDefault();
        hideAllForms();
    });

    cancelPasswordChangeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        hideAllForms();
    });

    // Handle profile update form submission (client-side only for now)
    editProfileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('editUsername').value;
        const email = document.getElementById('editEmail').value;
        const phone = document.getElementById('editPhone').value;

        // Update displayed info
        document.getElementById('displayUsername').textContent = username;
        document.getElementById('displayEmail').textContent = email;
        document.getElementById('displayPhone').textContent = phone;

        alert('프로필 정보가 업데이트되었습니다! (실제 서버 전송은 구현되지 않았습니다.)');
        hideAllForms();
    });

    // Handle password change form submission (client-side only for now)
    changePasswordForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmNewPassword = document.getElementById('confirmNewPassword').value;

        if (newPassword !== confirmNewPassword) {
            alert('새 비밀번호가 일치하지 않습니다.');
            return;
        }

        if (currentPassword === newPassword) {
            alert('현재 비밀번호와 새 비밀번호가 동일합니다. 다른 비밀번호를 입력해주세요.');
            return;
        }

        alert('비밀번호가 성공적으로 변경되었습니다! (실제 서버 전송은 구현되지 않았습니다.)');
        hideAllForms();
        // Clear password fields
        document.getElementById('currentPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmNewPassword').value = '';
    });
});
