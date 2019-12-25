export const day = time => {
  const t = new Date(time);
  return `${t.getFullYear()}-${('0' + (t.getMonth() + 1)).slice(-2)}-${('0' + t.getDate()).slice(-2)}`;
};

export const minut = time => {
  const t = new Date(time);
  return `${('0' + t.getHours()).slice(-2)}:${('0' + t.getMinutes()).slice(-2)}:${('0' + t.getMilliseconds()).slice(
    -2
  )}`;
};

export const formatTime = time => {
  return time ? `${day(time)} ${minut(time)}` : '';
};

// formatTime(Date.now());
