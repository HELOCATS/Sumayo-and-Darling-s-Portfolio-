const themeButton = document.getElementById("theme-button");
const profileNameIndicator = document.getElementById("profile-name");

const darkTheme = "dark-theme";
const sunIcon = "ri-sun-line";
const moonIcon = "ri-moon-line";
const selectedTheme = localStorage.getItem("selected-portfolio-theme");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";


if (selectedTheme) {
  if (selectedTheme === "dark") {
    document.body.classList.add(darkTheme);
    themeButton.classList.replace(moonIcon, sunIcon);
    profileNameIndicator.textContent = "Chloe";
  } else {
    document.body.classList.remove(darkTheme);
    themeButton.classList.replace(sunIcon, moonIcon);
    profileNameIndicator.textContent = "Darling";
  }
} else {
  themeButton.classList.add(moonIcon);
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);

  if (document.body.classList.contains(darkTheme)) {
    themeButton.classList.replace(moonIcon, sunIcon);
    profileNameIndicator.textContent = "Chloe";
  } else {
    themeButton.classList.replace(sunIcon, moonIcon);
    profileNameIndicator.textContent = "Darling";
  }

  
  localStorage.setItem("selected-portfolio-theme", getCurrentTheme());
});
