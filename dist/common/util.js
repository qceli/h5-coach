const util = {};

util.ajax = function (type, url, data) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: type,
            url: url,
            data: data,
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (request) {

            },
            success: function (res) {
                console.log('res is', res)
                if (res.code === 200) {
                    resolve(res)
                } else {
                    reject(res)
                }
            },
            error: function (xhr, errorType, error) {
                console.error('xhr', xhr);
                console.error('errorType', errorType);
                console.error('error', error);
            }
        })
    })
}

