---
layout: ../../layouts/MarkdownPostLayout.astro
title: My 121212 Blog Post
author: Astro Learner
description: "This post will show up on its own!"
image: 
  url: "https://docs.astro.build/default-og-image.png"
  alt: "The word “astro” against an illustration of planets and stars."
pubDate: 2022-08-08
tags: ["astro", "successes"]
---
It wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!

```jsx
import { useState } from 'react';
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```