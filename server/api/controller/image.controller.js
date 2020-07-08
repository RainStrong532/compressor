'use strict';

exports.upload = function(req, res) {
    console.log(req.files);
    let path = './public/images' + "/" + req.files.avatar.name;
    console.log(path);
    req.files.avatar.mv(path, (err) => {
        if (!err) {
            console.log("SUCCESS");
        } else {
            console.log(err);
            res.json({ error: err });
        }
        res.json({ success: true });
    });
};