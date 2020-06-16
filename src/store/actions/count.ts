export const increase = (count: any) => {
  return {
    type: "INCREASE",
    count,
  };
};

export const decrease = (count: any) => {
  return {
    type: "DECREASE",
    count,
  };
};
