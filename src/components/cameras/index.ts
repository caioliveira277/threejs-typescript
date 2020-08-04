import { PerspectiveCamera } from "three";

export class Camera extends PerspectiveCamera {
  constructor(props: Omit<PerspectiveCamera, "position">) {
    super(props.fov, props.aspect, props.near, props.far);
  }
}
