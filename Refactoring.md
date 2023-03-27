# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

By breaking down complex code into smaller and more specialized functions, it's easier to read and understand. This helps to improve code readability and makes it easier for other developers to maintain the code.

I've separated the logic into three helper functions:

generatePartitionKey: This function generates a partition key from an event. If the event has a partitionKey property, it uses that property as the partition key. Otherwise, it generates a partition key from the JSON representation of the event.

ensureString: This function ensures that its argument is a string. If the argument is not a string, it converts it into a JSON string.

truncatePartitionKey:  This function truncates the partition key if its length is greater than MAX_PARTITION_KEY_LENGTH. To do this, it calculates the SHA-3-512 hash of the partition key until its length is less than or equal to MAX_PARTITION_KEY_LENGTH.

The deterministicPartitionKey function uses these helper functions to generate a deterministic partition key from an event. If the event is null or undefined, it returns a trivial partition key.




