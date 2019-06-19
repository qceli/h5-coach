Zepto(function($){
    // 打开相册
    $('.uploadImg').click(function(){
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                window.localStorage.setItem('localIds', localIds[0])
                window.location.href = '../chooseAlbum/index.html'
            },
            error: function (e) {
                alert(e)
            }
        })
        if(debug) {
            window.location.href = '../chooseAlbum/index.html'
        }
    })

    //打开摄像头
    $('.openCamera').click(function(){
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                console.log(localIds)
                window.localStorage.setItem('localIds', localIds[0])
                window.location.href = '../chooseAlbum/index.html'
            },
            error: function (e) {
                alert(e)
            }
        })
        if(debug) {
            window.location.href = '../chooseAlbum/index.html'
        }
    })
})
