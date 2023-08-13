import React from 'react';
import { Link } from 'react-router-dom';

const TermsNCondition = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint natus harum ullam eaque maiores, distinctio ipsam a, adipisci obcaecati sunt tempora eum et neque illum consequatur saepe! Non totam magnam recusandae eaque nostrum ullam omnis obcaecati laboriosam in facere fuga iusto repudiandae quaerat consectetur, ab ipsa ex optio porro fugit.</p>
            <p>Go back to register <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default TermsNCondition;