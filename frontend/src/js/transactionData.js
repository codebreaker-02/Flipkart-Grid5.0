const transactionsArray = [];
const objectTemplate = {
  amount: 5000,
  id: 14,
  offerId: 0,
  otherPartyAddress: "0x0000000000000000000000000000000000000000",
  otherPartyName: "Zero Account",
  transactionNature: "CREDIT",
  transactionType: "Minting",
};

for (let i = 0; i < 50; i++) {
  transactionsArray.push(objectTemplate);
}

export default transactionsArray;





