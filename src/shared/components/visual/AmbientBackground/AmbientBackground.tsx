import { BaseGradient } from "./BaseGradient";
import { FloatingBlobs } from "./FloatingBlobs";
import { Noise } from "./Noise";

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
    >
      <BaseGradient />

      <FloatingBlobs />
      <Noise/>
      
    </div>
  );
}