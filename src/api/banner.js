import request from "./request";


export async function getBanners() {
  return await request.get("/api/banner");
}

// export async function getBanners() {
//   return await request.get("/api/banner");
// }
// getBanners().then(res => console.log(res));