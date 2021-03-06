# MWA - Homework 07 - Mongodb 01
## Schema Design Exercise
Create a NoSQL design model for an application to manage a library, taking into consideration the following requirements:
* Books have an `ISBN number` and are categorized by `author` and tagged by `keywords` to facilitate search
* Books can be borrowed by students, so the librarian will be able to check all borrowed books and their `return date` so he may contact students who are late returning their books.
  
## My solution

```json
[{
  "author": ["Asaad Saad", "Michael Zijlstra"],
  "tags": ["Node", "Javascript", "MongoDB"],
  "ISBN": 1234567890,
  "borrow": [
    { "name": "Ochirgarid Chinzorig", "due_date": "2020-03-30"},
    { "name": "Ochir Garid", "due_date":  "2020-03-31"}
  ]
}]
```

## Coding Exercise
Create a new DB called `homework07` (Local or DaaS)  
Using the same source code from `Homework06`, update your Restful API with real DB CRUD operations so you may: `Find/FindOne/Add/Delete` documents.
* Test your API using REST Client.  
* Implement a new route (`GET /search/:q`) to search by student's name if it matches the passed `:q` parameter.  
* Send the results as JSON.  
* Upload your code to Github (without dependencies).
