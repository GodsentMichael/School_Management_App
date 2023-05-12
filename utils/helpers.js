const bcrypt = require('bcryptjs');
//hash Password
exports.hashPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword;
}

exports.isPWMatched = async (password, hashedPassword) =>{
    return await bcrypt.compare(password, hashedPassword)
}