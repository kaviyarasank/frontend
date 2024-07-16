This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

<!-- install nodemodules -->
npm install  

<!-- run the project -->
npm run dev


-----------------------------------------
## UI

Login:

1. Added a login page with username and password fields, along with validation.

        username: emilys
        password: emilyspass
        
2. The form design uses Material UI, and form validation is implemented with react-hook-form and Zod validation.
3. The login form uses the https://dummyjson.com/auth/login dummy API to authenticate the web application.
4. Error messages are displayed for invalid credentials.
5. Upon successful login, the UI navigates to the product list table page.

------------------------------------------
Product List Table:

1. Used the https://dummyjson.com/products dummy API to list the items in a table.
2. Added a server-side API call to fetch the data.
3. Used @tanstack/react-table for the table component.
4. Added the following columns to the table:

        id
        title
        description
        price
        discount percentage
        rating
        stock
        tags
        brand
5. Added an action column in the table that contains a view icon. Clicking on the view icon will show the reviews in card view in a modal popup.

6. Used Material UI for the modal popup.
7. Used this api https://dummyjson.com/products/[id] called particular product showed the reviews.
8. Added styles.
------------------------------------------

SideBar:
1. Added a sidebar component with a link to the Product Table.

------------------------------------------
Header:
1. Added a header component to display the dummy logo and dummy profile.
2. Added a logout option.

--------------------------------------------

Node v20.15.1
Next v14.2.5






