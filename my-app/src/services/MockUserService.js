const users = [
    {
        id: 1,
        name: 'Jared Rewerts',
        email: 'jared.rewerts@edmonton.ca',
        avatarUrl: 'https://lh3.googleusercontent.com/-FEgEzyYNmvE/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaPL8_wUBJK3XKMAYeRdeAc5ylQhtA/mo/photo.jpg?sz=100'
    },
    {
        id: 2,
        name: 'Zhipeng Chang',
        email: 'zhipeng.chang@edmonton.ca',
        avatarUrl: 'https://lh3.googleusercontent.com/-FEgEzyYNmvE/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaPL8_wUBJK3XKMAYeRdeAc5ylQhtA/mo/photo.jpg?sz=46'
    }
]

class UserService {
    /**
     * This service provides access to users.
     * @param {String} endpoint The url to hit for users.
     */
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    /**
     * Gets a specific user by email.
     * @param {String} email The email address of the user.
     */
    get(email) {
        return users.find((element) => {
            return element.email === email;
        })
    }

    /**
     * Gets a specific user by id.
     * @param {Number} id The id of the user.
     */
    getById(id) {
        return users.find((element) => {
            return element.id === id;
        })
    }

    /**
     * Gets all users.
     */
    getAll() {
        return users;
    }
}

export default UserService;