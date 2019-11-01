function startTravelling() {
    const svgs = document.querySelectorAll('.icon-travel');
    const container = document.querySelector('.svgcontainer');
    if (!svgs || !container) {
        // console.log('Svgs or container was not found');
        return;
    }

    const containerRect = container.getBoundingClientRect();

    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    const velX = 5;
    const velY = 5;
    const svgIcons = [];

    for (let i = 0; i < svgs.length; i++) {
        svgIcons.push({
            icon: svgs[i],
            top: 0,
            left: 0,
            topVelocity: randomInRange(1, 10),
            leftVelocity: randomInRange(1, 10),
        });
    }

    // Show icons on start screen
    setTimeout(() => {
        for (let i = 0; i < svgs.length; i++) {
            svgs[i].style.opacity = '1';
        }
    }, 1000)

    setUpIcons(svgIcons, containerWidth, containerHeight);

    setInterval(() => {
        moveSvg(svgIcons);
    }, 200)
}

// On load window set random position for evety icon
function setUpIcons(icons, width, height) {
    icons.forEach(element => {
       const randomTop =  randomInRange(0, height);
       const randomWidth = randomInRange(0, width);

       element.icon.style.top = `${randomTop}px`;
       element.icon.style.left = `${randomWidth}px`;

       element.top = randomTop;
       element.left = randomWidth;
    });
}

function getDirection(svgIcons) {
    const container = document.querySelector('.svgcontainer');
    const width = container.getBoundingClientRect().width;
    const height = container.getBoundingClientRect().height;

    const gap = 40;


    svgIcons.forEach(element => {

        const isIconOnLowerTop = element.top >= height - gap;
        const isIconOnHigherTop = element.top <= 0 + gap;


        const isIconOnLowerWidth = element.left >= width - gap;
        const isIconOnHigherWidth = element.left <= 0 + gap;


        if (isIconOnLowerTop || isIconOnHigherTop) {
            element.topVelicty = randomInRange(1, 10);
            element.topVelocity *= (-1);
        }

        if (isIconOnLowerWidth || isIconOnHigherWidth) {
            element.leftVelocity = randomInRange(1, 10);
            element.leftVelocity *=  (-1);
        }
    });
}

function moveSvg(icons) {

    icons.forEach(el => {
        let newTop = el.top + el.topVelocity;
        let newLeft = el.left + el.leftVelocity;


        el.icon.style.top = `${newTop}px`;
        el.icon.style.left = `${newLeft}px`;
        el.top = newTop;
        el.left = newLeft;
    });

    getDirection(icons);

}

// Generate random number
function randomInRange(start,end){
    return Math.floor(Math.random() * (end - start + 1) + start);
}


startTravelling();