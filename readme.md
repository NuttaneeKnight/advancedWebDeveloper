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

<Example>

HTML
<!-- <h1>An Image Gallery</h1>
<div class="container">
<div class="item red">
	<img src="https://preview.ibb.co/gQbzQ5/colt_steele_firemarshall.jpg"/>
	<i class="fa fa-camera"></i>
</div>

<div class="item blue">
	<img src="http:i.imgur.com/AhCfhrF.jpg"/>
	<i class="fa fa-paw"></i>
</div>

<div class="item green">
	<img src="http://preview.ibb.co/kd9Esk/colt_steele_smugglerscave.jpg"/>
	<i class="fa fa-cloud"></i>
</div>
  
  </div> -->

CSS
<!-- @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
@import url('https://fonts.googleapis.com/css?family=Raleway:200');

h1 {
  text-align: center;
  font-family: Raleway;
  color: #34495e;
}
.container {
  display: flex;
  justify-content: center;
}


div.item {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  background: #000000;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

div.item * {
  box-sizing: border-box;
}

div.item img {
  max-width: 100%;
  vertical-align: top;
  height: 210px;
}

div.item i {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  font-size: 34px;
  color: #000000;
  width: 60px;
  height: 60px;
  line-height: 60px;
  background: #ffffff;
}

div.item a {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
}

div.item.blue {
  background-color: #34495e;
}
div.item.blue i {
  color: #34495e;
}
div.item.red {
  background-color: #e74c3c;
}
div.item.red i {
  color: #e74c3c;
}

div.item.green {
  background-color: #16a085;
}
div.item.green i {
  color: #16a085;
}

div.item:hover img {
  opacity: 0.3;
  filter: grayscale(100%) 
}

div.item * {
  transition: .5s ease-in-out;
}

/* has to start ans set the scale to o first then you can make it appear */

div.item i {
  transform: translate(-50%, -50%) scale(0);
  transition: transform 300ms 0ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

/* when you set translate it will reset so you have to do it again */

div.item:hover i {
  transform: translate(-50%, -50%) scale(1);
  transition: a;; 300ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275); 
} -->

**Keyframe Animations** 

- Transitions allow us to animate "a single state change"
- Keyframes allow for much more complex "multi-state animations"

Ex.Transitions

A ----------> B
Going from state A to B
- We can transition the color of A from orange to red
- We have the cotrol over the duration of how long does the transition take

Ex. Keyframes
Going from state A to state B to state C to state D to state E....
- For example the sun rises and sets
- have more constrols because we have more steps in between the transition (duration, interval)

Ex. of the interval break down into quarter and translate to CSS 
Rainbow text color with different sizes while transitioning 
- 0% color:red, font-size:20px
- 25% color:orange
- 50% color:yellow, font-size:40px
- 75% color:green
- 100% color:blue, font-size:20px

Make the rainbow text >> go to codepen https://codepen.io/Colt/pen/NvKjEx?editors=1100

Keyframe Syntax:
- Step 1: Define

 @keyframes rainbowtext{
  0% {
    color: red;
    font-size: 20px;
  },
  25% {
    color: orange;
  },
  50% {
    color: yellow;
    font-size: 40px;
  },
  75% {
    color: green;
  },
  100% {
    color: blue;
    font-size: 20px;
  }
 }
- Step 2: Apply the animation

p {
  animation-name: rainbowtext;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
}
