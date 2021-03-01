import User from "../models/User";


const loginUser = async (props) => {
    try {
        const { username, password } = props;
        const user = await User.findBy({ username_eq: username, password_eq: password });
        return user;
    } catch (ex) {
        console.warn("ex", ex);
    }
}

export { loginUser };
