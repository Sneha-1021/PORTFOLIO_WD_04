const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const navLinks = navMenu.querySelectorAll('li');

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle('active')
  hamburger.classList.toggle('active')
})

function closeMenu() {
  hamburger.classList.remove("active")
  navMenu.classList.remove('active')
}

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu)
})
//PROGRESS BAR ANIMATION
document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.querySelectorAll(".progress-bar")

  function isInView(element) {
    const rect = element.getBoundingClientRect()

    const isLeftVisible = rect.left >= 0
    const isTopVisible = rect.top >= 0

    const isBottomVisible = rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    const isRightVisiible = rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    return isLeftVisible && isTopVisible && isBottomVisible && isRightVisiible
  }

  function animateProgress() {
    progressBar.forEach(bar => {
      if (isInView(bar)) {
        const percentage = bar.getAttribute('data-percentage')
        bar.querySelector(".bar").style.width = percentage + "%"
      }
    })
  }
  animateProgress()

  window.addEventListener('scroll', animateProgress)
})
//EMAIL JS
function sendMail(event) {
event.preventDefault();
  
  const serviceID = "service_hsgobmb";
  const templateID = "template_ujv1leu";
  const form = document.getElementById("contact-form")

  emailjs.sendForm(serviceID, templateID, form).then((response) => {(alert("Your Message Has Been Sent sucessfully!");
  form.reset();
                                                                   })
  .catch((error) => {
    alert("Failed to send the message. Please try again later.");
    console.error("EmailsJS Error:", error);
  });
}
document.getElementById("contact-form").addEventListener("submit", sendMail);
