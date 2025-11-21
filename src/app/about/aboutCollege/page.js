import Link from 'next/link';
import React from 'react';

const AboutCollege = () => {
    return (
        <div>
            <h1>About College Page</h1>
            <Link href="/" className="text-linked-500 hover:underline">Back Home</Link>
            <br/>
            <Link href="/about" className="text-linked-500 hover:underline">Back About</Link>
            
        </div>
    );
};

export default AboutCollege;