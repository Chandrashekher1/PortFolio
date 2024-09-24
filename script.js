async function loadPortfolioData(){
    try{
        const response=await fetch('data.json')
        if(!response.ok){
            throw new Error('Error fetching data')
        }
        const data=await response.json()
        HomePage(data.name)
        AboutPage(data.aboutMe)
        ProjectPage(data.projects)
        handleLoader()

    }
    catch (error){
        console.error(error)
    }
}


function startTextAnimation(textArr) {
    const profession = document.querySelector('.text');
    let arrIndex = 0;
    let charIndex = 0;

    function writeText() {
        const currentText = textArr[arrIndex];
        profession.innerText = currentText.slice(0, charIndex);
        charIndex++;

        if (charIndex > currentText.length) {
            charIndex = 0;
            arrIndex = (arrIndex + 1) % textArr.length;  
            setTimeout(writeText, 250);  
        } else {
            setTimeout(writeText, 150);  
        }
    }

    writeText();  
}

const navBar = document.querySelectorAll('.navbar a');
const container = document.querySelectorAll('.conta');

navBar.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        // Calculate the scroll position
        const offsetTop = container[idx].offsetTop;

        // Scroll to the section
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});
loadPortfolioData();
// Home
const Home = document.querySelector(".Home")
HomePage()
function HomePage(name,work){
    const HomeHtml = `
        <div class="home-contact">
            <h3>Hello, I'm</h3>
            <h1 class="name">${name}</h1>
            <h3>And I'm a  <span class="text"></span></h3>
            <p></p>
            <div class="social">
                <a href="https://github.com/Chandrashekher1""><i class='fab fa-github'></i></a>
                <a href="https://x.com/cpsaw03?t=78xY-iHc1XMeqbyew_ozvg"><i class='fab fa-twitter'></i></a>
                <a href="#"><i class='fab fa-linkedin'></i></a>
            </div>

        </div>
        <img src="assets/photo_2024-08-15_22-51-40.jpg" alt="" class="home-contact">`

    Home.innerHTML = HomeHtml
    startTextAnimation(["2nd Year B.Tech Student", "Frontend Developer", "Tech Enthusiast"]);
}

// About

const About = document.getElementById("about")
AboutPage()
function AboutPage(aboutMe){
    const AboutHtml = `
        <h2>About <span>Me</span></h2>
        <div class="about-img">
            <img src="assets/photo_2024-08-15_22-51-40.jpg" alt="" class="abImg">
        </div>
        <div class="about-text">
            <p>${aboutMe}</p>
        </div>
        

    `
    About.innerHTML = AboutHtml

}

function ProjectPage(projects) {
    const projectsContainer = document.getElementById('project'); 
    // Loop through each project and add its corresponding HTML
    projects.forEach(project => {
        const projElement = document.createElement('div'); 
        projElement.classList.add('container'); 

        // Use innerHTML to construct the project HTML structure
        projElement.innerHTML = `
            <div class="pro1">
                <div class="pro1Img">
                    <img src="${project.img}" alt="">
                </div>
                <h2 class="projectName">${project.name}</h2>
                <p class="projectDesc">${project.description}</p>
                <a href="${project.link}" class="projectLink"><i class="fab fa-github"></i></a>
            </div>
        `;

        // Append the project element to the projectsContainer
        projectsContainer.appendChild(projElement);
    });
}


function renderProjects(projects){
    const projectsContainer = document.getElementById('.project')
    projects.forEach(project => {
        const projElement = document.createElement('div');
        projElement.classList.add('project');
        projElement.innerHTML=`
             <i class="far fa-folder project-img"></i>
             <h2 class="projectName">${project.name}</h2>
             <p class="projectDesc">${project.description}</p>
             <a href="${project.link}" class="projectLink"><i class="fab fa-github"></i></a>
        `
        projectsContainer.appendChild(projElement)
    })
}

// Contact 

const contact = document.getElementById("contact")
const btn = document.querySelector(".click")

btn.addEventListener('click', () => {
    contactPage()   

    contact.style.height = `${150}vh`

})

function contactPage(){
    const contactHtml =`
    <div class="container-con">
        <h1>Contact Me</h1>
            <form action="">
                <input type="hidden" name="access_key" value="3756a7ad-7e0d-401d-add0-39120fd49bd4">
                <input type="text" placeholder="Enter your Name">
                <input type="text" placeholder="Email Id" autofocus>
                <input type="text" placeholder="Contact Number">
                <textarea name="" id="" placeholder="Message..."></textarea> 
            </form>
            <button class="btn" id="submit" style:"animation:none">SUBMIT</button> 
        </div>
        <footer class="footer">
            <h2>@ Chandrashekher Prasad</h2>
            <div class="links">
                <a href="#"><i class='fab fa-github'></i></a>
                <a href="#"><i class='fab fa-twitter'></i></a>  
                <a href="#"><i class='fab fa-linkedin'></i></a>
            </div>
        </footer>
    ` 
    contact.innerHTML = contactHtml
}


// Loader

// Define a function to handle the loader
function handleLoader() {// Show the loader
    const loader = document.querySelector(".loader");
    loader.style.display = "flex";

    setTimeout(function() {
        loader.style.display = "none";

        const mainContent = document.querySelector("body");
        mainContent.style.overflowX = "hidden";
    }, 5000); 
}


const logo = document.querySelector('.logo');
logo.addEventListener('click', handleLoader);

document.addEventListener("DOMContentLoaded", function() {
    handleLoader();
});

// Mobile Nav

const openBTn = document.querySelector('.open-nav')
const mobNav=document.querySelector('.mobile-nav')

openBTn.addEventListener('click', () => {
    mobNav.classList.add('active')
})

const closeBtn = document.querySelector('.close-nav')

closeBtn.addEventListener('click', () => {
    mobNav.classList.remove('active')
} )