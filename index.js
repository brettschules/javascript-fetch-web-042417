const app = "I don't do much.";

fetch('https://api.github.com/user/repos')
headers: {
  Authorization:
}
.then(rest => rest.json())
.then(json => console.log(json));
