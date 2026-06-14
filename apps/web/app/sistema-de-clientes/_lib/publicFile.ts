import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Server-only: does a file exist under /public? Lets blog hero images appear
 * automatically once dropped into public/blog (no code change), and fall back
 * to a branded placeholder until then. Safe to call at build (SSG).
 */
export function publicFileExists(path: string): boolean {
  if (!path) return false;
  try {
    return existsSync(join(process.cwd(), "public", path.replace(/^\//, "")));
  } catch {
    return false;
  }
}
