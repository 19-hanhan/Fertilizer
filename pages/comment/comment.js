// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: "all",
    count: {
      pic: 2,
      add: 1,
      good: 3,
      mid: 0,
      bad: 0
    },
    goodCommentRate: 100,
    rate: 5,
    comment: [],
    commentList: [
      {
        nickname: "Exrick",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTqQ5hNKicCNEwW3cATfOTaXk6xMlNEfh1gm0kicPDtJrXwTf5YEqQXYea3m5vsuPyJUXc3U0OicXtA/132",
        content: "量大效果好，赞了",
        rate: 5,
        time: "2021.06.18",
        spec: "江西特供 10kg",
        // pics: [
        //   "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/65005/20/4818/92581/5d2ffdb6Ebcbf3018/35411a583e29d52d.jpg",
        //   "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/74460/28/4830/96562/5d2ffdb7Ed5e9ce7a/e764b3daa92a9c67.jpg"
        // ]
      },
      {
        nickname: "hanhan",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTqQ5hNKicCNEwW3cATfOTaXk6xMlNEfh1gm0kicPDtJrXwTf5YEqQXYea3m5vsuPyJUXc3U0OicXtA/132",
        content: "服务很优质啊，我急要，然后催了发货之后很快就发货了",
        rate: 5,
        time: "2021.09.27",
        spec: "江西特供 5kg"
      },
      {
        nickname: "Ander",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTqQ5hNKicCNEwW3cATfOTaXk6xMlNEfh1gm0kicPDtJrXwTf5YEqQXYea3m5vsuPyJUXc3U0OicXtA/132",
        content: "客服态度挺好的，喜欢这样的客服",
        rate: 5,
        time: "2022.02.15",
        spec: "肥多多 10kg",
        addComment: {
          time: "2022.02.16",
          content: "家里了解的人也说挺不错的，挺好！",
          pics: [
            "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vayptmj2j20u00z5wjs.jpg"
          ]
        }
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      comment: this.data.commentList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  changeTag: function (e) {
    let tag = e.currentTarget.dataset.value;
    this.setData({
      active: tag
    });
    let data = this.data.commentList;
    if (tag == "new") {
      data.sort(function (a, b) {
        if (b.time > a.time) {
          return 1;
        }
        if (b.time < a.time) {
          return -1;
        }
        return 0;
      });
    } else if (tag == "pic") {
      data = data.filter(v => {
        return v.pics.length > 0;
      });
    } else if (tag == "add") {
      data = data.filter(v => {
        return v.addComment;
      })
    } else if (tag == "good") {
      data = data.filter(v => {
        return v.rate >= 4;
      })
    } else if (tag == "mid") {
      data = data.filter(v => {
        return v.rate == 4 || v.rate == 3;
      })
    } else if (tag == "bad") {
      data = data.filter(v => {
        return v.rate <= 2;
      })
    }
    this.setData({
      comment: data
    })
  }
})