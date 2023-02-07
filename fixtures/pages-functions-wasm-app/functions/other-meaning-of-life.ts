import { CHOCOLATE } from "../chocolate";

export async function onRequest() {
	return new Response(`The other meaning of life is ${CHOCOLATE}`);
}
