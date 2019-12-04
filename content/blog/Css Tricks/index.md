---
title: Css Tricks
date: "2019-04-16"
description: " Css is tricky. Here are some tricks I've learned along the way to make it less so."
---

Css can be tricky. Here are some of the tricks I've learned along the way to make it less so.

#### even margins of a div within another div or container (aka horizontal centering)

```css
.child {
  margin: "0 auto";
}
```

Not so bad, right?

#### Easy navbar with flexbox - Using inline-css with React

I find that there is almost no more frustrating part of a frontend project than creating a smoothly-fuctioning navbar. This one won't be responsive on smaller resolutions, but for medium to larger resolutions it will do just fine.

```css
<div style={{
display: "flex",
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center"}}>


    <div  style={{ paddingTop: "15px" }}>
    	<h1> Keywords App</h1>
    </div
    <div  style={{ width: "50px" }}>
    	<Image  />
    </div>

</div>
```

#### Floats, Absolutes, and More

if you have two items that you want to line up on opposites side of a div, and you want them to be on the outside edges of whatever container they are in, this one isn't too hard. Make sure they're both floating, however, or the margins will look off.

##### Float

```css
.left-item {
  float: left;
}

.right-item {
  float: right;
}
```

#####Absolute placements
Absolute placements are interesting. They will completely ignore any div, containers, or any other constricting matter, so you can place items down to the pixel. This is a bit of a blessing and a curse, but used well, they can save a lot of frustration.

There are only two real items you need for placement depending on how complex the items are. A declaration of display, and position. I prefer pixels, but all of the standard options apply, like vw, vh, em, rem, percents, and so on.

```css
.item {
  position: absolute;
  left: 20px;
  top: 20px;
}
```

This will place an item that will appear on the top left corner of the screen. It will not be fixed, so when the page scrolls, it will move as well.

###Fixed placements
fixed placements are similiar to absolute placements, but, well, fixed to a spot on a page. While absolute items will scroll with a page, fixed items will remain exactly where they originally rendered on the page layout, scrolling as any other normal content.

```css
.item {
  position: fixed;
  left: 20px;
  top: 20px;
}
```

###Double borders
This one is interesting, but can't be used with rounded borders, adding a double border can be a nice way to clearly seperate content or to draw focus. One way to do it is to use the outline declaration.

```css
.borders {
  border: 5px solid blue;
  outline: 5px solid red;
}
```

###Sass
Finally, if you've come this far, try out Sass. It compiles to CSS, but is better in pretty much every where you could care to mention. It has variables, mixins, extends, and makes it very, very difficult to go back to vanilla CSS after you are done using it.
