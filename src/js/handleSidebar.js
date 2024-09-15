const sidebar = document.getElementById('sidebar');
const MobiNavToggle = document.getElementById('mobi-navbar-toggle');

document.getElementById('buildingLinkButton').addEventListener('click', () => {
    const buildingLinksGroup = document.getElementById('buildingLinksGroup');
    const buildingToggenIndic = document.getElementById('buildingLinkButtonIndic');
    if (buildingLinksGroup.classList.contains('hidden')) {
        buildingLinksGroup.classList.remove('hidden');
        buildingToggenIndic.classList.remove('hidden');
    } else {
        buildingLinksGroup.classList.add('hidden');
        buildingToggenIndic.classList.add('hidden');
    }
});

MobiNavToggle.addEventListener('click', () => {
    if (sidebar.classList.contains('sidebar-closed')) {
        console.log('do')
        sidebar.classList.remove('sidebar-closed');
    } else {
        console.log('done')
        sidebar.classList.add('sidebar-closed');
    }
});