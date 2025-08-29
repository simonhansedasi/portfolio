// generate file tree
function createTextTree(container, obj) {
    const ul = document.createElement('ul');

    for (const key in obj) {
        if (key === 'files') {
            obj.files.forEach(file => {
                const li = document.createElement('li');

                // Make file name a clickable link to GitHub
                const a = document.createElement('a');
                a.href = file.actions.view_github;
                a.textContent = file.name;
                a.target = "_blank"; // open in new tab
                li.appendChild(a);

                ul.appendChild(li);
            });
        } else if (typeof obj[key] === 'object') {
            const li = document.createElement('li');

            // Folder header
            const folderSpan = document.createElement('span');
            folderSpan.innerHTML = `<span class="triangle">▶</span> ${key}`;
            folderSpan.style.fontWeight = 'bold';
            folderSpan.style.cursor = 'pointer';
            li.appendChild(folderSpan);

            // Child tree
            const childUl = createTextTree(document.createElement('div'), obj[key]);
            childUl.style.marginLeft = '20px';
            childUl.style.display = 'none'; // start collapsed
            li.appendChild(childUl);

            // Toggle display with rotation
            folderSpan.addEventListener('click', () => {
                const isHidden = childUl.style.display === 'none';
                childUl.style.display = isHidden ? 'block' : 'none';
                folderSpan.querySelector('.triangle').classList.toggle('open', isHidden);
            });

            ul.appendChild(li);
        }
    }

    container.appendChild(ul);
    return ul;
}

// initialize tree
document.addEventListener("DOMContentLoaded", () => {
    const treeContainer = document.getElementById('fileTree');

    for (const project in fileStructure) {
        const projectDiv = document.createElement('div');

        // Project header with triangle
        const projectHeader = document.createElement('span');
        projectHeader.innerHTML = `<span class="triangle">▶</span> ${project}`;
        projectHeader.style.fontWeight = 'bold';
        projectHeader.style.cursor = 'pointer';
        projectDiv.appendChild(projectHeader);

        // Project tree container
        const projectTreeDiv = document.createElement('div');
        projectTreeDiv.style.display = 'none'; // start collapsed
        createTextTree(projectTreeDiv, fileStructure[project].tree);
        projectDiv.appendChild(projectTreeDiv);

        // Toggle project display
        projectHeader.addEventListener('click', () => {
            const isHidden = projectTreeDiv.style.display === 'none';
            projectTreeDiv.style.display = isHidden ? 'block' : 'none';
            projectHeader.querySelector('.triangle').classList.toggle('open', isHidden);
        });

        treeContainer.appendChild(projectDiv);
    }
});
