type PageFlipConstructor = typeof import("pageforge-flip").default;

let isLandscapePatchApplied = false;

export function ensureLandscapeSpreadPatch(PageFlipCtor: PageFlipConstructor) {
  if (isLandscapePatchApplied) return;

  const proto = PageFlipCtor.prototype as PageFlipConstructor["prototype"] & {
    __pfPatched?: boolean;
    __pfOriginalPlacement?: typeof PageFlipCtor.prototype.getPlacementTransform;
  };

  if (proto.__pfPatched) {
    isLandscapePatchApplied = true;
    return;
  }

  const originalPlacement = proto.getPlacementTransform;

  proto.getPlacementTransform = function patchedPlacement(index: number, currentBase: number) {
    if (this.pagesPerView > 1 && this.orientation === "landscape") {
      const spreadIndex = Math.floor((index - currentBase) / this.pagesPerView);
      const translate = Number.isFinite(spreadIndex) ? spreadIndex * 100 : 0;
      return `translateX(${translate}%)`;
    }
    return originalPlacement.call(this, index, currentBase);
  };

  Object.defineProperty(proto, "__pfPatched", {
    value: true,
    enumerable: false,
  });

  isLandscapePatchApplied = true;
}
