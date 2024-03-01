export const JWT_COOKIE_OPTIONS = {
  maxAge: 86400000, // 24 hours
  httpOnly: true,
  secure: true, // Set to true if using HTTPS
  sameSite: "strict",
};
