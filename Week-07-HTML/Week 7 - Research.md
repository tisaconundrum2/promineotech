# Week 7: Research

## Prompts

#### 1. What are 3 HTML elements not mentioned any of the video this week? What do they do and how are they used?

```
<abbr>
<cite>
<dfn>
```
`<abbr>` can be used to set up abbreviations. For example you can do
```
<p><abbr title="Professor">Prof</abbr> Stephen Hawking is a theoretical physicist and cosmologist.</p>
```

`<cite>` is used to reference a piece of work such as a research paper
```
<p><cite>A Brief History of Time</cite> by Stephen Hawking has sold over ten million copies worldwide.</p>
```

`<dfn>` is used to define a term it should be noted that some browsers will italicize the content. Chrome and Safari do not do this.
```
<p>A <dfn>black hole</dfn> is a region of space from nothing, not even light, can escape.</p>
```

#### 2. Choose one of your favorite websites and identify 5 different HTML elements used on the website. Make sure to include the URL in your submission.

I chose **YouTube** for this question. **Youtube** is quite an extensive site. After doing a quick scan I was able to pull out 45 uniq elements from the page. Here are 5 of the most interesting
```
<clipPath>
<defs>
<video>
<template>
<linearGradient>
```

`<clipPath>`

The `<clipPath>` lets you mask a graphic by using a shape as a clipping path. The shape defines the area of the graphic to be rendered. All graphics that are defined outside of this shape are not drawn on in the final webpage.This is usually used in tandom with SVGs

`<defs>`

The `<defs>` element defines a group of graphics that will be used later. The content inside the `<defs>` element is not rendered, but it can be referenced by other elements via the use of the `<use>` element.

`<video>`

The `<video>` element embeds a media player which supports video playback into the document. It is also possible to use `<video>` for audio content, but most browsers provide a more appropriate user experience via the `<audio>` element.

`<template>`

The `<template>` HTML element allows to create markup that is not rendered immediately, but may be instantiated at some point during runtime. This is useful for defining small segments of reusable code (e.g. HTML snippets containing hyperlinks or UI control templates) that are used on multiple pages.

`<linearGradient>`

The `<linearGradient>` element lets authors define linear gradients to apply to other SVG elements. The linear gradient is defined by a gradient line and a spread radius. Its direction determines the progression of colours along the axis aligned with this gradient line.

#### 3. What is your favorite thing you learned this week?
I think my favorite thing I learned this week is how powerful each of the above elements are. I had always known of a few important elements that allow me to get a document looking how I want it, but never knew that there were so many ways to "skin a cat". Things have really changed since I've begam my web development journey.