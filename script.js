const userList = document.getElementById('user-list');

if (userList) {
    userList.addEventListener('click', function(event) {
        if (event.target.classList.contains('user-item')) {
            window.location.href = 'adminview-user-profile.html';
        }
    });
}

const courseList = document.getElementById('course-list');

if (courseList) {
    courseList.addEventListener('click', function(event) {
        if (event.target.classList.contains('course-item')) {
            window.location.href = 'adminview-course-profile.html';
        }
    });
}

function redirectToPage() {
    const username = document.getElementById('username').value;

    if (username === 'admin') {
        window.location.href = 'admin-page.html';
    } else {
        window.location.href = 'index.html';
    }

    return false; // Prevent form submission
}
