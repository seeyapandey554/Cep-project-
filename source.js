Javascript 
// =====================================================
// GREEN CAMPUS WEBSITE - JAVASCRIPT
// =====================================================


// =====================================================
// 1. PAGE LOAD MESSAGE
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Green Campus Website Loaded Successfully!");

});


// =====================================================
// 2. GET STARTED BUTTON
// =====================================================

const startButton = document.querySelector(".start-btn");

if (startButton) {

    startButton.addEventListener("click", function (event) {

        event.preventDefault();

        const activitiesSection =
            document.querySelector("#activities");

        if (activitiesSection) {

            activitiesSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// =====================================================
// 3. NAVIGATION LINKS
// =====================================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Remove active class from all links
        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });

        // Add active class to clicked link
        this.classList.add("active");

    });

});


// =====================================================
// 4. GREEN INITIATIVE CARDS
// =====================================================

const initiativeCards =
    document.querySelectorAll(".initiative-card");

initiativeCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const title =
            card.querySelector("h3").innerText;

        const description =
            card.querySelector("p").innerText;

        alert(
            title + "\n\n" + description
        );

    });

});


// =====================================================
// 5. REPORT A PROBLEM FORM
// =====================================================

const reportForm =
    document.querySelector(".report-form");

if (reportForm) {

    reportForm.addEventListener("submit", function (event) {

        // Stop page from refreshing
        event.preventDefault();


        // Get form values
        const category =
            reportForm.querySelector("select").value;

        const location =
            reportForm.querySelector(
                'input[type="text"]'
            ).value;

        const description =
            reportForm.querySelector("textarea").value;


        // ---------------------------------------------
        // CATEGORY VALIDATION
        // ---------------------------------------------

        if (category === "Select Category") {

            alert("Please select a problem category.");

            return;
        }


        // ---------------------------------------------
        // LOCATION VALIDATION
        // ---------------------------------------------

        if (location.trim() === "") {

            alert("Please enter the problem location.");

            return;
        }


        // ---------------------------------------------
        // DESCRIPTION VALIDATION
        // ---------------------------------------------

        if (description.trim() === "") {

            alert("Please describe the problem.");

            return;
        }


        // ---------------------------------------------
        // SUCCESS MESSAGE
        // ---------------------------------------------

        alert(
            "Complaint submitted successfully!\n\n" +
            "Category: " + category + "\n" +
            "Location: " + location
        );


        // Clear form
        reportForm.reset();

    });

}


// =====================================================
// 6. LEADERBOARD - VIEW ALL BUTTON
// =====================================================

const leaderboardButton =
    document.querySelector(".leaderboard button");

if (leaderboardButton) {

    leaderboardButton.addEventListener(
        "click",
        function () {

            alert(
                "Full Green Leaderboard will be displayed here."
            );

        }
    );

}


// =====================================================
// 7. STUDENT LOGIN BUTTON
// =====================================================

const studentLogin =
    document.querySelector(".student-btn");

if (studentLogin) {

    studentLogin.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            alert(
                "Student Login Page"
            );

        }
    );

}


// =====================================================
// 8. ADMIN LOGIN BUTTON
// =====================================================

const adminLogin =
    document.querySelector(".admin-btn");

if (adminLogin) {

    adminLogin.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            alert(
                "Admin Login Page"
            );

        }
    );

}


// =====================================================
// 9. WASTE MANAGEMENT CARDS
// =====================================================

const wasteItems =
    document.querySelectorAll(".waste-items div");

wasteItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const wasteType =
            item.innerText;

        alert(
            "Selected Waste Type:\n" +
            wasteType
        );

    });

});


// =====================================================
// 10. CONSERVATION SECTION
// =====================================================

const conservationCards =
    document.querySelectorAll(
        ".conservation-container div"
    );

conservationCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const title =
            card.querySelector("h3").innerText;

        alert(
            "Learn more about " + title
        );

    });

});


// =====================================================
// 11. SIMPLE SCROLL FUNCTION
// =====================================================

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// =====================================================
// 12. FORM INPUT EFFECT
// =====================================================

const formInputs =
    document.querySelectorAll(
        ".report-form input, " +
        ".report-form select, " +
        ".report-form textarea"
    );

formInputs.forEach(function (input) {

    input.addEventListener("focus", function () {

        this.style.borderColor = "#168844";

    });


    input.addEventListener("blur", function () {

        this.style.borderColor = "#ccc";

    });

});


// =====================================================
// 13. PREVENT EMPTY LINKS
// =====================================================

const emptyLinks =
    document.querySelectorAll('a[href="#"]');

emptyLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

    });

});


// =====================================================
// 14. WELCOME CONSOLE MESSAGE
// =====================================================

console.log(
    "🌱 Welcome to Green Campus!"
);

console.log(
    "Go Green • Save Earth • Build a Better Future"
);