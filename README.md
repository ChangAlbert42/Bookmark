# Bookmark

## Group Members
- Albert Chang
- Rojona Feliciano
- Brandon Morris
- Jaclyn Bates

## Description
<p style="text-align: justify;">An application that allows users to search for and purchase books. Users will
navigate to individual book pages where they can view book details including a brief
summary of the book. When users find a book they would like to purchase they will
have the ability to add this book to their shopping cart. Upon purchasing, users will have the ability to rate
books by clicking “thumbs up” or “thumbs down” as well as review books with a text entry.
Additionally, users will be able to favorite books and can access their favorites list
through their own user profile.</p>

<p style="text-align: justify;">Built using Javascript, HTML/CSS, Bootstrap Studio, Mongo DB, Node.js, Express.
Our book database was gathered using Brandon's BookBurn script which parsed the DOM elements on
the amazon search page and picked up the books and its embedded corresponding metadata.</p>

## Setup

1. Run 'npm install' to install the required dependencies for our project.

2. Run 'npm run seed' to run the task of seeding the database.

3. Run 'npm start' to start the web application.

## How the Application Works
<p style="text-align: justify;">Once the website application loads, an unauthenticated user will be able to see the search bar, genres, trending books, search by rating buttons,
and the surprise me button. The unauthenticated user can click on the book images to view the individual book page, or can search for the book in the search bar.</p>

<p style="text-align: justify;">An unauthenticated user has the option to sign up and log into the website application to be able to make book purchases.
While logged in, the now authenticated user can add books to shopping cart for purchase, and after purchasing a book, the user can rate the purchased book (thumbs-up or thumbs-down) and leave at most one text review of the book that was purchased.</p>

<p style="text-align: justify;">In addition, an authenticated user can view their user profile which includes order history, favorites list, as well as reviews and book ratings. The logged in user will be able to view the book recommendations in the homepage located after the suprise me button (Users can click on the Bookmark icon on top left of the screen to bring you back to the homepage).</p>

## Core Features
- Main Page
- Genre Page
- Individual Book Page
- Shopping Cart
- Book Search Engine
- User Profile
- User Favorite List
- User Text Reviews
  - Allow users to leave one text review per book purchased
- Book Ratings
  - Allow users to rate, “thumbs up” or “thumbs down”, a book that has been purchased
- Admin account
  - Allow admin account to add/remove books from the database
  - Username: daemon / Password: theadmin999
- Book suggestions/recommendations

## Extra Features
- Allow users to search for books based on ratings
- Surprise me button - user clicks this button and is brought to a random book
page
- Allow users to edit reviews they have left on books

## GitHub
https://github.com/ChangAlbert42/CS546_Final
