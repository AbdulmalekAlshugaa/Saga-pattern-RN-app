# E-Commerce-App
I have implemented the best practices of separation of concerns and utilized the saga pattern design to handle side effects. 

# Task
Create a simple React Native application that displays a list of products fetched from any
API. The app should have two screens: product list and product details.
When the user taps on a product item, the app should navigate to the product details screen
and display its details..

# Exploration 

The task description outlines the creation of an application that interacts with an API. This API provides an array of objects, each including product details like title, description, image, and price. However, what if we aim to enhance this project professionally by integrating advanced techniques such as employing a side effect library like Saga, alongside Redux and React Query? While this might appear excessive for the scope of this assessment, the objective is to demonstrate our capability to develop a real-world application to the hiring manager. Let's embrace the challenge and proceed.


## Saga pattern
saga pattern is a sequence of transactions that updates each service and publishes a message or event to trigger the next transaction step. Heere is the design of implementing saga pattern design:

![1_LMIPRZvZmoga-HpeMAAdOw](https://github.com/AbdulmalekAlshugaa/E-Commerce-App/assets/33663456/52633a49-97b9-4a70-9670-ab3de0f82b7c)
![CibAZdDVEAEOng4](https://github.com/AbdulmalekAlshugaa/E-Commerce-App/assets/33663456/ff43149f-aa4a-4a45-9ad0-996b9cab206d)

The above two screenshots shows how we utilized saga pattern design within our project . Saga yields pure objects called effects. Effect is simple javascript object that contains commands that will be executed by a middleware. What are these commands? Commands involve actions like invoking asynchronous functions, dispatching an action to the store, etc. Redux-saga provides some helper effects wrapping internal functions to spawn tasks when some specific actions are dispatched to the Store . source : https://medium.com/nerd-for-tech/saga-pattern-971d59be3722

## Tech stack
1. Redux-toolkit 
3  Redux-Saga
4. Interactive UI
5. react-native-paper
6. React Query
7. React Navigation

## How to run 

```bash
  yarn install 
  expo start
```

### implementation 
| Home Page | Home Page |Details |
| ----------- | ----------- | ----------- | 
|![Simulator Screen Shot - iPhone 13 - 2023-10-06 at 22 35 56](https://github.com/AbdulmalekAlshugaa/E-Commerce-App/assets/33663456/dd3eae8e-6bca-44e5-9364-15017a232640)|![Simulator Screen Shot - iPhone 13 - 2023-10-05 at 13 32 31](https://github.com/AbdulmalekAlshugaa/E-Commerce-App/assets/33663456/0de091ab-d45c-4e58-8dc0-7cf3d0e964d1)| ![Simulator Screen Shot - iPhone 13 - 2023-10-05 at 13 32 35](https://github.com/AbdulmalekAlshugaa/E-Commerce-App/assets/33663456/a54e3bd8-2a69-4eb5-a6c7-b087b46bc7d0)
