   let menuBtn = document.getElementById("menuBtn");
    let mobilePanel = document.getElementById("mobilePanel");

    menuBtn.addEventListener("click", function(){

        mobilePanel.classList.toggle("hidden");

    });

    let services = [
    {
        icon: "factory",
        title: "Commercial",
        subtitle: "Construction"
    },
    {
        icon: "house",
        title: "Residential",
        subtitle: "Construction"
    },
    {
        icon: "front_loader",
        title: "Pre-",
        subtitle: "Construction"
    },
    {
        icon: "blinds_2_closed",
        title: "Interior",
        subtitle: "Designing"
    },
    {
        icon: "engineering",
        title: "Civil",
        subtitle: "Engineering"
    },
    {
        icon: "countertops",
        title: "Special",
        subtitle: "Projects"
    },
    {
        icon: "bookmark_manager",
        title: "Site",
        subtitle: "Management"
    },
    {
        icon: "landscape_2",
        title: "Landscape",
        subtitle: "Construction"
    }
];


let servicesContainer = document.getElementById("servicesContainer");


services.forEach(service => {

   let card = document.createElement("div");

    card.className =
        "shadow-2xl rounded-3xl flex min-h-32 flex-col items-center justify-center bg-slate-100 p-3 text-center transition hover:bg-white";

    card.innerHTML = `
        <span class="material-symbols-outlined text-3xl">
            ${service.icon}
        </span>

        <p class="text-sm font-semibold text-amber-500 sm:text-lg">
            ${service.title}
            <br>
            ${service.subtitle}
        </p>
    `;

    servicesContainer.appendChild(card);

});



// projects card====================================================================>
    const projects = [
    {
        image: "./images/projects.jfif",
        alt: "Project",
        location: "Karachi",
        number: "#442544156",
        description: "One of our projects currently in progress"
    },

    {
        image: "./images/project2.jfif",
        alt: "Project",
        location: "Karachi",
        number: "#8874657",
        description: "Completed grey structure, now moving towards finishing"
    },

    {
        image: "./images/commercial project.jfif",
        alt: "Commercial Project",
        location: "Karachi",
        number: "#77765367",
        description: "Completed the food street in Karachi. Visit there any time you want."
    },

    {
        image: "./images/interior designing.jfif",
        alt: "Interior Design Project",
        location: "Islamabad",
        number: "#4453565",
        description: "We designed the interior of a house for one of our best clients."
    }
];


const projectsContainer = document.getElementById("projectsContainer");


projects.forEach(function (project) {

    const card = document.createElement("div");

    card.className =
        "flex flex-col overflow-hidden rounded-xl bg-slate-100 shadow-lg";


    card.innerHTML = `
        
        <div class="h-48 w-full bg-slate-900 sm:h-56 md:h-64">
            
            <img 
                src="${project.image}" 
                alt="${project.alt}"
                class="h-full w-full object-cover"
            >

        </div>


        <div class="flex flex-1 flex-col justify-between p-4 sm:p-5">

            <div>

                <h2 class="text-base font-medium sm:text-lg">
                    Location
                </h2>

                <h5 class="text-sm text-amber-500 underline sm:text-base">
                    ${project.location} ${project.number}
                </h5>

                <p class="mt-2 text-sm font-semibold sm:text-base">
                    ${project.description}
                </p>

            </div>

        </div>

    `;


    projectsContainer.appendChild(card);

});


// partners  logos=============================================================>    


    const partners = [
    {
        image: "./images/nucor steels.jfif",
        name: "Nucor Steels"
    },

    {
        image: "./images/faisal-sanitary.jfif",
        name: "Faisal Sanitary"
    },

    {
        image: "./images/lucky-cement.jfif",
        name: "Lucky Cement"
    },

    {
        image: "./images/siri tiles.jfif",
        name: "Siri Tiles"
    },

    {
        image: "./images/moen-sanitary.jfif",
        name: "Moen Sanitary"
    },

    {
        image: "./images/amreli-steels.jfif",
        name: "Amreli Steels"
    }
];


const partnersContainer = document.getElementById("partnersContainer");


partners.forEach(function (partner) {

    const card = document.createElement("div");

    card.className =
        "flex aspect-square items-center justify-center overflow-hidden bg-slate-400 transition-transform duration-500 hover:shadow-2xl md:hover:scale-105";


    card.innerHTML = `
        <img
            src="${partner.image}"
            alt="${partner.name}"
            class="h-full w-full object-contain animate-pulse"
        >
    `;

    partnersContainer.appendChild(card);

});