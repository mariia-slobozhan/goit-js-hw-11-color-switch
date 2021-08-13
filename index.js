const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  refs = {
    body: document.querySelector("body"),
    start: document.querySelector("button[data-action=start]"),
    stop: document.querySelector("button[data-action=stop]"),
  }


  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function updateBgColor(index){
    return refs.body.style.backgroundColor = colors[index];
  }


  const bgColor = {
    isActive: false,
    intervalId: null,

    start(){
      if(this.isActive){
        return
      }
      this.isActive = true;

      this.intervalId = setInterval(() => {
        const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
        updateBgColor(randomIndex)
        // console.log("start");

        }, 1000)
    },

    stop(){
      clearInterval(this.intervalId);
      // console.log("stop");
      this.isActive = false;
    }
  }

 

refs.start.addEventListener("click", bgColor.start.bind(bgColor))
refs.stop.addEventListener("click", bgColor.stop.bind(bgColor) )