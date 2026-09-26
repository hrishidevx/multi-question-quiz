import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../../constant/question";

const quizslice = createSlice({
  name: "quiztype",
  initialState: {
    filteredQuestion: [],
    selectedAnswer: [],
  },
  reducers: {
    setFilteredQuestion: (state) => {
      let queType = localStorage.getItem("questionType");
      if (queType) {
        state.filteredQuestion = questions.filter(
          (item) => item.type == queType,
        );
      }
    },
    setSelectedAnswer: (state, action) => {
      const { answer, questionId } = action.payload;
      let data = [...state.selectedAnswer];
      console.log("sd", data);
      if (data.some((item) => item.questionId == questionId)) {
        data = data.map((item) => {
          if (item.questionId == questionId) {
            return { ...item, selectedoption: answer };
          }
          return item;
        });
      } else {
        data.push({
          questionId: questionId,
          selectedoption: answer,
        });
      }
      state.selectedAnswer = data;
    },
  },
});

export const { setFilteredQuestion, setSelectedAnswer } = quizslice.actions;
export default quizslice.reducer;
