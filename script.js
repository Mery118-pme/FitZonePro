// FitZone Pro - front-end demo interactions
document.getElementById("year")?.textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

// Shared demo storage. This is browser-only; do not use real passwords.
const STORAGE_KEY = "fitzoneProMembers";
const getMembers = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
const saveMembers = members => localStorage.setItem(STORAGE_KEY, JSON.stringify(members));

const registerForm = document.getElementById("registerForm");
if (registerForm) {
  const params = new URLSearchParams(location.search);
  const planSelect = document.getElementById("membership");
  if (params.get("plan") && planSelect) planSelect.value = params.get("plan");
  registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const phone = document.getElementById("phone").value.trim();
    const plan = planSelect.value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("formMessage");
    const members = getMembers();
    if (members.some(member => member.email === email)) {
      message.textContent = "An account with this email already exists. Please log in.";
      return;
    }
    members.push({ name, email, phone, plan, password, joined: new Date().toLocaleDateString("en-IN") });
    saveMembers(members);
    sessionStorage.setItem("fitzoneCurrentUser", email);
    location.href = "dashboard.html";
  });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;
    const member = getMembers().find(item => item.email === email && item.password === password);
    const message = document.getElementById("formMessage");
    if (!member) {
      message.textContent = "Account not found or password is incorrect. Register first if you're new.";
      return;
    }
    sessionStorage.setItem("fitzoneCurrentUser", email);
    location.href = "dashboard.html";
  });
}

const dashboardName = document.getElementById("dashboardName");
if (dashboardName) {
  const email = sessionStorage.getItem("fitzoneCurrentUser");
  const member = getMembers().find(item => item.email === email);
  if (!member) {
    location.href = "login.html";
  } else {
    dashboardName.textContent = member.name;
    document.getElementById("memberPlan").textContent = member.plan;
    document.getElementById("memberEmail").textContent = member.email;
    document.getElementById("memberPhone").textContent = member.phone;
    document.getElementById("joinedDate").textContent = member.joined;
  }
}
document.getElementById("logoutButton")?.addEventListener("click", () => {
  sessionStorage.removeItem("fitzoneCurrentUser");
  location.href = "login.html";
});
