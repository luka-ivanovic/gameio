document.addEventListener("DOMContentLoaded", () => {

    if (!localStorage.getItem("cookiesAccepted")) {

        const popup = document.createElement("div");
        popup.id = "cookie-popup";

        popup.innerHTML = `
            <div class="cookie-box">
                <p>
                    Diese Website verwendet Cookies, um dein Erlebnis zu verbessern,
                    Statistiken zu analysieren und Inhalte zu optimieren. [Mock]
                </p>

                <div class="cookie-buttons">
                    <button id="decline-cookies">Ablehnen</button>
                    <button id="necessary-cookies">Nur notwendige</button>
                    <button id="accept-cookies">Akzeptieren</button>
                </div>
            </div>
        `;

        document.body.appendChild(popup);

        document.getElementById("accept-cookies").addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "all");
            popup.remove();
        });

        document.getElementById("necessary-cookies").addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "necessary");
            popup.remove();
        });

        document.getElementById("decline-cookies").addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "none");
            popup.remove();
        });

        popup.addEventListener("click", (e) => {
            if (e.target === popup) popup.remove();
        });
    }


    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", (e) => {

            if (e.target.closest("a")) return;

            window.location.href = "shop.html";
        });
    });

});