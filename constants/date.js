export const date = () => {
  let dateToday = new Date();
  console.log(dateToday)
    let day = String(dateToday.getDate()).padStart(2, '0');
    let month = String(dateToday.getMonth() + 1).padStart(2, 0);
    let year = dateToday.getFullYear();
    dateToday = `${year}${month}${day}`;
    return dateToday;
}

export const timestamp = () => {
  const date = new Date()
  console.log(date)
  const hours = date.getHours();
  const mins = '0' + date.getMinutes();
  const secs = '0' + date.getSeconds();

  const time = `${hours}:${mins.slice(-2)}:${secs.slice(-2)}`

  return time
}

export const sortAndDate = (list) => {
  list.sort((a, b) => {
    return a.date - b.date
  });
  list.forEach(item => {
  let newDate = new Date(item.date * 1000)
    let day = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    newDate = {newDate: `${day}/${month+1} - ${year}`};
    const newObject = Object.assign(item, newDate);
    return newObject;
  })
}



  
  
  
