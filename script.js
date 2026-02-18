console.log("Script is loaded!");

/* Login Page */
function redirectToPage() {
    const username = document.getElementById('username').value;

    if (username === 'admin') {
        window.location.href = 'admin-page.html';
    } else {
        window.location.href = 'index.html';
    }

    return false;
}

/* Manage Course */
const courseOne = document.getElementById('course-1');

if (courseOne) {
    const courseTwo = document.getElementById('course-2');
    const courseThree = document.getElementById('course-3');
    const courseFour = document.getElementById('course-4');
    const courseFive = document.getElementById('course-5');

    const codeInput = document.getElementById('course-code');
    const nameInput = document.getElementById('course-name');
    const descInput = document.getElementById('description');
    const departmentInput = document.getElementById('department');

    function clearActiveCourse () {
        courseOne.classList.remove('active-course-item');
        courseTwo.classList.remove('active-course-item');
        courseThree.classList.remove('active-course-item');
        courseFour.classList.remove('active-course-item');
        courseFive.classList.remove('active-course-item');

        courseOne.classList.add('course-item');
        courseTwo.classList.add('course-item');
        courseThree.classList.add('course-item');
        courseFour.classList.add('course-item');
        courseFive.classList.add('course-item');
    };

    courseOne.addEventListener("click", function() {
        clearActiveCourse();
        courseOne.classList.add('active-course-item');

        codeInput.value = "CCAPDEV";
        nameInput.value = "Web Application Development";
        descInput.value = "This online course provides an overview of web application development as a discipline concerned with the implementation of theory, application of knowledge, and realization of practice. It introduces the students to the principles and processes of web-based systems. It focuses on the analysis of the needs of an online application and the tools available to answer these needs. This course also focuses on the different technologies used in the design of web-based systems.";
        departmentInput.value = "ccs";
    });

    courseTwo.addEventListener("click", function() {
        clearActiveCourse();
        courseTwo.classList.add('active-course-item');

        codeInput.value = "ISINFOM";
        nameInput.value = "Transaction Management and Descriptive Analytics";
        descInput.value = "This course introduces students to the fundamentals of Business Intelligence (BI) and Descriptive Analytics—the process of transforming organizational data into actionable insights. It covers the BI lifecycle, data warehousing concepts, ETL workflows, dashboard design, and storytelling for decision support. Students will use cloud-based BI tools to collect, clean, visualize, and interpret data for strategic and operational purposes.";
        departmentInput.value = "ccs";
    });

    courseThree.addEventListener("click", function() {
        clearActiveCourse();
        courseThree.classList.add('active-course-item');

        codeInput.value = "ITISHCI";
        nameInput.value = "Human Computer Interaction";
        descInput.value = "This course shows the importance of good design of interaction between human and technology. This covers the integration of concepts in human psychology, interface design, and computer technology, that affect human-computer interaction (HCI). Examining the human factors associated with information technology allows students to understand the different elements that affect usability, user experience, and technology adoption. There is focus placed on the detailed approach of task analysis and modeling involved in usability engineering. Moreover, students will learn about user-centered techniques and design and evaluation methods, considering a variety of industries, system environments, technology platforms, and users.";
        departmentInput.value = "ccs";
    });

    courseFour.addEventListener("click", function() {
        clearActiveCourse();
        courseFour.classList.add('active-course-item');

        codeInput.value = "ISBUSPE";
        nameInput.value = "Business Performance";
        descInput.value = "The course is designed for Bachelor of Science in Information Systems (BS-IS) students. It covers business performance concepts, metrics, and IT tools. It aims to introduce students to an organization’s business performance management (and the different models that can be used for managing performance) and related processes. At the end of the course, the students are expected to design a performance management system using wireframes and wire flows. The essence of learning performance management is to be able to conceptualize and design performance management systems or incorporating modules on performance management systems on existing systems, either during capstone project or in the workplace.";
        departmentInput.value = "ccs";
    });

    courseFive.addEventListener("click", function() {
        clearActiveCourse();
        courseFive.classList.add('active-course-item');

        codeInput.value = "GERPHIS";
        nameInput.value = "Philippine History";
        descInput.value = "Sinusuri ng kurso ang kasaysayan ng Pilipinas mula sa lente ng mga pilìng primaryang batis gamit ang interdisiplinaryong lapit at perspektiba. Sa pamamagitan ng lapit na kronolohikal-tematiko-konseptuwal, susuriin ang pagkahubog, pagpapatuloy at pagbabago ng mga aspektong panlipunan, pampulitika, pang-ekonomiya at pang-kultura sa iba’t ibang yugto ng kasaysayan ng pagkabansa ng Pilipinas. Nakapaloob sa saklaw at pagkakasunod-sunod ang mga paksa ng Saligang-Batas, repormang agraryo, at sistema ng pagbubuwis. Sa pagtatapos, inaasahan na makalinang o makahubog ng mag-aaral na kritikal, malikhain, kolaborador (collaborator), at may kasanayan sa epektibong talastasan. Ang kursong ito ay tumutugon din sa layunin ng SDG 4, 10, 11, at 16.";
        departmentInput.value = "cla";
    });
}

/* View Students */
const studentOne = document.getElementById('student-1');

if (studentOne) {
    const studentTwo = document.getElementById('student-2');
    const studentThree = document.getElementById('student-3');
    const studentFour = document.getElementById('student-4');
    const studentFive = document.getElementById('student-5');

    const studentNameInput = document.getElementById('student-name');
    const idNumInput = document.getElementById('id-number');
    const birthdayInput = document.getElementById('birthday');
    const contactInput = document.getElementById('contact-info');
    const emailInput = document.getElementById('email');
    const depInput = document.getElementById('dep');

    function clearActiveStudent () {
        studentOne.classList.remove('active-student-item');
        studentTwo.classList.remove('active-student-item');
        studentThree.classList.remove('active-student-item');
        studentFour.classList.remove('active-student-item');
        studentFive.classList.remove('active-student-item');

        studentOne.classList.add('student-item');
        studentTwo.classList.add('student-item');
        studentThree.classList.add('student-item');
        studentFour.classList.add('student-item');
        studentFive.classList.add('student-item');
    };

    studentOne.addEventListener("click", function() {
        clearActiveStudent();
        studentOne.classList.add('active-student-item');

        studentNameInput.value = "Lorenzo Mikael Carmona";
        idNumInput.value = "12305871";
        birthdayInput.value = "2005-11-27";
        contactInput.value = "0912305871";
        emailInput.value = "lorenzo_carmona@dlsu.edu.ph";
        depInput.value = "ccs";
    });

    studentTwo.addEventListener("click", function() {
        clearActiveStudent();
        studentTwo.classList.add('active-student-item');

        studentNameInput.value = "Joreve De Jesus";
        idNumInput.value = "12410179";
        birthdayInput.value = "2006-09-15";
        contactInput.value = "0912410179";
        emailInput.value = "joreve_dejesus@dlsu.edu.ph";
        depInput.value = "ccs";
    });

    studentThree.addEventListener("click", function() {
        clearActiveStudent();
        studentThree.classList.add('active-student-item');

        studentNameInput.value = "Nathan Joaquin Jabonete";
        idNumInput.value = "12415456";
        birthdayInput.value = "2008-03-01";
        contactInput.value = "0912415456";
        emailInput.value = "nathan_jabonete@dlsu.edu.ph";
        depInput.value = "ccs";
    });

    studentFour.addEventListener("click", function() {
        clearActiveStudent();
        studentFour.classList.add('active-student-item');

        studentNameInput.value = "Gabriel Meer";
        idNumInput.value = "12483788";
        birthdayInput.value = "2005-09-21";
        contactInput.value = "0912483788";
        emailInput.value = "gabriel_meer@dlsu.edu.ph";
        depInput.value = "ccs";
    });

    studentFive.addEventListener("click", function() {
        clearActiveStudent();
        studentFive.classList.add('active-student-item');

        studentNameInput.value = "Andie Kirsten Woo";
        idNumInput.value = "12415421";
        birthdayInput.value = "2007-02-05";
        contactInput.value = "0912415421";
        emailInput.value = "andie_woo@dlsu.edu.ph";
        depInput.value = "ccs";
    });
}
