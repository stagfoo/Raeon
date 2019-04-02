# Raeon

a style CSS in JS system style and Components

# Setup

```
npm install   // installs npm
npm run start // runs browser.ts at localhost:9000
npm run install:storybook // install storybook npm deps
npm run start:storyboook // starts storybook listening to localhost:9000
```


# Structure

```
src
 |- components // new custom elements
 |- assets // JSS and values
 |- module.ts //TODO export defaults eg. export {default as Button } 'component/button';
 |_ browser.ts // defines custom element on DOMRegistry
docs
 |- stories
 |     |- 0-intro.stories.ts  // 0 is to place it at the top of the menu
 |     |_ button.stories.ts   // setup button section
 |   .storybook
 |     |- addons.js           // add new panels
 |     |- config.js           // storybook settings
 |_    |_ webpack.config.js   // config for webpack...


```

