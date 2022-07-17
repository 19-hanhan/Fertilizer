// pages/product/product.js
let WxParse = require("../../lib/wxParse/wxParse.js");
import Toast from '../../lib/vant-weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    couponShow: false,
    serviceShow: false,
    cartList: [],
    deliveryAddress: {
      address: "江西省南昌市东湖区北京西路",
      time: "23:00",
      day: "",
      diff: "明天"
    },
    product: {
      id: 0,
      picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vayptmj2j20u00z5wjs.jpg", // 默认商品图片
      promotion: 1, // 促销活动 0无 1限时购 2领劵
      gallery: [{
        picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vayptmj2j20u00z5wjs.jpg",
        sortOrder: 1
      },
      {
        picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vaz23qezj20u012s470.jpg",
        sortOrder: 2
      }
      ], // 轮播图
      title: "肥多多",
      description: "更加肥沃，更适合种植农作物，增产率约 13.4%，平均每亩增收 100元。",
      defaultPrice: 157.00, // 默认显示价格
      price: 157.00,
      originPrice: 198.00,
      detail: '<div><img src="https://img14.360buyimg.com/cms/jfs/t1/25195/1/9487/388554/5c7f80a5E8b8f8f0c/46818404849d6ec6.jpg"><img src="https://img12.360buyimg.com/cms/jfs/t1/15853/18/9628/325164/5c7f80a5E7172b236/ba9f3f63a83a9b65.jpg"></div>', // 商品详情
      tags: [{
        id: 1,
        title: "官方自营品牌"
      },
      {
        id: 2,
        title: "新品"
      }
      ],
      serviceList: [{
        id: 1,
        title: "48小时快速退款",
        desc: "收到退货包裹并确认无误后，将在48小时内办理退款，退款将原路返回，不同银行处理时间不同，预计1-5个工作日到账。"
      },
      {
        id: 2,
        title: "满88元免邮费",
        desc: "单笔订单金额（不含运费），大陆地区满88元免邮，不满88元收取10元邮费；港澳台地区满500元免邮，不满500元收取30元运费；海外地区以下单页提示运费为准。"
      },
      {
        id: 3,
        title: "官方自营品牌",
        desc: "官方原创生活类电商品牌，所有商品均为官方自营，品质保证。"
      },
      {
        id: 4,
        title: "国内部分地区无法配送",
        desc: "不支持省份: 台湾、香港、澳门、新疆"
      }
      ],
      comment: {
        goodCommentRate: 100, // 好评率
        count: 3986, // 评论计数
        goodComment: {
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
        } // 精选评论
      },
      attribute: [{
        name: "品牌",
        value: "菌知禾下土"
      },
      {
        name: "重量",
        value: "2-10kg"
      }
      ] // 商品属性
    },
    recommend: [
    {
      id: 1,
      relateId: 0,
      title: "肥抗生",
      description: "施用本系列产品土壤的有效磷含量增加了 7.55mg/kg，增幅达同类竞品的 1.4倍。",
      price: 168.00,
      type: 0,
      picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vayux4iaj20u012ygre.jpg"
    },
    {
      id: 2,
      relateId: 0,
      title: "壮苗",
      description: "促生效果最明显的特定农作物促生型微生物菌肥，助力农作物的生长和增产。",
      price: 199.00,
      type: 0,
      picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vazn1owxj20u013ogtf.jpg"
    }
    ],
    hot: [{
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
    ],
    sku: {
      show: false, // 显示属性规格
      noneSku: false, // 有无规格选择
      quota: 100, // 限购数量
      productId: 1, // 商品id
      picUrl: "", // 当前选择图片
      specText: "", // 所选规格属性
      specTextNoCount: "", // 所选规格属性 无数量
      tree: [
        {
          k: '品种', // skuKeyName：规格类目名称
          v: [
            {
              id: 1, // skuValueId：规格值 id
              name: '肥多多', // skuValueName：规格值名称
              picUrl: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h0vayptmj2j20u00z5wjs.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
              selected: false, // 是否选择
              disabled: false // 禁用
            },
            {
              id: 2,
              name: '江西特供',
              picUrl: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h0vaz23qezj20u012s470.jpg',
              selected: false,
              disabled: false
            }
          ],
          ks: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
        },
        {
          k: '重量',
          v: [
            {
              id: 3,
              name: '2kg',
              picUrl: '',
              selected: false,
              disabled: false
            },
            {
              id: 4,
              name: '5kg',
              picUrl: '',
              selected: false,
              disabled: false
            },
            {
              id: 5,
              name: '10kg',
              picUrl: '',
              selected: false,
              disabled: false
            }
          ],
          ks: 's2'
        }
      ],
      // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
      list: [
        {
          id: 1, // skuId，下单时后端需要
          price: 1.00, // 价格
          s1: 1, // 规格类目 ks 为 s1 的对应规格值 id
          s2: 3, // 规格类目 ks 为 s2 的对应规格值 id
          stockNum: 50 // 当前 sku 组合对应的库存
        },
        {
          id: 2,
          price: 2.00,
          s1: 1,
          s2: 4,
          stockNum: 100
        },
        {
          id: 3,
          price: 3.00,
          s1: 1,
          s2: 5,
          stockNum: 0
        },
        {
          id: 4,
          price: 4.00,
          s1: 2,
          s2: 3,
          stockNum: 100
        },
        {
          id: 5,
          price: 5.00,
          s1: 2,
          s2: 4,
          stockNum: 100
        },
        {
          id: 6,
          price: 6.00,
          s1: 2,
          s2: 5,
          stockNum: 50
        }
      ],
      // 选择的 sku 组合
      selectedSku: {
      },
      count: 1 // 选择的商品数量
    },
    couponList: [
      {
        id: '1',
        title: '60元直减劵',
        time: '2019.08.01-2019.08.30',
        description: '饮食类目专享；限时购等详情页标注不可用券的商品除外不可用券的商品除外',
        discount: 60, //折扣金额 -1代表全部
        disabled: false,
        showAll: false,
        selected: false,
        get: false,
        mode: "get",
        status: 0 // 0未使用 1已使用 2已失效
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '商品详情',
    })
    // 初始化配送时间
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate() + 1;
    this.setData({
      'deliveryAddress.day': month + '月' + day + '日'
    })
    // 读取购物车
    let cartList = wx.getStorageSync("cartList");
    if (cartList) {
      this.setData({
        cartList: cartList
      })
    }
    // 加载sku后初始化selectedSku
    let tree = this.data.sku.tree;
    for (let i = 0; i < tree.length; i++) {
      let s = 'sku.selectedSku.' + tree[i].ks;
      this.setData({
        [s]: ''
      })
    }
    // 只有一种 sku 规格值时默认选中第一个
    if (tree.length == 1) {
      let k = 'sku.selectedSku.' + this.data.sku.tree[0].ks;
      this.setData({
        [`sku.tree[${0}].v[${0}].selected`]: true,
        [k]: this.data.sku.tree[0].v[0].id
      });
    }
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
    // 加载商品详情数据
    /**
    * WxParse.wxParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */
    let that = this;
    WxParse.wxParse('productDetail', 'html', this.data.product.detail, that, 0);


    // 初始判断
    this.judgeAllItem();
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
  openIndexPage: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  openCoupon: function () {
    this.setData({
      couponShow: true
    })
  },
  closeCoupon: function () {
    this.setData({
      couponShow: false
    })
  },
  openAddress: function () {
    let that = this;
    wx.chooseLocation({
      success: function (res) {
        if(!res.address){
          return;
        }
        that.setData({
          'deliveryAddress.address': res.address
        })
      },
    })
  },
  openService: function () {
    this.setData({
      serviceShow: true
    })
  },
  closeService: function () {
    this.setData({
      serviceShow: false
    })
  },
  openCartPage: function () {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  toComment: function () {
    wx.navigateTo({
      url: '/pages/comment/comment?productId' + this.data.product.id,
    })
  },
  toProduct: function (e) {
    let id = e.currentTarget.dataset.value.id;
    wx.navigateTo({
      url: '/pages/product/product?id=' + id
    })
  },
  clickTag: function (e) {
    let v = e.currentTarget.dataset.value;
    wx.navigateTo({
      url: '/pages/promotion/promotion?id=' + v.id + '&title=' + v.title
    });
  },
  previewThumb: function (e) {
    wx.previewImage({
      current: this.data.product.picUrl,
      urls: [this.data.product.picUrl]
    })
  },
  showSku: function (e) {
    this.setData({
      'sku.show': true
    })
  },
  closeSku: function (e) {
    this.setData({
      'sku.show': false
    })
  },
  selectSku: function (e) {
    let k = e.currentTarget.dataset.k;
    let v = e.currentTarget.dataset.value;
    let index = e.currentTarget.dataset.index;
    let iindex = e.currentTarget.dataset.iindex;
    if (this.data.sku.tree[index].v[iindex].disabled) {
      return;
    }
    // 勾选或反选 设置属性
    if (!this.data.sku.tree[index].v[iindex].selected) {
      // 勾选 记录
      let s = 'sku.selectedSku.' + k.ks;
      this.setData({
        [s]: v.id
      });
    } else {
      // 反选 删除值
      let s = 'sku.selectedSku.' + k.ks;
      this.setData({
        [s]: ''
      });
    }
    this.setData({
      [`sku.tree[${index}].v[${iindex}].selected`]: !this.data.sku.tree[index].v[iindex].selected
    });
    // 排除该组其他已选项
    let vList = this.data.sku.tree[index].v;
    for (let i = 0; i < vList.length; i++) {
      if (vList[i].id != v.id) {
        this.setData({
          [`sku.tree[${index}].v[${i}].selected`]: false
        })
      }
    }
    this.judgeAllItem();
    // 修改属性图片
    if (index == 0) {
      this.setData({
        'product.picUrl': this.data.sku.tree[0].v[iindex].picUrl
      })
    }
    // 修改选择商品价格信息
    if (this.isAllSelected()) {
      let skuComb = this.getSkuComb();
      this.setData({
        'product.price': skuComb.price
      })
    } else {
      // 恢复默认价格
      this.setData({
        'product.price': this.data.product.defaultPrice
      })
    }
  },
  // 循环判断所有属性是否可选
  judgeAllItem: function () {
    // 判断库存
    let tree = this.data.sku.tree;
    for (let i = 0; i < tree.length; i++) {
      let v = tree[i].v;
      for (let j = 0; j < v.length; j++) {
        if (this.isSkuChoosable(tree[i].ks, v[j].id)) {
          // 可点击
          this.setData({
            [`sku.tree[${i}].v[${j}].disabled`]: false
          })
        } else {
          // 不可点击
          this.setData({
            [`sku.tree[${i}].v[${j}].disabled`]: true
          })
        }
      }
    }
    this.getSelectedText();
  },
  isSkuChoosable: function (ks, vId) {

    let selectedSku = this.data.sku.selectedSku;
    let list = this.data.sku.list;

    // 先假设sku已选中，拼入已选中sku对象中
    let matchedSku = Object.assign({}, selectedSku, {
      [ks]: vId
    });

    // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中
    let skusToCheck = Object.keys(matchedSku).filter(
      skuKey => matchedSku[skuKey] != ''
    );

    let filteredSku = list.filter(sku => (
      skusToCheck.every(
        skuKey => String(matchedSku[skuKey]) == String(sku[skuKey])
      )
    ));

    let stock = filteredSku.reduce((total, sku) => {
      total += sku.stockNum;
      return total;
    }, 0);
    return stock > 0;
  },
  // 是否所有规格已选
  isAllSelected: function () {
    let selectedSku = this.data.sku.selectedSku;
    let selected = Object.keys(selectedSku).filter(
      skuKeyStr => selectedSku[skuKeyStr] != ""
    );
    return this.data.sku.tree.length == selected.length;
  },
  // 获得已选择的组合
  getSkuComb: function () {
    if (!this.isAllSelected()) {
      return {};
    }
    let selectedSku = this.data.sku.selectedSku;
    let list = this.data.sku.list;
    let skusToCheck = [];
    this.data.sku.tree.forEach(v => {
      skusToCheck.push(v.ks)
    })
    let filteredSku = list.filter(sku => (
      skusToCheck.every(
        skuKey => String(selectedSku[skuKey]) == String(sku[skuKey])
      )
    ));
    return filteredSku[0];
  },
  // 选择属性文字
  getSelectedText: function () {
    let selectedSku = this.data.sku.selectedSku;
    let text = "";
    Object.keys(selectedSku).forEach(
      skuKeyStr => {
        let id = selectedSku[skuKeyStr];
        let tree = this.data.sku.tree;
        for (let i = 0; i < tree.length; i++) {
          let v = tree[i].v;
          for (let j = 0; j < v.length; j++) {
            if (v[j].id == id) {
              text = text + ' ' + v[j].name
            }
          }
        }
      }
    )
    this.setData({
      'sku.specTextNoCount': text
    })
    if (this.isAllSelected()) {
      text = text + ' ×' + this.data.sku.count;
    }
    this.setData({
      'sku.specText': text
    })
  },
  changeCount: function (e) {
    this.setData({
      'sku.count': e.detail.value
    });
    this.getSelectedText();
  },
  // 未选择属性提示
  toChooseTip: function () {
    // 未选择规格属性
    if (!this.data.sku.show) {
      // 未显示选择面板则显示
      this.setData({
        'sku.show': true
      })
      return;
    }
    let selectedSku = this.data.sku.selectedSku;
    let skuNotChoose = Object.keys(selectedSku).filter(
      skuKeyStr => selectedSku[skuKeyStr] == ''
    )[0]
    this.data.sku.tree.forEach(v => {
      if (v.ks == skuNotChoose) {
        Toast("请选择：" + v.k);
      }
    })
  },
  buyNow: function () {
    if (!this.isAllSelected()) {
      // 提示
      this.toChooseTip();
    } else {
      // 下单 判断数量
      let skuComb = this.getSkuComb();
      if (this.data.sku.count > skuComb.stockNum) {
        Toast("库存不足，请减少购买数量");
        return;
      }
      // 跳转checkout页面
      wx.setStorageSync("checkoutProduct", this.data.product);
      wx.setStorageSync("checkoutProductSku", this.data.sku);
      wx.navigateTo({
        url: '/pages/checkout/checkout?from=product',
      })
    }
  },
  addToCart: function () {
    if (!this.isAllSelected()) {
      // 提示
      this.toChooseTip();
    } else {
      // 添加至购物车 判断数量
      let skuComb = this.getSkuComb();
      if (this.data.sku.count > skuComb.stockNum) {
        Toast("库存不足，请减少购买数量");
        return;
      }
      let cartList = this.data.cartList;
      cartList.push({
        id: this.data.product.id,
        checked: true,
        picUrl: this.data.product.picUrl,
        title: this.data.product.title,
        spec: this.data.sku.specTextNoCount,
        count: this.data.sku.count,
        maxNum: this.data.sku.quota,
        price: this.data.product.price
      });
      wx.setStorageSync("cartList", cartList);
      this.setData({
        cartList: cartList
      });
      Toast("加入购物车成功");
    }
  },
  toVip: function(){
    wx.navigateTo({
      url: '/pages/ucenter/vip/vip',
    })
  }
})