document.getElementById('buildingLinkButton').addEventListener('click', () => {
    const buildingLinksGroup = document.getElementById('buildingLinksGroup');
    if (buildingLinksGroup.classList.contains('hidden')) {
        buildingLinksGroup.classList.remove('hidden');
    } else {
        buildingLinksGroup.classList.add('hidden');
    }
});