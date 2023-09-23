# Tutorial: Building an app with ESBuild, Supabase, and StarryUI in TypeScript

The full source code for the project created in this tutorial is available on [GitHub](https://github.com/starryui/tutorial-2023-09-23-esbuild-supabase).

### Create project structure

Create the following folders in your project (assuming the name is `my-project`):

```shell
mkdir -p my-project
mkdir -p my-project/client
mkdir -p my-project/server
mkdir -p my-project/server/public
```

Create a `my-project/.gitignore` file to exclude `node_modules` folders and the built ` *.js`` and  `\*.js.map` files from git with the following contents:

```shell
node_modules
*.js
*.js.map

```

### Install Dependencies

Create a `my-project/client/package.json` file with [npm](https://www.npmjs.com/) and install [ESBuild](https://esbuild.github.io/), [TypeScript](https://www.typescriptlang.org/), and [StarryUI](https://starryui.com/).

```shell
cd client
npm init # fill out the prompts to create package.json for the client
npm i --save-dev esbuild
npm i --save typescript @starryui/layout @starryui/theme @starryui/traits @starryui/theme-midnight
cd ..
```

Create a `my-project/server/package.json` file with [npm](https://www.npmjs.com/) and install [TypeScript](https://www.typescriptlang.org/), and [Supabase](https://supabase.com/).

```shell
cd server
npm init # fill out the prompts to create package.json for the server
npm i --save typescript @types/node @supabase/supabase-js
cd ..
```

Create a server `my-project/server/tsconfig.json` file with the following contents:

```typescript
{
  "compilerOptions": {
    "moduleResolution": "Node"
  }
}

```

---

### Setup Build Scripts

Add a script to `my-project/client/package.json` to build the app with ESBuild after first typechecking with `tsc`:

```typescript
{
 "scripts": {
  "build": "tsc --noEmit index.ts && esbuild index.ts --bundle --sourcemap --outdir=../server/public/client-bundle"
 }
}
```

Add a script to `my-project/server/package.json` to build the app with `tsc`:

```typescript
{
 "scripts": {
  "build": "tsc index.ts"
 }
}
```

---

### Client Code

Create a file `my-project/client/index.ts` with the following content:

```ts

```

---

### Server Code

Create file `my-project/server/public/index.html` with the following content:

```html
<!DOCTYPE html>
<head>
 <title>My Project</title>
 <style>
  :root {
   color-scheme: light dark;
  }
 </style>
</head>
<body>
 <script src="./client-bundle/index.js"></script>
</body>
```

Create file `my-project/server/index.ts` with the following content:

```ts

```

---

### Build and Run

Now it's time to build and run our app.

```shell
npm run --prefix client build
npm run --prefix server build
node server
```

If there were no errors in any of the previous steps, you should now have a working application that you can visit at [http://localhost:8080](http://localhost:8080)

You made it to the end of the tutorial. Happy coding!
