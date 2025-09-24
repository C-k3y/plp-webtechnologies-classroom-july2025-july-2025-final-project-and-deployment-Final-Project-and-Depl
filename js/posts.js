// posts.js - small static "data" store and rendering for blog listing + post template
const POSTS = [
{
id: 'first-post',
title: 'Getting started with semantic HTML',
date: '2025-09-01',
excerpt: 'Learn why semantic HTML matters and how to structure your content for accessibility.',
content: `<img src="./post2.jpeg" alt="HTML code example">
<p>Semantic HTML makes your page machine-readable, accessible and easier to maintain. Examples: &lt;header&gt;, &lt;main&gt;, &lt;article&gt;.</p>`
},
{
id: 'responsive-css',
title: 'Responsive CSS: Mobile first',
date: '2025-09-10',
excerpt: 'Start small — build for the smallest screen first and scale up.' ,
content: `<img src="./post1.jpeg" alt="Responsive CSS">
<p>Mobile-first CSS helps you prioritize important
