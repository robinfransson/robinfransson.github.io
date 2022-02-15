export async function Get<T>(url: string, data: {}): Promise<T> {
  return new Promise<T>(async (resolve, reject) => {
    try {
      let response = await fetch(url + "" + new URLSearchParams(data), {
        method: "GET",
      });
      resolve(response.json());
    } catch (err) {
      console.log(err);
      reject();
    }
  });
}
