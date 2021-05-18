// React.createElement() is used to create a React element, which
// is an object that React uses to render DOM elements

// "className" is used to add classes to elements. We can't use 
// "class" because it's a reserved word in JS to create classes.
const helloWorld = React.createElement(
  'h1', // HTML tag name
  { className: 'blue' }, // props 
  'Hello World!', // content of the element
)

// ReactDOM.render() transforms a React element (1st arg) into a
// DOM node and appends it to an existing DOM node (2nd arg)
ReactDOM.render(
  helloWorld, // React element
  document.getElementById('app'), // existing DOM node to append to
)

// We can define functional components that return a React element.
// props are the arguments that you pass into your component function.
// They change the way a component renders. Now we have a function 
// (component) that can be used anywhere in React where we need a 
// heading, and it can be customized with props.

// The style prop takes in an object. The keys to that object are
// css properties camelCased e.g. borderRadius
function Heading(props) {
  return React.createElement(
    'h1', 
    { 
      style: { color: props.color },
      key: props.id,
    }, 
    props.content
  )
}

// We can also unpack the properties from props
function Heading({ id, color, content }) {
  return React.createElement(
    'h1', 
    { 
      style: { color }, // { color: color }
      key: id,
    }, 
    content
  )
}

ReactDOM.render(
  Heading({ id: 1, color: 'yellow', content: 'Hello Universe!' }),
  document.getElementById('app'),
)

ReactDOM.render(
  React.createElement(
    'div',
    {
      style: {
        border: 'solid black 1px',
      }
    },
    // We can also pass an array of React elements as the content of
    // this React element
    [
      Heading({ id: 1, color: 'yellow', content: 'Hello Universe!' }),
      Heading({ id: 2, color: 'pink', content: 'Hello World!' }),
      Heading({ id: 3, color: 'orange', content: 'Hello Moon!' }),
    ],
  ),
  document.getElementById('app'),
)