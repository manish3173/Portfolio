$(document).ready(function () {
    // Toggle menu when clicked
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll behavior
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

// Update document title and favicon on visibility change
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Projects | Portfolio Manish";
        $("#favicon").attr("href", "/assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "/assets/images/favhand.png");
    }
});

// Fetch and display projects from JSON
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt">
            <img src="/assets/images/projects/${project.image}.png" alt="${project.name}" />
            <div class="content">
                <div class="tag">
                    <h3>${project.name}</h3>
                </div>
                <div class="desc">
                    <p>${project.desc}</p>
                    <div class="btns">
                        <a href="${project.links.code}" class="btn" target="_blank"> Code <i class="fas fa-code"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </div>`;
    });
    projectsContainer.innerHTML = projectsHTML;
}

// Initialize project display
getProjects().then(data => {
    showProjects(data);
});
