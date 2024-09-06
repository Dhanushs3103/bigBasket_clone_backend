## API ROUTE ⇒ https://bigbasket-clone-backend.onrender.com/

# 🏠 Home Routes -

**⇒ Parent Router: /home-page**

1. best Sellers → /home-page/best-sellers
2. top Sliders  → /home-page/top-sliders
3. smart baskets → /home-page/smart-baskets
4. beauty → /home-page/beauty
5. beverages → /home-page/beverages
6. bottom sliders → /home-page/bottom-sliders
7. cleanings → /home-page/cleanings
8. daily staples → /home-page/daily-staples
9. fruits and veggies → /home-page/fruits-and-vegies
10. snacks → /home-page/snacks
11. top offers → /home-page/top-offers

## 👤 Registration,Login and logout Routes -

**⇒ Parent Router: /auth**

1. Registration → /register 
⇒ Data need to be sent in the request body - userName, password, age, and email.
2. Login → /login 

      ⇒ Data need to be sent in the request body - email and password.

 3. logout → /logout

      ⇒ Data need to be sent in the request body - token

## 🛒 Add To Cart Route -

**⇒ Parent Router: /add-to-cart**

1. Add to cart → /add
⇒ Data need to be sent in the request body - productId, productType, and quantity

## ✅ CheckOut Route -

**⇒ Parent Router: /checkout**

1. Checkout → “/”

      ⇒ No data need to be sent in request body.
