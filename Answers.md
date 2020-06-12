1. What problem does the context API help solve?

> Context API makes it so you do not have to pass stuff in as props that can be >difficult to pass into so you can share data w/ all your components in your react >app tree

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

> A redux store is where you can globally store the state for a react app.
> Reducers handle state changes.
> Actions are kinda like a bridge you can use between the react app (e) and the >reducer

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

> Application State is the global data for the entire application. Component State >is a piece of state that a single component uses. For example, you can use >Component State if the item you're updating doesn't need to re-render the >component & you only need to update a small slice of state otherwise, use >Application State.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

> It's redux middleware that allows us to use async code in an otherwise syncronous >action. Thunk gets activated in the middle of an action & can stop, or change >that action if it wants - allowing us to pause the action until we get a response >from the async code.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

> Redux, I always crossed my mind up when it came to managing state, losing track >where its going as it gets passed into a bunch of different components. However, >with Redux its a whole separate 'bank' and I an point to it within each >componenet w/o having to pass it in from the top of the tree using >mapStateToProps and then connect the method from react-redux
