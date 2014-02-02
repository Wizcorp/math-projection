/**
 * @method perspective2DProjection
 * Projection of a 3D points on a 2D plan with respect to a viewer's position
 * and a camera's position and angle
 *
 * @author Brice Chevalier
 *
 * @param {object} point
 * @param {number} point.x - Position of the point in x
 * @param {number} point.y - Position of the point in y
 * @param {number} point.z - Position of the point in z
 * @param {object} camera
 * @param {number} camera.x - Position of the camera in x
 * @param {number} camera.y - Position of the camera in y
 * @param {number} camera.z - Position of the camera in z
 * @param {number} camera.cosx - Cosine of the angle of the camera around the x axis
 * @param {number} camera.cosy - Cosine of the angle of the camera around the y axis
 * @param {number} camera.cosz - Cosine of the angle of the camera around the z axis
 * @param {number} camera.sinx - Sine of the angle of the camera around the x axis
 * @param {number} camera.siny - Sine of the angle of the camera around the y axis
 * @param {number} camera.sinz - Sine of the angle of the camera around the z axis
 * @param {object} viewer
 * @param {number} viewer.x - Position of the viewer in x
 * @param {number} viewer.y - Position of the viewer in y
 * @param {number} viewer.z - Position of the viewer in z
 */

function perspective2DProjection(point, camera, viewer) {

	var cosx = camera.cosx;
	var cosy = camera.cosy;
	var cosz = camera.cosz;
	var sinx = camera.sinx;
	var siny = camera.siny;
	var sinz = camera.sinz;

	var cx = camera.x;
	var cy = camera.y;
	var cz = camera.z;

	var dx = point.x - cx;
	var dy = point.y - cy;
	var dz = point.z - cz;

	var u = sinz * dy + cosz * dx;
	var v = cosy * dz + siny * u;
	var w = cosz * dy - sinz * dx;

	var ex = cosy * u - siny * dz;
	var ey = sinx * v + cosx * w;
	var ez = cosx * v - sinx * w;

	return { x: ex * viewer.z / ez - viewer.x, y: ey * viewer.z / ez - viewer.y, z: -viewer.z / ez };
}

module.exports = perspective2DProjection;