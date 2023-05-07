
## Prerequisites

Before you can run this app, you'll need to have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- Docker

## Installation

To install the dependencies for this app, in the project directory run:

`npm install`

- To start with "Nodemon"

`npm run dev`

- Build the Docker image

`docker build -t server-image .`

- Run the Docker container

`docker run -it -p 5001:5000 -v .:/server --name server-app-cont server-image`
`-p 5001:5000` maps port 5000 in the container to port 5001 on the host. This means that you can access the application running inside the container by visiting [http://localhost:5001] in your web browser.
The app will be available at [http://localhost:5000].

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork this repository
2. Create a new branch (`git checkout -b my-new-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-branch`)
6. Create a new Pull Request