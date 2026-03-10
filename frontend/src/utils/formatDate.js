import dayjs from 'dayjs';
import 'dayjs/locale/id';
dayjs.locale('id');

export const formatDate = (date) => dayjs(date).format('DD MMMM YYYY');
export const formatDateTime = (date) => dayjs(date).format('DD MMMM YYYY HH:mm');
export const formatShortDate = (date) => dayjs(date).format('DD/MM/YYYY');
