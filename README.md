<b>React/Redux/Routing/Duck pattern</b><br/>
<b>Setup and deployment</b><br/>
- Choose env [development, production, staging, test] or create another environment <br/>
- Create environment file in env folder for example: development.env<br/>
- npm i <br/>
- Run: npm run start:[environment] <br/>
- Build: npm run build:[environment] <br/>
- npm start <br/>
<br/>
<b>Components and Pages</b><br/>
- Pages folder: src/pages - for example:[Home page, About page...]<br/>
- Example: src/pages/about/[AboutContainers.js, AboutComponent.js, ...]<br/>
- Common components: src/components - for example: [navbar, modal, ...]<br/>
<br/>
<b>Redux with duck pattern</b><br/>
- Actions folder: src/pages/[something-page]/features/actions.js <br/>
- Constants: src/pages/[something-page]/features/types.js<br/>
- Reducers folder: src/pages/[something-page]/features/reducers.js<br/>
- Operation folder: src/pages/[something-page]/features/operations.js<br/>
- Combain reducers: src/reducers.js<br/>
<br/>
<b>Routes</b><br/>
- Routers folder: src/routes<br/>
- Combain routes: src/routes/index.js<br/>
- Example: src/routes/[AboutRoutes.js]<br/>
<br/>
<b>Store</b><br/>
- Store: src/store/index.js<br/>
- Enhancers: src/store/enhancers.js<br/>
- Middlewares: src/store/middlewares.js<br/>
- History: src/store/history.js<br/>
<br/>
<b>Utils functions</b><br/>
- Folder: src/utils<br/>
- Example: src/utils/[Something.js]<br/>
<br/>
<b>Redux devtools</b><br/>
- Devtools connects when environment: development || staging <br/>
- Devtools connects in src/store/enhancers.js file <br/>
