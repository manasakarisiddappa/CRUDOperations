export const CRUDReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: action.payload };

    case "SET_MODAL":
      return {
        ...state,
        modalType: action.modalType,
        modalData: action.modalData,
      };

    case "CLEAR_MODAL":
      return {
        ...state,
        modalType: null,
        modalData: null,
      };

    case "default":
      return state;
  }
};
