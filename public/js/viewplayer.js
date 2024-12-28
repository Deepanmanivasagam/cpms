window.onload = async function() {
    try {
        // Fetch players from the backend
        const response = await fetch("http://localhost:5000/api/players");

        if (!response.ok) {
            throw new Error("Failed to fetch players");
        }

        const players = await response.json();
        const playerTableBody = document.querySelector('#playerTable tbody');

        // Check if no players are found
        if (players.length === 0) {
            playerTableBody.innerHTML = '<tr><td colspan="8">No players found.</td></tr>';
        } else {
            // Add each player to the table
            players.forEach((player, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${player.name}</td>
                    <td>${player.age}</td>
                    <td>${player.team}</td>
                    <td>${player.role}</td>
                    <td>${player.matches}</td>
                    <td>${player.performance}</td>
                    <td><button class="delete-btn" data-id="${player._id}">Delete</button></td>
                `;
                playerTableBody.appendChild(row);
            });

            // Add event listeners for the delete button
            const deleteButtons = document.querySelectorAll('.delete-btn');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const playerId = this.getAttribute('data-id');
                    deletePlayer(playerId); // Call delete function
                });
            });
        }
    } catch (error) {
        console.error("Error fetching players:", error);
        alert("Error fetching players.");
    }
};

// Function to delete player
async function deletePlayer(playerId) {
    try {
        const response = await fetch(`http://localhost:5000/api/players/${playerId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error("Error deleting player");
        }

        // Remove the player row from the table after successful deletion
        const row = document.querySelector(`button[data-id="${playerId}"]`).closest('tr');
        row.remove();

        alert("Player deleted successfully");
    } catch (error) {
        console.error("Error deleting player:", error);
        alert("Error deleting player.");
    }
}

// Implement search functionality
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('#playerTable tbody tr');

    rows.forEach(row => {
        const playerName = row.querySelector('td').textContent.toLowerCase();
        if (playerName.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
 }
    });
});