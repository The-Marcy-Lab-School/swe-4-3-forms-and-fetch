// Part 3: Fetch and Post Reviews
// API: JSONPlaceholder (no API key required) — https://jsonplaceholder.typicode.com/users

const API_URL = 'https://jsonplaceholder.typicode.com/users';

let allReviews = [];
let nextId = 100;

// TODO: Get references to DOM elements
// - review form, reviews list
// - loading message, error message, success message
// - submit button (for disabling during POST)


// TODO: Create fetchReviews()
// 1. Show loading, hide error
// 2. fetch(API_URL), check response.ok, return response.json()
// 3. The API returns an ARRAY of users directly (not response.data)
// 4. Map each user to a review: { id: user.id, productName: user.name + "'s Product", reviewerName: user.name, rating: random 3-5, reviewText: user.email, recommend: true }
// 5. Store in allReviews, hide loading, call renderReviews()
// 6. .catch(): hide loading, show error message, set error text


// TODO: Create postReview(review)
// 1. Disable submit button, set text to "Submitting..."
// 2. fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(review) })
// 3. Check response.ok, return response.json()
// 4. Return the promise (so .then/.finally can run)
// 5. In .finally(): re-enable button, set text to "Submit Review"


// TODO: Create renderReviews() (same as Part 2)
// Clear list, loop allReviews, create <li> with data-id, innerHTML with review + delete button, append


// TODO: Create handleFormSubmit()
// 1. event.preventDefault(), get FormData, convert recommend to boolean, rating to number
// 2. Hide success and error messages
// 3. Call postReview(formData)
// 4. .then(): add returned review (use returned id) to allReviews, renderReviews(), show success message, form.reset()
// 5. .catch(): show error message
// 6. .finally(): re-enable button, set text to "Submit Review"


// TODO: Create handleDelete() (same as Part 2 — event delegation on the list)


// TODO: Add event listeners (form submit, list click)
// TODO: Call fetchReviews() on page load
