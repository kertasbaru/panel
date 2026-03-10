const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const formatDateTime = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

const addMinutes = (date, minutes) => {
  return new Date(new Date(date).getTime() + minutes * 60000);
};

const addHours = (date, hours) => {
  return new Date(new Date(date).getTime() + hours * 3600000);
};

const addDays = (date, days) => {
  return new Date(new Date(date).getTime() + days * 86400000);
};

module.exports = { formatDate, formatDateTime, addMinutes, addHours, addDays };
