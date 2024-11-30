module.exports = {
    resolve: {
        extensions: ['.js', '.mjs']
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                include: /node_modules/,
                type: 'javascript/auto',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};
