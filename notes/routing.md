# Routing (app router)
the way users navigate through different pages of an application

## Static route
a route that displays the same information on every request
- create a folder with the route name
- put any specilly named file in the folder

## Dynamic Route
a route that may display different info based on query or url params
- create a folder
- - its name enclosed with square brackets
- - its name should be the `parameter` name
- - put any specilly named file in the folder
- catch all: `[...param]`

## Route Group
group of routes that share the same layout
- create a folder with name wrapped in bracket
- these are basically used to share a layout between different routes

