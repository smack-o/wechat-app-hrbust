const dev = 'http://127.0.0.1:4001/api';
// const production = 'https://test.gebilaowu.cn/api';
const production = 'https://hrbust.tkmain.cn/api';

let url = null;
// es6 版本
if (NODE_ENV === 'dev') {
    url = dev;
} else if (NODE_ENV === 'production') {
    url = production;
}

// es5 版本
// if ('NODE_ENV' === 'dev') {
//     url = dev;
// } else if ('NODE_ENV' === 'production') {
// var url = dev;
// }
module.exports = url;
