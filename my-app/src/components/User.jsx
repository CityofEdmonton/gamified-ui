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

const descStyle = {
    textAlign: 'left',
    margin: '16px 8px'
}

class User extends React.Component {
    render() {
        return <div>
            <div style={cardStyle}>
                <Avatar size="100" style={avatarStyle} name={this.props.name} src={this.props.avatarUrl} />
                <h3>Hello, {this.props.name}</h3>
                <div style={descStyle}>There is a ton of info about this individual! Text goes here and fills up space so it looks nice.</div>
            </div>
        </div>;
    }
}

export default User;