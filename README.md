Another javascript based CAD
============================

This project is inspired by OpenSCAD and OpenJSCAD. Currently it is in very early stage of development, not ready to be used by anyone yet. If you are intererested in this idea, feel free to fork or contribute.

One of the fundermental problem preventing maker communities to imporove design and share ideas like opensource software communities is most of the CAD software currently available does not support version control well. To support the common version control software that most opensource communities use, the CAD has to be text based. However the current text based CAD availble suffers several issues:

* Once the design become slightly more complicated, creating elements based on geometries of existing elements becomes non-trivial, it often involves complicated calculation which the code suppose to do itself. This also limits the ability for users to make measurements of the design easily enough.
* Code reusability, and/or lack of a strong standard library. OpenSCAD only offers limited basic shapes, this is not as useful in real life maker design. If a coding standard can be defined, and a basic yet powerful standard library can be created, creating physical design should be as fun simple and reusable as creating software.
* Fancy in browser editing is not necessary, user should be free to chose whatever text editor they wish.

This project does not aim to create a whole IDE like experience, rather, it should be trying to define a way to use javascript to define 3D shapes, and loosely link the text editor's output to a rendering engine and a export engine. The current code base is a shameless copy of the javascript cgs project (https://evanw.github.io/csg.js/) adapted to use es6 and flow for type checking. Strongly typed javascript code would be benefecial in this case I believe, as it offers better static checking during development. I might consider removing it after the project consolidates to a more stable and well tested form.

This project is under [MIT license](http://www.opensource.org/licenses/mit-license.php).
