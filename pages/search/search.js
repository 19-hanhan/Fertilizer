// pages/search/search.js
import Toast from '../../lib/vant-weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: "",
    searchStatus: false,
    filters: [
      {
        type: 'text',
        label: '综合',
        value: 'default',
        checked: true,
        groups: ['001'],
      },
      {
        type: 'sort',
        label: '价格',
        value: 'price',
        groups: ['002'],
      }
    ],
    history: [
      "肥多多",
      "壮苗"
    ],
    hot: [
      {
        isTop: true,
        sortOrder: 1,
        title: "肥多多",
        type: 1, // 关联类型 0商品 1促销 2分类 3搜索词
        relateId: 1 // 关联id
      },
      {
        isTop: false,
        sortOrder: 2,
        title: "清水宝"
      }
    ],
    result: [
      {
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
        description: "对于重金属元素镉(Cd)含量的降低作用达到 39.79%。有效减轻土地的镉污染。",
        price: 157.00,
        type: 0,
        picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vazapilyj20u013sag2.jpg"
      },
      {
        id: 4,
        relateId: 0,
        title: "清水宝",
        description: "净化污水的同时也增加了土壤的肥力，变废为宝。",
        price: 199.00,
        type: 0,
        picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vazhuiaqj20u013pwpm.jpg"
      },
      {
        id: 5,
        relateId: 0,
        title: "壮苗",
        description: "促生效果最明显的特定农作物促生型微生物菌肥，助力农作物的生长和增产。",
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
    wx.setNavigationBarTitle({
      title: '搜索',
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

    // 加载历史搜索词
    this.getHistory();
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
  onSearch: function (e) {
    if (!e.detail) {
      Toast('请输入搜索关键词');
      return;
    }
    Toast.loading({
      message: '加载中...',
      duration: 0
    });
    let that = this;
    setTimeout(function () {
      Toast.clear();
      that.setData({
        value: e.detail,
        searchStatus: true
      })
    }, 500)
    // 记录历史词
    this.setHistory(e.detail)
  },
  setHistory(v) {
    let history = wx.getStorageSync('historyKeyword');
    if (!history) {
      history = []
    }
    if (history.indexOf(v) >= 0) {
      // 去重
      return;
    }
    history.push(v);
    wx.setStorageSync('historyKeyword', history);
  },
  getHistory() {
    let history = wx.getStorageSync('historyKeyword');
    if (!history) {
      return;
    }
    this.setData({
      history: history
    })
  },
  onCancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  onClear: function () {
    this.setData({
      value: "",
      searchStatus: false
    })
  },
  clearHistory: function () {
    this.setData({
      history: []
    })
    wx.setStorageSync('historyKeyword', []);
  },
  clickTag: function (e) {
    let data = e.currentTarget.dataset.value;
    this.setData({
      value: data,
      searchStatus: true
    })
  },
  onFilterChange: function (e) {
    let price = e.detail.checkedValues[1];
    if (price == 1) {
      let data = this.data.result;
      data.sort(function (a, b) {
        return a.price - b.price
      });
      this.setData({
        result: data
      })
    } else if (price == -1) {
      let data = this.data.result;
      data.sort(function (a, b) {
        return b.price - a.price
      });
      this.setData({
        result: data
      })
    } else {
      let data = this.data.result;
      data.sort(function (a, b) {
        return a.id - b.id
      });
      this.setData({
        result: data
      })
    }
  },
  handleClick: function (e) {
    let id = e.currentTarget.dataset.value.id;
    wx.navigateTo({
      url: '/pages/product/product?id=' + id
    });
  },
  scrollListen: function (e) {
    console.log("滑到底部啦 该加载下一页数据啦")
  }
})