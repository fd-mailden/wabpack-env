import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildOptions, BuildPaths, BuildPlatform} from "./config/build/types/types";

type Mode = 'development' | 'production';

interface Env {
    mode?: Mode;
    port?: number;
    analyzer?: boolean;
    platform?: BuildPlatform

}

export default (env: Env) => {

    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env?.platform ?? 'desktop'

    })
    return config;
}