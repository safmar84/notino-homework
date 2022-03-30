# Homework for Notino
## Original task
Here is sample code that is not by far ideal.

1. Refactor code to production-grade quality.
2. Find and describe bugs and issues.
3. Add styling by your choice. (You can add styling library)
4. Demonstrate connection to backend API.
5. Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)
6. Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
7. Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

## Run
### Run with mock server
`yarn develop`
It will serve application on localhost:3000 and start mock server on localhost:3001
### Run only application (without mock)
`yarn start`
It will serve application on localhost:3000
### Run only mock (without application)
`yarn mock`
It will start mock server on localhost:3001

## Prepare production build
`yarn build`