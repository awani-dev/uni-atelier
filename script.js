const container = document.getElementById("workshops-container");

async function loadWorkshops() {
    try {
        const response = await fetch("workshops.json");

        if (!response.ok) {
            throw new Error("Failed to load workshops.json");
        }

        const workshops = await response.json();

        workshops.forEach((workshop) => {
            const card = document.createElement("a");

            card.href = workshop.link;
            card.className = "workshop-card";

            const number = String(workshop.id).padStart(2, "0");

            card.innerHTML = `
                <div class="card-number">
                    ${number}
                </div>

                <div class="card-icon">
                    ${number}
                </div>

                <div class="card-content">

                    <div class="card-meta">
                        <span>📅 ${workshop.date}</span>
                        <span>${workshop.material}</span>
                    </div>

                    <h3>${workshop.title}</h3>

                    <p>${workshop.description}</p>

                </div>

                <span class="arrow">→</span>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error(error);

        container.innerHTML = `
            <p class="error-message">
                Unable to load workshops.
            </p>
        `;
    }
}

loadWorkshops();
