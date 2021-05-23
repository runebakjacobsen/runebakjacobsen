---
path: /what-is-a-react-rerender-really
draft: false
date: 2021-05-23T10:00:19.919Z
title: What is a React rerender really?
metatitle: React rerenders, what is it and how does it work?
metadesc: If you have worked with React you have heard the term "rerender". But
  what is happing when a rerender is triggered? It simpler than you would think!
---
# What is a React rerender really?

If you are the least bit experienced with React, you have heard the term rerender. For example, if you are rendering state, and this state changes React will display the changes. This is a rerender. But how does it know what to rerender?

To understand this, let's back up a bit. If you have worked with the web before, you know about the DOM or the Document Object Model. In short the DOM represents the document as nodes and objects. Manipulation of the DOM is possible through i.e. JavaScript. React uses the ReactDOM, which is a Virtualised DOM. This keeps a virtual representation in memory and syncs it with the real DOM.

So back to the rerender. A naive approach to this, would be to switch the old representation with the new. Luckily this is not the case, as this would make larger applications very laggy. Think about how much state is in a larger web site. This would be horrible.

## Reconciliation

Instead React uses what they call [reconciliation](https://reactjs.org/docs/reconciliation.html). In short, this is a diffing algorithm. To be a bit more precise the steps of reconciliation is

1. Start by comparing the two roots.

   * If the roots are different types this will trigger a complete rebuild of the tree. This could be when a going from a paragraph tag to a div.

     We know the roots now are the same type. Now it instead look for the attributes of the roots. Here changing a className, style etc will only change exactly that.
2. Proceed recursively on the roots' children.

   * React iterates though the old child and the new and changes the DOM if there is a difference.

Now you know exactly what happens in a rerender - comparing the changes and updating only what changed.

I hope you enjoyed this post looking into the internals of React, [follow me on Twitter](https://twitter.com/runebakjacobsen) or sign up for my mailing list if you want to read for like this!