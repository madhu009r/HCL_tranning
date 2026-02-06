const params = new URLSearchParams(window.location.search);
const token = params.get("token");

fetch("/me", {
  headers: {
    Authorization: "Bearer " + token
  }
})
.then(res => res.json())
.then(data => {
  document.getElementById("data").innerText =
    JSON.stringify(data, null, 2);
});
