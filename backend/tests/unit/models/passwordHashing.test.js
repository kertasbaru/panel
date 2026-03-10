const bcrypt = require('bcryptjs');

// Test bcrypt hashing directly (no DB required)
describe('Password Hashing with bcrypt salt 10', () => {
  const SALT_ROUNDS = 10;

  test('should hash a password with salt rounds 10', async () => {
    const password = 'testpassword123';
    const hashed = await bcrypt.hash(password, SALT_ROUNDS);

    expect(hashed).toBeDefined();
    expect(hashed).not.toBe(password);
    // bcrypt hashes start with $2a$ or $2b$ followed by salt rounds
    expect(hashed).toMatch(/^\$2[aby]\$10\$/);
  });

  test('should verify a correct password against its hash', async () => {
    const password = 'securePassword!@#';
    const hashed = await bcrypt.hash(password, SALT_ROUNDS);

    const isValid = await bcrypt.compare(password, hashed);
    expect(isValid).toBe(true);
  });

  test('should reject an incorrect password against a hash', async () => {
    const password = 'correctPassword';
    const wrongPassword = 'wrongPassword';
    const hashed = await bcrypt.hash(password, SALT_ROUNDS);

    const isValid = await bcrypt.compare(wrongPassword, hashed);
    expect(isValid).toBe(false);
  });

  test('should generate different hashes for the same password', async () => {
    const password = 'samePassword123';
    const hash1 = await bcrypt.hash(password, SALT_ROUNDS);
    const hash2 = await bcrypt.hash(password, SALT_ROUNDS);

    expect(hash1).not.toBe(hash2);
    // Both should still validate
    expect(await bcrypt.compare(password, hash1)).toBe(true);
    expect(await bcrypt.compare(password, hash2)).toBe(true);
  });

  test('should use exactly 10 salt rounds', async () => {
    const password = 'testSaltRounds';
    const hashed = await bcrypt.hash(password, SALT_ROUNDS);

    // Extract salt rounds from hash: $2a$XX$ where XX is the rounds
    const rounds = parseInt(hashed.split('$')[2], 10);
    expect(rounds).toBe(10);
  });

  test('should hash PIN with salt rounds 10', async () => {
    const pin = '123456';
    const hashed = await bcrypt.hash(pin, SALT_ROUNDS);

    expect(hashed).toMatch(/^\$2[aby]\$10\$/);
    expect(await bcrypt.compare(pin, hashed)).toBe(true);
    expect(await bcrypt.compare('654321', hashed)).toBe(false);
  });
});

describe('User model password methods', () => {
  // Mock the User model methods without needing Sequelize/DB
  const createMockUser = async (password, pin = null) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPin = pin ? await bcrypt.hash(pin, 10) : null;

    return {
      password: hashedPassword,
      pin: hashedPin,
      comparePassword: async function (candidatePassword) {
        return bcrypt.compare(candidatePassword, this.password);
      },
      comparePin: async function (candidatePin) {
        return bcrypt.compare(candidatePin, this.pin);
      },
      toJSON: function () {
        return { id: 1, name: 'Test', email: 'test@test.com', password: this.password, pin: this.pin };
      },
      toSafeObject: function () {
        const { password, pin, ...safe } = this.toJSON();
        return safe;
      },
    };
  };

  test('comparePassword should return true for correct password', async () => {
    const user = await createMockUser('myPassword123');
    expect(await user.comparePassword('myPassword123')).toBe(true);
  });

  test('comparePassword should return false for incorrect password', async () => {
    const user = await createMockUser('myPassword123');
    expect(await user.comparePassword('wrongPassword')).toBe(false);
  });

  test('comparePin should return true for correct PIN', async () => {
    const user = await createMockUser('password', '123456');
    expect(await user.comparePin('123456')).toBe(true);
  });

  test('comparePin should return false for incorrect PIN', async () => {
    const user = await createMockUser('password', '123456');
    expect(await user.comparePin('654321')).toBe(false);
  });

  test('toSafeObject should exclude password and pin', async () => {
    const user = await createMockUser('password', '123456');
    const safe = user.toSafeObject();

    expect(safe.password).toBeUndefined();
    expect(safe.pin).toBeUndefined();
    expect(safe.id).toBe(1);
    expect(safe.name).toBe('Test');
    expect(safe.email).toBe('test@test.com');
  });
});
