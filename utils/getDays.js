module.exports = (milli) => {
  const minutes = Math.floor(milli / 60000);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);

  return (
    (days && { value: days, unit: 'days' }) ||
    (hours && { value: hours, unit: 'hours' }) || {
      value: minutes,
      unit: 'minutes',
    }
  );
};
