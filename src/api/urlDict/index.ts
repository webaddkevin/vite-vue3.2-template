import basic from "./basic";

/**
 * api字典表
 */
interface UrlDict {
  [key: string]: {
    [key: string]: string;
  };
}

const urldict: UrlDict = {
  basic,
};

export default urldict;
