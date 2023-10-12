// For Add Item to Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// For Delete Item to Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const emptyCard = () => {
  return {
    type: "EMPTYCART",
    payload: null,
  };
};

export const loginUser = (email) => {
  return {
    type: "LOGINUSER",
    payload: email,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUTUSER",
    payload: false,
  };
};

export const getCurrentUser = () => {
  return {
    type: "GETUSER",
    payload: null,
  };
};
