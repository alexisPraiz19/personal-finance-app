export default async function fetchData() {
    const request  = await fetch("/data.json");
    const response = await request.json();

    return response
}