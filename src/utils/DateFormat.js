

const dateFormat = (dateString) => {
  const options = {year: "numeric", month: "long", day: "numeric"};
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const currentDay = ()=>{
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];  
  return days[today.getDay()];
}

export {dateFormat, currentDay,};