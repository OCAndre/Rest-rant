# Project REST-Rant

REST-Rant is an app where users can review restaurants.

# Routes
| METHOD       | PATH                                 | PURPOSE  |
|------------|---------------------------------------|---|
| GET | / | HOME PAGE  |
| GET | /places | PLACES INDEX PAGE  |
| POST | /places | PLACES INDEX PAGE  |
| GET | /places/new | FORM PAGE FOR CREATING A NEW PLACE  |
| GET | /places/:id |   DETAILS ABOUT A PARTICULAR PLACE  |
| PUT | /places/:id |   UPDATE A PARTICULAR PLACE  |
| GET | /places/:id/edit |   FORM PAGE FOR EDITING AN EXISTING PLACE  |
| DELETE | /places/:id |   DELETE A PARTICULAR PLACE  |   
| POST | /places/:id/rant |   CREATE A RANT (COMMENT) ABOUT A PARTICULAR PLACE  |
| DELETE | /places/:id/rant |   DELETE A RANT (COMMENT) ABOUT A PARTICULAR PLACE  |
| GET | * | 404 PAGE (MATCHES ANY ROUTE NOT DEFINED ABOVE)  |
