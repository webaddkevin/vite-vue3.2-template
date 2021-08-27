import urldict from "./urlDict";
/**
 * 从字典获取url
 */
const getUrl = (biz: string, urlName: string): string => {
  try {
    const bizKeys = Object.keys(urldict);
    if (!bizKeys.includes(biz)) {
      throw new Error("url not in urldict");
    }
    let hostname = urldict[biz][urlName];
    if (!hostname) {
      throw new Error("url not in urldict");
    }
    if (hostname.substr(0, 1) === "/") {
      return hostname.substr(1);
    }
    return hostname;
  } catch (error) {
    return "";
  }
};

export default getUrl;
