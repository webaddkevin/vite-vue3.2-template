import { dayjs } from "plugins";
export default function (app: any) {
  app.mixin({
    methods: {
      /**
       * 时间格式化
       * @param {string} str [dayjs 格式化字符串]
       * @returns [时间]
       */
      dateFormat(str?: string): string | Date {
        return dayjs().format(str);
      },
    },
  });
}
