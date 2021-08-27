import "element-plus/packages/theme-chalk/src/base.scss";
import {
  ElButton,
  ElMenu,
  ElMenuItem,
  ElLoading,
  ElMessage,
  ElTable,
  ElTableColumn,
  ElPagination,
} from "element-plus";
const components = [
  ElButton,
  ElMenu,
  ElMenuItem,
  ElLoading,
  ElMessage,
  ElTable,
  ElTableColumn,
  ElPagination,
];

const plugins = [ElLoading, ElMessage];

export default {
  components,
  plugins,
};
