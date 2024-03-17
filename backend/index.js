import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send("Server is ready hogya ha");
})
app.get('/user', (req, res) => {
    const user = {
        "login": "HadiRaza04",
        "id": 105811811,
        "node_id": "U_kgDOBk6PYw",
        "avatar_url": "https://avatars.githubusercontent.com/u/105811811?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/HadiRaza04",
        "html_url": "https://github.com/HadiRaza04",
        "followers_url": "https://api.github.com/users/HadiRaza04/followers",
        "following_url": "https://api.github.com/users/HadiRaza04/following{/other_user}",
        "gists_url": "https://api.github.com/users/HadiRaza04/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/HadiRaza04/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/HadiRaza04/subscriptions",
        "organizations_url": "https://api.github.com/users/HadiRaza04/orgs",
        "repos_url": "https://api.github.com/users/HadiRaza04/repos",
        "events_url": "https://api.github.com/users/HadiRaza04/events{/privacy}",
        "received_events_url": "https://api.github.com/users/HadiRaza04/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Hadi Raza",
        "company": null,
        "blog": "https://hadiraza.vercel.app/",
        "location": "Karachi, Pakistan",
        "email": null,
        "hireable": true,
        "bio": "A passionate MERN stack developer from Pakistan",
        "twitter_username": "hadiraza_dev",
        "public_repos": 130,
        "public_gists": 0,
        "followers": 15,
        "following": 0,
        "created_at": "2022-05-18T17:09:01Z",
        "updated_at": "2024-03-14T20:47:02Z"
      }
    res.send(user);
})
const port = 3000;
app.listen(port)