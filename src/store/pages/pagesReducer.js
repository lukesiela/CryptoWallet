import { CHANGE_PAGE } from "./actions";
import { pageMappingConfig } from "./pageMapping";

const initialState = {
  pages: [],
  activePage: pageMappingConfig["login"],
};

export default function pages(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        activePage: pageMappingConfig[action.activePage],
      };
    default:
      return state;
  }
}
