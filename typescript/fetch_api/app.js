var container = document.getElementById("users");
var reloadBtn = document.getElementById("reload");
function fetchUsers() {
    fetch("https://randomuser.me/api/?results=5")
        .then(function (response) { return response.json(); })
        .then(function (data) { return displayUsers(data.results); })
        .catch(function (error) { return console.error("Error:", error); });
}
function displayUsers(users) {
    container.innerHTML = "";
    users.forEach(function (user) {
        var div = document.createElement("div");
        div.style.border = "1px solid gray";
        div.style.margin = "10px";
        div.style.padding = "10px";
        div.innerHTML = "\n      <img src=\"".concat(user.picture.medium, "\">\n      <h3>").concat(user.name.first, " ").concat(user.name.last, "</h3>\n      <p>").concat(user.location.country, "</p>\n    ");
        div.addEventListener("click", function () {
            alert("Email: ".concat(user.email));
        });
        container.appendChild(div);
    });
}
reloadBtn.addEventListener("click", fetchUsers);
fetchUsers();
