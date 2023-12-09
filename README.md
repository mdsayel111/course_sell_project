# live Link
https://extra-large-shop.surge.sh/

# Qus and Ans:


## Features

- Credit hours will never be greater than 0.
- A card can only be added to the cart once.
- When adding a card, if the credit hour value of that card is 
           more than 20, then a toast will show.


## how I managed the state in my assignment project

Only 3 states are used in this project. Namely:
(1/ data 2/ currentCredit 3. coursesInCart). Data state is set only 1 time from inside useEffect Hook. When the data is fetched for the first time. CurrentCredit and coursesInCart are set from inside the two handleOnclick functions. If a card is already inside the cart, then the values ​​of coursesInCart and currentCredit will not be set, otherwise the card will be added inside coursesInCart. The value of coursesInCart will be set and the value of currentCredit will be set by adding the value of credit hours of the card to the value of currentCredit.

