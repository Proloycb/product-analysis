import React from 'react';

const Blog = () => {
    return (
        <div className='md:h-screen'>
            <h1 className='text-6xl text-center font-bold'>Question Part</h1>
            <div className='ml-8'>
                <div>
                    <h3 className='text-4xl mb-5'>1.What is context api?</h3>
                    <p className='text-xl'> <span className='font-bold'>Answer: </span>React Context API is a way to create a context for global variables. Wrap parent component with context provider. Context api provide a value of the context as a prop such as object, array etc. This is the alternative system of "prop-drilling" or moving data from grandparent to child to parent and so on.Wrap child component use context consumer . Consumer follows the prop render pattern.</p>
                </div>
                <div className='mt-5'>
                    <h3 className='text-4xl mb-5'>2.What is semantic tag?</h3>
                    <p className='text-xl'><span className='font-bold'>Answer:</span>Semantic tags are describe meaning clearly. And describe their meaning in a human and machine readable way.Semantic tags such as 'header','footer','table' etc. are all clearly defines the content. Semantic tag are used in html body. Semantic tags now used on html5 such as 'article', 'aside', 'mark' etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;