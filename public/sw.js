const V='terjemah-v6',F=['./','manifest.json','icon-192.png','icon-512.png'];
const clean=async r=>r.redirected?new Response(await r.blob(),{status:r.status,headers:r.headers}):r;
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(async c=>{for(const f of F){try{const r=await fetch(f);if(r.ok)await c.put(f,await clean(r))}catch(_){}}}))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const q=e.request,u=new URL(q.url);if(q.method!=='GET')return;
if(q.mode==='navigate'){e.respondWith(fetch(q).then(r=>{if(r.ok&&r.type==='basic'&&!r.redirected){const c=r.clone();caches.open(V).then(x=>x.put('./',c))}return r}).catch(()=>caches.match('./')));return}
if(u.origin===location.origin)e.respondWith(caches.match(q).then(r=>r||fetch(q)));
else if(u.hostname==='cdn.jsdelivr.net')e.respondWith(caches.match(q).then(r=>r||fetch(q).then(res=>{const c=res.clone();caches.open(V).then(x=>x.put(q,c));return res})))});
