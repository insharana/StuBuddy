// Get logged in user
var user = JSON.parse(localStorage.getItem("user"));
if(!user){
    window.location.href = "signup.html";
}

// Key to store messages per department+semester
var storageKey = "community_" + user.department + "_" + user.semester;

// Load existing messages from localStorage
var posts = JSON.parse(localStorage.getItem(storageKey)) || [];

// Display posts
function displayPosts(){
    var container = document.getElementById("communityContainer");
    container.innerHTML = "";

    posts.forEach(function(p){
        var postDiv = document.createElement("div");
        postDiv.className = "card";

        var typeP = document.createElement("p");
        typeP.innerHTML = "<b>Type:</b> " + p.type;
        postDiv.appendChild(typeP);

        var msgP = document.createElement("p");
        msgP.innerHTML = "<b>Text:</b> " + p.text;
        postDiv.appendChild(msgP);

        var authorP = document.createElement("p");
        authorP.innerHTML = "<i>Posted by:</i> " + p.name;
        postDiv.appendChild(authorP);

        container.appendChild(postDiv);
    });
}

// Post new message/event
document.getElementById("postCommunity").addEventListener("click", function(){
    var text = document.getElementById("communityText").value.trim();
    var type = document.getElementById("type").value;

    if(!text){ alert("Write something!"); return; }

    var post = {
        name: user.name,
        type: type,
        text: text
    };

    posts.push(post);

    // Save to localStorage
    localStorage.setItem(storageKey, JSON.stringify(posts));

    document.getElementById("communityText").value = "";
    displayPosts();
});

// Initial display
displayPosts();