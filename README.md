##############
###  TASK  ###
##############

--Create an API using expressjs mongodb that has a collection  named “shopitems” and “users". 

--The shopitems collection should have the following properties: name(string), description(string) price(number) and isInStock(Boolean).

 
--Users collection should have the following properties:
fullName(string),
username(string),
password(string),
role(string). 
--The role property can have it's value as either “user” or “admin”.

 

--Users should be able to:
view a list of items in the shop,
view a single item via the item's ID.

-- Admins should be able to do all the user can do.
The admins can also:
add,
edit
and delete a shop item. 

--If a user tries to add, edit or delete a product, he should receive a response with the 
status code of 403 and a 
response of “action-not-allowed”.

 --Users and admin should be able to register and login.

--You are to deploy your API on render.com and document it on postman. 
--You are to submit your postman link. Make sure your workspace on postman is public.


Write a test using Jest. Your test suite should be able to test:

 
TASK 5

1. Registration endpoint on the task project you did previously
2. Logging in endpoint
3. Adding a new task
4. The endpoint for getting the list of tasks
5. The delete task endpoint
 

All your tests should pass. You can use “global” to set your token and task ID so that you can use it in the requests that needs an authorization token.