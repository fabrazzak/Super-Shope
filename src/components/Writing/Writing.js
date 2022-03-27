import React from 'react';
import './Writing.css'

const Writing = () => {
    return (
        <div>
            <div className='writing'>
                <h1>How React Works</h1>
                <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps. To make website faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation</p>
            </div>
            <div className='writing' >
                <h1>Difference Between props and state</h1>
                <p>Props: Props are a JavaScript object that React components receive as an arbitrary input to produce a React element. They provide a data flow between the components. To pass the data (props) from one component to another as a parameter:

State: State is a JavaScript object which contains data that influence how the component looks at a certain point in time. The second part is what makes the state different compared to props. State is just a snapshot of the app in a time. Every user interaction with your app may lead to changes in the underlying state and in the whole UI as a result. State changes over the lifetime of a React component.</p>
            </div>
            <div className='writing' >
                <h1>How useState Works
</h1>
                <p>Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value. useState are asynchronous. They do not update the state immediately but have queues that are used to update the state object. This is done to improve the performance of the rendering of React components.</p>
            </div>
           
            
        </div>
    );
};

export default Writing;