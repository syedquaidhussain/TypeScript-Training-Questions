type Event = {
    stopDefault: () => void;
  };
  
  function fun<T extends Event>(cb: (event: T) => void): void {
    const mockEvent = { stopDefault: () => console.log("Default stopped") } as T;
    cb(mockEvent);
  }
  
  fun((e) => {
    e.stopDefault();
    console.log(e);
  });
  
  fun((e) => {
    e.stopDefault();
    console.info(e);
  });
  
  export{}