const jwt = require("jsonwebtoken");
const User = require("../Modal/UserModal");

const authMiddleware = async (req, res, next) => {
  try {
  const token = req.header("Authorization");
  console.log(!token);

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();

    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    req.token = token;
    req.user = userData;
    req.userID = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;
