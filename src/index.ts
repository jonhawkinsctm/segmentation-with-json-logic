import express, { json } from "express";
import { join } from "node:path";
import { notFoundMiddleware } from "./errors/NotFoundError";
import { buildRouter } from "./routes";
import { SegmentService } from "./SegmentationService";
import { SegmentFileSource } from "./SegmentSource/SegmentFileSource";

const segmentSource = new SegmentFileSource(join(__dirname, "../segments"));
const segmentationService = new SegmentService(segmentSource);
const router = buildRouter(segmentationService);

const app = express();
app.use(json());
app.use(router);
app.use(notFoundMiddleware);
app.listen(3333, () => console.log("App listening at http://localhost:3333"));
