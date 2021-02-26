module.exports = (jwt) => {
  const token_service = {
    createToken: async (res, data) => {
      const secretKey = process.env.JWT_SIGN_SECRET;
      const token = jwt.sign(
        {
          email: data[0].email,
          id: data[0].id,
        },
        secretKey,
        {
          expiresIn: "24h",
        }
      );
      console.log(token);
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
