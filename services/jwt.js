module.exports = (jwt) => {
  const token_service = {
    createToken: async (res, data) => {
      const secretKey = process.env.JWT_SIGN_SECRET;
      const token = jwt.sign(
        {
          email: data.email,
          id: data.id,
        },
        secretKey,
        {
          expiresIn: "24h",
        }
      );
      return res.cookie("token", token, {
        maxAge: 3600000,
        secure: false,
        httpOnly: true,
      });
    },
    verifyToken: async (token, secretKey) => {
      const decrypt = await jwt.verify(token, secretKey);
      return decrypt;
    },
  };
  return token_service;
};
