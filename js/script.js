// =====================================
// RURALBIZ AI - JAVASCRIPT
// =====================================


// =====================================
// REGISTER
// =====================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const mobile =
            document.getElementById("mobile").value;

        const password =
            document.getElementById("password").value;

        const location =
            document.getElementById("location").value;


        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userMobile", mobile);
        localStorage.setItem("userPassword", password);
        localStorage.setItem("userLocation", location);


        alert("Account created successfully! 🌱");

        window.location.href = "login.html";

    });

}



// =====================================
// LOGIN
// =====================================

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;


        const savedEmail =
            localStorage.getItem("userEmail");

        const savedPassword =
            localStorage.getItem("userPassword");


        if (
            email === savedEmail &&
            password === savedPassword
        ) {

            alert(
                "Login successful! Welcome to RuralBiz AI 🌱"
            );

            window.location.href = "dashboard.html";

        } else {

            alert("Incorrect email or password.");

        }

    });

}



// =====================================
// BUSINESS ADVISOR / PROFILE
// =====================================

const advisorForm =
    document.getElementById("advisorForm");

if (advisorForm) {

    advisorForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const village =
            document.getElementById("village").value;

        const district =
            document.getElementById("district").value;

        const state =
            document.getElementById("state").value;

        const category =
            document.getElementById("category").value;

        const budget =
            Number(
                document.getElementById("budget").value
            );

        const skills =
            document.getElementById("skills").value;

        const resources =
            document.getElementById("resources").value;



        // Save business profile

        localStorage.setItem(
            "village",
            village
        );

        localStorage.setItem(
            "district",
            district
        );

        localStorage.setItem(
            "state",
            state
        );

        localStorage.setItem(
            "category",
            category
        );

        localStorage.setItem(
            "budget",
            budget
        );

        localStorage.setItem(
            "skills",
            skills
        );

        localStorage.setItem(
            "resources",
            resources
        );



        // =================================
        // OPPORTUNITY SCORE
        // =================================

        let score = 70;


        if (budget >= 50000) {
            score += 5;
        }

        if (budget >= 100000) {
            score += 5;
        }

        if (skills.length >= 10) {
            score += 3;
        }

        if (resources.length >= 10) {
            score += 3;
        }


        if (score > 100) {
            score = 100;
        }


        localStorage.setItem(
            "opportunityScore",
            score
        );


        alert(
            "Analysis completed! 🤖\n\n" +
            "Opportunity Score: " +
            score +
            "/100"
        );


        window.location.href =
            "recommendations.html";

    });

}



// =====================================
// RECOMMENDATIONS
// =====================================

const recommendationGrid =
    document.querySelector(
        ".recommendation-grid"
    );


if (recommendationGrid) {


    const category =
        localStorage.getItem("category") || "";


    const budget =
        Number(
            localStorage.getItem("budget")
        ) || 0;


    const village =
        localStorage.getItem("village") ||
        "your location";


    const score =
        Number(
            localStorage.getItem(
                "opportunityScore"
            )
        ) || 70;



    let businessName =
        "Rural Micro Enterprise";


    let businessIcon =
        "🌱";


    let description =
        "A small rural business opportunity based on local resources and community needs.";


    let businessScore =
        score;



    // Food Processing

    if (
        category === "Food Processing"
    ) {

        businessName =
            "Small Food Processing";

        businessIcon =
            "🍲";

        description =
            "Suitable for entrepreneurs interested in cooking, food preparation or food processing.";

    }



    // Dairy

    else if (
        category === "Dairy Business"
    ) {

        businessName =
            "Dairy Business";

        businessIcon =
            "🐄";

        description =
            "A potential rural enterprise based on dairy resources and local demand.";

    }



    // Agriculture

    else if (
        category === "Agriculture"
    ) {

        businessName =
            "Agriculture Enterprise";

        businessIcon =
            "🌾";

        description =
            "A rural business opportunity connected with agricultural resources and activities.";

    }



    // Handicrafts

    else if (
        category === "Handicrafts"
    ) {

        businessName =
            "Handicraft Business";

        businessIcon =
            "🧵";

        description =
            "Suitable for creative, tailoring or traditional craft-based activities.";

    }



    // Retail

    else if (
        category === "Retail Shop"
    ) {

        businessName =
            "Rural Retail Shop";

        businessIcon =
            "🏪";

        description =
            "A local retail business serving everyday needs of the surrounding community.";

    }



    // Services

    else if (
        category === "Services"
    ) {

        businessName =
            "Local Service Business";

        businessIcon =
            "🛠️";

        description =
            "A service-oriented business designed to meet common local requirements.";

    }



    // Keep recommendation score same as profile score

    businessScore =
        score;



    // =================================
    // DISPLAY RECOMMENDATION
    // =================================

    recommendationGrid.innerHTML = `

        <div class="recommendation-card">

            <div class="recommendation-icon">
                ${businessIcon}
            </div>

            <h2>
                ${businessName}
            </h2>

            <p>
                ${description}
            </p>

            <div class="score">

                Opportunity Score:

                <strong>
                    ${businessScore}/100
                </strong>

            </div>

            <p>

                <strong>Why?</strong>

                This recommendation is based on
                your selected category, available
                capital, skills and resources.

            </p>

            <a
                href="finance.html"
                class="dashboard-btn"
            >
                View Financial Plan →
            </a>

        </div>

    `;



    // =================================
    // AI ANALYSIS BOX
    // =================================

    const note =
        document.querySelector(
            ".recommendation-note"
        );


    if (note) {

        note.innerHTML = `

            <h2>
                🤖 RuralBiz AI Analysis
            </h2>

            <p>

                Based on your profile in

                <strong>
                    ${village}
                </strong>,

                your selected category is

                <strong>
                    ${category || "Not specified"}
                </strong>.

            </p>


            <p>

                Available capital:

                <strong>
                    ₹${budget.toLocaleString("en-IN")}
                </strong>

            </p>


            <p>

                Your prototype opportunity score is

                <strong>
                    ${score}/100
                </strong>.

            </p>


            <p>

                Recommended business:

                <strong>
                    ${businessName}
                </strong>

            </p>


            <p>

                These are prototype estimates.
                Actual local market conditions
                should be verified.

            </p>

        `;

    }

}



// =====================================
// FINANCE CALCULATOR
// =====================================

const financeForm =
    document.getElementById("financeForm");


if (financeForm) {

    financeForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Get values

            const projectCost =
                parseFloat(
                    document.getElementById(
                        "projectCost"
                    ).value
                ) || 0;


            const ownCapital =
                parseFloat(
                    document.getElementById(
                        "ownCapital"
                    ).value
                ) || 0;


            const interestRate =
                parseFloat(
                    document.getElementById(
                        "interestRate"
                    ).value
                ) || 0;


            const tenureYears =
                parseFloat(
                    document.getElementById(
                        "loanTenure"
                    ).value
                ) || 0;


            const moratorium =
                parseFloat(
                    document.getElementById(
                        "moratorium"
                    ).value
                ) || 0;



            // =================================
            // LOAN AMOUNT
            // =================================

            let loanAmount =
                projectCost - ownCapital;


            if (loanAmount < 0) {

                loanAmount = 0;

            }



            // =================================
            // EMI CALCULATION
            // =================================

            const months =
                tenureYears * 12;


            const monthlyRate =
                interestRate / 100 / 12;


            let emi = 0;


            if (
                loanAmount > 0 &&
                months > 0
            ) {

                if (
                    monthlyRate > 0
                ) {

                    emi =
                        loanAmount *
                        monthlyRate *
                        Math.pow(
                            1 + monthlyRate,
                            months
                        ) /
                        (
                            Math.pow(
                                1 + monthlyRate,
                                months
                            ) - 1
                        );

                }

                else {

                    emi =
                        loanAmount / months;

                }

            }



            // =================================
            // DISPLAY RESULTS
            // =================================

            const resultCards =
                document.querySelectorAll(
                    ".finance-result-card strong"
                );


            if (
                resultCards.length >= 4
            ) {

                resultCards[0].innerText =
                    "₹" +
                    Math.round(
                        projectCost
                    ).toLocaleString(
                        "en-IN"
                    );


                resultCards[1].innerText =
                    "₹" +
                    Math.round(
                        ownCapital
                    ).toLocaleString(
                        "en-IN"
                    );


                resultCards[2].innerText =
                    "₹" +
                    Math.round(
                        loanAmount
                    ).toLocaleString(
                        "en-IN"
                    );


                resultCards[3].innerText =
                    "₹" +
                    Math.round(
                        emi
                    ).toLocaleString(
                        "en-IN"
                    ) +
                    " / month";

            }



            // =================================
            // SAVE FINANCIAL DATA
            // =================================

            localStorage.setItem(
                "projectCost",
                projectCost
            );


            localStorage.setItem(
                "ownCapital",
                ownCapital
            );


            localStorage.setItem(
                "loanAmount",
                loanAmount
            );


            localStorage.setItem(
                "interestRate",
                interestRate
            );


            localStorage.setItem(
                "loanTenure",
                tenureYears
            );


            localStorage.setItem(
                "moratorium",
                moratorium
            );


            localStorage.setItem(
                "emi",
                Math.round(emi)
            );



            alert(
                "Financial plan calculated successfully! 💰"
            );

        }
    );

}
