const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

function ensureString(value) {
  console.log('me llamaron', value, typeof value);

  if (typeof value !== "string") {
    return JSON.stringify(value);
  }
  return value;
}

function generatePartitionKey(event) {
  if (event.partitionKey) {
    return event.partitionKey;
  }
  const data = JSON.stringify(event);
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

function truncatePartitionKey(partitionKey) {
  let truncatedKey = partitionKey;
  while (truncatedKey.length > MAX_PARTITION_KEY_LENGTH) {
    truncatedKey = crypto.createHash("sha3-512").update(truncatedKey).digest("hex");
  }
  return truncatedKey;
}

exports.deterministicPartitionKey = (event) => {
  const candidate = event ? generatePartitionKey(event) : TRIVIAL_PARTITION_KEY;
  const strCandidate = ensureString(candidate);
  const truncatedCandidate = truncatePartitionKey(strCandidate);
  return truncatedCandidate;
};