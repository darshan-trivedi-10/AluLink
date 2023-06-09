import jwt from 'jsonwebtoken';

export const generateToken = (_id) => {
    const token = jwt.sign({
        id: _id
    }, process.env.SCREATE_KEY, { expiresIn: '720h' });

    return token;
}