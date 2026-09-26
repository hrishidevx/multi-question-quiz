const savedata = "attempt";
export const savelocalstorage = (answer, question) => {
  const data = getlocalstorage();
  data.push({
    questionId: question,
    selectedoption: answer,
  });
  localStorage.setItem(savedata, JSON.stringify(data));
};
export const getlocalstorage = () => {
  const data = JSON.parse(localStorage.getItem(savedata)) || [];
  return data;
};

// const savedata = "attempt";

// export const savelocalstorage = (answer, question) => {
//   const data = getlocalstorage();

//   const existingIndex = data.findIndex((item) => item.questionId === question);

//   if (existingIndex !== -1) {
//     data[existingIndex].selectedoption = answer;
//   } else {
//     data.push({
//       questionId: question,
//       selectedoption: answer,
//     });
//   }

//   localStorage.setItem(savedata, JSON.stringify(data));
// };

// export const getlocalstorage = () => {
//   const data = JSON.parse(localStorage.getItem(savedata)) || [];
//   return data;
// };
