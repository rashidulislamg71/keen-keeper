const findData = (data = [], id = null) => {
  return data.find((item) => item.id === parseInt(id));
};

export { findData };
