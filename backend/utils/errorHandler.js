export const handleError = (res, error) => {
  console.error("Error:", error.message);
  res.status(500).json({ error: "Internal Server Error" });
};
