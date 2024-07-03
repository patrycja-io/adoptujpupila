# AdoptujPupila - Monorepo

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
AdoptujPupila is a monorepo containing multiple projects related to pet adoption services. This repository includes both the frontend and backend codebases.

## Project Structure
adoptujpupila_to_fix/
├── packages/
│ ├── frontend/
│ └── backend/
├── lerna.json
├── package.json
├── README.md
└── .gitignore

markdown
Copy code

- `packages/`: Contains the frontend and backend projects.
- `lerna.json`: Configuration file for Lerna.
- `package.json`: Root package file.
- `README.md`: This file.
- `.gitignore`: Specifies files to be ignored by Git.

## Getting Started
To get started, clone the repository:
```bash
git clone https://github.com/patrycja-io/adoptujpupila_to_fix.git
cd adoptujpupila_to_fix
Installation
Navigate to each package directory to install dependencies:

bash
Copy code
# For frontend
cd packages/frontend
npm install

# For backend
cd ../backend
npm install
Usage
Run the frontend and backend servers:

bash
Copy code
# Start frontend
cd packages/frontend
npm start

# Start backend
cd ../backend
npm start
Access the frontend application at http://localhost:3000 and the backend API at http://localhost:5000.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.