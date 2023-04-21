This is the Advanced Web Development in JS

**_CSS Animation_**

Most common Pseudo classes that trigger animation

1. Hover
   /_ Any button over which the user's pointer is hovering _/

button:hover {
color: blue;
}

2. Focus
   Trigger when an element "reveives focus" tab key and the action stays

input:focus {
color: red;
}

3. Active
   Triggers when an element is "being activated by user" cleck or tab key and it clears

button: active {
color: green;
}

**Sample Code for 3D animation button effect**
Give it a try! and do not for get to link your css to the index.html 😁

body {
background: #fcd04b;
font-family: 'Lato';
color: white;
}

h1 {
font-weight: 300;
text-align:center;
}

.btn {
outline: none;
border: none;
cursor: pointer;
display: block;
position: relative;
background: #fcad26;
font-size: 16px;
font-weight: 300;
color: white;
text-transform: uppercase;
letter-spacing: 2px;
padding: 25px 80px;
margin: 0 auto;
box-shadow: 0 6px #efa424;
border-radius: 20px;
}

.btn:hover {
box-shadow: 0 4px #efa424;
top: 2px;
}

.btn:active {
box-shadow: 0 0 #efa424;
top: 6px;
}
