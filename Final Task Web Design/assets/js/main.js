// Scroll on

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}



let navbar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navcollapse.classList.remove('show');
    })
})


//  Greeting/welcome statement that change dynamically each 4second.

const messages = document.querySelectorAll(".banner-message");
    let currentIndex = 0;

    
    setInterval(() => {
            
        messages[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % messages.length;

    
        messages[currentIndex].classList.add("active");
        }, 4000); 


// Apply the validation for each input (make sure all inputs are required). => OPTIONAL

const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const inputs = contactForm.querySelectorAll("input, textarea");

    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
            input.style.border = "2px solid red"; 
        } else {
            input.style.border = "2px solid green"; 
        }
    });

    if (isValid) {
    
        const successMessage = document.createElement("p");
        successMessage.textContent = "Form submitted successfully!";
        successMessage.style.color = "green";
        contactForm.appendChild(successMessage);

        
        contactForm.reset();
    }
});

// Change all inputs text to uppercase (onchange)............. Change all inputs text color (onchange).

const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {
    input.addEventListener("change", () => {
        input.value = input.value.toUpperCase(); 
        input.style.color = "blue";
    });
});



// change the image

function changeImage(button) {
            
    const card = button.closest('.card');
    const mealImg = card.querySelector('.img-fluid');

    
    mealImg.src = "https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ=";
}

