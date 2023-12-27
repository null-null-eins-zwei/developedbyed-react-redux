# developedbyed-react-redux

[https://developedbyed.com/courses/enrolled/1203573](https://developedbyed.com/courses/enrolled/1203573)

## Table of content

- [developedbyed-react-redux](#developedbyed-react-redux)
  - [Table of content](#table-of-content)
  - [Notes](#notes)
    - [Chapter 1](#chapter-1)
    - [Chapter 2](#chapter-2)

## Notes

### Chapter 1

- Install NodeJS: `winget install OpenJS.NodeJS`
- [create-react-app.dev](https://create-react-app.dev/docs/getting-started)
- `npm uninstall -g create-react-app`
- `npx create-react-app <project-directory>`
- Install dependencies: `npm install`
- Check `package.json`, `scripts` section:
  - `npm run start` (`npm start`)
  - `npm run build`
  - `npm run test`
  - `npm run eject`
- [JSX Markup](https://react.dev/learn/writing-markup-with-jsx)

    > JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.
- [React Developer Tools](https://react.dev/learn/react-developer-tools), browser extensions

### Chapter 2

- React component can't return multiple elements, always should encapsulate in only one parrent. Also check `<></>` JSX tag pair and `React.Fragment`.
- 