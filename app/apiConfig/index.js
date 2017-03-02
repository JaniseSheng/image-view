/**
 * Created by cform on 17/1/19.
 */
const ip = 'localhost';
const port = '443';
export default {
  imageAdd: `http://${ip}:${port}/imageAdd`,
  imageAll: `http://${ip}:${port}/imageAll`,
  iamgeLimt: `http://${ip}:${port}/iamgeLimt`,
  imageById: `http://${ip}:${port}/imageById`,
  imageDelete: `http://${ip}:${port}/imageDelete`,
  imageDeleteAll: `http://${ip}:${port}/imageDeleteAll?id=-1`,
  imageUpdate: `http://${ip}:${port}/imageUpdate`,
};
