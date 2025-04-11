document.addEventListener('DOMContentLoaded', function () {
    // Definimos los diferentes conjuntos de cards
    const cardSets = {
        'value-1': [
            {
                bgColor: '#ff9e9e',
                title: 'Analytics Dashboard',
                types: ['Analytics', 'Dashboards'],
                typeColors: ['rgba(165, 96, 247, 0.43)', 'rgb(85, 27, 177)']
            },
            {
                bgColor: '#a6d0ff',
                title: 'Data Visualization',
                types: ['Data', 'Charts'],
                typeColors: ['rgba(96, 165, 247, 0.43)', 'rgb(27, 85, 177)']
            },
            {
                bgColor: '#ff9e9e',
                title: 'Analytics Dashboard',
                types: ['Analytics', 'Dashboards'],
                typeColors: ['rgba(165, 96, 247, 0.43)', 'rgb(85, 27, 177)']
            },
            {
                bgColor: '#a6d0ff',
                title: 'Data Visualization',
                types: ['Data', 'Charts'],
                typeColors: ['rgba(96, 165, 247, 0.43)', 'rgb(27, 85, 177)']
            },
            {
                bgColor: '#ff9e9e',
                title: 'Analytics Dashboard',
                types: ['Analytics', 'Dashboards'],
                typeColors: ['rgba(165, 96, 247, 0.43)', 'rgb(85, 27, 177)']
            },
            {
                bgColor: '#a6d0ff',
                title: 'Data Visualization',
                types: ['Data', 'Charts'],
                typeColors: ['rgba(96, 165, 247, 0.43)', 'rgb(27, 85, 177)']
            }
        ],
        'value-2': [
            {
                bgColor: '#9effc5',
                title: 'E-commerce Platform',
                types: ['E-commerce', 'React'],
                typeColors: ['rgba(247, 165, 96, 0.43)', 'rgb(177, 85, 27)']
            },
            {
                bgColor: '#ffeba9',
                title: 'Online Store',
                types: ['Shopping', 'Vue'],
                typeColors: ['rgba(247, 233, 96, 0.43)', 'rgb(177, 148, 27)']
            },
            {
                bgColor: '#9effc5',
                title: 'E-commerce Platform',
                types: ['E-commerce', 'React'],
                typeColors: ['rgba(247, 165, 96, 0.43)', 'rgb(177, 85, 27)']
            },
            {
                bgColor: '#ffeba9',
                title: 'Online Store',
                types: ['Shopping', 'Vue'],
                typeColors: ['rgba(247, 233, 96, 0.43)', 'rgb(177, 148, 27)']
            },
            {
                bgColor: '#9effc5',
                title: 'E-commerce Platform',
                types: ['E-commerce', 'React'],
                typeColors: ['rgba(247, 165, 96, 0.43)', 'rgb(177, 85, 27)']
            },
            {
                bgColor: '#ffeba9',
                title: 'Online Store',
                types: ['Shopping', 'Vue'],
                typeColors: ['rgba(247, 233, 96, 0.43)', 'rgb(177, 148, 27)']
            }
        ],
        'value-3': [
            {
                bgColor: '#9ed4ff',
                title: 'Mobile App UI',
                types: ['UI/UX', 'Flutter'],
                typeColors: ['rgba(96, 247, 165, 0.43)', 'rgb(27, 177, 85)']
            },
            {
                bgColor: '#d59eff',
                title: 'Web Design',
                types: ['Design', 'Figma'],
                typeColors: ['rgba(233, 96, 247, 0.43)', 'rgb(148, 27, 177)']
            },
            {
                bgColor: '#9ed4ff',
                title: 'Mobile App UI',
                types: ['UI/UX', 'Flutter'],
                typeColors: ['rgba(96, 247, 165, 0.43)', 'rgb(27, 177, 85)']
            },
            {
                bgColor: '#d59eff',
                title: 'Web Design',
                types: ['Design', 'Figma'],
                typeColors: ['rgba(233, 96, 247, 0.43)', 'rgb(148, 27, 177)']
            }
        ],
        'value-4': [
            {
                bgColor: '#ffd59e',
                title: 'Social Network',
                types: ['Social', 'Firebase'],
                typeColors: ['rgba(247, 96, 233, 0.43)', 'rgb(177, 27, 148)']
            },
            {
                bgColor: '#ff9ed5',
                title: 'Portfolio Website',
                types: ['Web', 'JavaScript'],
                typeColors: ['rgba(247, 96, 96, 0.43)', 'rgb(177, 27, 27)']
            }
        ]
    };

    // Función para generar el HTML de una card
    function createCardHTML(cardData) {
        return `
            <article class="article-wrapper">
                <div class="rounded-lg container-project" style="background-color: ${cardData.bgColor};"></div>
                <div class="project-info">
                    <div class="flex-pr">
                        <div class="project-title text-nowrap">${cardData.title}</div>
                        <div class="project-hover">
                            <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24"
                                stroke-width="2" fill="none" stroke="currentColor">
                                <line y2="12" x2="19" y1="12" x1="5"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </div>
                    <div class="types">
                        <span style="background-color: ${cardData.typeColors[0]}; color: ${cardData.typeColors[1]};"
                            class="project-type">• ${cardData.types[0]}</span>
                        <span class="project-type">• ${cardData.types[1]}</span>
                    </div>
                </div>
            </article>
            
        `;
    }

    // Función para renderizar cards
    function renderCards(setId) {
        const container = document.getElementById('cards-container');
        container.innerHTML = '';

        cardSets[setId].forEach(cardData => {
            container.innerHTML += createCardHTML(cardData);
        });
    }

    // Cargar el primer set de cards por defecto
    renderCards('value-1');

    // Añadir event listeners a los radio buttons
    document.querySelectorAll('.radio-input input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.checked) {
                renderCards(this.value);
            }
        });
    });
});

