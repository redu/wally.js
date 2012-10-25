# About
A client for Redu's wall service ([Wally](https://github.com/redu/wally)). It's made with [Ember.js](http://emberjs.com/) and bundled with [jbundle](https://github.com/ismasan/jbundle).

# Usage
Wally.js is an Ember application that consumes Wally API. It's very simple to add it yo your project, let's see.

First you need to include wally.js on your app:

```html
<script src="wally.min.js"></script>
```

After that, you need to copy all templates inside [src/templates](https://github.com/redu/wally.js/blob/master/src/templates/templates.html) and put it on your HTML's `<head>`.

Finally, instantiate the Wally app and be happy:

```js
/** Initialize the WallyClient and gets the specified Wall
 *
 * opts
 *  A set of key/value pairs that configures the WallyClient.
 *
 *  token (String)
 *    The key used to get access on the Wally Server
 *  resourceId (String)
 *    Basically the Wall's owner
 *  rootElement (String) [optional]
 *    Where the WallyApp should be rendered. By default, the app is
 *    appended to the body.
 *  corsLinks (Boolean) [optional]
 *    Default is false.
 *    Indicates that the links should be opened in the app's parent.
 *    For example: If the app is inside an iframe and you need the links
 *    to be opened inside the browser instead of inside the iframe, set
 *    it to true.
 *  user (Object)
 *    The logged in user
 *  target (Object)
 *    Where the post will be posted
 *  context (Array) [optional]
 *    Like breadcrumbs, so the post will be contextualized
 *  config (Object)
 *    Specific configurations
 *
 *    showContexts (Boolean)
 *      Default is false.
 *      Specify if the contexts should be showed.
 *
*/
new Redu.WallyClient({
  token: "my-token",
  resourceId: "core:space_1",
  rootElement: '#my-div',
  corsLinks: true,
  user: {"links":[{"href":"http://0.0.0.0:3000/pessoas/julianalucena","rel":"public_self"}],"name":"Juliana Lucena","thumbnails":[{"href":"http://0.0.0.0:3000//images/new/missing_users_thumb_32.png","size":"32x32"}],"user_id":"8"},
  target: {"entity_id":"445","kind":"space","links":[{"href":"http://0.0.0.0:3000/espacos/445","rel":"self_public"}],"name":"Processos de desenvolvimento"},
  contexts: [{"entity_id":"351","links":[{"href":"http://0.0.0.0:3000/redu-educational-technologies","rel":"self_public"}],"name":"Redu Educational Technologies"},{"entity_id":"387","links":[{"href":"http://0.0.0.0:3000/redu-educational-technologies/cursos/desenvolvimento","rel":"self_public"}],"name":"Desenvolvimento"}]
});
```

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
    - GET `/walls/:resource_id` (get a Wall)
* Post
    - GET `/posts/:id` (get a Post)
    - POST `/posts` (create a Post)
    - DELETE `/posts/:id` (delete a Post)
* Answer
    - GET `/answers/:id` (get an Answer)
    - POST `/answers` (create an Answer)
    - DELETE `/answers/:id` (delete an Answer)

### Entities' structure
The entities' structure returned by the Wally server are described below:

GET `/walls/core:space_1`
```js
{
  "wall" : {
    "id": 1,
    "links": [
      { "rel": "self", "href": "http://wall.redu.com.br/walls/1" }
    ]
    "resource_id": "core:space_1",
    "posts": [
      { "id" : 1, ..., answers: [ { "id" : 9, ... }, { "id" : 23, ... } ] },
      { "id" : 2, ..., answers: [ { "id" : 5, ... }, { "id" : 95, ... } ] },
    ]
  }
}
```

POST `/posts`
```js
{
  "post": {
    "id": 1,
    "origin_wall": 29,
    "created_at": "2011-02-06T08:50:14-02:00",
    "author": {
      "user_id": 123412,
      "name": "Tiago Ferreira Lima",
      "links": [
        { "rel" : "public_self", "href": "http://redu.com.br/pessoas/fltiago" },
        { "rel" : "self", "href": "http://redu.com.br/api/users/fltiago" }
      ],
      "thumbnails": [
        { "href": "http://s3.amazonaws.com/redu_uploads/users/avatars/4/thumb_32/Guilherme3x4%20copy.jpg?1323711306", "size": "32x32" }
      ]
      "role": {
        "name": "tutor"
      },
     },
    "answers": [],
    "content": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    "target" : {
      "entity_id": 15,
      "name" : "Disciplina Estado de Ânimo",
      "kind": "space",
      "links" : [
        { "rel" : "self", "href" : "http://redu.com.br/api/spaces/15" },
        { "rel" : "self_public", "href" : "http://redu.com.br/espacos/15" }
      ]
    },
    "contexts": [
      { "entity_id" : 12, "name" : "Curso Psicologia",
        "links" : [ { "rel" : "self", "href" : "http://redu.com.br/api/courses/12" }, { "rel" : "public_self", "href" : "http://redu.com.br/ufpe/cursos/curso-de-psicologia" } ] },
      { "entity_id" : 20, "name" : "UFPE",
        "links" : [ { "rel" : "self", "href" : "http://redu.com.br/api/space/20" }, { "rel" : "public_self", "href" : "http://redu.com.br/ufpe" } ] }
    ],
    "links": [
      { "rel" : "self", "href" : "http://wally.redu.com.br/posts/1"  }
    ]
    "action" : "comment",
    "rule": { "manage" : true },
  }
}
```

POST `/answers`
```js
{
  "answer": {
    "id": 82,
    "post_id": 1,
    "created_at": "2011-02-06T08:50:14-02:00",
    "author": {
      "user_id": 123412,
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
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    "links": [
      { "rel" : "self", "href" : "http://wally.redu.com.br/answers/82"  }
    ]
    "rule": { "manage" : true },
  }
}
```

## Next steps
1. Precompile handlebars templates

## Development setup
You do not need to install a thing, because all you need is already inside the repository.

We use [Mocha](http://visionmedia.github.com/mocha/) and [Chai](http://chaijs.com/) for tests, but don't worry because it's all set up. You just need to run the static files server (with jBundle) and open the `test/runner.html` and all tests will run on the browser and present to you a report with a clean layout.
```
# Start static files server
wally.js $ jbundle s
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

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the remote branch (`git push origin my-new-feature`)
5. Create a new Pull Request


<img src="https://github.com/downloads/redu/redupy/redutech-marca.png" alt="Redu Educational Technologies" width="300">

This project is maintained and funded by [Redu Educational Techologies](http://tech.redu.com.br).

# On the skin
If you want the great layout provided by [Redu Bootstrap](https://github.com/redu/ui-components)'s components, you should download it and you can use this structure:

```html
<html>
    <head>
      <script src="jquery-1.7.2.min.js"></script>
      <link rel="stylesheet" href="css/bootstrap-redu.css">
      <script src="js/vendor/modernizr.js"></script>

      <!-- Include templates (src/templates) here -->
      <script src="wally.min.js" type="text/javascript"></script>
    </head>
    <body>
      <!-- Do the Wally App initialization here -->
      <script src="js/vendor/jquery.tokeninput.js"></script>
      <script src="js/vendor/jquery.autosize.min.js"></script>
      <script src="js/vendor/placeholder-polyfill.min.js"></script>
      <script src="js/bootstrap-redu.js"></script>
      <script src="http://use.typekit.com/lpo4rgu.js"></script>
      <script>try{Typekit.load(); $(".typekit-badge").remove();}catch(e){}</script>
    </body>
</html>
```

# Copyright

Copyright (c) 2012 Redu Educational Technologies

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
