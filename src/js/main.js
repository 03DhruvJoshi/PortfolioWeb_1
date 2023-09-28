//
// SCROLL PAGE ANIMATION
//
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//
// CONTACT US
//

// Show form submission summary
function showSummary(name, date, duration, contact, email, phone) {
  const summary = `
  <h2>Form Submission Summary</h2>
  <p><strong>Project Name:</strong> ${name}</p>
  <p><strong>Proposed Start Date:</strong> ${date}</p>
  <p><strong>Proposed Duration:</strong> ${duration} days</p>
  <p><strong>Preferred Contact Method:</strong> ${contact}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
`;
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = summary;
  document.body.appendChild(popup);
  setTimeout(function () {
    popup.classList.add("show");
  }, 1000);
  setTimeout(function () {
    popup.classList.remove("show");
    setTimeout(function () {
      document.body.removeChild(popup);
    }, 2250);
  }, 5000);
}

function showSummaryemail(name, date, duration, contact, email) {
  const summary = `
  <h2>Form Submission Summary</h2>
  <p><strong>Project Name:</strong> ${name}</p>
  <p><strong>Proposed Start Date:</strong> ${date}</p>
  <p><strong>Proposed Duration:</strong> ${duration} days</p>
  <p><strong>Preferred Contact Method:</strong> ${contact}</p>
  <p><strong>Email:</strong> ${email}</p>
`;
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = summary;
  document.body.appendChild(popup);
  setTimeout(function () {
    popup.classList.add("show");
  }, 1000);
  setTimeout(function () {
    popup.classList.remove("show");
    setTimeout(function () {
      document.body.removeChild(popup);
    }, 2250);
  }, 5000);
}

function showSummaryphone(name, date, duration, contact, phone) {
  const summary = `
  <h2>Form Submission Summary</h2>
  <p><strong>Project Name:</strong> ${name}</p>
  <p><strong>Proposed Start Date:</strong> ${date}</p>
  <p><strong>Proposed Duration:</strong> ${duration} days</p>
  <p><strong>Preferred Contact Method:</strong> ${contact}</p>
  <p><strong>Phone:</strong> ${phone}</p>
`;
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = summary;
  document.body.appendChild(popup);
  setTimeout(function () {
    popup.classList.add("show");
  }, 1000);
  setTimeout(function () {
    popup.classList.remove("show");
    setTimeout(function () {
      document.body.removeChild(popup);
    }, 2250);
  }, 5000);
}

// Handle form submission
function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("project-name").value;
  const date = document.getElementById("project-date").value;
  const duration = document.getElementById("project-duration").value;
  const contact = document.getElementById("contact-method").value;
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirm-email").value;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phone = document.getElementById("phone").value;
  if (regex.test(email) && email === confirmEmail && contact === "both") {
    const today = new Date();
    const start = new Date(date);
    const diff = Math.floor((start - today) / (1000 * 60 * 60 * 24));
    if (diff >= 1) {
      showSummary(name, date, duration, contact, email, phone);
      document.getElementById("project-form").reset();
    } else {
      alert("Please select a start date at least 1 day in the future.");
    }
  } else if (contact === "phone") {
    const today = new Date();
    const start = new Date(date);
    const diff = Math.floor((start - today) / (1000 * 60 * 60 * 24));
    if (diff >= 1) {
      showSummaryphone(name, date, duration, contact, phone);
      document.getElementById("project-form").reset();
    } else {
      alert("Please select a start date at least 1 day in the future.");
    }
  } else if (
    regex.test(email) &&
    email === confirmEmail &&
    contact === "email"
  ) {
    const today = new Date();
    const start = new Date(date);
    const diff = Math.floor((start - today) / (1000 * 60 * 60 * 24));
    if (diff >= 1) {
      showSummaryemail(name, date, duration, contact, email);
      document.getElementById("project-form").reset();
    } else {
      alert("Please select a start date at least 1 day in the future.");
    }
  } else {
    alert("Please enter a valid email address and confirm it.");
  }
}

//Toggle email, phone, both
function toggleContactFields() {
  var contactMethod = document.getElementById("contact-method").value;
  var emailFields = document.getElementById("email-fields");
  var phoneFields = document.getElementById("phone-fields");

  if (contactMethod === "email") {
    emailFields.style.display = "block";
    phoneFields.style.display = "none";
  } else if (contactMethod === "phone") {
    emailFields.style.display = "none";
    phoneFields.style.display = "block";
  } else if (contactMethod === "both") {
    emailFields.style.display = "block";
    phoneFields.style.display = "block";
  } else {
    emailFields.style.display = "none";
    phoneFields.style.display = "none";
  }
}
