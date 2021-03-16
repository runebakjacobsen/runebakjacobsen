---
path: /when-you-should-use-a-component-library
draft: false
date: 2021-03-16T16:26:10.219Z
title: When you should use a component library
metatitle: When you should use a component library
metadesc: It can be difficult to decide wether to use a component library or
  creating it from scratch. Here are what you need to know before choosing!
---
When starting a new frontend project you need to make many decisions. One of these is whether to build your components and styles yourself or to use an existing component library out there. There exist many good options today, such as FluentUI, ChakraUI, etc. When making this decision there is a lot of things you need to consider. I'll go through some of them here and give my take on when you should choose what.

## Accessibility

If you choose to build your component library yourself, this is a hurdle you need to consider every time you create a new component. If you have ever heard about web accessibility you can check it out [here](https://webaim.org/intro/). It is in my opinion super important since we should not exclude any people from the web.

## Testing

Have you thought through all the possible states your component can be in? Let take an example, a simple button. All you need is the hovering style right...? Wrong. Buttons contain a lot of different states which should be reflected in how it looks. Is the button disabled? You need a variation for this. Is the button already clicked? You probably also need a variation for this. These are just a few things YOU need to consider when building your component library yourself.

Another example is a specific browser bug, I have tried this with ie. Safari where a specific CSS property didn't work. By using a component library someone else most certainly has run into this before you, meaning that the problem is appreciated and fixed, whereas if you were to build your applications yourself you need to know all these.

## Time

And all this leads to my last point, time. If you use a component library you are almost guaranteed to spend less time on creating components, which is integral, especially in teams and companies.

## Bundle size

There is of course also downsizes to using a component library. If you are not careful you can end up with a huge bundle sie for your app, which of course will slow down your app. This is much easier to control when you create your component library from scratch since you control what is in each component.

## Conclusion

In the end, what you choose is up to you. You may prefer to create your own from scratch each time or you built an impressive component library for yourself that you use each time.

However, if you are standing at a crossroads and don't know what to choose, my advice would be, if you are on a reasonably sized client project and are limited by time (or money) use a component library. This will speed up your development significantly.

On the contrary, if you are just making a hobby project or you are still in the learning process, I would say make your own component library! It's a great learning process and you maybe find a better way to structure it than some of the previous ones did.