import Link from 'next/link';
import React from 'react';

const AboutStudent = () => {
    return (
        <div>
            <h1>About Student Page</h1>
<Link href="/" className="text-linked-500 hover:underline">Back Home</Link>
<br/>
<Link href="/about" className="text-linked-500 hover:underline">Back About</Link>





        </div>
    );
};

export default AboutStudent;