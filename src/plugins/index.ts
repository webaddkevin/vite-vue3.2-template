// 三方插件
import elementui from "./element-ui";
import dayjs from "./dayjs";

const install = (app: any): void => {
  elementui.components.forEach((c: any) => {
    if (c.name) app.component(c.name as string, c);
  });
  elementui.plugins.forEach((plugin) => {
    app.use(plugin);
  });
};

export { install, elementui, dayjs };
