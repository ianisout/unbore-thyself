
const getActivity = async () => {
  try {
    await axios.get('http://www.boredapi.com/api/activity/').then((res) => {
      let data = res.data;
      document.getElementById('activity-data').innerHTML = data.activity;
      document.getElementById('activity-img').src = `https://source.unsplash.com/featured/${data.type}`
    })
  } catch(err) {
    console.error(err);
  }
}

getActivity();