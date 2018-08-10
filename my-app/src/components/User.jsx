import React from 'react';
import Avatar from 'react-avatar';

const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const avatarStyle = {
    borderRadius: '50%',
    margin: '12px',
    overflow: 'hidden'
}

class User extends React.Component {
    render() {
        return <div>
            <div style={cardStyle}>
            <Avatar size="100" style={avatarStyle} name={this.props.name} src={this.props.avatarUrl} />
                Hello, {this.props.name}
            </div>
        </div>;
    }
}

export default User;