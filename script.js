
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector("button.bg-green-500");
    const joinBtn = document.querySelector("button.bg-gray-700");

    startBtn.addEventListener("click", () => {
        alert("Match Started!");
        startBtn.textContent = "Match In Progress";
        startBtn.classList.replace("bg-green-500", "bg-blue-500");
    });

    joinBtn.addEventListener("mouseenter", () => {
        joinBtn.textContent = "Ready to Join?";
    });

    joinBtn.addEventListener("mouseleave", () => {
        joinBtn.textContent = "Join Lobby";
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            alert("Enter key pressed! Let's play!");
        }
    });

    startBtn.addEventListener("dblclick", () => {
        alert("🎉 Secret Unlocked! You found the hidden mode.");
        startBtn.classList.toggle("animate-pulse");
    });
});