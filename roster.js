document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rosterGrid');
    const render = list => {
        grid.innerHTML = '';
        list.forEach(p => {
            const col = document.createElement('div');
            col.className = 'col-6 col-lg-2';

            col.innerHTML = `
                <div class="card h-100 shadow-sm mb-3">
                    <img src="${p.image}" class="card-img-top" alt="${p.name}" />
                    <div class="card-body text-center">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="card-text">Age: ${p.age}</p>
                        <p class="card-text">Country: ${p.country}</p>
                        <p class="card-text">Position: ${p.position}</p>
                    </div>
                </div>
            `;
        })
        grid.appendChild(col);
    };
    render(players)
});