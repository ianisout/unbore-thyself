const getActivity = async () => {
  try {
    await axios.get('http://www.boredapi.com/api/activity/').then((res) => {
      let data = res.data;
      document.getElementById('activity-data').innerHTML = `${data.activity}!`;
    });
  } catch (err) {
    console.error(err);
  }
};

getActivity();
