// type DefinedProperties<T> = T extends infer U
//   ? U extends object
//     ? {
//       // [K in keyof Required<U>]: DefinedProperties<Exclude<U[K], null | undefined>>;
//         [K in keyof U]-?: DefinedProperties<NonNullable<U[K]>>;
//       }
//     : U
//   : never;
 
// interface NestedUser {
//   age?: number;
//   personalInfo?: {
//     name: string | null;
//     address?: {
//       city: string | null;
//       zip?: string;
//     };
//   };
// }
 
// type NestedDefineExample = DefinedProperties<NestedUser>















type DefinedProperties<T> = T extends object
  ? {
      [K in keyof T]-?: DefinedProperties<NonNullable<T[K]>>;
    }
  : T;

interface NestedUser {
  age?: number;
  personalInfo?: {
    name: string | null;
    address?: {
      city: string | null;
      zip?: string;
    };
  };
}

type NestedDefineExample = DefinedProperties<NestedUser>;
// NestedDefineExample = {
//   age: number;
//   personalInfo: {
//     name: string;
//     address: {
//       city: string;
//       zip: string;
//     };
//   };
// }



export{}


