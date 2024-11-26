import { transformSync } from '@babel/core'
import { ESLint } from 'eslint'
import path from 'path'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

// baseConfig: require(path.join(process.cwd(), '.eslintrc.js'))

// const engine = new ESLint({
//   fix: true,
//   baseConfig: {},
// })
const tsToJs = async (content: string): Promise<string> => {
  if (!content) {
    return ''
  }
  const { code } = transformSync(content, {
    configFile: false,
    plugins: [
      [
        require.resolve('@babel/plugin-transform-typescript'),
        {
          isTSX: false,
        },
      ],
    ],
  })
  // const report = await engine.lintText(code)
  // let output = report[0].output
  // output = output ? output.trim() : output!
  return code
}

export default tsToJs
