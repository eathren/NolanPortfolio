---
title: "Useful JavaScript Code Snippets"
date: "2019-04-12"
description: "Pieces of code to make web dev just a little easier"
---


Sometimes when you're in full-motion, some of the simpler (and not so simple) items can be hard to remember how to do. At least, that's the case for me. That's why I've built list of items to help me in the future. And hey, if it helps someone else out as well, mores the better.

 #### Back Button 

```javascript
function BackButton() {
  window.history.back()
}
```

In component/class/etc

```jsx
<FaTimes
  style={{ fontSize: "26px", float: "left", cursor: "pointer" }}
  onClick={BackButton}
/>
```

If you're not using react-icons, just replace FaTimes with some kind of div, icon, text, or ... anything, really.
