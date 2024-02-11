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

## Build for native (android)
https://ionic.io/ -> Sign in/Dashboard is probably the easiest way.  

Other wise:  
> Have android studio installed 
 
 ```
 ionic build

 ionic capacitor build android

 npx cap open android
 ```
 Go to android studio 'Build' -> 'Build bundles/APK' -> Build APK  
 Run the APK on your (android) phone.


## Tools

You can always have a look in [package.json](package.json) to see all the tools used in this project.  
But here are some of the more notable ones:
- [pinia](https://pinia.vuejs.org/) - state management
- [axios](https://axios-http.com/) - http client
- [tanstack qery](https://tanstack.com/query/) - data fetching, caching and server state
- [vue-router / ionic router](https://ionicframework.com/docs/vue/navigation) - routing, clientside navigation
- [ionic components](https://ionicframework.com/docs/components) - UI components
- [ionic icons](https://ionic.io/ionicons) - icons

## Notes
> The project does best in a mobile view, but it works on desktop as well.  
> Dark mode might look slightly better, but light mode is also supported.  
  
It might be worth keeping an eye out for `NOTE:` to see some comments I left for myself as others.  

I added page 1 from the cat api as mockData.json.  
On the off chance that that cat api is down go to:  
src/api/useCatsQuery.ts#L36 and comment in the axios calls that reads the json file  
and comment out the original call fetching from the api.
