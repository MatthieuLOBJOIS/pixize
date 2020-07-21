const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const userData = {
  username: 'Jean',
  mail: 'jean@gmail.com',
  password: 'jean13',
  check: false,
};

describe('User Model Test', () => {
  beforeAll(async () => {
    await mongoose.connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
  });

  it('create & save user successfully', async () => {
    const hash = await bcrypt.hash(userData.password, 10);
    const validUser = new User({ ...userData, password: hash });
    const savedUser = await validUser.save();

    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe(userData.username);
    expect(savedUser.mail).toBe(userData.mail);
    expect(savedUser.password).toBe(hash);
    expect(savedUser.check).toBe(userData.check);
  });

  it('connected user successfully', async () => {
    const findUser = await User.findOne({ mail: userData.mail });
    const comparePassword = await bcrypt.compare(
      userData.password,
      findUser.password
    );

    // Object Id should be defined when successfully saved to MongoDB.
    expect(findUser._id).toBeDefined();
    expect(findUser.username).toBe(userData.username);
    expect(findUser.mail).toBe(userData.mail);
    expect(comparePassword).toBe(true);
    expect(findUser.check).toBe(userData.check);
  });
});
