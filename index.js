require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

const githubData = {
  login: "niharika-kesarwani",
  id: 45658446,
  node_id: "MDQ6VXNlcjQ1NjU4NDQ2",
  avatar_url: "https://avatars.githubusercontent.com/u/45658446?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/niharika-kesarwani",
  html_url: "https://github.com/niharika-kesarwani",
  followers_url: "https://api.github.com/users/niharika-kesarwani/followers",
  following_url:
    "https://api.github.com/users/niharika-kesarwani/following{/other_user}",
  gists_url: "https://api.github.com/users/niharika-kesarwani/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/niharika-kesarwani/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/niharika-kesarwani/subscriptions",
  organizations_url: "https://api.github.com/users/niharika-kesarwani/orgs",
  repos_url: "https://api.github.com/users/niharika-kesarwani/repos",
  events_url:
    "https://api.github.com/users/niharika-kesarwani/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/niharika-kesarwani/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Niharika Kesarwani",
  company: "@neogcamp",
  blog: "niharikakesarwani.netlify.app",
  location: "Nasik",
  email: null,
  hireable: true,
  bio: "Web Developer | @neogcamp '23 | Ex-@oyorooms | CSE @ MIT, Manipal '22",
  twitter_username: "Niharika_twt",
  public_repos: 95,
  public_gists: 0,
  followers: 54,
  following: 28,
  created_at: "2018-12-06T11:21:44Z",
  updated_at: "2024-10-19T04:50:10Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter Point!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Route!</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
