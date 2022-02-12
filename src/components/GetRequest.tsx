import "";
import { rejects } from "assert";

export async function Get<T>(url: string, data: {}): Promise<T> {
  let response = await fetch(url, {
    body: JSON.stringify(data),
    method: "GET",
  });
  return new Promise<T>((resolve, reject) => {
    try {
      return resolve(response.json());
    } catch {
      return reject();
    }
  });
}
