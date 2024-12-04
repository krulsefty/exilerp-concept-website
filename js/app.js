/// sefty
// sefty
/// sefty

document.addEventListener("contextmenu", function (e) {
  e.preventDefault()
})

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false
  }

  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false
  }

  if (e.keyCode == "J".charCodeAt(0)) {
    window.open("https://discord.gg/exilegg", '_blank');
  }
}

function buttonRedirect(url) {
  window.open(url, '_blank');
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    document.getElementById("header").classList.add("scrolled");
  } else {
    document.getElementById("header").classList.remove("scrolled");
  }
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))
 
let lightmode = localStorage.getItem("lightmode")
const themeSwitch = document.getElementById("theme-switch")
const circle = document.getElementById("circle")
const moon = document.getElementById("moon")
const sun = document.getElementById("sun")
const arrow = document.getElementById("arrow")

const enableLightmode = () => {
  document.body.classList.add("light-mode")
  localStorage.setItem("lightmode", "active")
  circle.classList.add("light-mode-enabled")
  moon.classList.add("hiding-moon")
  sun.classList.add("showing-sun")
  arrow.classList.add("inverted")
}

const disableLightmode = () => {
  document.body.classList.remove("light-mode")
  localStorage.setItem("lightmode", null)
  circle.classList.remove("light-mode-enabled")
  moon.classList.remove("hiding-moon")
  sun.classList.remove("showing-sun")
  arrow.classList.remove("inverted")
}

if (lightmode === "active") enableLightmode()

themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode")
  lightmode !== "active" ? enableLightmode() : disableLightmode()
})