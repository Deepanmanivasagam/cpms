document.getElementById('addPlayerForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Gather form data
    const player = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        team: document.getElementById('team').value,
        role: document.getElementById('role').value,
        matches: document.getElementById('matches').value,
        performance: document.getElementById('performance').value,
    };

    try {
        const response = await fetch("http://localhost:5000/api/players/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(player),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            window.location.href = "viewplayer.html"; // Redirect after adding player
        } else {
            alert(result.error);
        }
    } catch (error) {
        console.error("Error adding player:", error);
        alert("An error occurred.");
    }
});

