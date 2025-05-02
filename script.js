

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


const yearEl = document.getElementById("year")
const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear


document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.scroll-animate');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
  
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });


  
  function createRipple(event) {
    const btn = event.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
  
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
  
    btn.appendChild(ripple);
  
    // Remove ripple after animation ends
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  }
  
