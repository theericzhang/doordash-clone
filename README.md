# Doordash Clone, a Rapid Prototype 👯 

👋 Hey there! Please take a look at [this Notion](https://piquant-dancer-3b9.notion.site/DoorDash-Clone-Discoveries-Hurdles-Lessons-A-WIP-7bd86cff0d764b4c8ff040a84557d361) to gauge at technical findings, hurdles, and lessons I am uncovering while working on this project.

## 🧘 Motivations

I wanted to create a baseline clone of DoorDash's home portal from an authenticated user's perspective. This challenge tested a variety of skillsets including prototyping pixel perfect, data driven, and reusable UI components. 

This challenge is currently undergoing active development as of January 6th 2023, so features including SSR driven merchant pages, search functionality, and checkout will be implemented along the way. Please check [Roadmap](#🛣️-roadmap) for more information!

Up-to-date builds are hosted on Vercel. Please take a look at the `About` section on this repository to access the build.

# Table of Contents
* [Getting Started](#🛠️-getting-started)
* [Technology](#💻-technology)
* [Roadmap](#🛣️-roadmap)
    * [Recently Completed](#recently-completed)
    * [In Progress](#in-progress)
    * [Next Up](#next-up)
* [Resources and References](#📚-resources-and-references)

## 🛠️ Getting Started

Install the dependencies and start the development server

From the project root,
```bash
npm i
npx next
```

Open [http://localhost:3000](http://localhost:3000) with your browser to the application.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load local fonts.

## 💻 Technology
Next.js is used as the React Framework in this rapid prototype. DoorDash requires Server Side Rendering, as the content that hydrates a merchant's page is widely dynamic. 

[styled-components](https://styled-components.com/) is used as the CSS-in-JS framework used to generate dynamic styles based on component props. 

TypeScript is used as the programming language in this application. With a large range of data-dependent components, it is necessary to guard data driven UI components (and their props) with explicit types. 

## 🛣️ Roadmap

### Recently Completed
* Created `<Navbar />` component and `<SearchBar />`, `<ShoppingCartButton />` subcomponents.
* Created `<HomeLayout />` layout components, that house the `<Navbar />` and child elements from the `index.tsx` page.
* Created reusable & data driven `<RestaurantCarousel />` and `<RestaurantCard />` components and their subcomponents.

### In Progress
* Responsive styling for existing layouts & components when viewport width is under 1800px.
* Creating and Linking `<RestaurantCard />` [slug] to a new store view page.

### Next Up
* Implement Search functionality. Start with stores, then cuisines and dishes.
* Checkout flow.
* Garner feedback.

## 📚 Resources and References

- [DoorDash Clone - Discoveries, Hurdles, Lessons (A WIP)](https://piquant-dancer-3b9.notion.site/DoorDash-Clone-Discoveries-Hurdles-Lessons-A-WIP-7bd86cff0d764b4c8ff040a84557d361) - read about my experience thus far building this application!
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [styled-components](https://styled-components.com/) - learn about styled-components with an interactive button component
- [DoorDash Engineering - Improving Web Page Performance at DoorDash through Server Side Rendering with Next.js](https://doordash.engineering/2022/03/29/improving-web-page-performance-at-doordash-throughserver-side-rendering-with-next-js/) - Read about DoorDash's motivation and technical decision to move to Next.js powered SSR 



