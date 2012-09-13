# About
A client for Redu's wall service ([Wally](https://github.com/redu/wally)). It's made with [Ember.js](http://emberjs.com/) and bundled with [jbundle](https://github.com/ismasan/jbundle).

# Usage
Wally.js is an Ember application that consumes Wally API. It's very simple to add it yo your project, let's see.

First you need to include wally.js on your app:

```html
<script src="wally.js"></script>
```

After requiring it, instantiate the Wally app and be happy:

```js
// Initialize Wally.js with your token to access the Wally server and
// inform the root element where the wall should be rendered.
var wally = Redu.Wally({ token: "yourtoken", root_element: "#wall-content" })
// Specify which wall you want, ie you have to informe the wall's owner
wally.showMeWall({ container_id: "core:space_45" })
```

For example, if you have a blog that has a wall, the blog is the wall's owner. So the `container_id` is the blog's identifier.


# Contribute
Anyone can contribute with us, just fork it and create a pull request.

## Development setup
We use [Node.js](http://nodejs.org/) so we can have a more organized setup and don't rely on a browser. You can install Node with [these packages](http://nodejs.org/download/) or simple use Brew (if you use Mac OS).

```sh
$ brew install nodejs
```

For tests we use [Mocha](http://visionmedia.github.com/mocha/) and [Chai](http://chaijs.com/), but don't worry because you will have all set up because of [npm](https://npmjs.org/). So let's install it and make it install all we need:

```sh
# Install the Package Manager
$ curl https://npmjs.org/install.sh | sh

$ cd wally.js
# Install all dependencies
wally.js $ npm install

# Bundle to get rake command
wally.js $ bundle
# Run the tests
wally.js $ rake

  -----------------------------------------------
  ⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅✈
  -----------------------------------------------

  ✔ 1 test complete (3ms)

# Start to code! o/
```

## Bundle wally.js
You just need to set to the correct version number in `JFile` and run `jbundle`. Remember that to run `jbundle` you need to run `bundle` first, so this dependencie will be installed.

```sh
# Install dependencies
wally.js $ bundle
# Generate version specified at JFile
wally.js $ jsbundle
Writing to dist/0.0.1/wally.js
Writing to dist/0.0.1/wally.min.js
Writing to dist/0.0/wally.js
Writing to dist/0.0/wally.min.js
```

# License

Copyright (c) 2012 Redu Educational Technologies

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
