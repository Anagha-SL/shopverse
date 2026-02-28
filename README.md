# ShopVerse

ShopVerse is a fully responsive e-commerce web application built using **React.js**, **Redux Toolkit**, and **Tailwind CSS**.  
It demonstrates scalable frontend architecture, derived state management, dynamic routing, responsive design, and modern UX patterns.

---

## Features

### Product Listing

- Dynamic product fetching from API
- Category-based filtering (Desktop sidebar + Mobile drawer)
- Radio-button sorting (Price, Rating, Name)
- Debounced search functionality
- Combined filtering (Category + Search + Sort)
- Responsive grid layout
- Skeleton loading states
  -Error state handling

### Product Details Page

- Dynamic routing (`/product/:id`)
- Image gallery with thumbnail switching
- Product description
- Rating and reviews UI
- Shipping, warranty & return policy display
- Quantity selector with +/- controls
- Add to Cart with toast feedback

### Cart Functionality

- Add items with selected quantity
- Increase / decrease quantity
- Remove individual items
- Unique item badge count in header
- Order summary with total calculation
- Local cart state management via Redux Toolkit
- Toast notification on add-to-cart
- Clear cart functionality

### Search and Filtering

- Debounced search input
- Search accessible globally via header
- Redirect-to-results on Enter (from Product page)
- Derived filtering logic (no redundant state storage)
- Combined search + category filtering
- Custom-styled radio sorting controls

### UX Enhancements

- Skeleton loaders for product grid and sidebar
- Sticky header & sticky desktop sidebar
- Mobile category drawer with auto-close
- Responsive header layout (mobile-first)
- Optimized layout to prevent visual shifting

---

## Tech Stack

- **React.js** (Component-based architecture)
- **Redux Toolkit** (State management)
- **React Router** (Dynamic routing)
- **Tailwind CSS** (Utility-first styling)
- **Axios** (API calls)
- **React Hot Toast** (Notifications)
- **DummyJSON API** (Product data)

---

## Improvements Planned

- URL-based search query parameters
- Price range slider filter
- Pagination or infinite scroll
- Similar products section
- Wishlist functionality
- Accessibility improvements (ARIA roles, keyboard navigation)

---

## Acknowledgements

- API by [DummyJSON Products](https://dummyjson.com/products)

---

## Author

Anagha SL
GitHub: https://github.com/Anagha-SL
