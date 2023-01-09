# Doordash, a clone

Hey there! Please take a look at [this Notion](https://piquant-dancer-3b9.notion.site/DoorDash-Clone-Discoveries-Hurdles-Lessons-A-WIP-7bd86cff0d764b4c8ff040a84557d361) to gauge at technical findings, hurdles, and lessons I am uncovering while working on this project.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install the dependencies and start the development server

From the project root,
```bash
npm i
npx next
```

Open [http://localhost:3000](http://localhost:3000) with your browser to the application.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load local fonts.

## Technology
Next.js is used as the React Framework in this rapid prototype. DoorDash requires Server Side Rendering, as the content that hydrates a merchant's page is widely dynamic. 

[styled-components](https://styled-components.com/) is used as the CSS-in-JS framework used to generate dynamic styles based on component props. 

TypeScript is used as the programming language in this application. With a large range of data-dependent components, it is necessary to guard data driven UI components (and their props) with explicit types. 

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [styled-components](https://styled-components.com/) - learn about styled-components with an interactive button component
- [DoorDash Engineering - Improving Web Page Performance at DoorDash through Server Side Rendering with Next.js](https://doordash.engineering/2022/03/29/improving-web-page-performance-at-doordash-throughserver-side-rendering-with-next-js/) - Read about DoorDash's motivation and technical decision to move to Next.js powered SSR 



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
