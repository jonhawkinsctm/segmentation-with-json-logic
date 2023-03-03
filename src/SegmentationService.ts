import jsonLogic from "json-logic-js";
import { ISegmentSource } from "./SegmentSource/ISegmentSource";

export class SegmentService {
    constructor(protected segmentSource: ISegmentSource) {}

    getSegmentDefinition(key: string) {
        return this.segmentSource.get(key);
    }

    async getMatchingSegment(key: string, data: unknown) {
        const segment = await this.getSegmentDefinition(key);

        for (const rule of segment.segments) {
            if (jsonLogic.apply(rule.rule, data)) {
                return rule;
            }
        }
    }
}
