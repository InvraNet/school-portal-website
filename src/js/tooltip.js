const tooltip = document.getElementById('classexTooltip');
const tooltipText = tooltip.querySelector('span');

document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    tooltip.style.position = 'absolute';
    tooltip.style.left = mouseX + 10 + 'px';
    tooltip.style.top = mouseY + 10 + 'px'; 
});

document.addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'IMG') {
        const altText = e.target.getAttribute('alt') || '';
        tooltipText.textContent = altText;
        tooltip.style.display = 'block';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.tagName === 'IMG') {
        tooltip.style.display = 'none';
    }
});
