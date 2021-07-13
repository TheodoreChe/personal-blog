module.exports = {
    webpack5: false,
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        if (!isServer) {
            config.node = {
                fs: 'empty',
            };
        }

        return config;
    },
};
