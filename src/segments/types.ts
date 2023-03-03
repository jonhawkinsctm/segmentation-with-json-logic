import { RulesLogic } from "json-logic-js";

export type SegmentationDefinition = {
    /**
     * The name of the model that the rules segment
     */
    segmentationTarget: string;
    /**
     * A human readable designation for this definition.
     * The combination of `${segmentationTarget}-${name}` should be unique.
     */
    name: string;
    /**
     * Segment definitions for the segmentation configuration
     */
    segments: Array<SegmentDefinition>;
};

export type SegmentDefinition = {
    name: string;
    id: string;
    rule: RulesLogic;
};
