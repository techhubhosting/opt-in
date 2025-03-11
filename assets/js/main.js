// Get the toggle elements
const toggleSwitch = document.getElementById("toggle-switch");
const monthlyLabel = document.getElementById("monthly-label");
const yearlyLabel = document.getElementById("yearly-label");
const liteContent = document.querySelector(".lite-content");
const proContent = document.querySelector(".pro-content");
const lightImage = document.querySelector(".pricing-light-decoration");
const backgroundImage = document.querySelector(".pricing-background");

// Ensure the page loads with Pro selected
window.addEventListener("DOMContentLoaded", () => {
  // Default state: Show Pro, hide Lite
  toggleSwitch.classList.add("active"); // Set toggle to Pro state
  yearlyLabel.classList.add("active");
  monthlyLabel.classList.remove("active");

  liteContent.style.display = "none";
  proContent.style.display = "flex";

  // Show light image, hide background image
  lightImage.style.opacity = "1";
  lightImage.style.visibility = "visible";

  backgroundImage.style.opacity = "1";
  backgroundImage.style.visibility = "visible";
});

// Toggle visibility on switch
toggleSwitch.addEventListener("click", () => {
  toggleSwitch.classList.toggle("active");

  if (toggleSwitch.classList.contains("active")) {
    // Pro is active
    yearlyLabel.classList.add("active");
    monthlyLabel.classList.remove("active");

    liteContent.style.display = "none";
    proContent.style.display = "flex";

    // Show light image, hide background image
    lightImage.style.opacity = "1";
    lightImage.style.visibility = "visible";

    backgroundImage.style.opacity = "1";
    backgroundImage.style.visibility = "visible";
  } else {
    // Lite is active
    monthlyLabel.classList.add("active");
    yearlyLabel.classList.remove("active");

    liteContent.style.display = "flex";
    proContent.style.display = "none";

    // Hide light image, show background image
    lightImage.style.opacity = "0";
    lightImage.style.visibility = "hidden";

    backgroundImage.style.opacity = "0";
    backgroundImage.style.visibility = "hidden";
  }
});

// Get the current date
var currentDate = new Date();

// Get the last day of the current month
var lastDayOfMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
);

// Calculate the remaining days in the month
var remainingDays = lastDayOfMonth.getDate() - currentDate.getDate();

// Update the countdown timer
document.getElementById("spotsLeft").innerText = remainingDays;

//Affiliate setup
// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Function to delete a cookie
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Function to get cookie value by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Check for 'affiliate' parameter in the URL
const urlParams = new URLSearchParams(window.location.search);
const affiliate = urlParams.get("aff");

if (affiliate) {
  // Store the affiliate code for 30 days
  setCookie("affiliate", affiliate, 30);
} else {
  // If no affiliate parameter in the URL, clear any existing affiliate cookie
  deleteCookie("affiliate");
}

// Event listener for all payment links
const paymentLinks = document.querySelectorAll(".payment-button");
paymentLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default anchor tag behavior

    // Get the product type from the clicked link
    const productType = link.getAttribute("data-product"); // 'lite' or 'pro'

    // Define the correct payment link
    let paymentUrl =
      productType === "pro"
        ? "https://selar.co/34g6ha"
        : "https://selar.co/699n29";

    // Retrieve stored affiliate code if available
    const affiliateCode = getCookie("affiliate");

    // Add affiliate parameter if it exists
    if (affiliateCode) {
      paymentUrl += `?affiliate=${affiliateCode}`;
    }

    // Redirect the user to the correct Selar link
    window.location.href = paymentUrl;
  });
});
