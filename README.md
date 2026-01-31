# Assignment 4-2: Forms and Fetch (Product Review System)

- [Overview](#overview)
- [Reminders](#reminders)
- [Setup](#setup)
- [Assignment Parts](#assignment-parts)
  - [Part 0: Short Response Questions](#part-0-short-response-questions)
  - [Part 1: Review Form (5 points)](#part-1-review-form-5-points)
  - [Part 2: Dynamic Reviews with Event Delegation (6 points)](#part-2-dynamic-reviews-with-event-delegation-6-points)
  - [Part 3: Fetch and Post Reviews (8 points)](#part-3-fetch-and-post-reviews-8-points)

## Overview

In this assignment, you will build a **Product Review System** that progressively combines all the skills you've learned in Module 4:

- Handling form submissions with JavaScript
- Creating dynamic content
- Using event delegation
- Fetching data from APIs
- Sending POST requests to APIs

You'll build the same application three times, with each part adding more functionality!

## Reminders

**<details><summary>Asking ChatGPT for Help</summary>**

If you're stuck, you may use ChatGPT to clarify the assignment — but not to solve it for you. To do this, copy the meta-prompt below into ChatGPT along with the assignment question.

> You are acting as a tutor. Your job is to explain what this coding question is asking, clarify confusing wording, and highlight the relevant concepts students need to know — but do not provide the full solution or code that directly answers the question. Instead, focus on rephrasing the problem in simpler terms, identifying what's being tested, and suggesting what steps or thought processes might help. Ask guiding questions to ensure the student is thinking critically. Do not write the final function, algorithm, or code implementation.

Be mindful of your AI usage on assignments. AI can be a great tool to help your learning but it can also be detrimental if you let it do too much of the thinking for you.

</details>

**<details><summary>Be Okay With Being "Provisionally Complete"</summary>**

At Marcy, we will deem an assignment as "complete" if you satisfy the requirements listed below.

However, we know many of you will feel the urge to hold off on submitting until your assignment feels 100% perfect. That drive for excellence is an asset!

But perfectionism can also get in the way of learning — especially when we need to cover a lot in a short amount of time.

That's why we encourage you to be comfortable with being **"provisionally complete."** This means:

- Submitting your work even if it isn't perfect yet
- Treating submission as a checkpoint, not a finish line
- Committing to return, revise, and improve later

Learning to move forward with provisional completeness will help you make steady progress while still building the habit of continuous improvement.

</details>

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy Lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/how-tos/working-with-assignments#how-to-work-on-assignments).

Files to modify are found in the `src/` directory:
- `1-review-form/`
- `2-dynamic-reviews/`
- `3-fetch-reviews/`
- `short-response.md`

**To view your page**: Drag and drop the `index.html` from the file explorer in VS Code directly into your Chrome Browser tab (do not use Safari — their devtools are terrible. Firefox is okay but not preferred).

Here are some useful commands to remember to get started

```sh
git checkout -b draft   # switch to the draft branch before starting

git add -A              # add a changed file to the staging area
git commit -m 'message' # create a commit with the changes
git push                # push the new commit to the remote repo
```

When you are finished, create a pull request and tag your instructor for review.

## Assignment Parts

Each part builds on the previous one. You can test each part independently by opening its `index.html` file in your browser.

### Part 0: Short Response Questions

Answer the 6 questions in `src/short-response.md`. Each question is worth 6 points (3 points for writing, 3 points for technical content).

Questions cover:
- `event.preventDefault()` and why it's needed
- Comparing `form.elements` vs FormData API
- Checkbox handling with FormData
- Promise chaining
- HTTP methods (GET, POST, PATCH, DELETE)
- Error handling with `fetch()`

### Part 1: Review Form (5 points)

**Location**: `src/1-review-form/`

**Your Task**: Build a form handler that displays submitted reviews dynamically.

**Files Provided**:
- `index.html` — Complete HTML structure with a review form
- `style.css` — Complete styling (no changes needed)
- `index.js` — Starter file with TODO comments

**Requirements**:
When the form is submitted:
- [ ] Prevent the default page reload
- [ ] Extract the form data using the **FormData API**
- [ ] Convert the `recommend` checkbox to a boolean value
- [ ] Render a review card li and add it to the review list (see the structure below)
- [ ] Reset the form

**Expected Result**:
When you submit the form, the review should appear in the list like so. The form should be cleared and ready for the next review.

```html
<ul id="reviews-list">
   <li class="review-card">
      <div class="review-header">
         <h3 class="product-name">Product Name</h3>
         <span class="rating">⭐⭐⭐⭐⭐</span>
      </div>
      <p class="reviewer-name">by Reviewer Name</p>
      <p class="review-text">Review text here...</p>
      <span class="recommend-badge">✓ Recommended</span>
   </li>
   <!-- more reviews... -->
</ul>
```

HINT: To display the correct number of stars, use `"⭐".repeat(rating)`

### Part 2: Dynamic Reviews with Event Delegation (6 points)

**Location**: `src/2-dynamic-reviews/`

**Your Task**: Manage reviews in an array and add delete functionality using event delegation.

**Files Provided**:
- `index.html` — Same form structure as Part 1
- `style.css` — Same styling with delete button styles added
- `reviews-data.js` — Sample review data (3 reviews)
- `index.js` — Starter file with TODO comments

**Requirements**:
1. Create a `renderReviews()` function that:
   - Clears the reviews list
   - Loops through the `allReviews` array
   - For each review, creates an `<li>` with:
     - All review data (same as Part 1)
     - A delete button with class `"delete-btn"`
     - A `data-id` attribute set to the review's `id`
   - Appends all reviews to the list

2. When the form is submitted:
   - Extract form data (same as Part 1)
   - Create a new review object with an `id` property
   - Add the review to the **beginning** of the `allReviews` array
   - Call `renderReviews()` to update the display
   - Reset the form

3. Create a `handleDelete()` function that uses **event delegation**:
   - Listen for clicks on the reviews list (not individual buttons!)
   - Check if the clicked element is a delete button
   - Find the parent `<li>` element
   - Get the `data-id` from the `<li>`
   - Remove the review with that `id` from the `allReviews` array
   - Call `renderReviews()` to update the display

4. On page load:
   - Call `renderReviews()` to display the 3 initial reviews from `reviews-data.js`

**Expected Result**:
- The page starts with 3 reviews displayed
- You can add new reviews via the form
- You can delete any review by clicking its delete button
- The entire list re-renders after adding or deleting

**Testing Checklist**:
- [ ] Initial 3 reviews display on page load
- [ ] New reviews are added to the top of the list
- [ ] Each review has a delete button
- [ ] Delete buttons work correctly
- [ ] Event delegation is used (one click listener on the `<ul>`, not on each button)
- [ ] Reviews list updates correctly after add/delete

### Part 3: Fetch and Post Reviews (8 points)

**Location**: `src/3-fetch-reviews/`

**Your Task**: Fetch reviews from an API when the page loads, and POST new reviews when the form is submitted. **No API key is required** — we use [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a free fake API.

**Files Provided**:
- `index.html` — Same structure with loading, error, and success message divs
- `style.css` — Same styling (no changes needed)
- `index.js` — Starter file with TODO comments

**API Information** (JSONPlaceholder — no key required):
- **GET** `https://jsonplaceholder.typicode.com/users` — Returns an **array** of user objects (not wrapped in `.data`). Each user has: `id`, `name`, `username`, `email`, etc.
- **POST** `https://jsonplaceholder.typicode.com/users` — Accepts a JSON body and returns the created object with an `id` added.

**Requirements**:

1. **Fetch on load** — Create a `fetchReviews()` function that:
   - Shows the loading message and hides the error message
   - Uses `fetch()` to GET data from the API
   - Checks `response.ok` (throws error if not)
   - Reads the response as JSON (the response **is** the array of users, not `response.data`)
   - Transforms each user into a review object:
     ```js
     {
       id: user.id,
       productName: user.name + "'s Product",
       reviewerName: user.name,
       rating: Math.floor(Math.random() * 3) + 3, // Random 3-5
       reviewText: user.email,
       recommend: true
     }
     ```
   - Stores transformed reviews in `allReviews`, hides loading, calls `renderReviews()`
   - Uses `.catch()` to hide loading, show error message, and display the error

2. **POST on submit** — Create a `postReview(review)` function that:
   - Disables the submit button and sets its text to "Submitting..."
   - Uses `fetch()` with `method: 'POST'`, `headers: { 'Content-Type': 'application/json' }`, and `body: JSON.stringify(review)`
   - Checks `response.ok`, reads JSON, returns the response data
   - Re-enables the button in `.finally()`

3. **Update `handleFormSubmit()`** to:
   - Extract form data (same as Part 2), then call `postReview()` with the review object
   - On success: add the returned review (use returned `id`) to `allReviews`, call `renderReviews()`, show success message, reset form
   - On error: show error message
   - In `.finally()`: re-enable the submit button and set text back to "Submit Review"

4. Keep **renderReviews()**, **handleDelete()** (event delegation), and all Part 2 behavior. On page load, call `fetchReviews()`.

**Expected Result**:
- Page loads with 10 reviews from the API (JSONPlaceholder has 10 users)
- Submitting the form sends a POST, shows "Submitting...", then adds the new review and shows a success message
- Loading and error states work; delete still works

**Testing Checklist**:
- [ ] Loading message appears while fetching
- [ ] Reviews from API are transformed and displayed (10 reviews)
- [ ] Submit shows "Submitting..." and disables button
- [ ] POST adds new review to the list and shows success message
- [ ] Button re-enables and form resets after submit
- [ ] Error handling works (try an invalid URL)
- [ ] Delete still works

**Bonus** (optional): Use `async`/`await`, or add client-side validation.
