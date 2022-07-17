//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    sections: [{
      id: 1,
      title: "轮播图",
      type: 0, // 板块类型 轮播
      sortOrder: 1, // 板块排序
      list: [{
        id: 1,
        relateId: 0, // 关联商品或其他ID
        title: "",
        type: 0, // 关联类型 0商品 1促销板块 2分类
        picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0whme5ig0j21kp0h779h.jpg"
      }, {
        id: 2,
        relateId: 0,
        title: "",
        type: 0,
        picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0whmrjq2oj21kp0h7n42.jpg"
      }]
    }, {

      id: 2,
      title: "频道图标",
      type: 1, // 板块类型 频道图标
      sortOrder: 2,
      list: [{
        id: 1,
        relateId: 0,
        title: "IPhone XS",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/5224f868cca31a8b913411ff9d69dcaf.png"
      },
      {
        id: 2,
        relateId: 0,
        title: "购买空净",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/e98cfb0a63e8b8c80e5b87ca66bda64c.png"
      },
      {
        id: 3,
        relateId: 0,
        title: "新品配件",
        type: 0,
        picUrl: "https://i.loli.net/2019/06/23/5d0f7e938c57070713.png"
      },
      {
        id: 4,
        relateId: 0,
        title: "服装",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/75892aebb63f998fa9b37e9a18984a98.png"
      },
      {
        id: 5,
        relateId: 0,
        title: "更多",
        type: 0,
        picUrl: "https://i.loli.net/2019/06/23/5d0f7e938cbee56873.png"
      }
      ]

    }, {

      id: 3,
      title: "热门商品",
      type: 2, // 板块类型 横向商品板块
      relateId: 1, // 关联促销分类
      sortOrder: 3,
      list: [{
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
    }, {
      id: 4,
      title: "",
      type: 3, // 板块类型 两张板块
      sortOrder: 4,
      list: [{
        id: 1,
        relateId: 0,
        type: 0,
        picUrl: "https://tva1.sinaimg.cn/large/e6c9d24ely1h0wd7ww817j20s00aogmu.jpg"
      },
      {
        id: 2,
        relateId: 0,
        type: 0,
        picUrl: "https://tva1.sinaimg.cn/large/e6c9d24ely1h0wd8ly20fj21hc0jgwm4.jpg"
      }
      ]
    }, {
      id: 5,
      title: "官方精选",
      type: 4, // 大图商品带边框板块
      relateId: 2,
      sortOrder: 5,
      list: [{
        id: 1,
        relateId: 0,
        title: "肥多多",
        description: "更加肥沃，更适合种植农作物，增产率约 13.4%，平均每亩增收 100元。",
        price: 137.00,
        type: 0,
        picUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1h0vayptmj2j20u00z5wjs.jpg",
        tag: "满减"
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
    }, {

      id: 6,
      title: "",
      type: 3, // 板块类型 两张板块
      sortOrder: 6
      // ,
      // list: [{
      //   id: 1,
      //   relateId: 0,
      //   type: 0,
      //   picUrl: "https://resource.smartisan.com/resource/3a7c77edcd70a9d3621bc3e7d0fba1c1.png"
      // },
      // {
      //   id: 2,
      //   relateId: 0,
      //   type: 0,
      //   picUrl: "https://resource.smartisan.com/resource/4bf08546b25b1527cc715a9717db6327.png"
      // }
      // ]
    }, {

      id: 5,
      title: "品牌周边",
      type: 5, // 大图商品无边框板块
      relateId: 3,
      sortOrder: 5,
      list: [{
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
    }]
  },
  onLoad: function () { },
  toSearch: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    });
  },
  handleClick: function (e) {
    let data = e.currentTarget.dataset.value;
    if (data.type == 0) {
      // 商品
      wx.navigateTo({
        url: '/pages/product/product?id=' + data.relateId
      });
    } else if (data.type == 1) {
      // 促销
      wx.navigateTo({
        url: '/pages/promotion/promotion?id=' + data.relateId
      });
    } else if (data.type == 2) {
      // 分类
      wx.navigateTo({
        url: '/pages/product/product?id=' + data.relateId
      });
    }
  },
  clickHeader: function (e) {
    let data = e.currentTarget.dataset.value;
    wx.navigateTo({
      url: '/pages/promotion/promotion?id=' + data.relateId
    });
  }
})