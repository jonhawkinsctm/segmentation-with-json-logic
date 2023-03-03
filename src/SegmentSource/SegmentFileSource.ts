import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NotFoundError } from "../errors/NotFoundError";

export class SegmentFileSource {
    protected cache = new Map();

    constructor(protected folder: string) {
        this.folder = folder;
    }

    async get(key: string) {
        if (!this.cache.has(key)) {
            this.cache.set(key, this.#loadSegment(key));
        }

        return this.cache.get(key);
    }

    async #loadSegment(key: string) {
        try {
            const raw = await readFile(join(this.folder, key + ".json"), "utf-8");
            return JSON.parse(raw);
        } catch (err) {
            this.cache.delete(key);
            throw new NotFoundError(`Cannot find ${key}`, err);
        }
    }
}
