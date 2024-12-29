//
// const promise = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//       resolve("Operation successful!");
//     } else {
//       reject("Operation failed!");
//     }
//   });
//   console.log(promise);
//   const promise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//       resolve("Operation successful!");
//     } else {
//       reject("Operation failed!");
//     }
//   });
//   console.log(promise);
//priomises handling 

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finally completed"));


  const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => reject("Data fetched!"), 3000);
  });
  console.log(fetchData);
  //promise handling
  const handlePromise = async () => {
    try {
      const result = await fetchData;
      console.log(result);
      console.log("success");
    } catch (error) {
      console.log(error);
      console.log("error");
    } finally {
      console.log("something happened.");
    }
  };
  
  handlePromise();