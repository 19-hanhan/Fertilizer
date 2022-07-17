// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    description: "",
    category: {
      id: 1,
      title: "推荐专区", // 一级分类名
      children: [
        {
          id: 3, // 分类ID
          title: "优选新品",
          description: "活动时间：8.18——9.18",
          sortOrder: 1
        },
        {
          id: 4,
          title: "环保好物",
          description: "环保生活，从用上这些环保厨房好物开始",
          sortOrder: 2
        },
        {
          id: 5,
          title: "超值好物",
          description: "活动时间：8.18——9.18",
          sortOrder: 3
        }
      ]
    },
    product: [{
      id: 1,
      relateId: 0,
      title: "肥多多",
      description: "更加肥沃，更适合种植农作物，增产率约 13.4%，平均每亩增收 100元。",
      price: 137.00,
      type: 0,
      picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vayptmj2j20u00z5wjs.jpg"
    },
    {
      id: 2,
      relateId: 0,
      title: "肥抗生",
      description: "施用本系列产品土壤的有效磷含量增加了 7.55mg/kg，增幅达同类竞品的 1.4倍。",
      price: 168.00,
      type: 0,
      picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vayux4iaj20u012ygre.jpg"
    },
    {
      id: 3,
      relateId: 0,
      title: "凝降",
      description: "凝降降降降降降降降降降",
      price: 157.00,
      type: 0,
      picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vazapilyj20u013sag2.jpg"
    },
    {
      id: 4,
      relateId: 0,
      title: "清水宝",
      description: "清水水水水水水水水宝",
      price: 199.00,
      type: 0,
      picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vazhuiaqj20u013pwpm.jpg"
    },
    {
      id: 5,
      relateId: 0,
      title: "壮苗",
      description: "壮壮壮壮壮壮壮壮壮苗",
      price: 199.00,
      type: 0,
      picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vazn1owxj20u013ogtf.jpg"
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    wx.setNavigationBarTitle({
      title: this.data.category.title,
    })
    this.setData({
      description: this.data.category.children[0].description
    })
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
  changeTab: function (e) {
    let index = e.detail.index;
    this.setData({
      description: this.data.category.children[index].description
    })
  },
  handleClick: function (e) {
    let id = e.currentTarget.dataset.value.id;
    wx.navigateTo({
      url: '/pages/product/product?id=' + id
    });
  },
  scrollListen: function (e) {
    console.log("滑到底部啦 该加载下一页数据啦")
  },
})