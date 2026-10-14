/* JIZURA-only font loader. Google first, bounded waits, original self-hosted fonts second. */
(function (root) {
  'use strict';
  function create(options) {
    const doc = options.document || root.document;
    const setTimer = options.setTimeout || root.setTimeout.bind(root);
    const clearTimer = options.clearTimeout || root.clearTimeout.bind(root);
    const remoteMs = options.remoteTimeoutMs || 3500;
    const localMs = options.localTimeoutMs || 15000;
    const remoteSheets = new Map(), localSheets = new Map();
    let preferLocal = false, breakWait;
    const broken = new Promise(resolve => { breakWait = resolve; });
    const counters = { remote: 0, local: 0, system: 0 };

    function deadline(promise, ms) {
      return new Promise(resolve => {
        let settled = false;
        const finish = result => {
          if (settled) return;
          settled = true; clearTimer(timer); resolve(result);
        };
        const timer = setTimer(() => finish(null), ms);
        Promise.resolve(promise).then(finish, () => finish(null));
      });
    }
    function disableRemote() {
      if (preferLocal) return;
      preferLocal = true; breakWait(false);
      // Drop every Google stylesheet so a late response cannot replace the
      // self-hosted face or introduce a second layout change after fallback.
      for (const job of remoteSheets.values()) { job.cancel(); job.link.remove(); }
    }
    function stylesheet(url, cache, key, timeout) {
      if (cache.has(key)) return cache.get(key).ready;
      const link = doc.createElement('link');
      link.rel = 'stylesheet'; link.href = url;
      let finish, timer;
      const ready = new Promise(resolve => {
        let settled = false;
        finish = ok => {
          if (settled) return;
          settled = true; clearTimer(timer); link.onload = link.onerror = null;
          if (!ok) link.remove();
          resolve(ok);
        };
        link.onload = () => finish(true);
        link.onerror = () => finish(false);
        timer = setTimer(() => finish(false), timeout);
      });
      cache.set(key, { link, ready, cancel: () => finish(false) });
      doc.head.appendChild(link);
      return ready;
    }
    async function loadFace(face, text) {
      const font = `${face.weight || 400} 64px ${face.family}`;
      if (!face.gf) {
        // Uploaded fonts never use the network or a catalog substitution.
        const loaded = await deadline(doc.fonts.load(font, text), localMs);
        const source = loaded && loaded.length ? 'user' : 'system';
        if (source === 'system') counters.system++;
        return { family: face.family, source };
      }
      if (!preferLocal) {
        const sheet = stylesheet('https://fonts.googleapis.com/css2?family=' + face.gf + '&display=swap', remoteSheets, face.gf, remoteMs);
        const job = sheet.then(ok => ok ? doc.fonts.load(font, text) : null);
        // A shared circuit break also releases other concurrent font waits.
        const loaded = await deadline(Promise.race([job, broken]), remoteMs);
        if (loaded && loaded.length && !preferLocal) {
          counters.remote++; return { family: face.family, source: 'remote' };
        }
        disableRemote();
      }
      const file = options.files[face.gf];
      if (file) {
        const url = new URL(file, options.baseUrl).href;
        const sheet = stylesheet(url, localSheets, file, localMs);
        const loaded = await deadline(sheet.then(ok => ok ? doc.fonts.load(font, text) : null), localMs);
        if (loaded && loaded.length) {
          counters.local++; return { family: face.family, source: 'local' };
        }
      }
      counters.system++;
      return { family: face.family, source: 'system' };
    }
    async function ensure(faces, text) {
      if (!doc || !doc.head || !doc.fonts || !doc.fonts.load) return [];
      const seen = new Set();
      const list = faces.filter(face => {
        const key = face.family + '|' + face.weight + '|' + (face.gf || '');
        if (seen.has(key)) return false;
        seen.add(key); return true;
      });
      // Never await document.fonts.ready: unrelated/hung remote faces must not
      // block preview/export once all of this plan's selected faces are ready.
      return Promise.all(list.map(face => loadFace(face, text)));
    }
    return Object.freeze({ ensure, status: () => ({ preferLocal, ...counters }) });
  }
  if (typeof module === 'object' && module.exports) module.exports = { create };
  else root.JizuraFontLoader = Object.freeze({ create });
})(typeof globalThis !== 'undefined' ? globalThis : this);

window.JizuraFonts = window.JizuraFontLoader.create({baseUrl:document.currentScript.src,files:{"Black+Han+Sans":"f3b8ede7c13a2f82704e65bc.css","Chiron+GoRound+TC:wght@800":"721c16c69bc081f897424580.css","Dela+Gothic+One":"85af5f8e9e37e7c7ed8c50e7.css","Do+Hyeon":"88530c5547055eb7bd1a5489.css","DotGothic16":"cdeef03204a691eb605366ba.css","Gowun+Batang:wght@700":"1626be594598489a43af8096.css","Gowun+Dodum":"c5b8efdde9e4adf0d6c9a798.css","Huninn":"973b2837a0e90f8e6039ca11.css","IBM+Plex+Mono:wght@500;600":"f960bf7609100e1f9440ae17.css","IBM+Plex+Sans+JP:wght@400;500;700":"2084626733e6d274108e028a.css","IBM+Plex+Sans+KR:wght@500":"8773d4de426b18301c402223.css","Jua":"4161c3c9adbdadc3a008fac2.css","Kaisei+Tokumin:wght@800":"455070a47f1f8209157f735d.css","Kiwi+Maru:wght@500":"1d32fd6750338180c9bfa154.css","Klee+One:wght@600":"b21eaf935a4456bd591edf8d.css","LXGW+Marker+Gothic":"60150e39509c954255faef1e.css","LXGW+WenKai+TC:wght@700":"be702deb7a8118d1a45bbbba.css","M+PLUS+Rounded+1c:wght@800":"fdf30f48014fa97e4cf1fe5d.css","Ma+Shan+Zheng":"0cfeb486b97ef65953a48062.css","Mochiy+Pop+One":"d4a24b0fd2fb2b25893fa8d0.css","Nanum+Brush+Script":"8d3103d8c812efb1f8494a7e.css","Noto+Sans+JP:wght@100..900":"f3032896c29b465ee1b2f9e6.css","Noto+Sans+JP:wght@300;500;700;900":"f3032896c29b465ee1b2f9e6.css","Noto+Sans+KR:wght@300;500;700;900":"a0e0c5b8429cf297025c692b.css","Noto+Sans+SC:wght@300;500;700;900":"ad07fd92e0a275ec6fd3e8e4.css","Noto+Sans+TC:wght@300;500;700;900":"09229c87c30923875ade2402.css","Noto+Serif+JP:wght@200..900":"df68b2b1a5286c9b1e93e030.css","Noto+Serif+JP:wght@300;500;700":"df68b2b1a5286c9b1e93e030.css","Noto+Serif+KR:wght@300;500;700;800;900":"c81eaee8fd069370762f8727.css","Noto+Serif+SC:wght@300;500;700;800;900":"a2c3fd04165418665994ea1c.css","Noto+Serif+TC:wght@300;500;700;800;900":"01a01efcca466225fd2c2f72.css","Potta+One":"f2e05e9e3f0bcf284d8f1e8b.css","Rampart+One":"3aca78fa09feb041f6dee7a8.css","Reggae+One":"0fcf37d86b3d54a753bbcc04.css","Shippori+Mincho+B1:wght@800":"36ab383e1736af1d27da882b.css","WDXL+Lubrifont+TC":"bb554e3801ce1f6deed4cf55.css","Yuji+Syuku":"435c855518d2d0f6f5d84b64.css","ZCOOL+KuaiLe":"f4c2fbc9a47fb9be2cc1633c.css","ZCOOL+QingKe+HuangYou":"0c8cda46ecc2936ed75e819b.css","ZCOOL+XiaoWei":"7c758699b7aa6c235fa0621d.css","Zen+Kaku+Gothic+New:wght@900":"a49e93ea6dbe28da50f237ca.css","Zen+Old+Mincho:wght@900":"c3554d1da491a54d433e7dd3.css"}});
