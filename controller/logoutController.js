

exports.logout = (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            path: '/'
        });
        req.auth = false; 

        return res.status(200).json({ message: "Logout successful" });
    } catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
};