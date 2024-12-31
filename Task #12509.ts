type User = {
    id: number;
    name: string;
    email: string;
    [key: string]: any; 
  };
  
  type Purchase = {
    userId: number;
    item: string;
    price: number;
    [key: string]: any; 
  };
  
  type Review = {
    userId: number;
    review: string;
    star: number;
    [key: string]: any; 
  };
  
  function mergeUserPurchases<T extends object, U extends object>(
    users: T[],
    relatedObjects: U[],
    key: string
  ): (T & { [key: string]: U[] })[] {
    return users.map((user) => {
      const relatedData = relatedObjects.filter((obj) => (obj as any).userId === (user as any).id);
  
      return {
        ...user,
        [key]: relatedData,
      };
    });
  }
  
  // Example usage
  
  const users: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Jim Brown", email: "jim@example.com" },
  ];
  
  const purchases: Purchase[] = [
    { userId: 1, item: "Laptop", price: 1200 },
    { userId: 2, item: "Phone", price: 800 },
    { userId: 1, item: "Mouse", price: 20 },
    { userId: 3, item: "Keyboard", price: 100 },
    { userId: 2, item: "Monitor", price: 200 },
  ];
  
  const userReviews: Review[] = [
    { userId: 1, review: "Not good", star: 1200 },
    { userId: 2, review: "Bad", star: 800 },
    { userId: 1, review: "Average", star: 20 },
    { userId: 3, review: "Excellent", star: 100 },
    { userId: 2, review: "Poor", star: 200 },
  ];
  
  const mergedPurchasesData = mergeUserPurchases(users, purchases, "purchases");
  console.log(mergedPurchasesData);
  
  const mergedReviewData = mergeUserPurchases(users, userReviews, "reviews");
  console.log(mergedReviewData);
  
  