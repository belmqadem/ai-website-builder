import Sandbox from "e2b";

/**
 * Obtain a connected Sandbox instance for the given sandbox identifier.
 *
 * @param sandboxId - Identifier of the sandbox to connect to
 * @returns The connected Sandbox instance
 */
export async function getSandbox(sandboxId: string) {
  const sandbox = await Sandbox.connect(sandboxId);
  return sandbox;
}