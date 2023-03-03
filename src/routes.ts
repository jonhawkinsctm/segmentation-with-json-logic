import { Router } from "express";
import { join } from "path";
import { SegmentService } from "./SegmentationService";

export function buildRouter(segmentationService: SegmentService) {
    const router = Router();

    router.get("/segment/:namespace/:segment", async (req, res, next) => {
        try {
            const data = await segmentationService.getSegmentDefinition(join(req.params.namespace, req.params.segment));
            res.contentType("json").send(data);
        } catch (err) {
            next(err);
        }
    });

    router.post("/segment/:namespace/:segment", async (req, res, next) => {
        try {
            const data = await segmentationService.getMatchingSegment(
                join(req.params.namespace, req.params.segment),
                req.body
            );
            res.contentType("json").send(data);
        } catch (err) {
            next(err);
        }
    });

    return router;
}
