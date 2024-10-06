// Wait for the document to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Create an array of directive points with corresponding information
    const directives = [
        {
            id: 1,
            position: { top: '10%', left: '30%' },
            info: "This is Point 1: There are many constellations around the universe and there are many facing Exoplanets, so we decided make some using our imagination and we also added a few stars. Firstly at this point, Kepler-62f is located and we can tell that Kepler-62f is one of the closest Exoplanets according to this point. These constellations are called Ribbon and Bright because they're elegant like ribbons and they shine bright."
        },
        {
            id: 2,
            position: { top: '50%', left: '50%' },
            info: "This is Point 2: This part is where there are planets that are closer to Kepler-22b than stars. THe most iportant planet that is close to Kepler-22b in this point is Kepler-186f. This planet is one of the closest Exoplanets to earth as it is only around 557 light years away. From the second point we can see that there are many close planets to Kepler-22b which makes this planet have many neighbors around it. Lastly there are stars next to some other planets too, an important note is that one these stars is Proxima Centauri which is the one of the closest stars to our Galaxy. " 
        },
        {
            id: 3,
            position: { top: '70%', left: '40%' },
            info: "This is Point 3: This part is about the possible life that people can have on Kepler-22b, and about it's atmosphere. Firstly, it has a thick atmoshpere, it may be primarily composed of hydrogen and helium, making it like a mini-Neptune. Also it has a potential for having water which makes it have a chance of habitability as we know it. Lastly this planet can be used as a test planet to use before exploring other countries. "
        }
    ];

    // Function to update the "Info Tab" with specific information
    function updateInfo(info) {
        const infoBox = document.querySelector('.info-box p');
        infoBox.textContent = info;
    }

    // Create directive points dynamically based on the array
    const directiveSelection = document.querySelector('.directive-selection');

    directives.forEach((directive) => {
        const directiveItem = document.createElement('div');
        directiveItem.classList.add('directive-item');
        
        // Set the position of the directive item
        directiveItem.style.top = directive.position.top;
        directiveItem.style.left = directive.position.left;
        
        // Add an event listener to update the Info Tab when clicked
        directiveItem.addEventListener('click', () => {
            updateInfo(directive.info);
        });

        // Append the directive item to the directive selection container
        directiveSelection.appendChild(directiveItem);
    });

    // Optional: Display default info on page load
    updateInfo("Click on one of the points on the planet simulation to explore.");
});

// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {

    // Array of planet data
    const planets = [
        {
            name: "Kepler 442b",
            info: "Kepler-442b is an exoplanet orbiting the star Kepler-442, located about 1,120 light-years away."
        },
        {
            name: "Kepler-186f",
            info: "Kepler-186f is an exoplanet that orbits the red dwarf star Kepler-186, approximately 500 light-years away."
        },
        {
            name: "Proxima Centauri-b",
            info: "Proxima Centauri-b is an exoplanet orbiting the star Proxima Centauri, the closest star to the Sun."
        },
        {
            name: "Kepler-62f",
            info: "Kepler-62f is a super-Earth exoplanet orbiting the star Kepler-62, located about 1,200 light-years from Earth."
        },
        {
            name: "Kepler-22b",
            info: "Kepler-22b is an exoplanet orbiting the sun-like star Kepler-22, about 600 light-years from Earth."
        }
    ];

    // Get elements for the info box
    const infoBox = document.getElementById('info-box');
    const infoBoxTitle = document.getElementById('info-box-title');
    const infoBoxContent = document.getElementById('info-box-content');
    const closeInfoBoxButton = document.getElementById('close-info-box');

    // Function to show the info box with the correct planet info
    function showInfoBox(planet) {
        infoBoxTitle.textContent = planet.name;
        infoBoxContent.textContent = planet.info;
        infoBox.classList.remove('hidden');
    }

    // Function to hide the info box
    function hideInfoBox() {
        infoBox.classList.add('hidden');
    }

    // Add event listener to the close button to hide the info box when clicked
    closeInfoBoxButton.addEventListener('click', hideInfoBox);

    // Loop through planets and assign a click event to each sidebar list item
    const sidebarItems = document.querySelectorAll('.sidebar ul li');
    
    sidebarItems.forEach((item, index) => {
        // Add a click event listener for each planet item in the sidebar
        item.addEventListener('click', () => {
            showInfoBox(planets[index]);
        });
    });

    // Optional: Show a default message when page loads
    infoBoxTitle.textContent = "Click on a planet to explore!";
    infoBoxContent.textContent = "Select one of the planets from the sidebar to view its information.";
});

// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {

    // Get the Kepler 22b list item
    const kepler22bItem = document.querySelector('.sidebar ul li:nth-child(5)'); // Assuming Kepler 22b is the 5th item
    const infoBox = document.getElementById('info-box');
    const closeInfoBoxButton = document.getElementById('close-info-box');

    // Function to show the info box
    function showInfoBox() {
        infoBox.classList.remove('hidden');
    }

    // Function to hide the info box
    function hideInfoBox() {
        infoBox.classList.add('hidden');
    }

    // Add event listener to Kepler 22b item to show the info box when clicked
    kepler22bItem.addEventListener('click', showInfoBox);

    // Add event listener to the close button to hide the info box when clicked
    closeInfoBoxButton.addEventListener('click', hideInfoBox);
});

document.addEventListener('DOMContentLoaded', function() {
    // Array of planet data
    const planets = {
        "Kepler 442b": {
            description: "Kepler-442b is an exoplanet orbiting the star Kepler-442, located about 1,120 light-years away.",
            facts: [
                "Fact 1: Kepler-442b is located in the habitable zone of its star.",
                "Fact 2: It has a mass approximately twice that of Earth.",
                "Fact 3: It may have a rocky surface."
            ]
        },
        "Kepler-186f": {
            description: "Kepler-186f is an exoplanet that orbits the red dwarf star Kepler-186, about 500 light-years away.",
            facts: [
                "Fact 1: Kepler-186f is the first Earth-size exoplanet found in the habitable zone of another star.",
                "Fact 2: The planet's red dwarf star is cooler and dimmer than the Sun.",
                "Fact 3: Kepler-186f could have liquid water on its surface."
            ]
        },
        // Add more planets similarly...
    };

    // Elements to handle info and facts
    const planetInfoElement = document.querySelector('#planet-info p');
    const fact1 = document.getElementById('fact1');
    const fact2 = document.getElementById('fact2');
    const fact3 = document.getElementById('fact3');
    
    // Variable to store the currently selected planet
    let currentPlanet = null;

    // Event listeners for planet selection from the sidebar
    const sidebarItems = document.querySelectorAll('.sidebar ul li');
    sidebarItems.forEach((item) => {
        item.addEventListener('click', () => {
            const planetName = item.textContent.trim(); // Get the name of the clicked planet
            if (planets[planetName]) {
                currentPlanet = planetName; // Store the current planet name
                planetInfoElement.textContent = planets[planetName].description; // Show description
            }
        });
    });

    // Event listeners for fact points
    fact1.addEventListener('click', function() {
        if (currentPlanet) {
            planetInfoElement.textContent = planets[currentPlanet].facts[0];
        }
    });

    fact2.addEventListener('click', function() {
        if (currentPlanet) {
            planetInfoElement.textContent = planets[currentPlanet].facts[1];
        }
    });

    fact3.addEventListener('click', function() {
        if (currentPlanet) {
            planetInfoElement.textContent = planets[currentPlanet].facts[2];
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.planet-point');
    const infoBox = document.querySelector('#planet-info p');
    
    // Example facts for planet points
    const facts = {
        point1: "This is Point 1: A massive crater caused by lol asteroid impacts.",
        point2: "This is Point 2: A volcanic area with visible lava flows.",
        point3: "This is Point 3: A high-energy source. Possibly geothermal activity."
    };

    points.forEach(point => {
        point.addEventListener('click', function() {
            const pointId = this.id;
            infoBox.textContent = facts[pointId]; // Display the fact in the Info Tab
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.planet-point');
    const infoBox = document.querySelector('#planet-info p');
    const planetImage = document.querySelector('#planet-image');
    const planetLink = document.querySelector('#planet-link');
    
    const planetData = {
        point1: {
            info: "This is Point 1: A massive crater caused by lol asteroid impacts.",
            img: "crater.jpg",
            link: "https://example.com/crater"
        },
        point2: {
            info: "This is Point 2: A volcanic area with visible lava flows.",
            img: "volcano.jpg",
            link: "https://example.com/volcano"
        },
        point3: {
            info: "This is Point 3: A high-energy source. Possibly geothermal activity.",
            img: "geothermal.jpg",
            link: "https://example.com/geothermal"
        }
    };

    points.forEach(point => {
        point.addEventListener('click', function() {
            const pointId = this.id;
            infoBox.textContent = planetData[pointId].info;
            planetImage.src = planetData[pointId].img;
            planetImage.style.display = 'block';
            planetLink.href = planetData[pointId].link;
            planetLink.style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.planet-point');
    const bigInfoBox = document.querySelector('#big-info');  // The big info box
    const smallInfoBox = document.querySelector('#small-info p');  // The small info box
    
    // Example facts for each point
    const planetInfo = {
        point1: "Point 1:there are stars here",
        point2: "Point 2: this is the atmosphere",
        point3: "Point 3: you are here",
        }
    });

    points.forEach(point => {
        point.addEventListener('click', function() {
            const pointId = this.id;  // Get the id of the clicked point
            
            // Update the content of the large info box
            bigInfoBox.textContent = facts[pointId].bigInfo;
            
            // Update the content of the small info box
            smallInfoBox.textContent = facts[pointId].smallInfo;
        });
    });


const planetData = {
    planet1: {
        description: "Planet 1: A rocky planet with a dense atmosphere.",
        image: "planet1.jpg",
        link: "https://example.com/planet1"
    },
    planet2: {
        description: "Planet 2: A gas giant with strong winds.",
        image: "planet2.jpg",
        link: "https://example.com/planet2"
    },
    planet3: {
        description: "Planet 3: Known for its large water reserves.",
        image: "planet3.jpg",
        link: "https://example.com/planet3"
    },
    planet4: {
        description: "Planet 4: Has the largest volcano in the solar system.",
        image: "planet4.jpg",
        link: "https://example.com/planet4"
    },
    planet5: {
        description: "Planet 5: A cold, icy world far from the sun.",
        image: "planet5.jpg",
        link: "https://example.com/planet5"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const planetInfoParagraph = document.querySelector('#planet-infos p');
    const planetImage = document.querySelector('#planet-image');
    const planetLink = document.querySelector('#planet-link');
    
    // Function to update the info box content based on selected planet
    function updatePlanetInfo(planetKey) {
        const planet = planetData[planetKey]; // Get the data for the selected planet
        
        // Update the description
        planetInfoParagraph.textContent = planet.description;
        
        // Update the image
        planetImage.src = planet.image;
        planetImage.style.display = 'block';  // Make the image visible

        // Update the link
        planetLink.href = planet.link;
        planetLink.style.display = 'block';   // Make the link visible
    }
    
    // Example of how to handle clicks (assuming you have planet buttons or elements)
    document.getElementById('planet1-button').addEventListener('click', function() {
        updatePlanetInfo('planet1');
    });
    
    document.getElementById('planet2-button').addEventListener('click', function() {
        updatePlanetInfo('planet2');
    });

    document.getElementById('planet3-button').addEventListener('click', function() {
        updatePlanetInfo('planet3');
    });

    document.getElementById('planet4-button').addEventListener('click', function() {
        updatePlanetInfo('planet4');
    });

    document.getElementById('planet5-button').addEventListener('click', function() {
        updatePlanetInfo('planet5');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.getElementById('close-info-box'); // Close button
    const openButton = document.getElementById('open-info-box');  // Open button
    const infoBox = document.getElementById('info-box');  // Info box

    // Function to close the info box with a fade-out effect
    closeButton.addEventListener('click', function() {
        infoBox.classList.add('hide');  // Add the 'hide' class to fade out
        setTimeout(function() {
            infoBox.style.display = 'none';  // Completely hide the box after fading
            openButton.style.display = 'block';  // Show the open button
        }, 500);  // Match the CSS transition time (0.5s)
    });

    // Function to open the info box with a fade-in effect
    openButton.addEventListener('click', function() {
        infoBox.style.display = 'block';  // Show the info box first
        setTimeout(function() {
            infoBox.classList.remove('hide');  // Remove the 'hide' class to fade in
        }, 10);  // Small delay to trigger the fade-in effect
        openButton.style.display = 'none';  // Hide the open button
    });
});

const planetInfo = {
    "Kepler-442b": "Kepler-442b is a potentially habitable exoplanet located 1,206 light-years away from Earth in the constellation Lyra.",
    "Kepler-186f": "Kepler-186f is an Earth-sized planet orbiting a red dwarf star about 492 light-years from Earth in the constellation Cygnus.",
    "Proxima Centauri-b": "Proxima Centauri-b is an exoplanet orbiting the red dwarf star Proxima Centauri, the closest star to the Sun at a distance of 4.2 light-years.",
    "Kepler-62f": "Kepler-62f is a super-Earth exoplanet orbiting within the habitable zone of the star Kepler-62, approximately 1,200 light-years away.",
    "Kepler-22b": "Kepler-22b is an exoplanet that orbits a Sun-like star about 600 light-years away in the constellation Cygnus, discovered in the habitable zone."
};

function showInfo(planet) {
    document.getElementById('infoTab').innerHTML = planetInfo[planet];
}