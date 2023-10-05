# E-Commerce-App
This application serves as an assessment for an interview. I have implemented the best practices of separation of concerns and utilized the saga pattern design to handle side effects. 

# Task
Create a simple React Native application that displays a list of products fetched from any
API. The app should have two screens: product list and product details.
When the user taps on a product item, the app should navigate to the product details screen
and display its details..

# Exploration 

The task description outlines the creation of an application that interacts with an API. This API provides an array of objects, each including product details like title, description, image, and price. However, what if we aim to enhance this project professionally by integrating advanced techniques such as employing a side effect library like Saga, alongside Redux and React Query? While this might appear excessive for the scope of this assessment, the objective is to demonstrate our capability to develop a real-world application to the hiring manager. Let's embrace the challenge and proceed.


## Saga pattern
saga pattern is a sequence of transactions that updates each service and publishes a message or event to trigger the next transaction step. Heere is the design of implementing saga pattern design:
