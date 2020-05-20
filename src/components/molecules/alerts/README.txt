Install Sytled Components
-------------------------
$ npm install --save styled-components

OR

$ yarn add styled-components

Reference: https://styled-components.com/

Install font awesome
--------------------
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/react-fontawesome
$ npm i --save @fortawesome/free-brands-svg-icons
$ npm i --save @fortawesome/free-regular-svg-icons

OR

$ yarn add @fortawesome/fontawesome-svg-core
$ yarn add @fortawesome/free-solid-svg-icons
$ yarn add @fortawesome/react-fontawesome
$ yarn add @fortawesome/free-brands-svg-icons
$ yarn add @fortawesome/free-regular-svg-icons

Reference: https://github.com/FortAwesome/react-fontawesome

Install PropTypes
-----------------
yarn add prop-types 

Reference: https://reactjs.org/docs/typechecking-with-proptypes.html


Install Kobs for stories
-------------------------
yarn add @storybook/addon-knobs --dev

within .storybook/main.js:
    module.exports = {
        addons: ['@storybook/addon-knobs/register']
    }

Reference: https://www.npmjs.com/package/@storybook/addon-knobs

Install Docs for stories 
-------------------------
yarn add -D @storybook/addon-docs
yarn add -D react react-is babel-loader

Then add the following to your .storybook/main.js:

module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: ['@storybook/addon-docs'],
};

Reference: https://www.npmjs.com/package/@storybook/addon-docs