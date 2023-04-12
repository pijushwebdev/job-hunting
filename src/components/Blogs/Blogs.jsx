import React from 'react';

const Blogs = () => {
    return (
        <div className='my-5'>
            <div>
                <h2 className='font-bold text-xl text-purple-600'>Question 1: When should you use context API?</h2>
                <p className='ml-5 text-slate-500'> If our application supports multiple languages, we can use the Context API to provide the current language to all components that need it.
                    And If you need to check whether a user is authenticated in multiple components, you can use the Context API to provide the authentication status to all of them.
                </p>
            </div>

            <div>
                <h2 className='font-bold text-xl text-purple-600'>Question 2: What is a custom hook?</h2>
                <p className='ml-5 text-slate-500'> A custom hook is defined like any other JavaScript function, but it must start with the word "use" in order for React to recognize it as a hook. 
                The function can use any of the built-in hooks provided by React (such as useState, useEffect, and useContext) to manage state and side effects.
                </p>
            </div>


            <div>
                <h2 className='font-bold text-xl text-purple-600'>Question 3: When should you use context API?</h2>
                <p className='ml-5 text-slate-500'> When we create a reference using useRef, we get an object with a current property that holds the current value of the reference. we can update the value of the current property without causing a re-render of the component.
                </p>
            </div>


            <div>
                <h2 className='font-bold text-xl text-purple-600'>Question 1: When should you use context API?</h2>
                <p className='ml-5 text-slate-500'> In React, useMemo is a hook that allows us to memoize a function so that it only gets re-computed when its dependencies change.
                </p>
            </div>
        </div>
    );
};

export default Blogs;