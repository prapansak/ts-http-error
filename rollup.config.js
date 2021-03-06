import typescript from 'rollup-plugin-typescript2';
import uglify from "rollup-plugin-uglify-es";
import pkg from "./package.json";

export default {
  input: 'src/index.ts',
  output: [{
    file: pkg.main,
    format: 'cjs',
    sourcemap: true
  }, {
    file: pkg.module,
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