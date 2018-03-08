# Online Shopping Mall

### Proposal 

## User Story & MVP

###### I would like to update the stock availabilities. 
- Need Stocks table
- Need CRUD 
- Need to have different pages for each CRUD 

###### When the customer order, I want to see the items so I can prepare for the delivery.
- Need Pending-order table
- Need Order page 
- Need 'GET'
- Need 'POST'
- Need to show the order item number and how many items were placed 

###### When the customer order, I want to check the items availability. 
- Inside the Stock page, the admin can check the items availability by searching with item number

###### When I'm done with preparing the package, I would like to change the status in the system. 
- Inside the Order page, the admin can change the status by clicking button
- Need to have 'Pending', 'Complete' buttons to change the status 
- When the button is clicked, the person's name needs to be updated below the status 
- Need 'PUT' to update the status 
- Need 'DELETE' to remove from the Pending-order table

###### I would like to keep all the completed order records. 
- Need the Completed order page
- Need Completed-order table
- When the order status is set to 'Complete', the order record stores inside the Completed order page
- Need 'GET' method from the completed order table

###### Need log in page to secure the orders
- Need Sign-up, Log-in page
- Need auth 
- Need users table 



## CRUD

| CRUD | METHOD | NEED FOR |
|    :---:   | :---:  | :---:      |
| **CREAT**  | POST   | User, Item |
| **READ**   | GET    | Stock page, Pending order page, Completed order page |
| **UPDATE** | PUT    | User, Stock page, Pending order page |
| **DELETE** | DELETE | User, Stock page, Pending order page |












