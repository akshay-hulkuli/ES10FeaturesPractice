let path = './exportDemo.mjs';

import(path)
.then((res) => {
    console.log(res.message());
})
.catch((err) => {
    console.log(err);
})

