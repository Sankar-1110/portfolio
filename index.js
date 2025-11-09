var typed=new Typed(".text",{
    strings:["Frontend Developer","Backend Developer","Coder"],
    typeSpeed:150,
    backSpeed:150,
    loop:true,
})
var typed2=new Typed(".name-text",{
    strings:["Nakka Sai Sankar here."],
    typeSpeed:150,
    backSpeed:100,
    loop:true
})

const navButtons = document.querySelectorAll('.nav-button');

// Function to handle button click
function handleNavButton(event) {
    // Prevent default behavior of the anchor tag
    
    
    // Remove active class from all buttons
    navButtons.forEach(button => button.classList.remove('active'));
    
    // Add active class to the clicked button
    event.currentTarget.classList.add('active');
}

// Add event listeners to all buttons
navButtons.forEach(button => {
    button.addEventListener('click', handleNavButton);
});

// sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("sidebar-open");
}
//transition effect
let sections = document.querySelectorAll('section');
const applyScrollEffects = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 440; // Adjusted offset
        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
};

// Run on page load and on scroll
window.addEventListener('scroll', applyScrollEffects);
window.addEventListener('load', applyScrollEffects);
