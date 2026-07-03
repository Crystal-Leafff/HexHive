/* =====================================
   HEXHIVE
   SCRIPT.JS
===================================== */

// ============================
// Navbar Background
// ============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(10,10,10,0.9)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.4)";

    }

    else {

        navbar.style.background = "rgba(10,10,10,.55)";
        navbar.style.boxShadow = "none";

    }

});

// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ============================
// Active Navbar Link
// ============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});

// ============================
// Fade Animation
// ============================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(

".gallery-card,.feature-card,.contact-card"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// ============================
// Hero Image Floating
// ============================

const heroImage = document.querySelector(".hero-right img");

let direction = 1;

setInterval(()=>{

    heroImage.style.transform =
    `translateY(${direction*10}px)`;

    direction *= -1;

},1800);

// ============================
// Console Message
// ============================

console.log("%cHEXHIVE",
"color:#F4B400;font-size:28px;font-weight:bold;");

console.log(
"Designed with ❤️ by HexHive."
);

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hidden");

    }, 2800);

});