let posts = JSON.parse(localStorage.getItem("posts")) || [
    { id: 1, title: "daily JS news" },
    { id: 2, title: "daily C++ news" },
    { id: 3, title: "daily Python news" },
    { id: 4, title: "daily Java news" },
];

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); 
    const postId = document.getElementById("postId").value;
    const title = document.getElementById("title").value;

    if (postId && title) {
        posts.push({ id: Number(postId), title: title }); 
        localStorage.setItem("posts", JSON.stringify(posts)); 
        window.location.href="index.html"; 
    }
 }) ;

 
 function updateTable() {
    table.innerHTML = ""; 
    posts.forEach((item) => {
        let row = `<tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
        </tr>`;
        table.innerHTML += row;
    });
}

updateTable(); 