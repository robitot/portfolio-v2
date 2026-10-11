export type Frame = 'fwd' | 'L' | 'UL' | 'U' | 'UR' | 'R' | 'D';

/** frame -> [headX, headY, faceX, faceY, pupilX, pupilY] offsets in SVG units */
export const FRAMES: Record<Frame, [number, number, number, number, number, number]> = {
  fwd: [0, 0, 0, 0, 0, 0],
  L: [-1, 0, -2, 0, -1, 0],
  UL: [-1, -1, -2, -1, -1, -1],
  U: [0, -1, 0, -2, 0, -1],
  UR: [1, -1, 2, -1, 1, -1],
  R: [1, 0, 2, 0, 1, 0],
  D: [0, 1, 0, 2, 0, 1],
};

export const LOOK_AROUND: Frame[] = ['L', 'UL', 'U', 'UR', 'R', 'D'];

/** Convert the vector from the head centre to the cursor into one of the 7 head frames. */
export function frameFromVector(dx: number, dy: number): Frame {
  if (Math.sqrt(dx * dx + dy * dy) <= 40) return 'fwd'; // dead zone
  const a = (Math.atan2(dy, dx) * 180) / Math.PI;
  if (a > -22.5 && a <= 22.5) return 'R';
  if (a > -67.5 && a <= -22.5) return 'UR';
  if (a > -112.5 && a <= -67.5) return 'U';
  if (a > -157.5 && a <= -112.5) return 'UL';
  if (a > 157.5 || a <= -157.5) return 'L';
  if (a > 112.5) return 'L';
  if (a > 67.5) return 'D';
  return 'R';
}
