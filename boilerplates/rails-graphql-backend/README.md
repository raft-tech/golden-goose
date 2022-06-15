# README

* Ruby version   
`2.6.4`

* Rails version   
`6.0.3.1`

* Live app url
`https://floating-sea-71348.herokuapp.com/`

* System dependencies  
Postgresql  
Heroku  

* Deployment instructions
To deploy on heroku run git push heroku master. To set up your own heroku instance you will also need to 
create a secret key base so the JWT encryption will work. Run the following from the command line
while in the directory of the app  
`heroku config:set SECRET_KEY_BASE=$(rake secret)`

* Development Environment
You will need two environment variables set up on your system to log in to your local Postgres database  
`POSTGRES_USER`
`POSTGRES_PASSWORD`

After cloning the repository, run bundle install and rake db:create db:migrate db:seed
The seed file has a bit of sample data so you have something to work with. You can login
as the seeded user as follows:  

```
mutation {  
  loginUser(input: {email: "kbighorse+frontend_test@gmail.com", password: "coeurdalene"}) {
    user {
      email
    }
  }
}
```
A successful login will return the user
