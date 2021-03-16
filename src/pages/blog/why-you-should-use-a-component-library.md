---
path: /why-you-should-use-a-component-library
draft: true
date: 2021-02-21T17:35:23.863Z
title: Why you should use a component library
metatitle: wip
metadesc: wip
---
When starting a new frontend project you need to make many decisions. One of these are whether to build your components and styles yourself or to use an existing component library out there. There exists many good options today, such as FluentUI, ChakraUI etc. When making this decision there is a lot of thinks you need to consider. I'll go through some of them here and give my take on when you should choose what. 

## Accessibility

If you choose to build your component library yourself, this is a hurdle you need to consider every time you create a new component. If you have ever heard about web accessibility you can check it out [here](https://webaim.org/intro/). It is in my opinion super important, since we should not exclude any people from the web. 

## Testing

Have you thought throug hall the possible states you component can be in? Let take an example, a simple button. All you need is the hovering style right...? Wrong. Buttons contain a lot of different states which should be reflected in how it looks. Is the button disabled? You need a variation for this. Is the button already clicked? You probably also need a variation for this. These are just a few thing YOU need to consider when building your component library yourself. 

Another example is a specific browser bug, I have tried this with ie. safari where a specific css property didn't work. By using a component library someone else most certainly has runned into this before you, meaning that the problem is appreciated an fixed, whereas if you weere to buld your applications yourself you need to know all these.

## Time

And all this leads to my last point, time. If you use a component library you are almost guarenteed to spend less time on creating components, which is integral, epecially in teams and companies. 

## Bundle size

There is of course also downsizes to using a component librrary. If you are not careful you can end up with a huge bundle sie for your app, which of coruse will slow down your app. This is much easier to control when you create your component library form strach since you control what is in each component. 

## Conclusion

In the end, what you choose is up to you. You may prefer to create your own from strach each time or you maybe down the line built an impressive component library for yourself that you use each time. 

However if you are standing at a crossroads and don't know what to choose, my advise would be, if you are on a reasonably sized client project and is limited by time (or money) use a component library. This will speed up your development significantly. 

On the contranrty, if you are just making a hobby project or you are still in the learning process, I would say make your own component library! Its a great learning process and you maybe find a better way to structure it than some of the previoius once did.