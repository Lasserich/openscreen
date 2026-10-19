import type { Rectangle } from "electron";
import type { CursorRecordingData } from "../../../../src/native/contracts";

export interface CursorRecordingSession {
	start(): Promise<void>;
	stop(): Promise<CursorRecordingData>;
	/** macOS window takes: the capture rect the helper reported once recording started. */
	updateCaptureBounds?(bounds: Rectangle): void;
}
