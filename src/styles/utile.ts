import { css } from "styled-components";
export const PC_DESIGN_WIDTH = 1440;
export const PC_CONTENTS_DESIGN_WIDTH = 1080;
export const SP_CONTENTS_DESIGN_WIDTH = 335 * 2;
export const SP_DESIGN_WIDTH = 750;

const VIDEO_WIDTH = 1440;
const VIDEO_HEIGHT = 708;
export const videoHeight = (VIDEO_HEIGHT / VIDEO_WIDTH) * 100;

export const flexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HideText = css`
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const AbsoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
