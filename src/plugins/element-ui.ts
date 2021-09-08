import 'element-plus/packages/theme-chalk/src/base.scss';
import {
  ElButton,
  ElMenu,
  ElMenuItem,
  ElLoading,
  ElMessage,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElInput,
  ElDatePicker,
} from 'element-plus';
const components = [
  ElButton,
  ElMenu,
  ElMenuItem,
  ElLoading,
  ElMessage,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElInput,
  ElDatePicker,
];

const plugins = [ElLoading, ElMessage];

export default {
  components,
  plugins,
};
