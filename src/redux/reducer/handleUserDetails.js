const user = {
  userEmail: "",
  isLoggedIn: false,
};
const handleUserDetails = (state = user, action) => {
  const userDeets = action.payload;
  const isLoggedInUser = state.isLoggedIn;
  switch (action.type) {
    case "LOGINUSER":
      if (!isLoggedInUser) {
        return { ...state, userEmail: userDeets, isLoggedIn: true };
      }

      break;
    case "GETUSER":
      return { ...state };

    case "LOGOUTUSER":
      if (isLoggedInUser) {
        const newState = { userEmail: "", isLoggedIn: false };
        return { ...state, ...newState };
      }
      break;

    default:
      return state;
      break;
  }
};

export default handleUserDetails;
