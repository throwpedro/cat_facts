# cat_facts
ionic vue app, shows facts about cats.

## Project setup
Works on node 20, I recommind using [nvm](https://github.com/nvm-sh/nvm)

```
nvm install 20  
nvm use  
npm install
```

You will also need to install [ionic cli](https://ionicframework.com/docs/cli)
```
npm install -g @ionic/cli
```

Run the app locally
```
ionic serve
```
Should also be fine to run it with vite
```
npm run dev
```

## Tools

You can always have a look in [package.json](package.json) to see all the tools used in this project.  
But here are some of the more notable ones:
- [pinia](https://pinia.vuejs.org/) - state management
- [axios](https://axios-http.com/) - http client
- [tanstack qery](https://tanstack.com/query/) - data fetching, caching and server state
-  [vue-router](https://ionicframework.com/docs/vue/navigation) - routing, clientside navigation
- [ionic components](https://ionicframework.com/docs/components) - UI components
- [ionic icons](https://ionic.io/ionicons) - icons

## Notes
- The project does best in a mobile view, but it works on desktop as well.  
- Dark mode might look slightly better, but light mode is also supported.  
  
It might be worth grepping through the code for `NOTE:` to see some comments I left for myself as others.
