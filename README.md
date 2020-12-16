# node-todo-app

This is simple node todo application to organize your tasks with very easy to use interface.
Todo can help you to make list of your tasks and help you to acheive them to be successful in your life. It reminds you about your work to be done.

# To run and use this repository do the following things:

QUICK NOTE: The current working directory (i.e. cwd) should always be the root directory while doing the below mentiooned steps.

1. First make the empty folder and open the folder in the terminal and clone this repository by using the folowing command :-

   git clone https://github.com/venu-RAW/node-todo-app.git

2. After cloning the repository use the following command to install all the dependencies this repo use

   npm install

3. After installing the dependencies you need to create a new file named as ( config.env ) in the root folder. You can get the detailed description about this in the ( sample.config.env ) file, that I have created for your reference.

4. After doing the above steps run the application server by using the following command :-

   node index.js

5. Now open the Mongodb ( you can use mongodb compass or mongodb atlas cloud ).

6. For the installation you can refer this guide https://docs.mongodb.com/manual/installation/

7. After installing create the database. NOw get the connection string for your database and paste it in the config.env file.

8. Then you need to open the POSTMAN, if you dont know what the POSTMAN is it is basically a S/W application which helps us to test the Rest API's.

9. For the installation and usage you can refer this guide https://www.postman.com/downloads/

10.   Click on Add request to make a request to the server.

11.   Now to test the todo application therse are several request you can perform

      11.A.] To GET all the tasks [ GET REQUEST ]

         http://localhost:5000/todos/tasks

Note: Replace the Port 5000 with your port number and make the request.

      11.B.] To QUERY the task with the status of the task ( notStarted | inProgress | completed ):- [ GET REQUEST ]

         http://localhost:5000/todos/tasks?status=notStarted

      11.D.] To GET the task specify the id of the task [ GET REQUEST ]

         http://localhost:5000/todos/tasks/5rnaybokioxn2np

      11.C.] To POST the task [ POST REQUEST ]

         http://localhost:5000/todos/tasks

Note: To post the task you need to pass taskName with the value in the body of the request

      11.D.] To PUT (update) the task specify the id of the task [ PUT REQUEST ]

         http://localhost:5000/todos/tasks/5rnaybokioxn2np

Note: To update the task you need to pass taskName with the value in the body of the request

      11.E.] To DELETE the task specify the id of the task [ DELETE REQUEST ]

         http://localhost:5000/todos/tasks/5rnaybokioxn2np

# Technologies and tools used

-  JavaScript
-  Nodejs
-  Express
-  POSTMAN
-  MongoDb
-  Git and Github
