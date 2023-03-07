# **SDEV 255 Final Project**
## **Group 8**
## **Authors:**
### Anthony Aldrich
### Jackson Crantford
### Marshall Newton


## **Version**
  *1.2.1*

  Module 6 - 7 Login and COurse manipulation

## **Descirption**
  Portal for Teachers to create and delete courses.
  Portal for Students to add and drop class from schedule.
  
## **App Setup**
  
  **Clone Project**
  ```
  git clone https://github.com/AAldrich16/SDEV_255_Final_Project_Group8
  ```

  **Environmental Variables**<br />
  Create a .env file with the following to connect to the database<br />
  PORT is optional, as it will default to 3000 in the app
  ```
    PORT="<port>"
    DB_USERNAME="<your username>"
    DB_PASSWORD="<your password>"

  ```
  
  **Setup and Start Server**
  ```
    cd SDEV_255_Fina_Project_Group8
    npm install
    npx nodemon
  ```

 ## **Run APP**
  Go to http://localhost:3000 in a browser
  
 ## ** LOGINS **
   **Student** </br>
     user: student</br>
     pass: student</br>
   **Teacher**</br>
     user: teacher</br>
     pass: teacher</br>
