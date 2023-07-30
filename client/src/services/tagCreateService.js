import http from "./httpService";
import { api } from "../config.js";

export function createtag(postbody) {
  console.log(api.tagsEndPoint + "create");
  return http.post(api.tagsEndPoint + "create", {
    name: postbody.tagName,
  });
}
