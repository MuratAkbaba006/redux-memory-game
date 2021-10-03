import { createSlice} from "@reduxjs/toolkit";


// export const MemoryAdaptor = createEntityAdapter();
// export const MemorySelector = MemoryAdaptor.getSelectors((state)=>state.memory);

const MemorySlice = createSlice({
  name:'memory',
  initialState:{
    cards:[],
    currentCards:[],
    matchedCards:[],
    point:300
  },
  reducers:{
    addCards:(state,action)=>{
      state.cards.push(...action.payload);
    },
    addCurrentCard:(state,action)=>{
      state.currentCards.push(action.payload);
    },
    removeAllandUpdateCurrentCards:(state,action) => {
      state.currentCards=[];
      state.currentCards.push(action.payload);
    },
    addMatchedCard:(state,action)=>{
      state.matchedCards.push(...action.payload);
    },
    addPoint:(state,action)=>{
      state.point += 50;
    },
    removePoint:(state)=>{
      state.point -= 10;
    },
    resetState:(state,action)=>{
      state.cards=[];
      state.currentCards=[];
      state.matchedCards=[];
      state.point=300;
    }
  }
})


export const {addCards, addCurrentCard,removeAllandUpdateCurrentCards,addMatchedCard,addPoint,removePoint,resetState} = MemorySlice.actions;
export default MemorySlice.reducer;