This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Church notes (`/note`, `/admin`)

The note form (`/note`) and its admin panel (`/admin`) talk to the `nodejs-mleko` backend
(`/api/notes`, `/api/admin/*`). By default requests go to the same origin; set `API_BASE`
at build time to point to another host, e.g. `API_BASE=https://api.example.com npm run build`.
