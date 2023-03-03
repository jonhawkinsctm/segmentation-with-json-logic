import { SegmentationDefinition } from "../segments/types";


export interface ISegmentSource {
    get(key: string): Promise<SegmentationDefinition>;
}
