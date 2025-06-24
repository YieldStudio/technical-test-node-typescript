# Introduction 

## Prerequisites
1. IDE / code editor
2. SQLite compatible database GUI
3. API testing client tool (Postman, HTTPie, ...)

## Initialize the project

```
npm install
npm run prisma:generate
```

## Run the server
```
npm run dev
```

```
open http://localhost:3000
```

## Run tests
``
npm test
``  
_Defaulted in watch mode_

# Instructions
**Important** 
1. Please turn off any AI helping tool.
2. For the entire test, you are asked to improve the architecture of the codebase to enhance readability and provide the best solutions for each exercise.
2. We don't expect you to know prisma (ORM), feel free to ask whatever you want about it.
3. For simplicity purpose, we don't expect any operation to be transactional.

## 1. Add validation for Recipe and Ingredients creation
Add rules to validate the format of the provided input before persisting it.  
a. A `Recipe` must have at least 1 ingredient.  
b.`prepTime` cannot be null or 0.  
c.`cookingTime` cannot be null but can be 0.

## 2. Test recipe creation
Implement a unit test to verify recipe creation and persistence.
The test should not rely on any prisma related code.
The tested module should be the `createRecipeUseCase`, do not bother calling the endpoint.  
Feel free to refactor `createRecipeUseCase` if it can help you build your test.

## 3. Build a Recipe class
We want to add a `totalTime` property to each `recipe`.
This property should be a computation such as  
`totalTime = prepTime + cookingTime`.

Build a `Recipe` class, so each instance are valid recipes (with valid values).

1. Implement the class and include `totalTime` computation.
2. This rule should be tested.
3. Update the code base so every time we manipulate a valid recipe, it manipulates an instance of the Recipe class.  


