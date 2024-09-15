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