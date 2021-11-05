# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
	- To avoid having to use component state and passing it down through prop drilling. Instead, it allows us to provide access to global data to any component that needs it. It also is simpler than using `connect` in Redux.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- the store holds data, actions describe what is to be done with the data, and reducers carry out those actions. The store is a single source of truth because it is the only storage place for application-wide data. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
- Allows multiple dispatches or conditional dispatches. Also allows asynchronus operations

4. What is your favorite state management system you've learned and this sprint? Please explain why!
- Redux is complicated but it offers a lot of benefits and tools. The careful way state is maintained avoids mismanagement of data.