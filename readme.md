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

**_Rotations_** Using CSS to rotate things
// useful when you are downloading something,
takes only one parameter for the degree of the item that you want to rotate.
div {
transform: rotate(45deg);
}

!! Use Autoprefixer extention to accommodate your current browser.
The prefixer do change so use the autoprefixer for the most current ones that will support the browser that you will be using.

**4 Transition properties**

1. tansition-duration => how long should the transition last? transition-duration: 1s;
2. transition-property => What properties should be transitioned? transition-property: background;
3. transition-timing-function => What's the "acceleration curve" for the transition?: transition-timing-function: ease-in; https://easings.net/
4. transition-delay

https://codepen.io/Colt/pen/GEbbLO

https://codepen.io/Colt/pen/MoMNEw

https://codepen.io/Colt/pen/JrqepQ

<Shorthand Transitions> Takes 4 properties and combine into one

transistion: background 1.5s ease-in 1;
background <property>
1.5s <duration>
ease-in <timing-function>
1 <delay>

.animated {
transition: transform 2s ease-out 1s, background-color 0.5s linear;

<!-- transition-property: transform;
transition-duration: 2s
transition-timing-function: cubic-bezier(0.050, 0.005, 0.000, 0.870)
transition-delay: 1s; -->

}

.box: hover{
transform: translateX(300px)
background-color:teal;
}

<What shoulld be transitioned?> ref: https://web.dev/animations-guide/
tanslate()
scale()
rotate()
opacity

https://codepen.io/Colt/pen/OjJbLo?editors=1100 >> Starter code
https://codepen.io/Colt/pen/WOjjJZ >> Finished Code sample