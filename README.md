# markdown-it-playground

Markdown-it plugin for embedding code demo environments like JSFiddle and CodePen. [View the Demo](http://rykeller.com/preview/playground/)

This was originally a fork of [markdown-it-block-embed](https://github.com/rotorz/markdown-it-block-embed) that is being taken in a direction focusing exclusively on embedded demos.

**Markdown Input**
```markdown
@[jsfiddle](http://jsfiddle.net/rykeller/y4848ak7/8/embedded/html,css,result/)

@[codepen](http://codepen.io/Yakudoo/embed/YXxmYR/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2)

```

**HTML Output**
  ```html
  <div class="block-embed block-embed-service-jsfiddle">
    <iframe type="text/html"
            src="http://jsfiddle.net/rykeller/y4848ak7/8/embedded/html,css,result/"
            frameborder="0"
            width="100%" height="300"
            webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""
    ></iframe>
  </div>
  ```

  ```html
    <div class="block-embed block-embed-service-codepen">
      <iframe type="text/html"
      src="http://codepen.io/Yakudoo/embed/YXxmYR/?height=265&amp;amp;theme-id=0&amp;amp;default-tab=js,result&amp;amp;embed-version=2"
      frameborder="0"
      width="100%" height="300"
      webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""
      ></iframe>
    </div>
  ```

## Usage

```javascript
let md = require("markdown-it")();
let playgroundPlugin = require("markdown-it-playground");

md.use(playgroundPlugin);

//  Inline test
let inlineTest = "@[jsfiddle](http://jsfiddle.net/rykeller/y4848ak7/8/embedded/html,css,result/)";
console.log(md.render(inlineTest));
```


## Options

Option               | Type                 | Default                  | Description
:--------------------|:---------------------|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------
`containerClassName` | `string` \| `null`   | `'block-embed'`          | Class name for image container element.
`serviceClassPrefix` | `string`             | `'block-embed-service-'` | Prefix for service name in CSS class.
`outputPlayerSize`   | `boolean`            | `true`                   | Indicates if 'width' and 'height' attributes are written to output.
`allowFullScreen`    | `boolean`            | `true`                   | Indicates whether embed iframe should be allowed to enter full screen mode.
`filterUrl`          | `function` \| `null` | `null`                   | A function that customizes url output. Signature: `function (url: string, serviceName: string, videoID: string, options: object): string`
                     |                      |                          |
`services.{name}`    | `function`           | -                        | A function that constructs a new instance of the service. Can extend `VideoServiceBase`.
`services.jsfiddle`   | `function`           | `jsfiddleService`         | Implementation of the 'jsfiddle' embed service. Can be overridden by a custom implementation.
`services.codepen`   | `function`           | `codepenService`         | Implementation of the 'codepen' embed service. Can be overridden by a custom implementation.
                     |                      |                          |
`{service-name}`     | `object`             | -                        | Options can be supplied to embed services.
                     |                      |                          |
`jsfiddle.width`      | `number`             | `640`                    | Width of jsfiddle embed.
`jsfiddle.height`     | `number`             | `390`                    | Height of jsfiddle embed.
`codepen.width`      | `number`             | `640`                    | Width of codepen embed.
`codepen.height`     | `number`             | `390`                    | Height of codepen embed.
## Future Enhancement

- Replacement of unit tests and depreciated ES5 code
- Performance optimization
- JSBin support


## Contribution Agreement

This project is licensed under the MIT license (see LICENSE). To be in the best
position to enforce these licenses the copyright status of this project needs to
be as simple as possible. To achieve this the following terms and conditions
must be met:

- All contributed content (including but not limited to source code, text,
  image, videos, bug reports, suggestions, ideas, etc.) must be the
  contributors own work.

- The contributor disclaims all copyright and accepts that their contributed
  content will be released to the public domain.

- The act of submitting a contribution indicates that the contributor agrees
  with this agreement. This includes (but is not limited to) pull requests, issues,
  tickets, e-mails, newsgroups, blogs, forums, etc.
