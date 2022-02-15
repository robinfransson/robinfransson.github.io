export async function Get<T>(url: string, data: {}): Promise<T> {
  try {
    let response = await fetch(url + "" + new URLSearchParams(data), {
      method: "GET",
    });
    return response.json();
  } catch (err) {
    console.log(err);
    return new Promise<T>((_, reject) => {
      reject();
    });
  }
}
