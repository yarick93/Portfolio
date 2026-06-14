new Accordion(".accordion-container")
let ballMove = false
let ballLeft = "55%"
setInterval(() => {
    ballLeft = ballMove ? "55%" : "54.5%"
    ballMove = !ballMove
    Ball.style.left = ballLeft
}, 2000);
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('viewed');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.animate-block').forEach(block => {
    observer.observe(block);
});
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  
  if(scrollPosition<70){
    nav.classList.remove('navScrolled')
        NavLogo.style.display = "flex"

  }
  if(scrollPosition > 70){
    nav.classList.add('navScrolled')
    NavLogo.style.display = "none"
  }
  console.log(scrollPosition)
})