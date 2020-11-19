import { HttpAgent, makeNonceTransform } from "@dfinity/agent";
import { Ed25519KeyIdentity } from "@dfinity/authentication";

const identity = Ed25519KeyIdentity.generate();
export const principal = identity.getPrincipal();

const port = parseInt(process.env["IC_REF_PORT"] || "", 10);
if (Number.isNaN(port)) {
  throw new Error("The environment variable IC_REF_PORT is not a number.");
}

const agent = new HttpAgent({ host: "http://127.0.0.1:" + port, identity });
agent.addTransform(makeNonceTransform());

export default agent;