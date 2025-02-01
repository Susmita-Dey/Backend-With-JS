require('dotenv').config()
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

const gitHubData = {
    "login": "Susmita-Dey",
    "id": 79099734,
    "node_id": "MDQ6VXNlcjc5MDk5NzM0",
    "avatar_url": "https://avatars.githubusercontent.com/u/79099734?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Susmita-Dey",
    "html_url": "https://github.com/Susmita-Dey",
    "followers_url": "https://api.github.com/users/Susmita-Dey/followers",
    "following_url": "https://api.github.com/users/Susmita-Dey/following{/other_user}",
    "gists_url": "https://api.github.com/users/Susmita-Dey/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Susmita-Dey/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Susmita-Dey/subscriptions",
    "organizations_url": "https://api.github.com/users/Susmita-Dey/orgs",
    "repos_url": "https://api.github.com/users/Susmita-Dey/repos",
    "events_url": "https://api.github.com/users/Susmita-Dey/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Susmita-Dey/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Susmita Dey",
    "company": "@devs-in-tech",
    "blog": "https://susmitadey.vercel.app",
    "location": "Kolkata, India",
    "email": null,
    "hireable": true,
    "bio": "Grad'23 CS Student | Software Engineer | Prev Team @wemakedevs | Founder @devs-in-tech  | Former SDE @fountane,  Frontend Dev Intern @DigiteaTechTeam @Fueler-io",
    "twitter_username": "its_SusmitaDey",
    "public_repos": 138,
    "public_gists": 0,
    "followers": 525,
    "following": 157,
    "created_at": "2021-02-15T15:22:34Z",
    "updated_at": "2025-01-08T13:18:00Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('susmitadey')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Tech With Susmita</h2>")
})

app.get('/github', (req, res) => {
    res.json(gitHubData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})