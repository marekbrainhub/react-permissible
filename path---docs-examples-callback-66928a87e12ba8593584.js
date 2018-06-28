webpackJsonp([26573978499949],{304:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="callback-function"><a href="#callback-function" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Callback function</h1>\n<p>&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;&#x3C; HEAD\nCallback function passed to <code class="language-text">Permissible</code> Higher Order Component will be called whenever the permissions do not match. This might be combined with <code class="language-text">oneperm</code> parameter. <strong>Open the Console</strong> to see a callback message.\n=======\n<strong>react-permissible</strong> allows to run a callback function whenever the conditions are not met. </p>\n<blockquote>\n<blockquote>\n<blockquote>\n<blockquote>\n<blockquote>\n<blockquote>\n<blockquote>\n<p>62875a6c00a1d9eb97bd64bdcf1e09a7e8fd4185</p>\n</blockquote>\n</blockquote>\n</blockquote>\n</blockquote>\n</blockquote>\n</blockquote>\n</blockquote>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Permissible <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@brainhubeu/react-permissible\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">callbackFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> userPermissions<span class="token punctuation">,</span> requiredPermissions <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`\n    react-permissible: Access Denied\n    userPermissions: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userPermissions<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n    requiredPermissions: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>requiredPermissions<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n  `</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> CallbackComponent <span class="token operator">=</span> <span class="token function">Permissible</span><span class="token punctuation">(</span>\n  AccessGranted<span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">\'ACCESS_DASHBOARD\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// userPermissions</span>\n  <span class="token punctuation">[</span><span class="token string">\'ACCESS_ADMIN\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// requiredPermissions</span>\n  callbackFunction<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n\n  <div>\n    <div class="gatsby-render-code" ></div>\n    <div class="gatsby-render-source-code" style="display:none;">\n    &lt;CallbackComponent /&gt;\n    </div>\n  </div>'}},pathContext:{relativePath:"GDK>../docs/examples/callback.md"}}}});
//# sourceMappingURL=path---docs-examples-callback-66928a87e12ba8593584.js.map