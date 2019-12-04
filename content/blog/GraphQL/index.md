---
title: GraphQL and Gatsby.js
date: "2018-11-19"
description: " Adventures through GraphQL. Tips, Gotchas & Code Snippets"
---

GraphQL is brilliant. It is versatile, strong, and is great at running from a single api and then mapping over data. However, there is some items that Gatsby's built in version simply can't do. This post goes over some of the items that I learned through trial and error, forums, and plain old documentation. This resource is mainly for myself, but if there is someone out there that benefits from this as well, all the better.

#### GraphQL with Gatsby is built at runtime. You cannot affect change the query after it has been built (without using a graphQL server anyways)

When I started out, I was under the impression that gatsby graphql queries existed as some kind of server-side code. I spent days trying to find resources to add client-side mutations to that serverside code, and found nothing. This is because graphql gets built at runtime. Once it runs, that's it, there's no more. I had wanted to sort and filter the data after the fact, and ended up building the needed sort functions to run client-side after gatsby rehydrated to react.

#### Conditional rendering!

This one was a took me a good hour. Inline JSX with graphql data. If a field is empty, it will hide all the field and header text. This isn't exclusive to graphql, but it was nice to get a simple way to have summary information only if the data existed in the first place. It made for a much cleaner UI.

```jsx
{
    <div>`${post.frontmatter.author}` !== "" && (
      <div className="text-grey">
        <p>
          Author
        </p>
        <br />

        <div style={{ color: "black", marginTop: "15px" }}>
          {post.frontmatter.author}
        </div>
      </div>
    </div>
  )
}
```

#### Using graphql data as href links

```jsx
<a href={`${post.frontmatter.sourceLinkUrl3}/`}>
  {post.frontmatter.sourceLink3}
</a>
```

Gatsby's graphql data layer is great. However, if you want to bring in dynamic data, mutations, and all of that, you'll have to use apollo-graphql (or one of the alternatives out there) with a graphql server set up on (likely) github. Gatsby is great, but it starts static,and without additional work, ends up static, and anything that works live will take additional effort and jumping through hoops.
