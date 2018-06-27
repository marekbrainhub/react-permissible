webpackJsonp([60885351811365],{311:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>\n<p>You can use react-permissible in two ways. As an ordinary component and as a Higher Order Component. Both approaches allow you to solve the permission-based rendering a little bit differently.</p>\n<h2 id="usage-as-a-higher-order-component"><a href="#usage-as-a-higher-order-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage as a Higher Order Component:</h2>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Permissible <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@brainhubeu/react-permissible\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">function</span> <span class="token function">callbackFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span> userPermissions<span class="token punctuation">,</span> requiredPermissions <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// do something</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> RestrictedComponent <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>p<span class="token operator">></span>Restricted component<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> PermissibleComponent <span class="token operator">=</span> <span class="token function">Permissible</span><span class="token punctuation">(</span>\n  RestrictedComponent<span class="token punctuation">,</span>\n  userPermissions<span class="token punctuation">,</span>\n  requiredPermissions<span class="token punctuation">,</span>\n  callbackFunction<span class="token punctuation">,</span>\n  oneperm<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token operator">&lt;</span>PermissibleComponent <span class="token operator">/</span><span class="token operator">></span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Where:</p>\n<ul>\n<li>\n<p><code class="language-text">RestrictedComponent</code>: a component to render</p>\n</li>\n<li>\n<p><code class="language-text">userPermissions</code>: an array of permissions set for current user</p>\n</li>\n<li>\n<p><code class="language-text">requiredPermissions</code>: an array of required permissions\nThere are also optional props available:</p>\n</li>\n<li>\n<p><code class="language-text">oneperm</code>: boolean determining that only one of required permissions will be necessary instead of requiring all passed permissions (default)</p>\n</li>\n<li>\n<p><code class="language-text">renderOtherwise</code>: another component to be rendered if the permissions do not match (the user isn\'t permitted).</p>\n</li>\n</ul>'}},pathContext:{relativePath:"GDK>../docs/usage/hoc.md"}}}});
//# sourceMappingURL=path---docs-usage-hoc-fb480be40ec8987c21a4.js.map