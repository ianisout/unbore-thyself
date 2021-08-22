
const getActivity = async () => {
  try {
    await axios.get('http://www.boredapi.com/api/activity/').then((res) => {
      let data = res.data;
      document.getElementById('activity-data').innerHTML = `${data.activity}!`;
    })
  } catch(err) {
    console.error(err);
  }
  document.getElementById('activity-img').src = `https://picsum.photos/600/400?random=${Math.floor(Math.random() *1000)}`
}

getActivity();