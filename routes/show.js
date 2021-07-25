const router = require('express').Router();
const File = require('../models/file');

router.get('/:uuid', async (req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        if (!file) {
            return res.render('download', { error: 'Link has expired.' });
        }

        return res.render('download',
            {
                uuid: file.uuid,
                fileName: file.filename,
                fileSize: file.size,
                downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`

                // "file": "http://localhost:3000/files/acfe4d75-43e3-49cc-881c-44e3981114ea"

            });
    } catch (err) {
        return res.render('download', { error: 'Something went wrong.' });
    }

});
module.exports = router;