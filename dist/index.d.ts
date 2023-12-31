import Camera from 'react-native-camera-modules/dist/Camera';
import CameraScreen, { CameraType } from 'react-native-camera-modules/dist/CameraScreen';
import type { CameraApi } from 'react-native-camera-modules/dist/types';
declare const CameraKit: any;
export declare const Orientation: {
    PORTRAIT: number;
    LANDSCAPE_LEFT: number;
    PORTRAIT_UPSIDE_DOWN: number;
    LANDSCAPE_RIGHT: number;
};
export default CameraKit;
export { Camera, CameraScreen, CameraType, CameraApi };
