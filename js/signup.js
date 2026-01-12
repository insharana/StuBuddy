// Listen to form submit

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); // 🔹 Prevent page refresh

    // Collect values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const department = document.getElementById("department").value;
    const semester = document.getElementById("semester").value;

    // Validate UCP email
    if (!email.endsWith("@ucp.edu.pk")) {
        alert("Use UCP email only!");
        return;
    }

    if (!name || !password || !department || !semester) {
        alert("Fill all fields!");
        return;
    }

    // Save user in localStorage
    const user = {
        name,
        email,
        password,
        department,
        semester
    };
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to dashboard
    window.location.href = "dashboard.html";
});