
# flexpath-working-with-components-and-managing-state-exercises

## Exercise overview

These exercises will help you get better at creating React components
and managing state within those components effectively.


## Getting Started


1. Using Visual Studio Code, open the folder 
   `flexpath-working-with-components-and-managing-state-exercises` 
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
   with the url `localhost:5500` in your web browser.
5. You can start the Vite development server by running: `npm run dev` inside
   of the `my-react-app` folder.
   Anytime you save a change in your code, Vite will automatically catch it,
   rebuild your app, and live update it in your browser. In most cases, there 
   is NO need for you to refresh your web browser to see the changes you made
   in the app. You can stop the app in the terminal by using the key combo
   `ctrl + c` (Control key and the 'c' key). This will stop the app. 
   This app will run at http://localhost:5500. 
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


We have provided you with a video `running-vite-app.mp4` showing you how to 
run `npm install` for this project, start the app, open the app in your 
web browser, and then add a simple component to show the app updating in 
the browser. 

VIDEO DISCLAIMER - You will need to clone the repo to your local device before
you can watch the .mp4 file since GitHub does not support watching it from here.
                                     
The solutions for these exercises are in their own Github repo.
The link to the GitHub repo is inside of `/solution/exercise-solutions/solution-repo.txt`.

Make sure to fork the solution repo, THEN clone it to your local device to run the code.


&nbsp;
---

### Summary of React Concepts Covered in These Exercises

1. **React Components**:
    
    - Definition and purpose of React components.
    - Functional components and the use of props to pass data.
    - Component hierarchy and the organization of components into a structured tree.
2. **Props and State**:
    
    - Understanding props for data communication between components.
    - Using the `useState` hook to manage local component state.
    - Handling state changes and their impact on rendering.
3. **React Context**:
    
    - Using the React Context API to manage global state.
    - Avoiding prop drilling by sharing state across deeply nested components.
    - Benefits and drawbacks of using React Context.
4. **Lifecycle Methods and Hooks**:
    
    - The `useEffect` hook for side effects and cleanup.
    - Managing component lifecycle in functional components.
    - Best practices for optimizing performance and handling side effects.
5. **Higher-Order Components (HOCs)**:
    
    - Definition and use cases of HOCs.
    - Enhancing components by wrapping them with additional logic.
    - Benefits and limitations of using HOCs in React applications.
6. **Error Handling and Debugging**:
    
    - Handling errors gracefully using error boundaries.
    - Debugging components with React DevTools.
    - Strategies for diagnosing performance issues and optimizing components.
7. **Next.js Integration**:
    
    - Basics of using Next.js with React for server-side rendering and improved performance.
    - Understanding the Next.js toolchain and configuration.
8. **Performance Optimization**:
    
    - Techniques for improving perceived and actual performance.
    - Use of memoization and lazy loading for optimization.
