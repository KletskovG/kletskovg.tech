require('esbuild').build({
  entryPoints: ['./src/index.ts'],
  outfile: './dist/index.js',
  bundle: true,
  resolveExtensions: ['.js', '.ts'],
  tsconfig: './tsconfig.json',
  loader: {
    ".ts": "ts",
    ".js": "js",
  },
  format: 'cjs',
  platform: 'node',
})
  .then(() => console.log("✅ Build finished"))
  .catch((err) => {
    console.log(`Build failed: ${err}`);
    process.exit(1);
  })