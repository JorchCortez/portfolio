# Portfolio Projects

Hi! this is a small portfolio of simple web projects

 - Expanding Cards
 - Progress Steps
 - Search bar

# File Management
All of the components are found in the components folder, this contain all what is needed to run it, the index above will show how to implement each of them on your site.
 


# Component Setup

This section specifies the setup required for any component

## Expanding cards
In order to work with the Expanding cards component we'll be using the following state variable setting it as 0 by default

 `const [activeCard, setActiveCard] =  useState(0);`

the cards on this section are created with an array of images and titles which can be declared as follow:
``` 
const  cards  = [
		{title:'first title', img:'https://source.unsplash.com/random/800x600'},
		{title:'second title', img:'https://source.unsplash.com/random/900x700'},
		{title:'third title', img:'https://source.unsplash.com/random/850x650'},
		{title:'forth title', img:'https://source.unsplash.com/random/975x775'},
		{title:'fifth title', img:'https://source.unsplash.com/random/950x750'}
	]
```
after declaring the images to use which can either be declared as shown above or can come from an external file/db etc. the component is used this way:

```
<ExpandingCard
	cards={cards}						//array of cards with titles
	activeCard={activeCard}				//current visible card
	setActive={setActive}				//method to change the active card
	autoScroll=false					//Toggles the autoscroll function of the tabs
/>
```
 

## Progress Steps
The progress steps component can be used to make forms, go through a playlist or a list of things; It also can wrap another component or form so that the information can be changed depending on the current step it is on.
This particular step tracker works in the following way:

we set an array of steps.

```
const  steps  = [1,2,3,4,5,6,7,8,9,10]
```
> **Quick tip:**  (this could be the icons, numbers etc. that will be shown on the component), in this case I'll just set up some numbers to show.

We will also have to add a state variable to control the current step we're in:
```
const [currStep, setCurrStep] =  useState(0);
```

after declaring the steps and state variable the component is used this way:
```
<ProgressSteps
	currentStep={currStep}								//sends the current step we're in
	setStep={setCurrStep}								//Function to update the step
	steps={steps}										//the steps to show
	cssWidth="800px">									//Desired with for the component
														//Can be in px, rem, precentage etc.
		<span>place any inner content here, forms or so</span>	//Inner content
</ProgressSteps>
```  
> **Quick tip:**  Having content inside the steps section is not required but... if you're using a step counter I assume you also want to have this right?


## Search bar
the search bar does not require any type of extras it's just an import to use 

> **Notice:** this component in particular does not come with the actual search function it is just the animated text box