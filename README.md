<!-- ABOUT THE PROJECT -->

## 🔰 About the project

The system allows **Librarians** and **Members** to login to the web app (using accounts created by librarians)

Lbrarians can:
- Manage (CRUD)
  - Authors
  - Genres
  - Books
  - Borrowals
  - Users

Members can:
- View (R)
  - Authors
  - Genres
  - Books
  - Own borrowals
- Add (C)
  - Own borrowals

### Built with
<div style="display:inline-block">
<img alt="MongoDB"src="https://github.com/yurijserrano/Github-Profile-Readme-Logos/blob/master/databases/mongodb.svg" width="128"/>
<img alt="Node.js" src="https://github.com/yurijserrano/Github-Profile-Readme-Logos/blob/master/frameworks/nodejs.svg" width="128"/>
<img alt="NPM" src="https://github.com/yurijserrano/Github-Profile-Readme-Logos/blob/master/others/npm.svg" width="128"/>
<img alt="React" src="https://github.com/yurijserrano/Github-Profile-Readme-Logos/blob/master/frameworks/react.svg" width="128"/>
<img alt="Git" src="https://github.com/yurijserrano/Github-Profile-Readme-Logos/blob/master/others/git.svg" width="128"/>
<img alt="Github" src="https://github.com/yurijserrano/Github-Profile-Readme-Logos/blob/master/cloud/github.svg" width="128"/>
<img alt="VS Code" src="https://github.com/yurijserrano/Github-Profile-Readme-Logos/blob/master/text%20editors/vscode.svg" width="128"/>
<img alt="HTML" src="https://github.com/yurijserrano/Github-Profile-Readme-Logos/blob/master/others/html.svg" width="128"/>
<img alt="CSS" src="https://github.com/yurijserrano/Github-Profile-Readme-Logos/blob/master/others/css.svg" width="128"/>
<img alt="JS" src="https://github.com/yurijserrano/Github-Profile-Readme-Logos/blob/master/programming%20languages/javascript.svg" width="128"/>


<!-- FILE STRUCTURE -->

###  📂 File Structure
```
.
├── client
│   ├── public
│   │   ├── assets
│   │   └── index.html
│   └── src
│       ├── hooks
│       ├── sections
│       │   ├── @dashboard
│       │   │   ├── app
│       │   │   ├── author
│       │   │   ├── book
│       │   │   ├── borrowal
│       │   │   ├── genre
│       │   │   └── user
|       │   └── auth
│       │       └── login
│       ├── utils
│       ├── App.jsx
│       ├── index.js
│       ├── constants.js
│       └── routes.js
│
├── server
   ├── controllers
   ├── models
   ├── routes
   ├── index.js
   └── passport-config.js