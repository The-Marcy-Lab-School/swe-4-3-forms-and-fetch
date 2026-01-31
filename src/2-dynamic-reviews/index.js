// Part 2: Dynamic Reviews with Event Delegation
// Your task: Render reviews from an array and add delete functionality

import { reviews } from './reviews-data.js';

// We'll store all reviews in this array
let allReviews = [...reviews]; // Create a copy of the initial reviews
let nextId = 4; // Start IDs from 4 (since we have 3 initial reviews)

// TODO: Get references to the form and reviews list elements


// TODO: Create a renderReviews function
// This function should:
// 1. Clear the reviews list (set innerHTML to '')
// 2. Loop through the allReviews array
// 3. For each review, create an <li> with class "review-card"
// 4. Set its innerHTML to display all review data
// 5. IMPORTANT: Add a delete button with class "delete-btn"
// 6. IMPORTANT: Set a data-id attribute on the <li> with the review's id
// 7. Append each <li> to the reviews list
//
// Example structure:
// <li class="review-card" data-id="1">
//   <div class="review-header">
//     <h3 class="product-name">Product Name</h3>
//     <span class="rating">⭐⭐⭐⭐⭐</span>
//   </div>
//   <p class="reviewer-name">by Reviewer Name</p>
//   <p class="review-text">Review text here...</p>
//   <span class="recommend-badge">✓ Recommended</span> (only if recommend is true)
//   <button class="delete-btn">Delete</button>
//   </li>


// TODO: Create a handleFormSubmit function
// This function should:
// 1. Prevent default behavior
// 2. Extract form data using FormData API
// 3. Convert the recommend checkbox to a boolean
// 4. Create a new review object with:
//    - All the form data
//    - An id property set to nextId
// 5. Add the new review to the beginning of the allReviews array
// 6. Increment nextId
// 7. Call renderReviews to update the display
// 8. Reset the form


// TODO: Create a handleDelete function
// This function should use EVENT DELEGATION:
// 1. Check if the clicked element has the class "delete-btn"
// 2. If it does, find the closest <li> element
// 3. Get the data-id from the <li>
// 4. Filter the allReviews array to remove the review with that id
// 5. Call renderReviews to update the display
//
// HINT: Use event.target.matches('.delete-btn') to check if a delete button was clicked
// HINT: Use element.closest('li') to find the parent <li>
// HINT: Use element.dataset.id to get the data-id attribute


// TODO: Add event listeners
// 1. Add a submit event listener to the form (calls handleFormSubmit)
// 2. Add a click event listener to the reviews list (calls handleDelete)


// TODO: Call renderReviews on page load to display initial reviews

