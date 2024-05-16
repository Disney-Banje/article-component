# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](images/localhost_5500_%20(15).png)
![](images/localhost_5500_%20(16).png)

### Links

- Live Site URL: [Article component](https://disney-banje.github.io/article-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

In this section, I was able to access my skills on playing with the DOM and creating components using functional programming. I had also the chance to learn more about creating elements using the `::before` pseudo.

```css
 .card-floating::before {
        content: '';
        position: absolute;
        bottom: -1.9rem;
        left: 62%;
        transform: translate(-50%);
        border-width: 1.0rem;
        border-style: solid;
        border-color: var(--Very-Dark-Grayish-Blue)  transparent transparent transparent;
    }
```
```js
function floatingSocial() {
    const floatingContainer = document.createElement('div');
    floatingContainer.classList.add('card-floating', 'hidden');

    const para = document.createElement('p');
    para.className = 'social-header';
    para.innerHTML = 'share';
    const shareGroup = generateIcons();
    floatingContainer.appendChild(para);
    floatingContainer.appendChild(shareGroup);

    return floatingContainer;
    
}
```

### Continued development

I think in the future, I need to continuously keep exposing myself to more complex JavaScript concepts for growth. At the moment, I think I did a good job on this challenge.

### Useful resources

- [Understanding the DOM](https://www.digitalocean.com/community/tutorial-series/understanding-the-dom-document-object-model) - If you want a good explanation of the DOM, this resource will get you to a good starting point, since it covers most of the features that you will be using when altering the DOM.