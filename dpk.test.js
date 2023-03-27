const { deterministicPartitionKey } = require("./dpk");
const crypto = require('crypto');

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe('deterministicPartitionKey', () => {
  it('should return a trivial partition key if event is null or undefined', () => {
    expect(deterministicPartitionKey(null)).toBe('0');
  });

  it('should use the event partition key if it exists', () => {
    const event = { partitionKey: '123' };
    expect(deterministicPartitionKey(event)).toBe('123');
  });

  it('should generate a deterministic partition key if the event does not have a partition key', () => {
    const event = { foo: 'bar' };
    const expectedPartitionKey = crypto.createHash('sha3-512').update(JSON.stringify(event)).digest('hex');
    expect(deterministicPartitionKey(event)).toBe(expectedPartitionKey);
  });

  it('should truncate the partition key if it is too long', () => {
    const event = { foo: 'bar' };
    const longKey = 'x'.repeat(300);
    const expectedPartitionKey = crypto.createHash('sha3-512').update(longKey).digest('hex');
    expect(deterministicPartitionKey({ ...event, partitionKey: longKey })).toBe(expectedPartitionKey);
  });
});

