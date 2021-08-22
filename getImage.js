const getImage = async () => {
  try {
    await axios.get('https://picsum.photos/600/400').then((res) => {
      document.getElementById(
        'activity-picture'
      ).style.backgroundImage = `url('${res.config.url}')`;
    });
  } catch (err) {
    console.error(err);
  }
};

getImage();
