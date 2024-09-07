# NEXT.js

- Next js is an open source Javascript framework that is built on top of React a popular javascript library for building user interfaces. It is designed to make it easier to create server-rendered React applications with a focus on developer productivity, performance, and SEO (Search Engine Optimization). Next.js provide a set of tools and conventions that simplify various aspects of building web applications.

# Features
- Server Side Rendering (SSR):: Next.js allows you to render React component on the server side before sending them to the client. This can improve a page load time and SEO, as search engines can easily index the content.

- Static Site Generation (SSG):: Next.js also supports static site generation, where you can pre-render pages at build time. This approch is great for contentheavy websites and can offer even better performance and SEO benefits.

- API routes:: It offers a built-in API route feature that allows you to create serverless API endpoints within your Next.js project, making it easy to handle backend logic.


# Create Next.js application
- run this command:  npx create-next-app@latest

- run the use :: npm run dev


# Routing?
- Routing is like giving direction to a wesite. When you type a web address (URL) into your browser, route tells the website which page or thing to show you. It's like a map that guides the website to the right place when you click a link or enter a web address. So, routing helps the website know what to display based on what you're looking for.


  # Link
  - Link is a component provided by Next.js that allows you to create links to navigate between in your application

  - It's primarilly used for declarative, client-side-navigation. When you click on a link created with Link, it prevent the default browser full-page refresh and fetches the new page content on the client side, reusing in a faster and smoother the experience.

  - It's tipically used in your component's JSX code to create clickable links that lead to other pages within your Next.js application.


  # useRouter()
  - useRouter is a hook provided by Next.js that allows you to access the router object and its properties within your component

  - It provides a programatic control over the router and allows you to navigate to different pages or perform other routing-related actions in response to user interatction or events within your component.

  - It's usefull when you need to handle navigation or access route-specific information directly in your component logic.

  * * Optioal directory using (auth) 

  # Skip folder route
  folder name declare with peranthasis like:  (fldername)

  # Dynamic Routes
  - Dynamic routes in Next.js refer to a feature that allows you to create web pages with variable or dynamic parts in the URL. Insted of defining individual routes for every possible URL, you can create a single route pattern that matches a veriety of dynamic values. this is extremely useful when you have pages that share a common structure but differ based on specific information in the URL


  # Catch All routes
  - In Next.js, [...foldername] notation indicates that you are using a catch-all route, which allows you to create multiple URL segments and treat them as a dynamic array of values. This is useful when you want to create dynamic routes that can handling varing numbers of of URL segments.

  # Redirect  
  - import { redirect } from 'next/navigation'
  - redirect('/login');


# Layout
  - A Layout is like a blueprint that helps you all makes the pages of your website look th same. It's a way to put common things, header footer, and other stuff that appears on every page, in one place This makes it easy to keep a similar look on all your web pages. So, a layout is a handy tool that lets you keep things tidy and consistent on your website.


# Genereate Meta Data
- create function and export _generateMetadata()_

# Image Optimization
  - <Image src="" alt="" />
  - config next.config.js -> images remotepatterns

# Font Optimization
  - import { Roboto } from "next/font/google"; --> // { Roboto, ..., ...}

