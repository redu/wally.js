# About
A client for Redu's wall service ([Wally](https://github.com/redu/wally)). It's made with [Ember.js](http://emberjs.com/) and bundled with [jbundle](https://github.com/ismasan/jbundle).

# Usage
Wally.js is an Ember application that consumes Wally API. It's very simple to add it yo your project, let's see.

First you need to include wally.js on your app:

```html
<script src="wally.min.js"></script>
```

After requiring it, instantiate the Wally app and be happy:

```js
// Initialize Wally.js with:
// - your token to access the Wally server
// - the root element where the wall should be rendered
// - which wall you want, ie you have to informe the wall's owner
var wally = new Redu.Wally({
  token: "yourtoken",
  root_element: "#wall-content",
  resource_id: "core:space_45"
})
```

For example, if you have a blog that has a wall, the blog is the wall's owner. So the `resource_id` is the blog's identifier.

# Under the skin
Wally.js and Wally service made an agreement so they can talk to each other, this agreement is based on JSON and defined urls.
For more detailed information, visit Wally service's [page](https://github.com/redu/wally).

## Wally entities
The Wally service is made of some entities, these are:

1. Wall
2. Post
3. Answer
4. Author

To explain a little about them, a `Wall` has many `Post` which in turn has many `Answer`. A `Post` and an `Answer` are made by an `Author`, who can create many `Post` and `Answer`.

### Entities' URLs
Of course, almost every entity is mapped to an URL on Wally service. The exception is `Author`, because it is treated as an embedded entity, ie we don't need to access it through and URl because it is already inside the `Post` and `Answer` structure.

* Wall
    - GET `/walls` (get a list of Walls)
    - GET `/walls/:id` (get a Wall)
    - GET `/walls/?resource_id=:resource_id` (get all Walls of a resource)
    - POST `/walls` (create a new Wall)
    - DELETE `/walls/:id` (delete a Wall)
* Post
    - GET `/walls/:wall_id/posts` (get a list of Posts)
    - GET `/posts/:id` (get a Post)
    - POST `/walls/:wall_id/posts` (create a Post)
    - DELETE `/posts/:id` (delete a Post)
* Answer
    - GET `/answers/:id` (get an Answer)
    - POST `/posts/:post_id/answers` (create an Answer)
    - DELETE `/answers/:id` (delete an Answer)

### Entities' structure
The entities' structure returned by the Wally server are described below:

GET `/walls/1`
```js
{
  "wall" : {
    "id": 1,
    "links": [
      { "rel": "self", "href": "http://wall.redu.com.br/walls/1" }
    ]
    "resource_id": "core:space_1",
    "posts": [
      { "id" : 1, ... },
      { "id" : 2, ... }
    ]
  }
}
```

GET `/posts/1`
```js
{
  "post": {
    "id": 1,
    "wall_id": 29,
    "created_at": "2011-02-06T08:50:14-02:00",
    "author": {
      "id": 123412,
      "name": "Tiago Ferreira Lima",
      "links": [
        { "rel" : "public_self", "href": "http://redu.com.br/pessoas/fltiago" },
        { "rel" : "self", "href": "http://redu.com.br/api/users/fltiago" }
      ],
      "thumbnails": [
        { "href": "http://s3.amazonaws.com/redu_uploads/users/avatars/4/thumb_32/Guilherme3x4%20copy.jpg?1323711306", "size": "32x32" }
      ]
      "role": {
        "name": "tutor",
        "thumbnails": [
          { "href": "http://s3.amazonaws.com/redu_uploads/users/avatars/4/thumb_32/Guilherme3x4%20copy.jpg?1323711306", "size": "16x16" }
        ]
      },
     },
    "answers": [
      { "id": 1, ... },
      { "id": 2, ... },
    ],
    "content": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "target" : {
      "id": 2121,
      "name" : "Disciplina tal",
      "links" : [
        { "rel" : "self", "href" : "http://redu.com.br/api/spaces/2121" },
        { "rel" : "self_public", "href" : "http://redu.com.br/espacos/2121" }
      ]
    },
    "context": [
      { "id" : 12, "name" : "Curso tal",
        "links" : [ { "rel" : "self", "href" : "http://redu.com.br/api/courses/12" }, { "rel" : "public_self", "href" : "http://redu.com.br/environment/cursos/curso-de-algo" } ] },
      { "id" : 12, "name" : "Disciplina tal",
        "links" : [ { "rel" : "self", "href" : "http://redu.com.br/api/space/12" }, { "rel" : "public_self", "href" : "http://redu.com.br/espacos/12" } ] }
    ],
    "links": [
      { "rel" : "self", "href" : "http://wally.redu.com.br/posts/1"  }
    ]
    "action" : "comment",
    "rule": { "manage" : true },
  }
}
```

GET `/answers/1`
```js
{
  "answer": {
    "id": 1,
    "post_id": 48,
    "created_at": "2011-02-06T08:50:14-02:00",
    "author": {
      "id": 123412,
      "name": "Tiago Ferreira",
      "links": [
        { "rel" : "public_self", "href": "http://redu.com.br/pessoas/fltiago" },
        { "rel" : "self", "href": "http://redu.com.br/api/users/fltiago" }
      ],
      "thumbnails": [
        { "href": "http://s3.amazonaws.com/redu_uploads/users/avatars/4/thumb_32/Guilherme3x4%20copy.jpg?1323711306", "size": "32x32" }
      ]
     },
    "content": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "links": [
      { "rel" : "self", "href" : "http://wally.redu.com.br/answers/1"  }
    ]
    "rule": { "manage" : true },
  }
}
```

# Contribute
Anyone can contribute with us, just fork it and create a pull request.

## Development setup
You do not need to install a thing, because all you need is already inside the repository.

We use [Mocha](http://visionmedia.github.com/mocha/) and [Chai](http://chaijs.com/) for tests, but don't worry because it's all set up. You just need to run the static files server (with jBundle) and open the `test/runner.html` and all tests will run on the browser and present to you a report with a clean layout.
```
# Start static files server
$ jbundle s
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
