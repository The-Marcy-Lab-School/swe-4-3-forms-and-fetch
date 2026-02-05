# Short Response Questions

## Question 1: Promise Chaining

The following code logs `undefined` in the second `.then()`. Identify the bug and fix it.

```js
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((response) => {
    if (!response.ok) throw Error(`Fetch failed.`);
    const readingPromise = response.json();
  })
  .then((data) => {
    console.log(data); // undefined!
  })
  .catch((error) => console.error(error.message));
```

**Your Answer:**

The bug is that we forgot to `return` the promise from `response.json()`. Without the `return`, the first `.then()` callback returns `undefined` by default, so the second `.then()` receives `undefined` as its `data` parameter.

The fix is to add `return` before `response.json()`:

```js
.then((response) => {
  if (!response.ok) throw Error(`Fetch failed.`);
  return response.json(); // now the next .then gets the actual data
})
```

This is really important because `.then()` passes whatever is returned to the next `.then()` in the chain. If you return a Promise, the next `.then()` waits for that Promise to resolve and receives the resolved value. If you return nothing, the next `.then()` gets `undefined`.

## Question 2: Development Servers and CORS

A student opens their `index.html` file directly in the browser (using the `file://` protocol). Their `<script type="module">` tag and `fetch()` call both fail. Explain why, and what they should do instead.

**Your Answer:**

When you open an HTML file directly from your filesystem, the browser uses the `file://` protocol. Browsers have a security feature called CORS (Cross-Origin Resource Sharing) that blocks two things when using the `file://` protocol:

1. Loading ES modules across files — the browser treats each local file as a different "origin" so it blocks the `import` statements.
2. Making `fetch()` requests to APIs on the internet — the browser blocks requests from `file://` to `https://` because they are different origins.

To fix this, the student should use a development server like Vite. A development server serves the files over the `http://` protocol (like `http://localhost:5173`), which is the same protocol used in production. This way, module imports and fetch requests both work properly.

To set up Vite, you run `npm create vite@latest`, then `cd` into the project, run `npm i`, and then `npm run dev` to start the development server.

## Question 3: The `fetch` Response Object

When we use `fetch()`, why do we check `response.ok` before reading the response body? What kinds of errors does this catch that `.catch()` alone would miss if we skipped this step as shown in the code below:

```js
const response = await fetch(url);
const data = await response.json();
```

**Your Answer:**

`fetch()` only rejects its Promise when there's a network-level failure, like the user has no internet or the URL is completely malformed (like `hxxp://`). 

But if the server receives the request and sends back a response — even a `404 Not Found` or `500 Internal Server Error` — `fetch()` considers that a successful resolution because the HTTP cycle completed.

So you can get a response object back but the actual request didn't give you what you wanted. To detect this, you check the `response.ok` property, which is `true` for status codes in the 200-299 range and `false` for everything else.

To handle it, you throw your own error so that it gets caught by `.catch()` or `catch`:

```js
const response = await fetch(url);
if (!response.ok) {
  throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
}
```

This way, both network errors and HTTP error responses are handled in the same place — the `.catch()` or `catch` block.


## Question 4: Async/Await Conversion

Rewrite the following `.then()`-based code using `async`/`await` with `try`/`catch`:

```js
const getJoke = () => {
  return fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart')
    .then((response) => {
      if (!response.ok) throw Error(`Fetch failed. ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return { data, error: null };
    })
    .catch((error) => {
      return { data: null, error };
    });
};
```

**Your Answer:**

```js
const getJoke = async () => {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart');

    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status}`);
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
```

The `async` keyword goes before the function so we can use `await` inside. Each `.then()` callback gets replaced with an `await` — first we `await fetch()` to get the response, then we `await response.json()` to get the data. The `.catch()` gets replaced with a `catch` block inside `try`/`catch`. If anything inside the `try` block throws an error (either our manual `throw` or a rejected promise from `await`), execution jumps to the `catch` block.


## Question 5: `event.preventDefault()` and Form Handling

A student writes a form handler but the data never displays. Their code:

```js
form.addEventListener('submit', (event) => {
  const name = form.elements.name.value;
  document.querySelector('#output').textContent = name;
});
```

What is wrong? What happens when they click submit, and how do they fix it?

**Your Answer:**

The problem is that `event.preventDefault()` is missing. When a form is submitted, the browser's default behavior is to reload the page (and redirect to the URL in the `action` attribute, or just reload the current page if there's no `action`).

So when the student clicks submit, the JavaScript runs and sets the `#output` text content — but then the page immediately reloads, wiping out that change. It happens so fast it looks like nothing happened at all.

The fix is to add `event.preventDefault()` at the start of the handler:

```js
form.addEventListener('submit', (event) => {
  event.preventDefault(); // stop the page from reloading!

  const name = form.elements.name.value;
  document.querySelector('#output').textContent = name;
});
```

This stops the browser's default submit behavior so we can handle the form data ourselves with JavaScript and keep the user on the same page.

## Question 6: Putting It All Together

The steps below describe how to build a form that fetches Pokemon data from `https://pokeapi.co/api/v2/pokemon/{name}` based on the name entered in the form and displays the pokemon's data on the page. The steps are listed in a **random order**. Rearrange them into the correct sequence.

- A. Parse the response body with `await response.json()`
- B. Call `event.preventDefault()` to stop the page from reloading
- C. Check `response.ok` and throw an error if the response failed
- D. Update the DOM with the Pokemon's data
- E. Add a `'submit'` event listener to the form
- F. Handle errors in the `catch` block (display an error message)
- G. Extract the Pokemon name from the form input
- H. Send a GET request with `fetch()` using the Pokemon name in the URL
- I. Reset the form with `form.reset()`
- J. Create the HTML form with a name input and output elements for displaying results

**Your Answer:**

J, E, B, G, H, C, A, D, F, I
