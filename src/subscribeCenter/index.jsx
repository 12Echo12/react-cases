// 订阅中心
var subscribeCenter = {
    list: [],

    // 订阅 subscribe
    subscribe(callback) {
        this.list.push(callback);
    },
    // 发布 publish
    publish(value) {
        this.list.forEach(item =>
            item && item(value)
        )
    }

}
export default subscribeCenter