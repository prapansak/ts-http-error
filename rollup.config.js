import typescript from 'rollup-plugin-typescript2';
import uglify from "rollup-plugin-uglify-es";

export default {
  input: 'src/index.ts',
  output: [{
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true
  }, {
    file: 'dist/index.es.js',
    format: 'es',
    sourcemap: true
  }],
  plugins: [
    typescript({ 
      useTsconfigDeclarationDir: true
    }),
    uglify(),
  ]
}