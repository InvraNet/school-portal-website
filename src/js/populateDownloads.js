document.addEventListener('DOMContentLoaded', function () {
    const githubApiUrl = "https://api.github.com/repos/InvraNet/school-portal/releases/latest";
    const downloadBtn = document.getElementById('download-btn');
    const osNameSpan = document.getElementById('os-name');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const buttonIcon = document.getElementById('buttonIconography');

    fetch(githubApiUrl)
        .then(response => response.json())
        .then(data => {
            const assets = data.assets;
            const createDropdownLink = (label, url, iconClass) => {
                const link = document.createElement('a');
                link.href = url;
                link.innerHTML = `<i class="${iconClass}"></i> ${label}`;
                link.className = 'dropdown-item';
                link.target = '_blank';
                return link;
            };
            assets.forEach(asset => {
                let label, iconClass;

                if (asset.name.endsWith('.msi')) {
                    label = 'Windows Enterprise (.msi)';
                    iconClass = 'fa-brands fa-windows';
                } else if (asset.name.endsWith('.exe')) {
                    if (asset.name.toLowerCase().includes('portable')) {
                        label = 'Windows Portable (.exe)';
                    } else {
                        label = 'Windows (.exe)';
                    }
                    iconClass = 'fa-brands fa-windows';
                } else if (asset.name.endsWith('.deb')) {
                    label = 'Debian Based (.deb)';
                    iconClass = 'fa-brands fa-linux';
                } else if (asset.name.endsWith('.rpm')) {
                    label = 'RPM Based (.rpm)';
                    iconClass = 'fa-brands fa-linux';
                } else if (asset.name.endsWith('.AppImage')) {
                    label = 'Linux (.AppImage)';
                    iconClass = 'fa-brands fa-linux';
                } else if (asset.name.endsWith('.dmg')) {
                    label = 'macOS (.dmg)';
                    iconClass = 'fa-brands fa-apple';
                } else if (asset.name.endsWith('.pacman')) {
                    label = 'Arch Linux (.pacman)';
                    iconClass = 'fa-brands fa-linux';
                } else if (asset.name.endsWith('.tar.xz')) {
                    label = 'Linux (.tar.xz)';
                    iconClass = 'fa-brands fa-linux';
                }

                if (label) {
                    dropdownMenu.appendChild(createDropdownLink(label, asset.browser_download_url, iconClass));
                }
            });

            const userAgent = window.navigator.userAgent;
            let defaultDownloadUrl = null;
            if (userAgent.indexOf("Windows") !== -1 && assets.some(asset => asset.name.endsWith('.msi') || asset.name.endsWith('.exe'))) {
                osNameSpan.textContent = "Windows";
                buttonIcon.innerHTML = '<i class="fa-brands fa-windows"></i>';
                defaultDownloadUrl = assets.find(asset => asset.name.endsWith('.msi') || asset.name.endsWith('.exe')).browser_download_url;
            } else if (userAgent.indexOf("Linux") !== -1 && assets.some(asset => asset.name.endsWith('.AppImage') || asset.name.endsWith('.deb'))) {
                osNameSpan.textContent = "Linux";
                buttonIcon.innerHTML = '<i class="fa-brands fa-linux"></i>';
                defaultDownloadUrl = assets.find(asset => asset.name.endsWith('.AppImage') || asset.name.endsWith('.deb')).browser_download_url;
            } else if (userAgent.indexOf("Mac") !== -1 && assets.some(asset => asset.name.endsWith('.dmg'))) {
                osNameSpan.textContent = "macOS";
                buttonIcon.innerHTML = '<i class="fa-brands fa-apple"></i>';
                defaultDownloadUrl = assets.find(asset => asset.name.endsWith('.dmg')).browser_download_url;
            }

            if (defaultDownloadUrl) {
                downloadBtn.onclick = () => window.open(defaultDownloadUrl);
            } else {
                downloadBtn.onclick = () => alert("No download available for your OS");
            }
        })
        .catch(error => {
            console.error('Error fetching release info:', error);
        });
});