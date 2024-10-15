import jasonwebtoken from 'jsonwebtoken';
import util from 'util';

const verify = util.promisify(jasonwebtoken.verify);
const sign = util.promisify(jasonwebtoken.sign);

export default {
  verify,
  sign,
};