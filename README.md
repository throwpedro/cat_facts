# cat_facts
ionic vue app, shows facts about cats.   

> The project does best in a mobile view, but it works on desktop as well.  
> Dark mode might look slightly better, but light mode is also supported.  

You can find it running on github pages: https://throwpedro.github.io/cat_facts  
Some bundling messed up the image imports, but they should work fine when running it locally.  
Also routing messes with the url, so refreshing gives `404`.

## Project setup
Works on node 20.x.x(and probably others), I recommind using [nvm](https://github.com/nvm-sh/nvm)

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
 Againg with the cute cat images missing because of bundling.


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
  
It might be worth keeping an eye out for `NOTE:` to see some comments I left for myself and others.  

I added page 1 from the cat api in `src/api/mockData.json`.  
On the off chance that that cat api is down go to:  
[useCatsQuery](src/api/useCatsQuery.ts#L38) and uncomment the axios call that reads the json file  
then comment out the original call to the api.
