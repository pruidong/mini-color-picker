Page({
  data: {
    rgb: 'rgb(7,193,96)',
    pick: false,
    info: 'rgb(229,9,9)',
    infoPick: false,
  },

  toPick: function (e) {
    let showFlag = false;
    let key=e.detail.key;
    let updateObj;
    if (e.currentTarget && !key) {
      key = e.currentTarget.dataset.key;
      let status = e.currentTarget.dataset.status;
      if(status=="open"){
        showFlag=true;
      }
    }
    switch (key) {
      case "color1":
        updateObj = {
          pick: showFlag
        }
        break;
      case "color2":
        updateObj = {
          infoPick: showFlag
        }
        break;
    }

    if (updateObj) {
      this.setData(updateObj)
    }
  },
  pickColor(e) {
    let updateObj;
    switch (e.detail.key) {
      case "color1":
        updateObj = {
          rgb: e.detail.color
        }
        break;
      case "color2":
        updateObj = {
          info: e.detail.color
        }
        break;

    }
    if (updateObj) {
      this.setData(updateObj)
    }
  }
})