/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-28 11:35:56
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-28 16:21:07
 */
// pages/example/grid/grid.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
                text: '标题文字',
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
                text: '标题文字',
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
                text: '标题文字',
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
                text: '标题文字',
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
                text: '标题文字',
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
                text: '标题文字',
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
                text: '标题文字',
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
                text: '标题文字',
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
                text: '标题文字',
                desc: '描述信息',
            },
        ],
    },

    onItemClick(e) {
        console.log(e, 'onGridItemClick')
    },
    onGridItemTap(e) {
        console.log(e)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})