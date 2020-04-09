// Higher Order Component (HOC) - A component (HOC) that renders another component
// Goal of HOC is to reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// const WithAdminWaring = (WrapperComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private info. Please don't share!</p>}
//             <WrapperComponent {...props} />
//         </div>
//     );
// };

// const AdminInfo = WithAdminWaring(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));


const requireAuthentication = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrapperComponent {...props}/>) : (<p>Please login to view the info</p>)}
            
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));