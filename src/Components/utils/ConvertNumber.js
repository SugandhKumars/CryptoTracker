export const ConvertNumber = (amount) => {
  let formatedAmount = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatedAmount;
};

export const ConvertNumberInRupee = (amount) => {
  let formatedAmount = amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatedAmount;
};
