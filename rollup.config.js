import babel from 'rollup-plugin-babel';

// babel stuff
const babelConfig = {
  babelrc: false,
  presets: [
    [
      '@babel/env', 
      {
        targets: {
          "chrome": "41"
        },       
        "corejs": "2",
        useBuiltIns: "usage"     
      }
    ],          
    [
      'minify', {
        builtIns: false,
        deadcode: false,
      }
    ], 
  ],
  comments: false,
  exclude: 'node_modules/**',
};

// rollup config
export default [
    {
        input: 'src/PaperPusher.js',
        output: {
            format: 'iife',
            file: 'dist/paper-pusher.min.js',
            name: 'PaperPusher',
            sourcemap: true,
            footer: 'PaperPusher = PaperPusher.PaperPusher',
        },
        plugins: [
            babel(babelConfig),
        ],
    }
];
