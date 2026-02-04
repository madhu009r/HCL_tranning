interface User {
  name: { first: string; last: string };
  email: string;
  location: { country: string };
  picture: { medium: string };
}

const container = document.getElementById("users") as HTMLDivElement;
const reloadBtn = document.getElementById("reload") as HTMLButtonElement;

function fetchUsers() {
  fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => displayUsers(data.results))
    .catch(error => console.error("Error:", error));
}

function displayUsers(users: User[]) {
  container.innerHTML = "";

  users.forEach(user => {
    const div = document.createElement("div");

    div.style.border = "1px solid gray";
    div.style.margin = "10px";
    div.style.padding = "10px";

    div.innerHTML = `
      <img src="${user.picture.medium}">
      <h3>${user.name.first} ${user.name.last}</h3>
      <p>${user.location.country}</p>
    `;

    div.addEventListener("click", () => {
      alert(`Email: ${user.email}`);
    });

    container.appendChild(div);
  });
}

reloadBtn.addEventListener("click", fetchUsers);

fetchUsers();
