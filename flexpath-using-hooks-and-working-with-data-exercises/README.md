
# flexpath-using-hooks-and-working-with-data-exercises

## Exercise overview

These exercises will help you get better at creating using hooks in React
and working with data in your components.

## Getting Started


1. Using Visual Studio Code, open the folder 
   `flexpath-using-hooks-and-working-with-data-exercises` 
   wherever you saved it on your device. 
2. Then, navigate inside of the `my-react-app` folder in your VS Code terminal
   by using the change directory command: `cd my-react-app`
3. Then, run the command `npm install` to install all the npm dependencies
   for this app.
4. We have provided you a pre-built Vite Frontend Development Server application
   for you to write your React code in. You will learn a little bit more about
   Vite when you get to your personal project. For now, you don't need to 
   know a lot about it. It simply builds your React code into a frontend app
   for you and serves it to a port on your machine so you can access it 
   with the url `localhost:5501` in your web browser.
5. You can start the Vite development server by running: `npm run dev` inside
   of the `my-react-app` folder.
   Anytime you save a change in your code, Vite will automatically catch it,
   rebuild your app, and live update it in your browser. In most cases, there 
   is NO need for you to refresh your web browser to see the changes you made
   in the app. You can stop the app in the terminal by using the key combo
   `ctrl + c` (Control key and the 'c' key). This will stop the app. 
   This app will run at http://localhost:5501. 
   Start the app, and then paste that url in your web browser. 
   The text "I'm an App!" should show on the screen.
6. The exercises for this module are outlined in `EXERCISE-INSTRUCTIONS.txt`.
   It will ask you to create various components and use different features of
   React to manage the components state. 

   There are also some questions that don't require code for an answer. In those
   cases, save your answers for these questions directly inside of the 
   `EXERCISE-INSTRUCTIONS.txt` file.
7. If you create a new component then import and render it in `App.jsx`,
   and it doesn't show up in your browser window, then you should refresh the app.
   If that doesn't work, right click the page and choose "Inspect" to open
   your browsers Dev Tools. Then look in the "Console" tab of the dev tools.
   If there's an issue with your React component or how you imported it,
   a message will show detailed information about it in the console.
8. For any components you write, please create them inside of `src/components` and
   import them into `App.jsx` when asked.

   For any React.Context answers you write, please create them 
   inside of `src/context` and import them into `App.jsx` when asked.

   For any Custom Hook answers you write, please create them 
   inside of `src/hooks` and import them into `App.jsx` when asked.

   For any Higher Order Component answers you write, please create them 
   inside of `src/hoc` and import them into `App.jsx` when asked.

   For any Page Component answers you write, please create them 
   inside of `src/pages` and import them into `App.jsx` when asked.

We have provided you with a video `running-vite-app.mp4` showing you how to 
run `npm install` for this project, start the app, open the app in your 
web browser, and then add a simple component to show the app updating in 
the browser. The video showcases running the previous React exercise module, 
but this module is run the same way.

VIDEO DISCLAIMER - You will need to clone the repo to your local device before
you can watch the .mp4 file since GitHub does not support watching it from here.
                                     
The solutions for these exercises are in their own Github repo.
The link to the GitHub repo is inside of `/solution/exercise-solutions/solution-repo.txt`.

Make sure to fork the solution repo, THEN clone it to your local device to run the code.


&nbsp;
---


### Summary of React Concepts Covered in These Exercises

1. **React Components**:
    
    - Building functional components.
    - Using JSX to describe the UI structure.
2. **React State Management**:
    
    - Managing state with `useState`.
    - Handling derived state.
    - Using `useEffect` for side effects, such as fetching data.
    - Custom hooks to streamline code.
    - Error boundaries for catching and displaying errors gracefully.
3. **Routing with React Router**:
    
    - Setting up routing using `react-router-dom`.
    - Declaring routes with `Route` and using `Link` for navigation.
    - Using URL parameters with `useParams`.
    - Handling 404 pages with custom components.
    - Using `useNavigate` for programmatic navigation.
4. **Event Handling**:
    
    - Handling events such as form submissions and button clicks.
    - Using React's synthetic event system for consistent event handling.
5. **Fetching Data and Error Handling**:
    
    - Fetching data using async/await and promises.
    - Handling loading states and errors effectively.
    - Using a mock API to simulate real-world data fetching.
6. **Performance Optimization**:
    
    - Using hooks like `useCallback` and `useMemo` for optimization.
    - Techniques to avoid unnecessary re-renders.
7. **Custom Hooks**:
    
    - Creating and using custom hooks to simplify repetitive logic.
    - Centralizing data-fetching logic.
