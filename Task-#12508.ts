

type FlattenedObject = { [key: string]: any };

function flattenObject(
  obj: any,
  parentKey: string = "",
  separator: string = "."
): FlattenedObject {
  let result: FlattenedObject = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}${separator}${key}` : key;

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const arrayKey = `${newKey}${separator}${index}`;
        result = { ...result, ...flattenObject(item, arrayKey, separator) };
      });
    }
     else if (typeof value === "object" && value !== null) {
      result = { ...result, ...flattenObject(value, newKey, separator) };
    }
     else {
      result[newKey] = value;
    }
  }

  return result;
}


function unflattenObject(flatObj: FlattenedObject, separator: string = "."): any {
  const result: any = {};

  for (const [flatKey, value] of Object.entries(flatObj)) {
    const keys = flatKey.split(separator);
    let current = result;

    keys.forEach((key, index) => {
      if (!current[key]) {
        current[key] = isNaN(Number(keys[index + 1]))
          ? index === keys.length - 1
            ? value
            : {}
          : [];
      }
      if (index === keys.length - 1) {
        current[key] = value;
      }
      current = current[key];
    });
  }

  return result;
}

const data = {
  user: {
    id: 123,
    name: "John Doe",
    addresses: [
      {
        street: "123 Main St",
        city: "Wonderland",
        postalCode: 12345,
      },
      {
        street: "456 Elm St",
        city: "Oz",
        postalCode: 67890,
      },
    ],
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
      },
    },
  },
};

const flattenedData = flattenObject(data);

console.log("Flattened Object:", flattenedData);

const unflattenedData = unflattenObject(flattenedData);

console.log("Unflattened Object:", JSON.stringify(unflattenedData, null, 2));