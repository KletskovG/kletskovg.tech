export const config = {
  API_URL: process.env.NODE_ENV === "development" ? "http://localhost:5000" : "some prod url"
}