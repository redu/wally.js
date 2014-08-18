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
2. Configure jbundle to insert filenames in the beginning of each file

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
      <link rel="stylesheet" href="css/wally.css">
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

# Licença Utilizada

O pacote global de software Redu tem direitos reservados para vários autores registrado junto ao INPI. Ele é um Software Livre e de Código Aberto e tudo isso é fornecido sob os termos da licença [GNU General Public License versão 2](http://www.gnu.org/licenses/gpl-2.0.html) publicada pela [Free Software Foundation](http://www.fsf.org/).

Redu e a documentação do Redu são distribuídos na esperança de que eles vão ser útil, mas SEM NENHUMA GARANTIA; sem mesmo a garantia implícita de COMERCIALIZAÇÃO ou ADEQUAÇÃO A UM DETERMINADO FIM. Consulte a Licença Pública Geral GNU abaixo para mais detalhes.

```
GNU GENERAL PUBLIC LICENSE

Version 2, June 1991

Copyright (C) 1989, 1991 Free Software Foundation, Inc.  
51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.
Preamble

The licenses for most software are designed to take away your freedom to share and 
change it. By contrast, the GNU General Public License is intended to guarantee your 
freedom to share and change free software--to make sure the software is free for all 
its users. This General Public License applies to most of the Free Software Foundation's 
software and to any other program whose authors commit to using it. (Some other Free 
Software Foundation software is covered by the GNU Lesser General Public License instead.) 
You can apply it to your programs, too.

When we speak of free software, we are referring to freedom, not price. Our General Public 
Licenses are designed to make sure that you have the freedom to distribute copies of free
software (and charge for this service if you wish), that you receive source code or can get 
it if you want it, that you can change the software or use pieces of it in new free programs;
and that you know you can do these things.

To protect your rights, we need to make restrictions that forbid anyone to deny you these 
rights or to ask you to surrender the rights. These restrictions translate to certain 
responsibilities for you if you distribute copies of the software, or if you modify it.

For example, if you distribute copies of such a program, whether gratis or for a fee, you must
give the recipients all the rights that you have. You must make sure that they, too, receive
or can get the source code. And you must show them these terms so they know their rights.

We protect your rights with two steps: (1) copyright the software, and (2) offer you this license
which gives you legal permission to copy, distribute and/or modify the software.

Also, for each author's protection and ours, we want to make certain that everyone understands 
that there is no warranty for this free software. If the software is modified by someone else and 
passed on, we want its recipients to know that what they have is not the original, so that any 
problems introduced by others will not reflect on the original authors' reputations.

Finally, any free program is threatened constantly by software patents. We wish to avoid the danger
that redistributors of a free program will individually obtain patent licenses, in effect making 
the program proprietary. To prevent this, we have made it clear that any patent must be licensed
for everyone's free use or not licensed at all.

The precise terms and conditions for copying, distribution and modification follow.

TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. This License applies to any program or other work which contains a notice placed by the copyright
holder saying it may be distributed under the terms of this General Public License. The "Program",
below, refers to any such program or work, and a "work based on the Program" means either the Program
or any derivative work under copyright law: that is to say, a work containing the Program or a portion
of it, either verbatim or with modifications and/or translated into another language. (Hereinafter,
translation is included without limitation in the term "modification".) Each licensee is addressed as "you".

Activities other than copying, distribution and modification are not covered by this License; they 
are outside its scope. The act of running the Program is not restricted, and the output from the 
Program is covered only if its contents constitute a work based on the Program (independent of having
been made by running the Program). Whether that is true depends on what the Program does.

1. You may copy and distribute verbatim copies of the Program's source code as you receive it, in any
medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright
notice and disclaimer of warranty; keep intact all the notices that refer to this License and to the 
absence of any warranty; and give any other recipients of the Program a copy of this License along 
with the Program.

You may charge a fee for the physical act of transferring a copy, and you may at your option offer 
warranty protection in exchange for a fee.

2. You may modify your copy or copies of the Program or any portion of it, thus forming a work based 
on the Program, and copy and distribute such modifications or work under the terms of Section 1 above, 
provided that you also meet all of these conditions:

a) You must cause the modified files to carry prominent notices stating that you changed the files and 
the date of any change.
b) You must cause any work that you distribute or publish, that in whole or in part contains or is derived
from the Program or any part thereof, to be licensed as a whole at no charge to all third parties under 
the terms of this License.
c) If the modified program normally reads commands interactively when run, you must cause it, when started 
running for such interactive use in the most ordinary way, to print or display an announcement including 
an appropriate copyright notice and a notice that there is no warranty (or else, saying that you provide
a warranty) and that users may redistribute the program under these conditions, and telling the user how
to view a copy of this License. (Exception: if the Program itself is interactive but does not normally 
print such an announcement, your work based on the Program is not required to print an announcement.)
These requirements apply to the modified work as a whole. If identifiable sections of that work are not 
derived from the Program, and can be reasonably considered independent and separate works in themselves, 
then this License, and its terms, do not apply to those sections when you distribute them as separate works.
But when you distribute the same sections as part of a whole which is a work based on the Program, the 
distribution of the whole must be on the terms of this License, whose permissions for other licensees 
extend to the entire whole, and thus to each and every part regardless of who wrote it.

Thus, it is not the intent of this section to claim rights or contest your rights to work written entirely
by you; rather, the intent is to exercise the right to control the distribution of derivative or collective
works based on the Program.

In addition, mere aggregation of another work not based on the Program with the Program (or with a work based
on the Program) on a volume of a storage or distribution medium does not bring the other work under the scope 
of this License.

3. You may copy and distribute the Program (or a work based on it, under Section 2) in object code or 
executable form under the terms of Sections 1 and 2 above provided that you also do one of the following:

a) Accompany it with the complete corresponding machine-readable source code, which must be distributed
under the terms of Sections 1 and 2 above on a medium customarily used for software interchange; or,
b) Accompany it with a written offer, valid for at least three years, to give any third party, for a charge
no more than your cost of physically performing source distribution, a complete machine-readable copy of
the corresponding source code, to be distributed under the terms of Sections 1 and 2 above on a medium 
customarily used for software interchange; or,
c) Accompany it with the information you received as to the offer to distribute corresponding source code.
(This alternative is allowed only for noncommercial distribution and only if you received the program in 
object code or executable form with such an offer, in accord with Subsection b above.)
The source code for a work means the preferred form of the work for making modifications to it. For an 
executable work, complete source code means all the source code for all modules it contains, plus any 
associated interface definition files, plus the scripts used to control compilation and installation of
the executable. However, as a special exception, the source code distributed need not include anything 
that is normally distributed (in either source or binary form) with the major components (compiler, kernel,
and so on) of the operating system on which the executable runs, unless that component itself accompanies
the executable.

If distribution of executable or object code is made by offering access to copy from a designated place,
then offering equivalent access to copy the source code from the same place counts as distribution of the
source code, even though third parties are not compelled to copy the source along with the object code.

4. You may not copy, modify, sublicense, or distribute the Program except as expressly provided under this
License. Any attempt otherwise to copy, modify, sublicense or distribute the Program is void, and will 
automatically terminate your rights under this License. However, parties who have received copies, or rights,
from you under this License will not have their licenses terminated so long as such parties remain in 
full compliance.

5. You are not required to accept this License, since you have not signed it. However, nothing else grants
you permission to modify or distribute the Program or its derivative works. These actions are prohibited by 
law if you do not accept this License. Therefore, by modifying or distributing the Program (or any work 
based on the Program), you indicate your acceptance of this License to do so, and all its terms and 
conditions for copying, distributing or modifying the Program or works based on it.

6. Each time you redistribute the Program (or any work based on the Program), the recipient automatically 
receives a license from the original licensor to copy, distribute or modify the Program subject to these 
terms and conditions. You may not impose any further restrictions on the recipients' exercise of the rights 
granted herein. You are not responsible for enforcing compliance by third parties to this License.

7. If, as a consequence of a court judgment or allegation of patent infringement or for any other reason 
(not limited to patent issues), conditions are imposed on you (whether by court order, agreement or otherwise)
that contradict the conditions of this License, they do not excuse you from the conditions of this License. 
If you cannot distribute so as to satisfy simultaneously your obligations under this License and any other 
pertinent obligations, then as a consequence you may not distribute the Program at all. For example, if a 
patent license would not permit royalty-free redistribution of the Program by all those who receive copies 
directly or indirectly through you, then the only way you could satisfy both it and this License would be
to refrain entirely from distribution of the Program.

If any portion of this section is held invalid or unenforceable under any particular circumstance, the balance
of the section is intended to apply and the section as a whole is intended to apply in other circumstances.

It is not the purpose of this section to induce you to infringe any patents or other property right claims or
to contest validity of any such claims; this section has the sole purpose of protecting the integrity of the 
free software distribution system, which is implemented by public license practices. Many people have made 
generous contributions to the wide range of software distributed through that system in reliance on consistent
application of that system; it is up to the author/donor to decide if he or she is willing to distribute 
software through any other system and a licensee cannot impose that choice.

This section is intended to make thoroughly clear what is believed to be a consequence of the rest of this License.

8. If the distribution and/or use of the Program is restricted in certain countries either by patents or by 
copyrighted interfaces, the original copyright holder who places the Program under this License may add an
explicit geographical distribution limitation excluding those countries, so that distribution is permitted
only in or among countries not thus excluded. In such case, this License incorporates the limitation as if 
written in the body of this License.

9. The Free Software Foundation may publish revised and/or new versions of the General Public License from 
time to time. Such new versions will be similar in spirit to the present version, but may differ in detail
to address new problems or concerns.

Each version is given a distinguishing version number. If the Program specifies a version number of this
License which applies to it and "any later version", you have the option of following the terms and conditions 
either of that version or of any later version published by the Free Software Foundation. If the Program does
not specify a version number of this License, you may choose any version ever published by the Free Software
Foundation.

10. If you wish to incorporate parts of the Program into other free programs whose distribution conditions 
are different, write to the author to ask for permission. For software which is copyrighted by the Free Software
Foundation, write to the Free Software Foundation; we sometimes make exceptions for this. Our decision will be
guided by the two goals of preserving the free status of all derivatives of our free software and of promoting 
the sharing and reuse of software generally.

NO WARRANTY

11. BECAUSE THE PROGRAM IS LICENSED FREE OF CHARGE, THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED
BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE
PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE 
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY 
AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL 
NECESSARY SERVICING, REPAIR OR CORRECTION.

12. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER
PARTY WHO MAY MODIFY AND/OR REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING
ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM
(INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD 
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS 
BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

END OF TERMS AND CONDITIONS

How to Apply These Terms to Your New Programs

If you develop a new program, and you want it to be of the greatest possible use to the public, the best way 
to achieve this is to make it free software which everyone can redistribute and change under these terms.

To do so, attach the following notices to the program. It is safest to attach them to the start of each source
file to most effectively convey the exclusion of warranty; and each file should have at least the "copyright" 
line and a pointer to where the full notice is found.

one line to give the program's name and an idea of what it does.
Copyright (C) yyyy  name of author

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
Also add information on how to contact you by electronic and paper mail.

If the program is interactive, make it output a short notice like this when it starts in an interactive mode:

Gnomovision version 69, Copyright (C) year name of author
Gnomovision comes with ABSOLUTELY NO WARRANTY; for details
type `show w'.  This is free software, and you are welcome
to redistribute it under certain conditions; type `show c' 
for details.
The hypothetical commands `show w' and `show c' should show the appropriate parts of the General Public License.
Of course, the commands you use may be called something other than `show w' and `show c'; they could even be
mouse-clicks or menu items--whatever suits your program.

You should also get your employer (if you work as a programmer) or your school, if any, to sign a "copyright
disclaimer" for the program, if necessary. Here is a sample; alter the names:

Yoyodyne, Inc., hereby disclaims all copyright
interest in the program `Gnomovision'
(which makes passes at compilers) written 
by James Hacker.

signature of Ty Coon, 1 April 1989
Ty Coon, President of Vice
This General Public License does not permit incorporating your program into proprietary programs. If your program
is a subroutine library, you may consider it more useful to permit linking proprietary applications with the 
library. If this is what you want to do, use the GNU Lesser General Public License instead of this License.
```
