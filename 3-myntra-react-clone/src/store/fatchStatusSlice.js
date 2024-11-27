import { createSlice} from "@reduxjs/toolkit"


const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState:{
    fetchDone: false, //FALSE: 'PANDING' AND TRUE: 'DONE'
    currentlyFetching: false,
  },
  reducers:{
    markFetchDone:(state)=>{
      return state.fetchDone= true;
    },
    markFetchingStarted:(state)=>{
      return state.currentlyFetching= true;
    },
    markFetchingFinished:(state)=>{
      return state.currentlyFetching= false;
    }
  }
  
})

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice

