# Shopping site


## App description

If you are a shopper this app is for you, it's an e-commerce website  where you can find the products that interest you and make purchases. 

Let's see how I created this app with React.js, bootstrap and stylesheet.

I created four components and imported three of them into the App.jsx component.

### App Component

In App component, I created a array of objects and stored in useState and passed the products and set products to the conditional rendering component

I created another useState hook to display the cart count and passed as props to Navbar and Conditional Rendering component

I created a useState to render the Conditional Rendering Component  based on whether there is any product in the state or not. If no products are present, it will not display anything.

### Conditional Rendering Component

With the products data and cart value as props, it has been mapped and sent to **Card.jsx** inside a div with a classname ``Container Row`` so that the card component will have column property.

### Card Component

Card component recieves the key and setCartValue from the Conditional rendering component.

Card details has been displayed with the necessary tags.

In the data, there will be a key named ``discountValue and discountClass``.

If `discountValue` is false, it means that the product doesn't have any discount. So we need to hide the div element which contains the price including the discount price so I created a conditional rendering so that the discounted price is displayed if the ``discountValue`` is true and the normal price is muted and will have a linethrough with the ``discountClass`` classname given to the normal price and the *Deal of the Day* is displayed in the same manner.

### Add and Remove Cart button

I  added an onclick function to these buttons that adds or removes the product from the cart according to their names.
When clicked on "Add to cart" it sets the value as false in the global state using `setCartValue(key)` function which is passed down from the parent component and displays the `Remove from Cart` button and the *AddCart function* adds cartvalue by 1.

So that the same happens for Remove button in vice versa

setCartValue is sent to Navbar component so that it will display the current Cart Value.

### Image

I sourced images from different websites in different sizes. It created the cards to display in an uneven manner.

So I used Figma to resize the images with the frame and exported these images to the Assets folder.

## Responsiveness

I used general stylesheet to add the styles to the elements and for responsiveness I used bootstrap classes and media queries.
To make the application responsive, I have added media queries in the CSS file. 

Thank You...
