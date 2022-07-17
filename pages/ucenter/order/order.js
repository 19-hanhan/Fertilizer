// pages/ucenter/order/order.js
import Dialog from '../../../lib/vant-weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    loading: false,
    orderList: [],
    order: [
      {
      id: '1',
      orderSn: '20210318',
      createTime: '2021-03-18 18:35',
      payType: '微信',
      productList: [{
        id: '1',
        picUrl: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h0vayptmj2j20u00z5wjs.jpg',
        title: '肥多多',
        specDesc: '江西特供 10kg',
        status: 1,
        count: 1,
        price: 137.00
      }],
      totalPrice: 137.00,
      expressPrice: 0.00,
      actualPrice: 137.00,
      orderStatus: 1
    },
    {
      id: '2',
      orderSn: '20220313',
      createTime: '2022-03-16 18:35',
      payType: '微信',
      productList: [{
        id: '2',
        picUrl: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h0vazhuiaqj20u013pwpm.jpg',
        title: '清水宝',
        specDesc: '5kg',
        count: 1,
        price: 199.00,
        status: 3
      }],
      totalPrice: 199.00,
      expressPrice: 0.00,
      actualPrice: 199.00,
      orderStatus: 3
    },
    {
      id: '3',
      orderSn: '20180321',
      createTime: '2019-08-18 18:35',
      payType: '微信',
      productList: [{
        id: '3',
        picUrl: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h0vayux4iaj20u012ygre.jpg',
        title: '肥抗生',
        specDesc: '2kg',
        status: 5,
        count: 1,
        price: 239.00
      }, {
        id: '4',
        picUrl: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h0vazapilyj20u013sag2.jpg',
        title: '凝降',
        specDesc: '5kg',
        count: 1,
        price: 157.00,
        status: 5
      }],
      totalPrice: 396.00,
      expressPrice: 0.00,
      actualPrice: 396.00,
      orderStatus: 5
    },
    {
      id: '4',
      orderSn: '20181328',
      createTime: '2019-08-18 18:35',
      payType: '微信',
      productList: [{
        id: '5',
        picUrl: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h0vazn1owxj20u013ogtf.jpg',
        title: '壮苗',
        specDesc: '2kg',
        status: 4,
        count: 1,
        price: 199.00
      }],
      totalPrice: 199.00,
      expressPrice: 0.00,
      actualPrice: 199.00,
      orderStatus: 4
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单中心',
    })
    // 获取参数
    let type = options.type;
    if (type) {
      this.setData({
        active: type
      })
    }
    // 模拟加载数据
    this.loadData(type)
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
  loadData: function (type) {
    this.setData({
      loading: true
    })
    if (type && type != 0) {
      let data = this.data.order.filter(item => item.orderStatus == type);
      this.setData({
        orderList: data,
        loading: false
      })
    } else {
      let that = this;
      setTimeout(function () {
        that.setData({
          loading: false,
          orderList: that.data.order
        })
      }, 1000)
    }
  },
  changeTab: function (e) {
    let type = e.detail.index;
    // 模拟加载数据
    this.loadData(type)
  },
  scrollListen: function (e) {
    console.log("滑到底部啦 该加载下一页数据啦")
  },
  cancelOrder: function (e) {
    Dialog.confirm({
      message: '要取消此订单？'
    }).then(() => {
      // on confirm
      let index = e.currentTarget.dataset.index;
      this.setData({
        [`orderList[${index}].orderStatus`]: 0
      })
      for (let i = 0; i < this.data.orderList[index].productList.length; i++) {
        this.setData({
          [`orderList[${index}].productList[${i}].status`]: 0
        })
      }
    }).catch(() => {
      // on cancel
    });
  },
  deleteOrder: function (e) {
    Dialog.confirm({
      message: '要删除此订单？'
    }).then(() => {
      // on confirm
      let id = e.currentTarget.dataset.value.id;
      let data = [];
      this.data.orderList.forEach(function (v) {
        if (id != v.id) {
          data.push(v);
        }
      })
      this.setData({
        orderList: data
      })
    }).catch(() => {
      // on cancel
    });
  },
  confirmReceive: function (e) {
    Dialog.confirm({
      message: '确收到货物？'
    }).then(() => {
      // on confirm
      let index = e.currentTarget.dataset.index;
      this.setData({
        [`orderList[${index}].orderStatus`]: 4
      })
      for (let i = 0; i < this.data.orderList[index].productList.length; i++) {
        this.setData({
          [`orderList[${index}].productList[${i}].status`]: 4
        })
      }
    }).catch(() => {
      // on cancel
    });
  },
  toPay: function (e) {
    let actualPrice = e.currentTarget.dataset.value.actualPrice;
    wx.showModal({
      title: '提示',
      content: '此处需调用微信支付接口',
      showCancel: false,
      confirmColor: '#b4282d',
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '/pages/pay-result/pay-result?status=1&actualPrice=' + actualPrice,
          })
        }
      }
    })
  },
  toOrderDetail: function (v) {
    let data = v.currentTarget.dataset.value;
    wx.setStorageSync("currOrder", data);
    wx.navigateTo({
      url: '/pages/ucenter/order-detail/order-detail'
    })
  },
  toComment: function (v) {
    let data = v.currentTarget.dataset.value;
    wx.setStorageSync("currOrder", data);
    wx.navigateTo({
      url: '/pages/ucenter/to-comment/to-comment'
    })
  },
  toExpress: function (v) {
    wx.navigateTo({
      url: '/pages/ucenter/express/express'
    })
  },
  buyAgain: function (e){
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/product/product?id='+this.data.order[index].productList[0].id
    })
  }
})