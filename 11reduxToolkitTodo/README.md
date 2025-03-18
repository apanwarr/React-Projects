# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



--- Redux Pre-Requisites

1- Redux is a Core library 
and React-Redux is just a implementation of Redux --- for wiring,then they both are communicated to each other..

Jab hum React-Redux use karte hai toh kaafi kaam automatically ho jate hai (Never Mutate your State) 

step 01 - ik appplication ka 1 hi (store -Single Source of Truth) banana padta hai par kabhi multiple bhi banane padh skte h   

step 02 - ab hume store me reducer configure karne the toh features folder me todoSlice me Slice banaye..
ab slice banane ke liye 3 cheeze chiye hoti hai -- 
name, inititalState, (reducers-Object hai)

step 03 - ab export karna hai individual sab reducers ko, 

step 04 - export karna hai saare reducer ka ik main source like - todoSlice.reducer  -- khuki isse kaam me lena hai apne state,store ke andar

step 05 - components me jao 
and design kro ki (value leni hai - useSelector(state => state.todos) , yah bhjni hai - useDispatch() )

step 06 - fir value ko variable me hold kr dena and design me add kr dena requirement ke according