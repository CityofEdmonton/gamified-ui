import React from 'react';

const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: '300px'
}

class User extends React.Component {
    render() {
        return <div>
            <div style={cardStyle}>
                Hello, {this.props.name}
            </div>
        </div>;
    }
}

export default User;