const modal = document.getElementById('portfolioModal');
const modalBox = document.getElementById('modalBox');

function openModal(id){

    const project = projects[id];

    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalRole').innerText = project.role;
    document.getElementById('modalDesc').innerText = project.desc;

    // tools
    const toolsBox = document.getElementById('modalTools');
    toolsBox.innerHTML = "";
    project.tools.forEach(t=>{
        toolsBox.innerHTML += `
            <span class="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                ${t}
            </span>`;
    });

    // techniques
    const techBox = document.getElementById('modalTech');
    techBox.innerHTML = "";
    project.tech.forEach(t=>{
        techBox.innerHTML += `
            <li class="bg-neutral-200 dark:bg-neutral-700
                text-neutral-800 dark:text-neutral-100">
                ✔ ${t}
            </li>`;
    });

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // animation
    setTimeout(()=>{
        modal.classList.remove('opacity-0');
        modalBox.classList.remove('scale-95');
    },10);
}

function closeModal(){
    modal.classList.add('opacity-0');
    modalBox.classList.add('scale-95');

    setTimeout(()=>{
        modal.classList.add('hidden');
    },300);
}

function outsideClick(e){
    if(e.target.id === "portfolioModal"){
        closeModal();
    }
}
