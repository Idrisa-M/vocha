const content = document.getElementById("content");

function showPage(page){
    if(page === "home"){
        content.innerHTML = `
            <h2>Welcome to Zanzibar Tours</h2>
            <p>Explore beautiful beaches and islands.</p>
        `;
    }

    if(page === "tours"){
        content.innerHTML = `
            <h2>Our Tours</h2>
            <div class="card">
                <h3>Safari Blue</h3>
                <p>Enjoy ocean adventure and snorkeling.</p>
            </div>
            <div class="card">
                <h3>Stone Town Tour</h3>
                <p>Explore Zanzibar history and culture.</p>
            </div>
        `;
    }

    if(page === "contact"){
        content.innerHTML = `
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name"><br><br>
            <input type="email" placeholder="Email"><br><br>
            <textarea placeholder="Message"></textarea><br><br>
            <button onclick="sendMessage()">Send</button>
        `;
    }
}

function toggleMenu(){
    document.getElementById("nav").classList.toggle("show");
}

function sendMessage(){
    alert("Message sent! (Demo only)");
}

// default page
showPage("home");