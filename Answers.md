1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Three array methods that don't produce side effects are map, filter and slice. To create a new object while extending the properties of another object you can use the spread operator or Object.assign, but we usually use the spread operator like
    return {...objectWeWantToCopy, propertyWeWantToChange: newValue}

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are an object created by an action creator function that have a type and sometimes a payload. The reducer takes in the action and does something (or not) to the state based on the type. The store is created from the reducer and holds the state of the application. It is considered the single source of truth for the application because it is the only place where the state is held.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global to the application, and component state is local to a component. Component state is like what we've been doing with react: the state is local to a component, and needs to be passed to other components through props. We get application state with redux: the state of the entire application is held in one place, and all the components that are connected to it can access it.

1.  What is middleware?

    Middleware extends the functionality of redux. It stops the action before it reaches the reducer, and performs some operation before moving on. It can stop an action, forward an action untouched, dispatch another action, or dispatch multiple actions. You can use multiple different middleware in a single project.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux thunk lets us do async operations during our actions. We have to call our action creators like higher order functions:
    const actionCreatorWithThunk = () => dispatch => {

    }

    We can then perform the async we want while dispatching one or multiple actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    {connect} from react-redux connects our react components to the redux store.
