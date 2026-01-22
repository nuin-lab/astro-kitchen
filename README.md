<div align="center">

# Astro Kitchen

Astro実験場

</div>

---

- [Overview](#overview)
- [Local](#local)
  - [Requirements](#requirements)
  - [Developing](#developing)
  - [Building](#building)
- [License](#license)

---

## Overview

主にAstroとTypeScriptでいろいろな実装を試す創作実験の場。スニペット兼デモとしての役割も持っている。

## Local

### Requirements

- Node.js v24以降
- pnpm v10以降

### Developing

以下のいずれかで開発サーバーを起動する。

```sh
pnpm run dev

# サーバーを起動してデフォルトブラウザで開く
pnpm run dev -- --open
```

### Building

リリースver.を作成するには以下を実行する。

```sh
pnpm run build

# プレビューまで表示したい場合は代わりにこちらを実行
pnpm run preview
```


## License

[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)のもとで公開されています。
