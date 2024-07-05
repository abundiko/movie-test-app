# Special file names
names for files that are used by nextjs for specific uses, these names should follow the nextjs pattern and must not be misused.
- convention: `file_name.(js, jsx, tsx, ts)`
- they are used within the app directory

## page
is used to create a page in a route

## layout
creates a layout for sub routes and same-route pages

## loading
creates a loading page that is displayed when the page is being processed

## error
creates a page that will be displayed when there's an error thrown in a route

## template
does the exact same thing as `layout` but is rerendered on route change

## route
for creating and handling api routes

## not-found
simply displays when the requested route is not found; 404 response