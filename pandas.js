function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const toggleButton = document.getElementById('toggleButton');
let isNightMode = false;

toggleButton.addEventListener('click', () => {
    isNightMode = !isNightMode;
    document.body.classList.toggle('night-mode', isNightMode);
    document.body.classList.toggle('day-mode', !isNightMode);
    toggleButton.textContent = isNightMode ? '🌞' : '🌙';
});


const sections = [
    { id: 'section1', name: 'Introduction' },
    { id: 'section2', name: 'Operations' },
    { id: 'section3', name: 'Data Manipulation and Transformation' }
];

