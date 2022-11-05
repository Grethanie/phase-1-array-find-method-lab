const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

const superbowlWin = (records) => {
  const result = records.find((record) => record.result === "W");
  if (result) return result.year;
  return undefined;
};
