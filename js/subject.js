var urlParams = new URLSearchParams(window.location.search);
var subject = urlParams.get("sub") || "Subject";
document.getElementById("subjectTitle").innerText = subject;

var posts = [];

document.getElementById("postBtn").addEventListener("click", function() {
    var problemText = document.getElementById("problemText").value.trim();
    var problemTag = document.getElementById("problemTag").value.trim();

    if (!problemText) { alert("Write your problem!"); return; }

    var post = {
        text: problemText,
        tag: problemTag,
        replies: [],
        personalDMs: []
    };

    posts.push(post);
    document.getElementById("problemText").value = "";
    document.getElementById("problemTag").value = "";

    displayPosts();
});

function displayPosts() {
    var container = document.getElementById("postsContainer");
    container.innerHTML = "";

    posts.forEach(function(p, index) {
        var postDiv = document.createElement("div");
        postDiv.className = "card";

        // Problem + tag
        var problemP = document.createElement("p");
        problemP.innerHTML = "<b>Problem:</b> " + p.text;
        postDiv.appendChild(problemP);

        var tagP = document.createElement("p");
        tagP.innerHTML = "<b>Tag:</b> " + p.tag;
        postDiv.appendChild(tagP);

        // Reply button
        var replyBtn = document.createElement("button");
        replyBtn.innerText = "Reply";
        replyBtn.addEventListener("click", function() {
            var replyMsg = prompt("Type your reply:");
            if (replyMsg) {
                p.replies.push(replyMsg);
                displayPosts();
            }
        });
        postDiv.appendChild(replyBtn);

        // Offer Help button
        var helpBtn = document.createElement("button");
        helpBtn.innerText = "Offer Help";
        helpBtn.addEventListener("click", function() {
            var dm = prompt("Type your personal message to help:");
            if (dm) {
                p.personalDMs.push(dm);
                displayPosts(); // refresh to show DM
            }
        });
        postDiv.appendChild(helpBtn);

        // Replies container
        var repliesDiv = document.createElement("div");
        repliesDiv.className = "replies";
        p.replies.forEach(function(r) {
            var replyElem = document.createElement("p");
            replyElem.innerText = "Reply: " + r;
            repliesDiv.appendChild(replyElem);
        });
        postDiv.appendChild(repliesDiv);

        // Personal DMs container
        if (p.personalDMs.length > 0) {
            var dmDiv = document.createElement("div");
            dmDiv.style.marginTop = "5px";
            dmDiv.style.backgroundColor = "#f0f0f0";
            dmDiv.style.padding = "5px";
            dmDiv.innerHTML = "<b>Personal DM:</b>";
            p.personalDMs.forEach(function(dm) {
                var dmElem = document.createElement("p");
                dmElem.innerText = dm;
                dmDiv.appendChild(dmElem);
            });
            postDiv.appendChild(dmDiv);
        }

        container.appendChild(postDiv);
    });
}