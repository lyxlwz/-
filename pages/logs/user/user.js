var app = getApp()
Page({
  data: { 
    userInfo: {}, 
    hasUserInfo: false, 
    canIUse: wx.canIUse('button.open-type.getUserInfo'), 
    orderItems: [{ 
      typeId: 0, name: '账号信息', url: 'bill', imageurl: '/images/ziliao.png' 
      }, 
      { 
        typeId: 1, name: '历史', url: 'bill', imageurl: '/images/lishi.png'
      }, 
      { 
        typeId: 2, name: '提醒', url: 'bill', imageurl: '/images/tixing.png'
      },
      { 
        typeId: 3, name: '查询', url: 'bill', imageurl: '/images/chaxun.png'
      }], 
    },      
    //事件处理函数  
    toOrder: function () {    
      wx.navigateTo({      
        url: '../order/order'    
      })  
    },
    
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function () {
    if (app.globalData.userInfo) { 
      this.setData({ 
        userInfo: app.globalData.userInfo, 
        hasUserInfo: true 
        }) 
      } else if (this.data.canIUse) {      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回   // 所以此处加入 callback 以防止这种情况
       app.userInfoReadyCallback = res => {        
        this.setData({          
          userInfo: res.userInfo,          
          hasUserInfo: true        
          })      
        }    
      } else {      
        // 在没有 open-type=getUserInfo 版本的兼容处理     
        wx.getUserInfo({        
          success: res => {          
            app.globalData.userInfo = res.userInfo          
            this.setData({            
              userInfo: res.userInfo,            
              hasUserInfo: true          
            })        
          }      
        })    
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

  }
})