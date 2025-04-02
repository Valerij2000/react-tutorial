import PropTypes from "prop-types";

export default function UserGreeting(props) {
  const welcomeMessage = <h2>Welcome {props.username}!</h2>;
  const loginPrompt = <h2>Please log in to continue</h2>;

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propetypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};
