type NestedValue =  | string | number | boolean | null| NestedValue[]| { [key: string]: NestedValue };

function replaceKeysAndConvertStrings<T extends NestedValue>(input: T): T {
  if (Array.isArray(input)) {
    return input.map((item) => replaceKeysAndConvertStrings(item)) as T;
  }

  if (typeof input === "object" && input !== null) {
    const transformedObject: { [key: string]: NestedValue } = {};

    for (const key in input) {

      if (Object.prototype.hasOwnProperty.call(input, key)) {
        
        const value = input[key];

        // Update the key if it includes "id"
        const newKey = key.includes("id") ? key.replace(/id/g, "identifier") : key;

        transformedObject[newKey] = replaceKeysAndConvertStrings(value);

      }
    }

    return transformedObject as T;
    
  }

  // If the input is a string, convert it to uppercase
  if (typeof input === "string") {
    return input.toUpperCase() as T;
  }

  return input;
}

// Example input to test the function
const exampleData = {
  userId: "john_doe",
  details: {
    addressId: "abc123",
    name: "John",
    attributes: {
      itemId: "xyz456",
      info: "Some info here",
    },
  },

  items: [
    {
      productId: "p123",
      description: "a product",
    },
    "just a string",
  ],
};

// Apply the function to transform the example data
const result = replaceKeysAndConvertStrings(exampleData);

// Output the transformed result
console.log(result);



