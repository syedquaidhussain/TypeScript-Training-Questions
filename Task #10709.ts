type NullableProperties<T> = T extends object ? 
{
    [key in keyof T] : NullableProperties<T[key]>

} : T|null




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

  type ans = NullableProperties<NestedUser>