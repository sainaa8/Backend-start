const axios = require("axios");
// const api = async (url) => {
//   try {
//     axios(url, {
//       headers: { "app-id": "65addd667698f8f8d8330f39" },
//     }).then((response) => {
//       console.log(response.data);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// // api();
// const user = async (url) => {
//   try {
//     axios(url, {
//       headers: { "app-id": "65addd667698f8f8d8330f39" },
//     }).then((res) => {
//       console.log(res.data);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// // user();
// const axis = async () => {
//   api("https://dummyapi.io/data/v1/post");

//   user("https://dummyapi.io/data/v1/user");
// };
// axis();
// async function userPro() {
//   await axios
//     .post(
//       "https://dummyapi.io/data/v1/user/create",
//       {
//         firstName: "Sainaa",
//         lastName: "Ganhuyag",
//         email: "gnasainaa@gmail.com",
//       },
//       {
//         headers: { "app-id": "65addd667698f8f8d8330f39" },
//       }
//     )
//     .then((res) => {
//       console.log(res.data);
//     });
// }
// userPro();
const userPost = async () => {
  await axios
    .post(
      "https://dummyapi.io/data/v1/user/create",
      {
        owner: "65adfcfcc49386c49f3144d1",
        fields: "dog",
      },
      {
        headers: { "app-id": "65addd667698f8f8d8330f39" },
      }
    )
    .then((res) => {
      console.log(res.data);
    });
};
userPost();
