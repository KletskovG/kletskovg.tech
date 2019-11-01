function startTravelling() {
    const svgs = document.querySelectorAll('.icon-travel');
    const container = document.querySelector('.svgcontainer');
    if (!svgs || !container) {
        console.log('Svgs or container was not found');
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
            top: 50,
            left: 0,
            destinationTop: 0,
            destinationLeft: 0,
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
    }, 20)
}

// On load window set random position for evety icon
function setUpIcons(icons, width, height) {
    icons.forEach(element => {
       const randomTop =  randomInRange(0, height);
       const randomWidth = randomInRange(0, width);

       element.icon.style.top = `${randomTop}px`;
       element.icon.style.left = `${randomWidth}px`;
    });
}

function getDirection(svgIcons) {

    const screenSquares = [
      first: {},
      second: {},
      third: {},
      fourth: {},
    ];


    svgIcons.forEach(element => {

    });
}

function moveSvg(icons) {
    icons.forEach(el => {
        // console.log(el)
        // TODO: make calculations here;
        // let top = el.top;
        // let left = el.left;
        // el.top = `${top + 1}%`
        // el.left = `${left + 1}%`
        //
        // el.icon.style.top = `${top + 1}%`;
        // el.icon.style.left = `${left + 1}`;
    })
}

// Generate random number
function randomInRange(start,end){
    return Math.floor(Math.random() * (end - start + 1) + start);
}


startTravelling();