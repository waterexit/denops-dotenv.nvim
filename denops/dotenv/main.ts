import { config } from "https://deno.land/x/dotenv@v3.1.0/mod.ts";
import type { Entrypoint } from "jsr:@denops/std@7.0.0";
import * as nvimFn from "jsr:@denops/std/function/nvim";

export const main: Entrypoint = async (denops) => {
 denops.dispatcher = {
        async set() {
            const stdpath = await nvimFn.stdpath(denops, 'config');
            const envPath = `${stdpath}/.env`;
            const env = config({ path: envPath });
            for (const [key, value] of Object.entries(env)) {
                await denops.cmd(`let \$${key} = '${value}'`);
            }
        }
    }
}
