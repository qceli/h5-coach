const debug = true;
Zepto(function($){
    function _parseJSON(str) {
        if (typeof str === 'undefined') {
            return {}
        }
        if (typeof str === 'object') {
            return str
        }
        try {
            return JSON.parse(str)
            // eslint-disable-next-line
        } catch (ex) {}
        // 如果是个纯的字符串，走下面
        // try {
        //   let _json = JSON.parse(JSON.stringify({ obj: str }))
        //   return _json.obj
        // } catch (ex) { }
        // eslint-disable-next-line
        return (new Function("", "return " + str))()
    }
    util.ajax('POST','http://coach.realmshow.com/api/webchat-api/pub/signature',{}).then((res)=>{
        console.log('res', typeof res)
        var resData = JSON.parse(res.data)
        wx.config({
            debug: false,
            appId: resData.appId,
            timestamp: resData.timestamp,
            nonceStr: resData.nonce,
            signature: resData.signature,
            jsApiList: [
                'checkJsApi',
                'chooseImage',
                'uploadImage',
                'onMenuShareTimeline',
                'getLocalImgData',
                'onMenuShareAppMessage'
            ]
        })
        wx.ready(function(){
            wx.onMenuShareTimeline({
                title: `coach`,
                link: 'http://coach.realmshow.com',
                imgUrl: ``
            })
            wx.onMenuShareAppMessage({
                title: `coach`, // 分享标题
                desc: `coach`, // 分享描述
                link: 'http://coach.realmshow.com', // 分享链接
                imgUrl: `` // 分享图片
            })
        })
    })
})
