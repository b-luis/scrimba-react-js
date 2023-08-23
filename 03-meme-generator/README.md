# **Meme Generator Project Overview**

In this section, there are a lot of topics that are introduced such as: state, event listeners, conditional rendering (short circuiting), forms and side effects.

## **State**
State refers to the current condition or data of your application at a given moment. 

In this project, we used state to keep track of our meme images as well as user input text. 
React's useState hook enables us to manage and update state in a functional component.

```
const [meme, setMeme] = useState({
  topText: '',
  bottomText: '',
  randomImage: 'http://i.imgflip.com/1bij.jpg'
});
```
> Initial state when the app loads.

```
const [allMemes, setAllMemes] = useState([])
```
> allMemes state stores the images and its other details fetched from an API

## **Event listeners**
Event listeners are mechanisms in JavaScript that allows program to respond to user interactions or other events. 

In this Meme Generator project, we used event listeners to capture actions like button clicks, form submissions, or input changes. These listeners trigger specific functions or actions in response to user interactions.

```
const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeImageURL = allMemes[randomNumber].url;
        setMeme(prevMeme => ({...prevMeme, randomImage: newMemeImageURL}));
    }

.....
<button onClick={getMemeImage}></button>
```
> When button is clicked, a random image is generated which is taken from an API.

```
  const handleChange=(event) => {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
```
> Input changes


## **Conditional Rendering**
Conditional rendering allows you to display different content or components based on certain conditions. 
This is particularly useful when you want to show or hide elements in response to user actions. 

## **Forms**
Forms are user interfaces that gather data from users. 
In this project, we used a form to collect user input for customizing the meme. 
Forms can include various input elements like text fields, checkboxes, radio buttons, and more.


### _Controlled Forms and the `value` Property_

In React, a controlled form is a form where the values of the form elements are controlled by the component's state. 
This means that the component's state holds the current values of the form inputs, and you update these values using the setMeme function. 
The value attribute of form elements is set to the corresponding state value.

```
const [meme, setMeme] = useState({
  topText: '',
  bottomText: '',
  randomImage: 'http://i.imgflip.com/1bij.jpg'
})
```
> state and setter function

```
  <input
      type="text" 
      placeholder="Top text" 
      name="topText"
      value={topText}
      onChange={handleChange}
  />
  <input 
    type="text" 
    placeholder="Bottom text" 
    name="bottomText"
    value={bottomText}
    onChange={handleChange}
  />
```
> input elements that have a value property to make it controlled form

How controlled forms work:
1. You set the value property of form elements to corresponding state variables.
2. You provide onChange event handlers for these elements that update the associated state variables when the user interacts with the form. This way, the form element values are always synchronized with the component's state.

Controlled forms have several advantages, including easier data handling, validation, and predictable behavior. They also enable you to perform actions based on user input and keep your application's UI in sync with its data.

## **Side effects**

Side effects in React refer to actions that are triggered as a result of a state change or a component's lifecycle event. In this project, we used the useEffect hook to manage side effects such as fetching memes from an API when the component mounts.

```
useEffect(() => {
  async function getMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    setAllMemes(data);
  }
getMemes();
}, []);
```
> The code utilizes the useEffect hook within a React functional component. This hook is responsible for managing side effects, such as data fetching.
> Inside the useEffect, an asynchronous function named getMemes is defined.
>
> This function uses the fetch API to retrieve meme data from the specified API endpoint. The fetched data is then parsed as JSON using the await res.json() statement. The component's state is updated with the obtained data through the setAllMemes(data) call.
>
> The useEffect is configured to execute this process once, immediately after the component's initial rendering, due to the empty dependency array [] passed as its second argument. In essence, this code snippet fetches meme data from the API and integrates it into the component's state, enhancing the component's interactivity and content.






