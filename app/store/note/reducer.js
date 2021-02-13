import { GET_NOTES, ADD_NOTE } from "./actionTypes";

const initialState = {
  notes: [{
    id: 1,
    date: "01 Jan 2021",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat ex eu rhoncus malesuada. Mauris ut sollicitudin arcu.. ",
    theme: "ssyxcxy",
    isPrivate: true
  },
  {
    id: 2,
    date: "10 Jan 2021",
    message: "Lorem ipsum dolor sit amet, consec teturconsecte turcons ecteturconsectetur consectetur consectetur consectetur adipiscing elit. Mauris placerat ex eu rhoncus malesuada. Mauris ut sollicitudin arcu.. ",
    theme: "yxcyxc",
    private: true
  },
  {
    id: 3,
    date: "25 Febr 2021",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat ex eu rhoncus malesuada. Mauris ut sollicitudin arcu.. ",
    theme: "b vcfbd",
    private: false
  }, {
    id: 4,
    date: "01 Jan 2021",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat ex eu rhoncus malesuada. Mauris ut sollicitudin arcu.. ",
    theme: "ssyxcxy",
    isPrivate: true
  },
  {
    id: 5,
    date: "10 Jan 2021",
    message: "Lorem ipsum dolor sit amet, consec teturconsecte turcons ecteturconsectetur consectetur consectetur consectetur adipiscing elit. Mauris placerat ex eu rhoncus malesuada. Mauris ut sollicitudin arcu.. ",
    theme: "yxcyxc",
    private: true
  },
  {
    id: 6,
    date: "25 Febr 2021",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat ex eu rhoncus malesuada. Mauris ut sollicitudin arcu.. ",
    theme: "b vcfbd",
    private: false
  }]
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_NOTES:
      return state.notes;
    case ADD_NOTE:
      const notes = state.notes;
      return { ...state, notes: [...notes, payload] };
    default:
      return state;
  }
}

export default reducer;
