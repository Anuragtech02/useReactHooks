# useReactHooks

A repository for custom React Hooks.

[![npm-build-react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Table of contents

- [What is useReactHooks](#what-is-useReactHooks)
- [Pre-Requisites](#pre-requisites)
  - [Git & Github](#git-and-github)
  - [React (Typescript)](#react-typescript)
- [How to contribute?](#how-to-contribute)
- [Contributors](#contributors)

## What is useReactHooks

useReactHooks is a curated list of custom react hooks that will benefit people in their daily tasks related to development in react.

## Pre-Requisites

### Git and Github

Here are some instructions on how to setup git. [![youtube-git](https://img.shields.io/badge/-Youtube-red?style=plastic&logo=youtube)](https://youtu.be/apGV9Kg7ics)

### React (Typescript)

React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. It allows you to create single page applications which can change state without having to reload the page.

<b>What are React hooks?</b><br />
Hooks are functions that let you “hook into” React state and lifecycle features from function components. They let you use state and other React features without writing a class. Any function that starts with the keyword `use` is considered to be a hook in react. Here's very good article by [FreeCodeCamp](https://www.freecodecamp.org/news/beginners-guide-to-using-react-hooks/) on react hooks.

<b>Why Typescript?</b><br />
Typescript has gained immense popularity over the past few years, mainly because of improved code consistency, less proneness to errors and future browser support. Since the motive of the repostiry is to create hooks or in simple terms functional components, we needed type checking for better readability and understanding of the functions and props. Additionally it also provides better support for JSX and incredible intellisense in modern text editors.

You can learn about [React](https://reactjs.org/) and [React Typescript](https://www.typescriptlang.org/docs/handbook/react.html) from here.

# How to contribute

We're open to any kind of contribution, just follow the guidelines and you're good to go!

### Issues

- Submit a new [issue](https://github.com/1ezio/ietians-diary/issues/new/choose)
- Comment on an issue to get assigned

### Code Contribution

#### Fork

Fork the repository on your account by clicking on the fork button on the top right corner of the repository.<br />
![fork](https://user-images.githubusercontent.com/55744578/136408259-1fe32569-0853-4d17-b0d5-ec5a7c4425bd.jpg)

#### Clone the fork

Clone setup the repository on your local machine using this command <br />
`$ git clone git@github.com:[your_github_handle]/useReactHooks.git && cd useReactHooks`
<br />
You might also need to generate a Personal Access Token due to new rules by Github.
Here's how to generate a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) in case you don't know.

#### Installing Dependencies

Once you're inside the directory, run the following command to install all the dependencies and run the project.<br />

- `npm install` this will install everything <br />
- `npm start` this will run the server and open the page on localhost:3000

#### Creating custom hook

- Go through the repostiry and the issues section for some ideas and try to create something unique. Make sure your hook doesn't match with any of the already exisitng hooks in the repository.
- Create a folder inside `src/hooks/`, name it as per your hook name
- Create a `.tsx` file inside the folder
- Please consider writing descriptive names and quality comments for your hooks.

Your hook would look something like this

```
interface MagicType {
  type1: string,
  type2: number,
  ...
}

export function useMagicHook(): MagicType {
  // this custom hook does some serious magic

  return magic;
}

```

#### Submitting a PR

- Creat and checkout a new branch using `git checkout -B <branch-name>`
  - Use `git add .` to stage your changes
  - Use `git commit -m "your-commit-message"` to commit your changes
  - Use `git push origin <branch-name> to push changes to remote`
- Lastly, go to your fork and click on "Compare & Pull Request"
  ![compare&pull](https://user-images.githubusercontent.com/43697446/134040805-c114ccf9-aa14-427e-b01f-8dcb2f58ef94.png)
- Write a brief discription about the PR and the changes you made

### Our Awesome Contributors

<a href="https://github.com/Anuragtech02/useReactHooks/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Anuragtech02/useReactHooks" />
</a>

Made with [contributors-img](https://contrib.rocks).
