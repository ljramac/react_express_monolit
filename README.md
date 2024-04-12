## Prerequisites

Before you begin, make sure you have Node.js installed on your system.

### Installing Node.js

Visit [Node.js](https://nodejs.org/) and download and install the recommended version for your operating system.

## Installing Dependencies

```bash
npm install
```

This will install all the necessary dependencies for the project contained in `package.json`.

## Running the Application

Once the dependencies are installed, you can start the application in two different ways:

### Using start.sh

To start the application without backend hot reloading:

```bash
./bin/start.sh
```

Make sure that `start.sh` has execution permissions. If not, grant them with:

```bash
chmod +x ./bin/start.sh
```

### Using dev.sh for Hot Reloading

If you want to start the application with backend hot reloading, use:

```bash
./bin/dev.sh
```

Again, check and grant execution permissions if necessary:

```bash
chmod +x ./bin/dev.sh
```

Both scripts will allow you to run the application in development mode.
