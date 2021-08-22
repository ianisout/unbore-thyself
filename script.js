const getActivity = async () => {
  try {
    await axios.get('http://www.boredapi.com/api/activity/').then((res) => {
      let data = res.data;
      document.getElementById('activity-data').innerHTML = `${data.activity}!`;
    })
  } catch(err) {
    console.error(err);
  }
}

const getImage = async () => {
  try {
    await axios.get('https://picsum.photos/600/400').then((res) => {
      document.getElementById('activity-picture').style.backgroundImage = `url('${res.config.url}')`;
    })
  } catch(err) {
    console.error(err)
  }
}

(function data(){
  getActivity();
  getImage();
})();
