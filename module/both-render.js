const ValleyModule = require('valley-module');

const reg = /<\/head>/;
let scriptTpl = '<script src="http://source.valleyjs.org/valley-tpl.js"></script>';

class BothRender extends ValleyModule {
  prepare() {
    this.use('prepare', async next => {
      this.context.brender = async (tpl, data, scope) => {
        let html = await this.context.render(tpl, data, scope);
        if (reg.test(html)) {
          html = html.replace(reg, `${scriptTpl}</body>`);
        } else {
          html = scriptTpl + html;
        }
        await this.context.text(html);
      };
    });
  }
}

module.exports = BothRender;
