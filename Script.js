const toggleBtn = document.getElementById("toggle");
const priceMonthly = document.getElementById("price__monthly");
const priceYearly = document.getElementById("price__yearly");
const price = document.getElementById("price");
const price_2 = document.getElementById("price_2");

toggleBtn.addEventListener("click", () => {
  console.log("IN SHA ALLAH");

  if (priceMonthly.classList.contains("active")) {
    priceMonthly.classList.remove("active");
    toggleBtn.classList.remove("active");
    priceYearly.classList.add("active");
    price.innerHTML = `$80<span>/yearly</span>`;
    price_2.innerHTML = `Custom <span>yearly billing only</span>`;
  } else {
    priceMonthly.classList.add("active");
    priceYearly.classList.remove("active");
    toggleBtn.classList.add("active");
    price.innerHTML = `$12<span>/month</span>`;
    price_2.innerHTML = `Custom <span>monthly billing only</span>`;
  }
});

// HANDLE TOGGLE MENU
function handleToggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
