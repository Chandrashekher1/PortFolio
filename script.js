const portfolio = [
    { 
        name:"Chandrashekher Prasad",
        work:"2nd Year B.Tech Student",
        img: "assets/photo_2024-08-15_22-51-40.jpg",     
        github:"https://github.com/Chandrashekher1",    
        twitter:"https://x.com/cpsaw03?t=78xY-iHc1XMeqbyew_ozvg",
        
    }
    ,{  
        img : "assets/photo_2024-08-15_22-51-40.jpg",
        passion:"Frontend Developer",
        about:"Hi, I'm Chandrashekher, pursuing a B.Tech at Maharaja Agrasen Institue of Technology, New Delhi.\n<br><br>\n Currently I'm in my second year and enhancing my skills in data structures and algorithms using <span>Java</span>.\nI have a strong foundation in <span>HTML</span>, <span>CSS</span>, and I am currently learning <span>React JS</span>.\nAdditionally, I am proficient in other programming languages such as <span>C</span>, <span>Python</span>, and <span>JavaScript</span>.\n<br><br>\nFeel free to connect with me for any collaboration or opportunities. ", 
    },
    {
        title : "PROJECTS",
        pro1Link :"https://github.com/Chandrashekher1/Web-Dev-Practice/tree/master/Projects/Github-Profile",
        pro1Name : "GITHUB Profiles",
        pro1Img:"assets/Screenshot 2024-08-15 221728.png",
        pro1Uses:"Uses GitHub Api to fetch details of a user"
    },

    {
        pro2Link:"https://github.com/Chandrashekher1/Web-Dev-Practice/tree/master/Projects/Notes-Apps",
        pro2Img: "assets/Screenshot 2024-08-18 214606.png",
        pro2Name:"Notes App",
        pro2Uses:"Make multiple note pads with the ability to store them locally on browser"
    },
    {
        pro3Link:"https://github.com/Chandrashekher1/Web-Dev-Practice/tree/master/Projects/Insect-Catch-Game",
        pro3Img: "assets/Screenshot 2024-08-18 215019.png",
        pro3Name:"Insect Catch Game",
        pro3Uses:"Small Game to catch as many insects present on th screen"
    },
    {
        pro4Link:"https://github.com/Chandrashekher1/Web-Dev-Practice/tree/master/Projects/Todo-List",
        pro4Img: "assets/Screenshot 2024-08-18 215215.png",
        pro4Name:"Todo lists",
        pro4Uses:"Create your own to do lists"
    },
    {
        pro5Link:"https://github.com/Chandrashekher1/Web-Dev-Practice/tree/master/Projects/Timer",
        pro5Img: "assets/Screenshot 2024-08-18 215735.png",
        pro5Name:"Timer Website ",
        pro5Uses:"Set timer on website "
    }
    
]

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

// Home
const Home = document.querySelector(".Home")
HomePage()
function HomePage(){
    const { name, work, img,github ,twitter} = portfolio[0]
    const HomeHtml = `
        <div class="home-contact">
            <h3>Hello, I'm</h3>
            <h1 class="name">${name}</h1>
            <h3>And I'm a  <span class="text">${work}</span></h3>
            <p></p>
            <div class="social">
                <a href="${github}"><i class='fab fa-github'></i></a>
                <a href="${twitter}"><i class='fab fa-twitter'></i></a>
                <a href="#"><i class='fab fa-linkedin'></i></a>
            </div>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsmCKlSLfQKSZVwWsXDWfkVVVjmKKbxDqHSDxxwXFkRPsCCknPwtzZzlXtBrzZzMmCvHvSLl"> <br><br><button class="hi">Get In Touch!</button></a>

        </div>
        <img src="${img}" alt="">`

    Home.innerHTML = HomeHtml
    startTextAnimation(["2nd Year B.Tech Student", "Front-End Developer", "Tech Enthusiast"]);
}

// About

const About = document.getElementById("about")
AboutPage()
function AboutPage(){
    const {img, about,passion} = portfolio[1];
    const AboutHtml = `
        <h2>About <span>Me</span></h2>
        <div class="about-img">
            <img src="${img}" alt="" class="abImg">
        </div>
        <div class="about-text">
            <p>${about}</p>
        </div>
        

    `
    About.innerHTML = AboutHtml

}

// Project
const Project = document.getElementById("project");

function ProjectPage() {
    const { title, pro1Img, pro1Link, pro1Uses, pro1Name } = portfolio[2];
    const { pro2Img, pro2Link, pro2Name, pro2Uses } = portfolio[3];
    const { pro3Img, pro3Link, pro3Name, pro3Uses } = portfolio[4];
    const { pro4Img, pro4Link, pro4Name, pro4Uses } = portfolio[5];
    const { pro5Img, pro5Link, pro5Name, pro5Uses } = portfolio[6];

    const ProjHtml = `
        <h1>${title}</h1>
        <div class="container">
            <div class="pro1">
                <div class="pro1Img">
                    <img src="${pro1Img}" alt="">
                </div>
                <h2 class="projectName">${pro1Name}</h2>
                <p class="projectDesc">${pro1Uses}</p>
                <a href="${pro1Link}" class="projectLink"><i class="fab fa-github"></i></a>
            </div>
            <div class="pro1">
                <div class="pro1Img">
                    <img src="${pro2Img}" alt="">
                </div>
                <h2 class="projectName">${pro2Name}</h2>
                <p class="projectDesc">${pro2Uses}</p>
                <a href="${pro2Link}" class="projectLink"><i class="fab fa-github"></i></a>
            </div>
            <div class="pro1">
                <div class="pro1Img">
                    <img src="${pro3Img}" alt="">
                </div>
                <h2 class="projectName">${pro3Name}</h2>
                <p class="projectDesc">${pro3Uses}</p>
                <a href="${pro3Link}" class="projectLink"><i class="fab fa-github"></i></a>
            </div>
            <div class="pro1">
                <div class="pro1Img">
                    <img src="${pro4Img}" alt="">
                </div>
                <h2 class="projectName">${pro4Name}</h2>
                <p class="projectDesc">${pro4Uses}</p>
                <a href="${pro4Link}" class="projectLink"><i class="fab fa-github"></i></a>
            </div>
            <div class="pro1">
                <div class="pro1Img">
                    <img src="${pro5Img}" alt="">
                </div>
                <h2 class="projectName">${pro5Name}</h2>
                <p class="projectDesc">${pro5Uses}</p>
                <a href="${pro5Link}" class="projectLink"><i class="fab fa-github"></i></a>
            </div>
        </div>
    `;

    Project.innerHTML = ProjHtml;
}

// Call the function to render projects
ProjectPage();


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