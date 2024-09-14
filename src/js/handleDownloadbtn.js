document.getElementById('dropdown-toggle').addEventListener('click', () => {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const downloadBtn = document.getElementById('download-btn');
    const dropdownToggle = document.getElementById('dropdown-toggle');

    if (dropdownMenu.classList.contains('show')) {
        collapseDropDown();
    } else {
        expandDropDown();
    }
})

function collapseDropDown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const downloadBtn = document.getElementById('download-btn');
    const dropdownToggle = document.getElementById('dropdown-toggle');

    dropdownMenu.classList.remove('show');
    setTimeout(() => {
        dropdownToggle.style.borderBottomRightRadius = "5px";
        downloadBtn.style.borderBottomLeftRadius = "5px";
    } ,330)
}

function expandDropDown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const downloadBtn = document.getElementById('download-btn');
    const dropdownToggle = document.getElementById('dropdown-toggle');

    dropdownMenu.classList.add('show');
    dropdownToggle.style.borderBottomRightRadius = "0px";
    downloadBtn.style.borderBottomLeftRadius = "0px";
}