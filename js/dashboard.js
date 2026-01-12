// Load user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

// If no user, go back to signup
if (!user) {
    window.location.href = "signup.html";
}

// Show welcome and info
document.getElementById("welcome").innerText = "Welcome " + user.name;
document.getElementById("info").innerText = user.department + " - Semester " + user.semester;

// Simple community
document.getElementById("community").innerHTML = `
  <p>All students from ${user.department} will appear here.</p>
`;