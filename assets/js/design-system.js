/* @ds-bundle: {"format":4,"namespace":"Plutus21DesignSystem_3e7813","components":[{"name":"Byline","sourcePath":"components/content/Byline.jsx"},{"name":"CTABand","sourcePath":"components/content/CTABand.jsx"},{"name":"CapabilityCard","sourcePath":"components/content/CapabilityCard.jsx"},{"name":"PodcastCard","sourcePath":"components/content/PodcastCard.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"ResearchCard","sourcePath":"components/content/ResearchCard.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/Byline.jsx":"ed46d62811b2","components/content/CTABand.jsx":"e94e70fca409","components/content/CapabilityCard.jsx":"dd4cce395fe5","components/content/PodcastCard.jsx":"6707b638a0b9","components/content/PullQuote.jsx":"3308d01703d5","components/content/ResearchCard.jsx":"9de1287669a3","components/content/StatBlock.jsx":"85405c544a4d","components/core/Badge.jsx":"71f97761b9d8","components/core/Button.jsx":"8507ebc38e35","components/core/Card.jsx":"1f749d833a98","components/core/Eyebrow.jsx":"465f8cdd2bc3","components/core/Icon.jsx":"df97cb398f34","components/core/IconButton.jsx":"35ddcdd03f59","components/core/SectionHeading.jsx":"23dc22d538bb","components/core/Tag.jsx":"98ddaa34301a","components/feedback/Dialog.jsx":"b1fa05df7f35","components/feedback/Toast.jsx":"05f1f3aec26d","components/feedback/Tooltip.jsx":"3afd4a350d8e","components/forms/Checkbox.jsx":"8a8f970f7c61","components/forms/Input.jsx":"9e1913d94a52","components/forms/Radio.jsx":"de79fefe6df5","components/forms/Select.jsx":"4200eb500ed3","components/forms/Switch.jsx":"5de57ac12e5f","components/forms/Textarea.jsx":"d0830a4059e3","components/navigation/Footer.jsx":"44bd9772d1a4","components/navigation/Navbar.jsx":"f663cad4d8f3","components/navigation/Tabs.jsx":"792af773c011","ui_kits/plutus21_capital/CapitalShell.jsx":"443994671b64","ui_kits/plutus21_capital/InvestorScreen.jsx":"5a9dd018f2f6","ui_kits/plutus21_capital/OverviewScreen.jsx":"9df389ad84e2","ui_kits/plutus21_capital/ThesisScreen.jsx":"474e340da82f","ui_kits/plutus21_capital/chrome.js":"918c512c1948","ui_kits/plutus21_parent/ArticleScreen.jsx":"36d1202ddbae","ui_kits/plutus21_parent/HomeScreen.jsx":"f400eee55447","ui_kits/plutus21_parent/LeadershipScreen.jsx":"af63b131657e","ui_kits/plutus21_parent/ResearchScreen.jsx":"a66f2283ecab","ui_kits/plutus21_parent/Shell.jsx":"b1a0e127e3a6","ui_kits/plutus21_parent/data.js":"e41b7f3db32c","ui_kits/plutus21_partners/CapabilityScreen.jsx":"4636f028311d","ui_kits/plutus21_partners/CaseStudyScreen.jsx":"018046fe02d1","ui_kits/plutus21_partners/PartnersHomeScreen.jsx":"506812863619","ui_kits/plutus21_partners/PartnersShell.jsx":"63a43cc2480e","ui_kits/plutus21_partners/capabilities.js":"eaf1b5b5b866"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Plutus21DesignSystem_3e7813 = window.Plutus21DesignSystem_3e7813 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Byline.jsx
try { (() => {
function Byline({
  authors = [],
  date,
  readTime,
  tone = 'light',
  style
}) {
  const muted = tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-faint)';
  const ink = tone === 'dark' ? 'var(--p21-paper)' : 'var(--text-body)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, authors.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, authors.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: a.name,
    title: a.name,
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      marginLeft: i === 0 ? 0 : -8,
      background: 'var(--p21-blue-700)',
      color: '#fff',
      border: '2px solid var(--surface-page)',
      fontSize: 11,
      fontWeight: 'var(--weight-semibold)',
      backgroundImage: a.image ? `url(${a.image})` : undefined,
      backgroundSize: 'cover'
    }
  }, a.image ? '' : a.name.split(' ').map(w => w[0]).slice(0, 2).join('')))) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: ink,
      fontWeight: 'var(--weight-medium)'
    }
  }, authors.map(a => a.name).join(', ')), date || readTime ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: muted
    }
  }, [date, readTime].filter(Boolean).join(' · ')) : null);
}
Object.assign(__ds_scope, { Byline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Byline.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote.jsx
try { (() => {
function PullQuote({
  children,
  attribution,
  role,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      paddingLeft: 'var(--space-6)',
      borderLeft: '2px solid var(--p21-blue-500)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      lineHeight: 1.42,
      color: dark ? 'var(--p21-paper)' : 'var(--p21-ink-900)'
    }
  }, children), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: dark ? 'var(--p21-paper)' : 'var(--text-heading)'
    }
  }, attribution), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-faint)'
    }
  }, ' — ' + role) : null) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function StatBlock({
  stats = [],
  tone = 'light',
  columns,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns || stats.length || 1}, minmax(0, 1fr))`,
      gap: 'var(--space-8)',
      ...style
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      paddingLeft: 'var(--space-5)',
      borderLeft: `1px solid ${dark ? 'var(--border-on-dark)' : 'var(--border-default)'}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      lineHeight: 1.08,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-display)',
      color: dark ? 'var(--p21-paper)' : 'var(--text-heading)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.4,
      fontWeight: 'var(--weight-medium)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, s.label), s.note ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 13,
      lineHeight: 1.5,
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-faint)'
    }
  }, s.note) : null)));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const p21BadgeTones = {
  new: {
    background: 'var(--p21-blue-500)',
    color: '#fff'
  },
  accent: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--p21-blue-700)'
  },
  neutral: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-muted)'
  },
  positive: {
    background: 'var(--p21-positive-soft)',
    color: 'var(--p21-positive)'
  },
  negative: {
    background: 'var(--p21-negative-soft)',
    color: 'var(--p21-negative)'
  },
  caution: {
    background: 'var(--p21-caution-soft)',
    color: 'var(--p21-caution)'
  },
  inverse: {
    background: 'rgba(28,119,255,.16)',
    color: 'var(--p21-blue-300)'
  }
};
function Badge({
  children,
  tone = 'accent',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--font-size-eyebrow)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 12.5,
      letterSpacing: '0.01em',
      lineHeight: 1.25,
      ...p21BadgeTones[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = 'light',
  interactive,
  padding = 'md',
  as = 'div',
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : as;
  const pad = padding === 'lg' ? 'var(--card-padding-lg)' : padding === 'sm' ? 'var(--space-4)' : 'var(--card-padding)';
  const tones = {
    light: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)'
    },
    muted: {
      background: 'var(--surface-muted)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'none'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)',
      boxShadow: 'none'
    },
    dark: {
      background: 'var(--p21-midnight-card)',
      border: '1px solid var(--p21-glass-border)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,.08)'
    },
    glass: {
      background: 'var(--p21-glass)',
      border: '1px solid var(--p21-glass-border)',
      boxShadow: 'var(--shadow-glass)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))'
    },
    frost: {
      background: 'var(--p21-frost)',
      border: '1px solid var(--p21-frost-border)',
      boxShadow: 'var(--shadow-frost)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))'
    },
    accent: {
      background: 'var(--p21-blue-500)',
      border: '1px solid var(--p21-blue-500)',
      boxShadow: 'var(--shadow-blue)'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'block',
      padding: pad,
      borderRadius: 'var(--radius-lg)',
      textDecoration: 'none',
      color: tone === 'dark' || tone === 'frost' || tone === 'accent' ? '#fff' : tone === 'glass' ? 'var(--p21-ink-900)' : 'var(--text-body)',
      transition: 'box-shadow var(--duration-slow) var(--ease-out), transform var(--duration-slow) var(--ease-out), border-color var(--duration-base) var(--ease-out)',
      ...tones[tone],
      ...(interactive && hover ? {
        boxShadow: tone === 'glass' ? 'var(--shadow-glass)' : tone === 'frost' ? 'var(--shadow-frost)' : tone === 'dark' ? '0 12px 32px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.08)' : 'var(--shadow-md)',
        transform: 'translateY(-2px)',
        borderColor: tone === 'dark' ? 'rgba(255,255,255,.22)' : tone === 'frost' ? 'rgba(255,255,255,.55)' : tone === 'glass' ? '#fff' : 'var(--p21-blue-200)',
        ...(tone === 'glass' ? {
          background: 'var(--p21-glass-strong)'
        } : tone === 'frost' ? {
          background: 'var(--p21-frost-strong)'
        } : null)
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const p21EyebrowTones = {
  accent: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--text-accent)',
    dot: 'var(--p21-blue-500)',
    ring: '#fff'
  },
  muted: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-muted)',
    dot: 'var(--p21-ink-400)',
    ring: '#fff'
  },
  inverse: {
    background: 'var(--p21-frost)',
    color: '#fff',
    dot: '#fff',
    ring: 'var(--p21-blue-600)',
    border: '1px solid var(--p21-frost-border)'
  }
};
function Eyebrow({
  children,
  tone = 'accent',
  style,
  ...rest
}) {
  const t = p21EyebrowTones[tone] || p21EyebrowTones.accent;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 11px 4px 6px',
      borderRadius: 'var(--radius-pill)',
      background: t.background,
      border: t.border,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--font-size-eyebrow)',
      lineHeight: 1.3,
      fontWeight: 'var(--weight-medium)',
      color: t.color,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      flex: 'none',
      background: t.dot,
      boxShadow: `inset 0 0 0 4px ${t.dot}, inset 0 0 0 6px ${t.ring}`
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Material Symbols Rounded glyph. Pass the ligature name, e.g. "arrow_forward". */
function Icon({
  name,
  size = 20,
  weight = 400,
  fill = 0,
  color,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      fontFamily: 'var(--font-icon)',
      fontSize: size,
      lineHeight: 1,
      color: color || 'inherit',
      display: 'inline-block',
      flex: '0 0 auto',
      fontVariationSettings: `"FILL" ${fill}, "wght" ${weight}, "GRAD" 0, "opsz" ${size}`,
      ...style
    }
  }), (window.__P21_ICONS && window.__P21_ICONS[name]) || name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/CapabilityCard.jsx
try { (() => {
function CapabilityCard({
  icon = 'hub',
  title,
  description,
  items = [],
  href,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: tone,
    interactive: Boolean(href),
    href: href,
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--p21-blue-500)',
      color: '#fff',
      boxShadow: 'var(--shadow-blue)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-h4)',
      lineHeight: 1.3,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-heading)',
      color: dark ? 'var(--p21-paper)' : 'var(--text-heading)',
      marginBottom: 'var(--space-3)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, description) : null, items.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--space-5) 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 14,
      color: dark ? 'var(--p21-paper)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: dark ? 'var(--p21-blue-300)' : 'var(--p21-blue-500)'
  }), it))) : null, href ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-6)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 'var(--weight-semibold)',
      color: dark ? 'var(--p21-blue-300)' : 'var(--text-accent)'
    }
  }, "Read more ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow_forward",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { CapabilityCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CapabilityCard.jsx", error: String((e && e.message) || e) }); }

// components/content/PodcastCard.jsx
try { (() => {
function PodcastCard({
  title,
  series = 'Disruption Intelligence',
  date,
  duration,
  href,
  tone = 'dark',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: tone,
    interactive: true,
    href: href,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      background: dark ? 'rgba(28,119,255,.18)' : 'var(--surface-accent-soft)',
      color: dark ? 'var(--p21-blue-300)' : 'var(--p21-blue-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play_arrow",
    size: 24,
    fill: 1
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)',
      color: dark ? 'var(--p21-blue-300)' : 'var(--text-accent)',
      marginBottom: 6
    }
  }, series), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      lineHeight: 1.3,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-heading)',
      color: dark ? 'var(--p21-paper)' : 'var(--text-heading)'
    }
  }, title), date || duration ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 13,
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-faint)'
    }
  }, [date, duration].filter(Boolean).join(' · ')) : null), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow_forward",
    size: 20,
    color: dark ? 'var(--p21-paper)' : 'var(--text-muted)'
  }));
}
Object.assign(__ds_scope, { PodcastCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PodcastCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ResearchCard.jsx
try { (() => {
function ResearchCard({
  kind,
  title,
  excerpt,
  date,
  readTime,
  authors = [],
  href,
  tone = 'light',
  gated,
  image,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: tone,
    interactive: true,
    href: href,
    padding: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 148,
      margin: 'calc(var(--card-padding) * -1) calc(var(--card-padding) * -1) var(--space-2)',
      borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
      background: `var(--p21-gradient-glow-soft) center/cover`,
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, kind ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: dark ? 'inverse' : 'neutral'
  }, kind) : null, gated ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 15,
    color: dark ? 'var(--p21-blue-300)' : 'var(--text-faint)'
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      lineHeight: 1.28,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-heading)',
      color: dark ? 'var(--p21-paper)' : 'var(--text-heading)'
    }
  }, title), excerpt ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, excerpt) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Byline, {
    authors: authors,
    date: date,
    readTime: readTime,
    tone: dark ? 'dark' : 'light'
  })));
}
Object.assign(__ds_scope, { ResearchCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ResearchCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const p21ButtonSizes = {
  sm: {
    height: 'var(--control-height-sm)',
    padding: '0 14px',
    fontSize: 13,
    icon: 16
  },
  md: {
    height: 'var(--control-height)',
    padding: '0 20px',
    fontSize: 15,
    icon: 18
  },
  lg: {
    height: 'var(--control-height-lg)',
    padding: '0 26px',
    fontSize: 16,
    icon: 20
  }
};
const p21ButtonVariants = {
  primary: {
    background: 'var(--p21-blue-500)',
    color: '#fff',
    border: '1px solid var(--p21-blue-500)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,.22)'
  },
  secondary: {
    background: 'var(--p21-ink-900)',
    color: 'var(--p21-paper)',
    border: '1px solid var(--p21-ink-900)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid var(--border-default)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-accent)',
    border: '1px solid transparent'
  },
  inverse: {
    background: '#fff',
    color: 'var(--p21-ink-900)',
    border: '1px solid #fff'
  },
  frost: {
    background: 'var(--p21-frost)',
    color: '#fff',
    border: '1px solid var(--p21-frost-border)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)'
  }
};
const p21ButtonHover = {
  primary: {
    background: 'var(--p21-blue-600)',
    borderColor: 'var(--p21-blue-600)',
    boxShadow: 'var(--shadow-blue)'
  },
  secondary: {
    background: 'var(--p21-ink-800)',
    borderColor: 'var(--p21-ink-800)'
  },
  outline: {
    background: 'var(--surface-sunken)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'var(--surface-accent-soft)'
  },
  inverse: {
    background: 'var(--p21-blue-50)'
  },
  frost: {
    background: 'var(--p21-frost-strong)',
    borderColor: 'rgba(255,255,255,.55)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  icon,
  iconAfter,
  fullWidth,
  disabled,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = p21ButtonSizes[size] || p21ButtonSizes.md;
  const v = p21ButtonVariants[variant] || p21ButtonVariants.primary;
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: !href ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false)
  }, rest, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '-0.005em',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.42 : 1,
      transform: down && !disabled ? 'translateY(1px)' : 'none',
      transition: 'var(--transition-control), transform var(--duration-fast) var(--ease-out)',
      ...v,
      ...(hover && !disabled ? p21ButtonHover[variant] : null),
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/CTABand.jsx
try { (() => {
function CTABand({
  eyebrow,
  title,
  description,
  primary,
  primaryHref,
  secondary,
  secondaryHref,
  tone = 'blue',
  children,
  style
}) {
  const grounds = {
    midnight: {
      background: 'var(--p21-gradient-glow)',
      color: 'var(--p21-paper)'
    },
    blue: {
      background: 'var(--p21-gradient-hero)',
      color: '#fff'
    },
    paper: {
      background: 'var(--surface-muted)',
      color: 'var(--text-body)'
    }
  };
  const dark = tone !== 'paper';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...grounds[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-20) var(--space-8)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-12)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '46ch'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: dark ? 'inverse' : 'accent',
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-h2)',
      lineHeight: 'var(--line-height-h2)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-heading)',
      color: dark ? '#fff' : 'var(--text-heading)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--font-size-body-lg)',
      lineHeight: 1.6,
      color: dark ? 'rgba(255,255,255,.78)' : 'var(--text-muted)'
    }
  }, description) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, children, primary ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'inverse' : 'primary',
    size: "lg",
    href: primaryHref,
    iconAfter: "arrow_forward"
  }, primary) : null, secondary ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'frost' : 'outline',
    size: "lg",
    href: secondaryHref
  }, secondary) : null)));
}
Object.assign(__ds_scope, { CTABand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CTABand.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const p21IconBtnSizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 'md',
  disabled,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = p21IconBtnSizes[size] || 40;
  const skins = {
    outline: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-body)'
    },
    solid: {
      background: 'var(--p21-blue-500)',
      border: '1px solid var(--p21-blue-500)',
      color: '#fff'
    },
    ghost: {
      background: 'transparent',
      border: '1px solid transparent',
      color: 'var(--text-muted)'
    },
    inverse: {
      background: 'rgba(255,255,255,.08)',
      border: '1px solid var(--border-on-dark)',
      color: 'var(--p21-paper)'
    }
  };
  const hovers = {
    outline: {
      borderColor: 'var(--border-strong)',
      background: 'var(--surface-sunken)'
    },
    solid: {
      background: 'var(--p21-blue-600)',
      borderColor: 'var(--p21-blue-600)'
    },
    ghost: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)'
    },
    inverse: {
      background: 'rgba(255,255,255,.16)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      width: d,
      height: d,
      display: 'inline-grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.42 : 1,
      transition: 'var(--transition-control)',
      ...skins[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 18 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  actionHref,
  align = 'left',
  tone = 'light',
  size = 'md',
  style
}) {
  const inverse = tone === 'dark';
  const sizes = {
    sm: 'var(--font-size-h3)',
    md: 'var(--font-size-h2)',
    lg: 'var(--font-size-h1)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      textAlign: align === 'center' ? 'center' : 'left',
      flexDirection: align === 'center' ? 'column' : 'row',
      marginBottom: 'var(--space-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: align === 'center' ? '62ch' : '58ch',
      margin: align === 'center' ? '0 auto' : 0
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: inverse ? 'inverse' : 'accent',
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: sizes[size],
      lineHeight: 'var(--line-height-h2)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-heading)',
      color: inverse ? 'var(--p21-paper)' : 'var(--text-heading)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--font-size-body-lg)',
      lineHeight: 'var(--line-height-body-lg)',
      color: inverse ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, description) : null), action ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: inverse ? 'inverse' : 'outline',
    size: "sm",
    href: actionHref,
    iconAfter: "arrow_forward"
  }, action) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  active,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 30,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 'var(--weight-medium)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      background: active ? 'var(--p21-ink-900)' : hover && interactive ? 'var(--surface-sunken)' : 'transparent',
      color: active ? 'var(--p21-paper)' : 'var(--text-muted)',
      border: `1px solid ${active ? 'var(--p21-ink-900)' : 'var(--border-default)'}`,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  description,
  children,
  footer,
  width = 520,
  onClose,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)',
      background: 'var(--surface-scrim)',
      backdropFilter: 'blur(var(--blur-scrim))',
      WebkitBackdropFilter: 'blur(var(--blur-scrim))',
      animation: 'none',
      fontFamily: 'var(--font-sans)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'var(--card-padding-lg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-h4)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-heading)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  }) : null), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const p21ToastTones = {
  neutral: {
    icon: 'info',
    color: 'var(--p21-blue-300)'
  },
  positive: {
    icon: 'check_circle',
    color: '#4ADE9B'
  },
  negative: {
    icon: 'error',
    color: '#FF8A82'
  }
};
function Toast({
  message,
  tone = 'neutral',
  action,
  onAction,
  onClose,
  style
}) {
  const t = p21ToastTones[tone] || p21ToastTones.neutral;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      background: 'var(--p21-ink-900)',
      color: 'var(--p21-paper)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18,
    color: t.color
  }), /*#__PURE__*/React.createElement("span", null, message), action ? /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      color: 'var(--p21-blue-300)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 'var(--weight-semibold)'
    }
  }, action) : null, onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      color: 'rgba(247,248,246,.6)',
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top',
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 40,
      pointerEvents: 'none',
      opacity: show ? 1 : 0,
      transition: 'opacity var(--duration-fast) var(--ease-out)',
      background: 'var(--p21-ink-900)',
      color: 'var(--p21-paper)',
      padding: '6px 9px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      lineHeight: 1.3,
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled,
  id,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: 2,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--p21-blue-500)' : 'var(--surface-card)',
      border: `1px solid ${checked ? 'var(--p21-blue-500)' : 'var(--border-strong)'}`,
      transition: 'var(--transition-control)'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    weight: 600,
    color: "#fff"
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      color: 'var(--text-faint)',
      marginTop: 2
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function P21Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--p21-blue-600)'
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--p21-negative)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
function Input({
  label,
  hint,
  error,
  required,
  icon,
  size = 'md',
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-height-sm)' : size === 'lg' ? 'var(--control-height-lg)' : 'var(--control-height)';
  return /*#__PURE__*/React.createElement(P21Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: rest.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 16px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--p21-negative)' : focus ? 'var(--p21-blue-500)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-pill)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--text-faint)"
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 13 : 15,
      color: 'var(--text-body)'
    }
  }))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  value,
  disabled,
  id,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: 2,
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface-card)',
      border: `1px solid ${checked ? 'var(--p21-blue-500)' : 'var(--border-strong)'}`,
      transition: 'var(--transition-control)'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--p21-blue-500)'
    }
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      color: 'var(--text-faint)',
      marginTop: 2
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function P21Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--p21-blue-600)'
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--p21-negative)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
function Select({
  label,
  hint,
  error,
  required,
  options = [],
  size = 'md',
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-height-sm)' : size === 'lg' ? 'var(--control-height-lg)' : 'var(--control-height)';
  return /*#__PURE__*/React.createElement(P21Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: rest.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: h,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--p21-negative)' : focus ? 'var(--p21-blue-500)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      appearance: 'none',
      width: '100%',
      height: '100%',
      border: 0,
      outline: 'none',
      background: 'transparent',
      padding: '0 36px 0 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 13 : 15,
      color: 'var(--text-body)'
    }
  }), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "expand_more",
    size: 20,
    color: "var(--text-faint)",
    style: {
      position: 'absolute',
      right: 10,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled,
  id,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      gap: 10,
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      padding: 2,
      flex: '0 0 auto',
      background: checked ? 'var(--p21-blue-500)' : 'var(--p21-ink-200)',
      transition: 'background-color var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      transform: checked ? 'translateX(18px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function P21Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--p21-blue-600)'
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--p21-negative)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
function Textarea({
  label,
  hint,
  error,
  required,
  rows = 4,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement(P21Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: rest.id
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: '100%',
      padding: '10px 12px',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--p21-negative)' : focus ? 'var(--p21-blue-500)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  logoSrc,
  tagline = 'Backing and building the companies of tomorrow.',
  columns = [],
  address = [],
  social = [],
  legal,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "p21-dark",
    style: {
      background: 'var(--p21-midnight)',
      color: 'var(--p21-paper)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-20) var(--space-8) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 280px',
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Plutus21",
    style: {
      height: 30,
      display: 'block',
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      lineHeight: 1.35,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-heading)',
      maxWidth: '22ch'
    }
  }, tagline), social.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)'
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    "aria-label": s.label,
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      border: '1px solid var(--border-on-dark)',
      color: 'var(--p21-paper)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 18
  })))) : null), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      flex: '0 1 150px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-on-dark-muted)',
      marginBottom: 'var(--space-5)'
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href || '#',
    style: {
      color: 'var(--p21-paper)',
      fontSize: 15
    }
  }, l.label)))))), address.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 170px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-on-dark-muted)',
      marginBottom: 'var(--space-5)'
    }
  }, "Headquarters"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--p21-paper)'
    }
  }, address.map(line => /*#__PURE__*/React.createElement("div", {
    key: line
  }, line)))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-16)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--border-on-dark)',
      fontSize: 12,
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.6
    }
  }, legal)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function Navbar({
  logoSrc,
  logoAlt = 'Plutus21',
  items = [],
  tone = 'light',
  activeItem,
  onNavigate,
  cta,
  ctaHref,
  secondary,
  secondaryHref,
  style
}) {
  const MOBILE_QUERY = '(max-width: 860px)';
  const [open, setOpen] = React.useState(null);      // desktop dropdown
  const [menuOpen, setMenuOpen] = React.useState(false); // mobile drawer
  const [isMobile, setIsMobile] = React.useState(() =>
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia(MOBILE_QUERY).matches
      : false
  );
  const panelRef = React.useRef(null);
  const toggleRef = React.useRef(null);

  // Track the breakpoint rather than reading width on every render.
  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = e => {
      setIsMobile(e.matches);
      if (!e.matches) setMenuOpen(false); // leaving mobile closes the drawer
    };
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  // Escape closes; focus returns to the toggle so keyboard users aren't stranded.
  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = e => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        if (toggleRef.current) toggleRef.current.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Lock background scroll while the drawer is open, restoring the prior value.
  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [menuOpen]);

  const inverse = tone === 'dark';
  const ink = inverse ? 'var(--p21-paper)' : 'var(--text-body)';
  const barColor = inverse ? 'var(--p21-paper)' : 'var(--text-body)';
  // Fully opaque: a translucent panel lets the hero headline read through the menu.
  const panelBg = inverse ? '#04061F' : '#FFFFFF';

  const go = id => {
    const wasOpen = menuOpen;
    setMenuOpen(false);
    setOpen(null);
    if (!onNavigate) return;
    // While the drawer is open the body carries overflow:hidden. Scrolling
    // before that lock lifts makes the browser drop the smooth scroll, so
    // navigation is deferred until after the closing render has painted.
    if (wasOpen) {
      requestAnimationFrame(() => requestAnimationFrame(() => onNavigate(id)));
    } else {
      onNavigate(id);
    }
  };

  const logo = React.createElement('a', {
    href: '#',
    onClick: e => { e.preventDefault(); go('home'); },
    style: { display: 'flex', alignItems: 'center', flexShrink: 0, marginRight: 'auto' }
  }, React.createElement('img', {
    src: logoSrc,
    alt: logoAlt,
    width: 104,
    height: 28,
    style: { height: 28, width: 'auto', maxWidth: '46vw', display: 'block' }
  }));

  // ── Hamburger toggle (mobile only) ─────────────────────────────────────
  const bar = (i) => React.createElement('span', {
    key: i,
    style: {
      position: 'absolute', left: 10, right: 10, height: 2, borderRadius: 2,
      background: barColor,
      transition: 'transform .26s cubic-bezier(.4,0,.2,1), opacity .18s linear, top .26s cubic-bezier(.4,0,.2,1)',
      top: menuOpen ? 21 : [15, 21, 27][i],
      opacity: menuOpen && i === 1 ? 0 : 1,
      transform: menuOpen ? (i === 0 ? 'rotate(45deg)' : i === 2 ? 'rotate(-45deg)' : 'none') : 'none'
    }
  });

  const toggle = React.createElement('button', {
    ref: toggleRef,
    type: 'button',
    'aria-label': menuOpen ? 'Close menu' : 'Open menu',
    'aria-expanded': menuOpen ? 'true' : 'false',
    'aria-controls': 'p21-mobile-nav',
    onClick: () => setMenuOpen(v => !v),
    style: {
      position: 'relative', width: 44, height: 44, flexShrink: 0,
      marginRight: -10, background: 'none', border: 0, cursor: 'pointer',
      padding: 0, borderRadius: 'var(--radius-sm, 8px)'
    }
  }, [bar(0), bar(1), bar(2)]);

  // ── Mobile drawer ──────────────────────────────────────────────────────
  const drawerItems = [];
  items.forEach(item => {
    drawerItems.push(React.createElement('button', {
      key: item.id,
      type: 'button',
      onClick: () => go(item.id),
      style: {
        display: 'block', width: '100%', textAlign: 'left',
        background: 'none', border: 0, cursor: 'pointer',
        padding: '15px 4px', minHeight: 48,
        fontFamily: 'var(--font-sans)', fontSize: 17,
        fontWeight: activeItem === item.id ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: activeItem === item.id ? (inverse ? '#fff' : 'var(--p21-blue-600)') : ink,
        borderBottom: `1px solid ${inverse ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`
      }
    }, item.label));
    (item.children || []).forEach(c => {
      drawerItems.push(React.createElement('button', {
        key: item.id + '-' + c.id,
        type: 'button',
        onClick: () => go(c.id),
        style: {
          display: 'block', width: '100%', textAlign: 'left',
          background: 'none', border: 0, cursor: 'pointer',
          padding: '13px 4px 13px 18px', minHeight: 44,
          fontFamily: 'var(--font-sans)', fontSize: 15, opacity: .82, color: ink,
          borderBottom: `1px solid ${inverse ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`
        }
      }, c.label));
    });
  });

  if (secondary) {
    drawerItems.push(React.createElement('a', {
      key: '__secondary',
      href: secondaryHref || '#',
      onClick: () => setMenuOpen(false),
      style: {
        display: 'block', padding: '15px 4px', minHeight: 48,
        fontFamily: 'var(--font-sans)', fontSize: 17,
        fontWeight: 'var(--weight-medium)', color: ink,
        borderBottom: `1px solid ${inverse ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`
      }
    }, secondary));
  }
  if (cta) {
    drawerItems.push(React.createElement('div', { key: '__cta', style: { paddingTop: 18 } },
      React.createElement(__ds_scope.Button, {
        variant: inverse ? 'inverse' : 'primary',
        size: 'md',
        href: ctaHref,
        onClick: () => setMenuOpen(false)
      }, cta)));
  }

  const drawer = React.createElement('div', {
    id: 'p21-mobile-nav',
    ref: panelRef,
    hidden: !menuOpen,
    style: {
      position: 'absolute', top: '100%', left: 0, right: 0,
      background: panelBg,
      borderBottom: `1px solid ${inverse ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
      boxShadow: '0 18px 40px -18px rgba(0,0,0,.65)',
      padding: '6px var(--space-8, 24px) 26px',
      maxHeight: 'calc(100vh - 72px)',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      animation: 'p21NavDrop .22s cubic-bezier(.4,0,.2,1)'
    }
  }, drawerItems);

  // ── Desktop inline nav ─────────────────────────────────────────────────
  const desktopNav = React.createElement('nav', {
    'aria-label': 'Main',
    style: { display: 'flex', alignItems: 'center', gap: 'var(--space-6)', marginLeft: 'auto', minWidth: 0 }
  }, items.map(item => {
    const active = activeItem === item.id;
    const hasChildren = item.children && item.children.length > 0;
    return React.createElement('div', {
      key: item.id,
      style: { position: 'relative' },
      onMouseEnter: () => hasChildren && setOpen(item.id),
      onMouseLeave: () => hasChildren && setOpen(null)
    }, React.createElement('button', {
      onClick: () => go(item.id),
      style: {
        display: 'flex', alignItems: 'center', gap: 4, background: 'none',
        border: 0, cursor: 'pointer', padding: '8px 0', whiteSpace: 'nowrap',
        fontFamily: 'var(--font-sans)', fontSize: 15,
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: active ? (inverse ? '#fff' : 'var(--p21-blue-600)') : ink,
        transition: 'var(--transition-control)'
      }
    }, item.label, hasChildren ? React.createElement(__ds_scope.Icon, { name: 'expand_more', size: 18 }) : null),
      hasChildren && open === item.id ? React.createElement('div', {
        style: {
          position: 'absolute', top: '100%', left: -16, minWidth: 248,
          padding: 'var(--space-3)',
          background: inverse ? 'rgba(12,18,48,.86)' : 'var(--surface-card)',
          backdropFilter: 'blur(var(--blur-glass))',
          WebkitBackdropFilter: 'blur(var(--blur-glass))',
          border: `1px solid ${inverse ? 'var(--p21-glass-border)' : 'var(--border-subtle)'}`,
          borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)',
          display: 'flex', flexDirection: 'column', gap: 2
        }
      }, item.children.map(c => React.createElement('button', {
        key: c.id,
        onClick: () => go(c.id),
        style: {
          textAlign: 'left', background: 'none', border: 0, cursor: 'pointer',
          padding: '9px 12px', borderRadius: 'var(--radius-sm)',
          fontFamily: 'var(--font-sans)', fontSize: 14, color: ink
        },
        onMouseEnter: e => { e.currentTarget.style.background = inverse ? 'rgba(255,255,255,.07)' : 'var(--surface-sunken)'; },
        onMouseLeave: e => { e.currentTarget.style.background = 'none'; }
      }, c.label))) : null);
  }),
    secondary ? React.createElement('a', {
      href: secondaryHref || '#',
      style: { fontSize: 15, fontWeight: 'var(--weight-medium)', color: ink, whiteSpace: 'nowrap' }
    }, secondary) : null,
    cta ? React.createElement(__ds_scope.Button, {
      variant: inverse ? 'inverse' : 'primary', size: 'sm', href: ctaHref
    }, cta) : null);

  return React.createElement('header', {
    style: {
      position: 'relative', zIndex: 20,
      background: inverse ? 'rgba(1,1,25,.72)' : 'rgba(255,255,255,.86)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))',
      borderBottom: `1px solid ${inverse ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-wide)', margin: '0 auto', height: 72,
      padding: '0 var(--space-8)', display: 'flex', alignItems: 'center',
      gap: 'var(--space-10)'
    }
  }, logo, isMobile ? toggle : desktopNav), isMobile ? drawer : null);
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'light',
  style
}) {
  const inverse = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: `1px solid ${inverse ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map(t => {
    const id = typeof t === 'string' ? t : t.id;
    const label = typeof t === 'string' ? t : t.label;
    const active = value === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      style: {
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: '0 0 12px',
        fontSize: 15,
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: active ? inverse ? 'var(--p21-paper)' : 'var(--text-heading)' : inverse ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        borderBottom: `2px solid ${active ? 'var(--p21-blue-500)' : 'transparent'}`,
        marginBottom: -1,
        transition: 'var(--transition-control)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_capital/CapitalShell.jsx
try { (() => {
const {
  Navbar,
  Footer
} = window.Plutus21DesignSystem_3e7813;
function CapitalShell({
  route,
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--p21-midnight)'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    logoSrc: "../../assets/logo-plutus21-white.png",
    tone: "dark",
    items: window.P21C_NAV,
    activeItem: route,
    onNavigate: onNavigate,
    cta: "Investor Login",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      background: 'transparent',
      backdropFilter: 'none',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    }
  })), children, /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/logo-plutus21-white.png",
    tagline: "Plutus21 Capital \u2014 investing in the businesses technology makes better.",
    columns: window.P21C_FOOTER.columns,
    address: window.P21C_FOOTER.address,
    legal: window.P21C_FOOTER.legal
  }));
}
function CSection({
  tone = 'light',
  children,
  style
}) {
  const g = {
    light: 'var(--surface-page)',
    paper: 'var(--surface-muted)',
    midnight: 'var(--p21-midnight)',
    glow: 'var(--p21-gradient-glow-soft)'
  };
  return /*#__PURE__*/React.createElement("section", {
    className: tone === 'midnight' || tone === 'glow' ? 'p21-dark' : undefined,
    style: {
      background: g[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--space-8)'
    }
  }, children));
}
Object.assign(window, {
  CapitalShell,
  CSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_capital/CapitalShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_capital/InvestorScreen.jsx
try { (() => {
const {
  SectionHeading,
  Card,
  Input,
  Select,
  Textarea,
  Checkbox,
  Button,
  Icon,
  Toast,
  StatBlock,
  Eyebrow
} = window.Plutus21DesignSystem_3e7813;
function FAQRow({
  q,
  a,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      padding: 'var(--space-5) 0',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-.015em',
      color: 'var(--text-heading)'
    }
  }, q), /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'remove' : 'add',
    size: 20,
    color: "var(--p21-blue-600)"
  })), open ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-6)',
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      maxWidth: '72ch'
    }
  }, a) : null);
}
function InvestorScreen() {
  const [open, setOpen] = React.useState(0);
  const [sent, setSent] = React.useState(false);
  const faqs = [{
    q: 'What does Plutus21 Capital invest in?',
    a: 'Global companies materially improving fundamentals through AI, robotics, automation, blockchain and related technologies — weighted toward the middle market.'
  }, {
    q: 'What investment solutions are available?',
    a: 'Public market and private market solutions, delivered through funds, separately managed accounts and SPVs.'
  }, {
    q: 'What is the minimum investment?',
    a: 'The current minimum disclosed investment is $250,000.'
  }, {
    q: 'Who can invest in the funds?',
    a: 'Fund investors must be U.S. citizens and accredited investors.'
  }, {
    q: 'Do you use third-party research or data?',
    a: 'No. Research runs on proprietary features, data pipelines, research infrastructure and scoring systems.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CSection, {
    tone: "paper",
    style: {
      paddingTop: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "For investors",
    size: "lg",
    title: "Investor inquiries",
    description: "Materials are provided to eligible U.S. investors on request."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    columns: 3,
    stats: [{
      value: '$250K',
      label: 'Minimum investment'
    }, {
      value: 'U.S.',
      label: 'Investor eligibility',
      note: 'Accredited investors only'
    }, {
      value: '3',
      label: 'Structures',
      note: 'Funds, SMAs, SPVs'
    }]
  })), /*#__PURE__*/React.createElement(CSection, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, "Investor FAQ"), /*#__PURE__*/React.createElement("div", null, faqs.map((f, i) => /*#__PURE__*/React.createElement(FAQRow, {
    key: f.q,
    q: f.q,
    a: f.a,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-.02em',
      color: 'var(--text-heading)',
      marginBottom: 'var(--space-6)'
    }
  }, "Request materials"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "n",
    label: "Full name",
    placeholder: "Jane Whitfield",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    id: "em",
    label: "Work email",
    icon: "mail",
    placeholder: "jane@familyoffice.com",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    id: "ty",
    label: "Investor type",
    options: ['Individual (accredited)', 'Family office', 'RIA / wealth manager', 'Institution']
  }), /*#__PURE__*/React.createElement(Textarea, {
    id: "no",
    label: "Anything we should know?",
    rows: 3
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "ac",
    label: "I confirm I am a U.S. accredited investor",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true),
    iconAfter: "arrow_forward"
  }, "Submit inquiry"), sent ? /*#__PURE__*/React.createElement(Toast, {
    tone: "positive",
    message: "Received. The investor relations team will reply within two business days.",
    onClose: () => setSent(false)
  }) : null)))));
}
Object.assign(window, {
  InvestorScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_capital/InvestorScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_capital/OverviewScreen.jsx
try { (() => {
const {
  Eyebrow,
  SectionHeading,
  Card,
  StatBlock,
  PullQuote,
  Icon,
  Button,
  Badge,
  CTABand,
  Tabs
} = window.Plutus21DesignSystem_3e7813;
function FunnelStep({
  value,
  label,
  note,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--p21-blue-500)',
      marginTop: 8
    }
  }), !last ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 1,
      background: 'var(--border-default)'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: last ? 0 : 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: '-.025em',
      color: 'var(--text-heading)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-.015em',
      color: 'var(--text-heading)',
      marginTop: 4
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 4,
      maxWidth: '44ch'
    }
  }, note)));
}
function OverviewScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "p21-dark",
    style: {
      background: 'var(--p21-gradient-glow)',
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-24) var(--space-8) var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "inverse"
  }, "Plutus21 Capital"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-display-2)',
      lineHeight: 1.06,
      letterSpacing: '-.03em',
      fontWeight: 600,
      color: 'var(--p21-paper)',
      maxWidth: '24ch',
      margin: 'var(--space-6) 0 0'
    }
  }, "Investing in the businesses technology makes measurably better"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 var(--space-10)',
      maxWidth: '62ch',
      fontSize: 'var(--font-size-body-lg)',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)'
    }
  }, "Plutus21 Capital identifies global companies materially improving fundamentals through AI, robotics, automation, blockchain and related technologies."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconAfter: "arrow_forward",
    onClick: () => onNavigate('investors')
  }, "Investor inquiries"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: 'var(--p21-paper)',
      borderColor: 'var(--border-on-dark)'
    },
    onClick: () => onNavigate('thesis')
  }, "Read the thesis")))), /*#__PURE__*/React.createElement(CSection, null, /*#__PURE__*/React.createElement(StatBlock, {
    columns: 4,
    stats: [{
      value: '5,000+',
      label: 'Opportunity universe'
    }, {
      value: '20+',
      label: 'Investment team'
    }, {
      value: '$250K',
      label: 'Minimum investment'
    }, {
      value: '2017',
      label: 'Founded',
      note: 'Dallas, Texas'
    }]
  })), /*#__PURE__*/React.createElement(CSection, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Approach",
    title: "Quantamental by construction",
    description: "Fundamental investors using proprietary technology \u2014 not a pure quant fund, and not a screen-and-hope discretionary book."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, [{
    icon: 'query_stats',
    title: 'Fundamental company analysis',
    body: 'Business quality, unit economics, management and competitive position, underwritten by analysts.'
  }, {
    icon: 'database',
    title: 'Proprietary data pipelines',
    body: 'Features, pipelines, research infrastructure and scoring systems built in-house. No third-party research.'
  }, {
    icon: 'trending_up',
    title: 'Adoption research',
    body: 'Evidence that users and businesses are actually adopting a technology before value is assigned to it.'
  }].map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface-accent-soft)',
      color: 'var(--p21-blue-600)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: '-.018em',
      color: 'var(--text-heading)',
      marginBottom: 8
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, c.body))))), /*#__PURE__*/React.createElement(CSection, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Underwriting funnel"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, "From 5,000 opportunities to 30\u201350 positions"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      maxWidth: '48ch'
    }
  }, "The universe narrows through quantitative and qualitative filtering. Concentration is the output of the process, not a starting constraint."), /*#__PURE__*/React.createElement(PullQuote, {
    style: {
      marginTop: 'var(--space-8)'
    },
    attribution: "Foundational Letter",
    role: "Plutus21 Capital"
  }, "Find good businesses where technological adoption is starting to materially improve the economics before the market fully appreciates it.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FunnelStep, {
    value: "5,000",
    label: "Opportunity universe",
    note: "Global public and private companies screened continuously."
  }), /*#__PURE__*/React.createElement(FunnelStep, {
    value: "~100",
    label: "Survive filtering",
    note: "Quantitative screens plus qualitative diligence on adoption and management."
  }), /*#__PURE__*/React.createElement(FunnelStep, {
    value: "30\u201350",
    label: "Portfolio names",
    note: "Concentrated, middle-market weighted, held across public and private structures.",
    last: true
  })))), /*#__PURE__*/React.createElement(CSection, {
    tone: "midnight"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "Structures",
    title: "Investment solutions",
    description: "Public and private market solutions, delivered through the structure that fits the mandate."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, [{
    t: 'Funds',
    b: 'Pooled vehicles for accredited U.S. investors. $250,000 minimum.'
  }, {
    t: 'Separately managed accounts',
    b: 'Mandate-specific portfolios for institutions and family offices.'
  }, {
    t: 'SPVs',
    b: 'Single-asset private vehicles for specific opportunities.'
  }].map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.t,
    tone: "dark",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.018em',
      color: 'var(--p21-paper)',
      marginBottom: 8
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)'
    }
  }, s.b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-8)',
      fontSize: 13,
      color: 'var(--text-on-dark-muted)',
      maxWidth: '80ch'
    }
  }, "Plutus21 currently describes three investment strategies. The public Capital page does not name all three, so they are not listed here.")), /*#__PURE__*/React.createElement(CTABand, {
    eyebrow: "Investor inquiries",
    title: "Request the current materials",
    description: "Fund investors must be U.S. citizens and accredited investors.",
    primary: "Contact the team",
    tone: "blue"
  }));
}
Object.assign(window, {
  OverviewScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_capital/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_capital/ThesisScreen.jsx
try { (() => {
const {
  Eyebrow,
  SectionHeading,
  Card,
  Icon,
  PullQuote,
  Tabs,
  Badge
} = window.Plutus21DesignSystem_3e7813;
function ThesisScreen() {
  const [tab, setTab] = React.useState('adoption');
  const panels = {
    adoption: {
      title: 'Adoption maximalism',
      body: 'Actual adoption matters more than technological hype. We want evidence that users or businesses are adopting something before assigning enormous value to it. Applied first to blockchain, the same discipline now governs how we underwrite AI.',
      points: ['Usage and spend data over narrative', 'Adoption curves per industry, not per model', 'Catch the point where adoption becomes economically meaningful']
    },
    buyers: {
      title: 'Buyers of AI, not only builders',
      body: 'An established company already has customers, data, distribution, revenue and an existing business. If AI improves margins or growth, that improvement is another source of upside. If it is less transformative than expected, there is still an underlying business.',
      points: ['Margin and share expansion from applied technology', 'Downside anchored in an existing operating business', 'Middle market, where adoption is underwritten late']
    },
    feedback: {
      title: 'Operating knowledge as an edge',
      body: 'Plutus21 Partners works inside companies implementing AI, building global teams, modernising systems and running go-to-market. That first-hand view of what implementation actually takes feeds back into how Capital underwrites it.',
      points: ['Partners informs implementation risk', 'Capital informs enterprise-value thinking', 'One research engine serving both']
    }
  };
  const p = panels[tab];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CSection, {
    tone: "glow",
    style: {
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "inverse"
  }, "Investment thesis"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-h1)',
      lineHeight: 1.1,
      letterSpacing: '-.03em',
      fontWeight: 600,
      color: 'var(--p21-paper)',
      maxWidth: '28ch',
      margin: 'var(--space-5) 0 var(--space-4)'
    }
  }, "Disruption intelligence, applied to the companies buying technology"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '62ch',
      fontSize: 'var(--font-size-body-lg)',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)'
    }
  }, "Three ideas do most of the work in how Plutus21 Capital allocates attention.")), /*#__PURE__*/React.createElement(CSection, null, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'adoption',
      label: 'Adoption maximalism'
    }, {
      id: 'buyers',
      label: 'Buyers, not builders'
    }, {
      id: 'feedback',
      label: 'Operating feedback loop'
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 'var(--space-16)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.68,
      color: 'var(--text-body)',
      maxWidth: '58ch'
    }
  }, p.body)), /*#__PURE__*/React.createElement(Card, {
    tone: "muted",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, "What we look for"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, p.points.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--p21-blue-500)"
  }), x))))), /*#__PURE__*/React.createElement(PullQuote, {
    style: {
      marginTop: 'var(--space-16)',
      maxWidth: '70ch'
    },
    attribution: "Hamiz Awan & Richard Raizes",
    role: "Co-founders, Plutus21 Capital"
  }, "We met through an alumni event and connected over a belief that the investment community was underestimating blockchain. The same question now applies to applied AI.")));
}
Object.assign(window, {
  ThesisScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_capital/ThesisScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_capital/chrome.js
try { (() => {
window.P21C_NAV = [{
  id: 'overview',
  label: 'Overview'
}, {
  id: 'thesis',
  label: 'Investment Thesis'
}, {
  id: 'investors',
  label: 'For Investors'
}, {
  id: 'research',
  label: 'Research'
}];
window.P21C_FOOTER = {
  columns: [{
    title: 'Capital',
    links: [{
      label: 'About Plutus21 Capital'
    }, {
      label: 'Foundational Letter'
    }, {
      label: 'Investor Portal'
    }]
  }, {
    title: 'Plutus21',
    links: [{
      label: 'Partners'
    }, {
      label: 'Academy'
    }, {
      label: 'Team'
    }]
  }],
  address: ['4311 Oak Lawn Ave', 'Suite 325', 'Dallas, TX 75219'],
  legal: 'Copyright \u00A9 Plutus21 Investment Management, L.L.C. and Plutus21 Capital Management, L.L.C. Investment solutions are offered to U.S. accredited investors only. Past performance is not indicative of future results.'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_capital/chrome.js", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_parent/ArticleScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Badge,
  Byline,
  PullQuote,
  Button,
  Card,
  Icon,
  Dialog,
  ResearchCard,
  Eyebrow
} = window.Plutus21DesignSystem_3e7813;
function ArticleScreen({
  onNavigate
}) {
  const [gate, setGate] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "p21-dark",
    style: {
      background: 'var(--p21-gradient-glow)',
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: 'var(--space-20) var(--space-8) var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "inverse"
  }, "Market Commentary \u2014 August 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-h1)',
      lineHeight: 1.1,
      letterSpacing: '-.03em',
      fontWeight: 600,
      color: 'var(--p21-paper)',
      margin: 'var(--space-6) 0 var(--space-8)'
    }
  }, "Technology Is The Leverage"), /*#__PURE__*/React.createElement(Byline, {
    tone: "dark",
    authors: [{
      name: 'Hamiz Awan'
    }, {
      name: 'Richard Raizes'
    }],
    date: "Aug 24, 2026",
    readTime: "6 min read"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "p21-prose"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "We are increasingly interested in the companies buying and applying AI"), ", rather than assuming the companies building the models will generate the best investment returns."), /*#__PURE__*/React.createElement("p", null, "An established company already has customers, data, distribution, revenue and an existing business. If AI improves margins or growth, that improvement becomes another source of upside. If the implementation is less transformative than expected, there is still an underlying business."), /*#__PURE__*/React.createElement(PullQuote, {
    style: {
      margin: 'var(--space-10) 0'
    },
    attribution: "Plutus21 Capital",
    role: "Foundational Letter"
  }, "Adoption matters more than hype. We want evidence that users and businesses are adopting something before assigning enormous value to it."), /*#__PURE__*/React.createElement("h2", null, "Where the universe narrows"), /*#__PURE__*/React.createElement("p", null, "Our investment universe contains roughly 5,000 companies. Around 100 survive quantitative and qualitative filtering, and the portfolio can ultimately narrow to roughly 30 to 50 names \u2014 concentrated in the middle market, where adoption is often underwritten late."), /*#__PURE__*/React.createElement("p", null, "That is not a bet that AI companies win. It is a bet that good businesses where technological adoption is starting to materially improve the economics are mispriced before the market fully appreciates it.")), /*#__PURE__*/React.createElement(Card, {
    tone: "muted",
    padding: "lg",
    style: {
      marginTop: 'var(--space-12)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 22,
    color: "var(--p21-blue-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, "The full letter is for investors"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Letters from the Partners include positioning and portfolio detail.")), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setGate(true)
  }, "Request access")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Keep reading"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-5)'
    }
  }, window.P21_RESEARCH.slice(1, 3).map(r => /*#__PURE__*/React.createElement(ResearchCard, _extends({
    key: r.title
  }, r, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('article');
    }
  })))))), /*#__PURE__*/React.createElement(Dialog, {
    open: gate,
    title: "This letter is for investors",
    description: "Fund materials are limited to U.S. citizens who are accredited investors. Confirm to request access.",
    onClose: () => setGate(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setGate(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setGate(false)
    }, "Confirm and request"))
  }));
}
Object.assign(window, {
  ArticleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_parent/ArticleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_parent/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Badge,
  Button,
  Card,
  Eyebrow,
  SectionHeading,
  Icon,
  Input,
  ResearchCard,
  PodcastCard,
  StatBlock,
  CTABand
} = window.Plutus21DesignSystem_3e7813;
function CampaignRow({
  flag,
  label,
  title,
  blurb
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-5) 0',
      borderTop: '1px solid rgba(255,255,255,.12)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "new"
  }, flag), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-dark-muted)',
      marginBottom: 4
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: '-.018em',
      color: 'var(--p21-paper)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)',
      marginTop: 4,
      maxWidth: '72ch'
    }
  }, blurb)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconAfter: "arrow_forward",
    style: {
      color: 'var(--p21-paper)'
    }
  }, "Learn More"));
}
function BusinessCard({
  name,
  kicker,
  blurb,
  icon,
  soon
}) {
  return /*#__PURE__*/React.createElement(Card, {
    interactive: !soon,
    href: soon ? undefined : '#',
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 250
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface-accent-soft)',
      color: 'var(--p21-blue-600)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: '-.02em',
      color: 'var(--text-heading)',
      margin: '8px 0 10px'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-6)'
    }
  }, soon ? /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Coming soon") : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-accent)'
    }
  }, "Explore ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward",
    size: 16
  }))));
}
function HomeScreen({
  onNavigate
}) {
  const research = window.P21_RESEARCH;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "p21-dark",
    style: {
      background: 'var(--p21-gradient-glow)',
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-24) var(--space-8) var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-display-2)',
      lineHeight: 1.06,
      letterSpacing: '-.03em',
      fontWeight: 600,
      color: 'var(--p21-paper)',
      maxWidth: '20ch',
      margin: 0
    }
  }, "Backing and building the companies of ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 500
    }
  }, "tomorrow")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 var(--space-12)',
      maxWidth: '58ch',
      fontSize: 'var(--font-size-body-lg)',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)'
    }
  }, "Disruption is more rapid and aggressive than ever, making disruption intelligence essential to building better businesses and portfolios."), /*#__PURE__*/React.createElement(CampaignRow, {
    flag: "New",
    label: "This month's Core Idea",
    title: "Engineering Growth",
    blurb: "Identify the next source of growth, allocate attention around it, and turn that choice into a repeatable operating system."
  }), /*#__PURE__*/React.createElement(CampaignRow, {
    flag: "New",
    label: "This month's campaign",
    title: "Data Sovereignty",
    blurb: "If AI labs own your workflows, what's left for you to own?"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The organisation",
    title: "Two established businesses, one research engine",
    description: "Capital studies how disruption changes markets. Partners helps companies respond to it. Academy will teach it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(BusinessCard, {
    icon: "trending_up",
    kicker: "Invest",
    name: "Plutus21 Capital",
    blurb: "An investment firm identifying global companies materially improving fundamentals through AI, robotics, automation and blockchain."
  }), /*#__PURE__*/React.createElement(BusinessCard, {
    icon: "hub",
    kicker: "Implement",
    name: "Plutus21 Partners",
    blurb: "The operating arm: strategy, technology, commercial growth, people and implementation, delivered by embedded teams."
  }), /*#__PURE__*/React.createElement(BusinessCard, {
    icon: "school",
    kicker: "Educate",
    name: "Plutus21 Academy",
    blurb: "Practical technology education for individuals, teams and institutions \u2014 teach-ins, executive education and continuing programmes.",
    soon: true
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Research",
    title: "Disruption intelligence, published monthly",
    action: "All research"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-8)'
    }
  }, research.slice(0, 3).map(r => /*#__PURE__*/React.createElement(ResearchCard, _extends({
    key: r.title
  }, r, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('article');
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, research.slice(3).map(r => /*#__PURE__*/React.createElement("a", {
    key: r.title,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('article');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--space-5) 0',
      borderTop: '1px solid var(--border-default)',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-faint)',
      width: 104,
      flex: '0 0 auto'
    }
  }, r.date), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-.015em',
      color: 'var(--text-heading)'
    }
  }, r.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      width: 150,
      flex: '0 0 auto'
    }
  }, r.kind), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_circle_right",
    size: 22,
    color: "var(--p21-blue-500)"
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "midnight"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "By the numbers"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-h2)',
      lineHeight: 1.16,
      fontWeight: 600,
      letterSpacing: '-.018em',
      color: 'var(--p21-paper)',
      margin: '12px 0 0'
    }
  }, "Fundamental research, scaled with proprietary technology"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-on-dark-muted)',
      maxWidth: '46ch'
    }
  }, "No reliance on third-party data or research. Proprietary features, data pipelines, research infrastructure and scoring systems, run by a global team.")), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    columns: 2,
    stats: [{
      value: '5,000+',
      label: 'Research universe'
    }, {
      value: '200+',
      label: 'Professionals'
    }, {
      value: '7',
      label: 'Global locations'
    }, {
      value: '50,000+',
      label: 'Community across platforms'
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "glow"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "Disruption Intelligence",
    title: "Podcasts",
    action: "Listen here"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, window.P21_PODCASTS.map(p => /*#__PURE__*/React.createElement(PodcastCard, _extends({
    key: p.title
  }, p, {
    href: "#"
  }))))), /*#__PURE__*/React.createElement(CTABand, {
    eyebrow: "Stay informed",
    title: "Get Plutus21 Insights In Your Inbox",
    description: "Join the community of over 50,000 investors, builders and students becoming more intelligent together about the disruption shaping our world.",
    primary: "Subscribe",
    tone: "midnight"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "nl",
    placeholder: "you@firm.com",
    icon: "mail",
    size: "lg",
    style: {
      background: 'rgba(255,255,255,.06)',
      borderColor: 'rgba(255,255,255,.22)'
    }
  }))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_parent/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_parent/LeadershipScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  Card,
  Eyebrow,
  StatBlock
} = window.Plutus21DesignSystem_3e7813;
function PersonCard({
  name,
  role
}) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('');
  return /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--p21-blue-700)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 600
    }
  }, initials), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: '-.018em',
      color: 'var(--text-heading)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, role)));
}
function LeadershipScreen() {
  const groups = window.P21_LEADERSHIP;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About us",
    size: "lg",
    title: "Team",
    description: "Plutus21 is led by two partner groups \u2014 one accountable for investments, one for consulting \u2014 supported by junior partners, operating partners and researchers across seven locations."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    columns: 3,
    stats: [{
      value: '2017',
      label: 'Founded',
      note: 'Dallas, Texas'
    }, {
      value: '200+',
      label: 'Professionals'
    }, {
      value: 'No. 12',
      label: 'SMU Cox Dallas 100',
      note: '2025, investment services'
    }]
  })), /*#__PURE__*/React.createElement(Section, null, Object.keys(groups).map(g => /*#__PURE__*/React.createElement("div", {
    key: g,
    style: {
      marginBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, g), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, groups[g].map(p => /*#__PURE__*/React.createElement(PersonCard, _extends({
    key: p.name
  }, p)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, "No team photography was supplied with the brand assets \u2014 initials avatars stand in.")));
}
Object.assign(window, {
  LeadershipScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_parent/LeadershipScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_parent/ResearchScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tabs,
  Tag,
  SectionHeading,
  ResearchCard,
  Button,
  Icon
} = window.Plutus21DesignSystem_3e7813;
function ResearchScreen({
  onNavigate
}) {
  const [tab, setTab] = React.useState('all');
  const [topic, setTopic] = React.useState('All');
  const topics = ['All', 'Artificial Intelligence', 'Markets', 'Data', 'Blockchain'];
  const kindByTab = {
    commentary: 'Market Commentary',
    memos: 'Strategy Memo',
    letters: 'Letter from our Partner'
  };
  const items = window.P21_RESEARCH.filter(r => (tab === 'all' || r.kind === kindByTab[tab]) && (topic === 'All' || r.topic === topic));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Insights",
    size: "lg",
    title: "Research",
    description: "Market commentary, strategy and research memos, and letters from the partners.",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'commentary',
      label: 'Market Commentary'
    }, {
      id: 'memos',
      label: 'Memos'
    }, {
      id: 'letters',
      label: 'Letters from the Partners'
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-6)'
    }
  }, topics.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: topic === t,
    onClick: () => setTopic(t)
  }, t)))), /*#__PURE__*/React.createElement(Section, null, items.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, items.map(r => /*#__PURE__*/React.createElement(ResearchCard, _extends({
    key: r.title
  }, r, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('article');
    }
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-16)',
      textAlign: 'center',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search_off",
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 15
    }
  }, "No pieces match that combination yet.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    iconAfter: "expand_more"
  }, "Load more"))));
}
Object.assign(window, {
  ResearchScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_parent/ResearchScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_parent/Shell.jsx
try { (() => {
const DS = window.Plutus21DesignSystem_3e7813;
const {
  Navbar,
  Footer
} = DS;
function Shell({
  route,
  onNavigate,
  dark,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: dark ? {
      background: 'var(--p21-midnight)'
    } : null
  }, /*#__PURE__*/React.createElement(Navbar, {
    logoSrc: dark ? '../../assets/logo-plutus21-white.png' : '../../assets/logo-plutus21-primary.png',
    tone: dark ? 'dark' : 'light',
    items: window.P21_NAV,
    activeItem: route,
    onNavigate: onNavigate,
    cta: "Create Account",
    secondary: "Login",
    style: dark ? {
      position: 'absolute',
      left: 0,
      right: 0,
      background: 'transparent',
      backdropFilter: 'none',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    } : null
  })), children, /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/logo-plutus21-white.png",
    columns: window.P21_FOOTER.columns,
    address: window.P21_FOOTER.address,
    social: window.P21_FOOTER.social,
    legal: window.P21_FOOTER.legal
  }));
}
function Section({
  tone = 'light',
  children,
  style,
  wide
}) {
  const grounds = {
    light: 'var(--surface-page)',
    paper: 'var(--surface-muted)',
    midnight: 'var(--p21-midnight)',
    glow: 'var(--p21-gradient-glow-soft)'
  };
  return /*#__PURE__*/React.createElement("section", {
    className: tone === 'midnight' || tone === 'glow' ? 'p21-dark' : undefined,
    style: {
      background: grounds[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: wide ? 'var(--container-wide)' : 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--space-8)'
    }
  }, children));
}
Object.assign(window, {
  Shell,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_parent/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_parent/data.js
try { (() => {
/* Copy sourced from plutus21.com (Sept 2026) and the client brief. */
window.P21_NAV = [{
  id: 'investing',
  label: 'Investing',
  children: [{
    id: 'capital',
    label: 'About Plutus21 Capital'
  }, {
    id: 'letter',
    label: 'Foundational Letter'
  }, {
    id: 'contact',
    label: 'Contact Us'
  }]
}, {
  id: 'consulting',
  label: 'Consulting'
}, {
  id: 'insights',
  label: 'Insights',
  children: [{
    id: 'research',
    label: 'Research'
  }, {
    id: 'letters',
    label: 'Letters from the Partners'
  }, {
    id: 'memos',
    label: 'Memos'
  }, {
    id: 'podcast',
    label: 'Podcast'
  }, {
    id: 'shorts',
    label: 'Shorts'
  }]
}, {
  id: 'about',
  label: 'About Us',
  children: [{
    id: 'leadership',
    label: 'Team'
  }, {
    id: 'careers',
    label: 'Careers'
  }, {
    id: 'legal',
    label: 'Legal'
  }]
}];
window.P21_RESEARCH = [{
  kind: 'Market Commentary',
  title: 'Technology Is The Leverage',
  excerpt: 'August commentary: where adoption is starting to materially improve business economics, and what the market is still mispricing.',
  date: 'Aug 24, 2026',
  readTime: '6 min read',
  authors: [{
    name: 'Hamiz Awan'
  }, {
    name: 'Richard Raizes'
  }],
  topic: 'Artificial Intelligence'
}, {
  kind: 'Strategy Memo',
  title: 'Data Sovereignty Is Becoming a Competitive Requirement',
  excerpt: 'If AI labs own your workflows, what is left for you to own? A memo on where data leverage accumulates.',
  date: 'Aug 23, 2026',
  readTime: '4 min read',
  authors: [{
    name: 'Arsala Khan'
  }, {
    name: 'Ben Elliott'
  }, {
    name: 'Bradley Herman'
  }],
  topic: 'Data'
}, {
  kind: 'Letter from our Partner',
  title: 'Framework for a Single-Minded Market',
  excerpt: 'How we position when the market is only willing to price one idea at a time.',
  date: 'Aug 12, 2026',
  readTime: '9 min read',
  authors: [{
    name: 'Hamiz Awan'
  }, {
    name: 'Richard Raizes'
  }, {
    name: 'Arsala Khan'
  }],
  gated: true,
  topic: 'Markets'
}, {
  kind: 'Strategy Memo',
  title: 'Tokenmaxxing Is As Ridiculous As It Sounds',
  excerpt: 'Adoption, not issuance, is what makes a token economically meaningful.',
  date: 'Jul 20, 2026',
  readTime: '5 min read',
  authors: [{
    name: 'Hamiz Awan'
  }],
  topic: 'Blockchain'
}, {
  kind: 'Research Memo',
  title: 'Dispersions Don\u2019t Last',
  excerpt: 'What happens to factor dispersion once adoption becomes consensus.',
  date: 'Jul 14, 2026',
  readTime: '5 min read',
  authors: [{
    name: 'Hamiz Awan'
  }],
  topic: 'Markets'
}, {
  kind: 'Research Memo',
  title: 'Investors Overestimate Their Ability To Time Cyclical Trades',
  excerpt: 'A reminder that cyclical timing is a tax on fundamental conviction.',
  date: 'Jul 6, 2026',
  readTime: '7 min read',
  authors: [{
    name: 'Hamiz Awan'
  }],
  topic: 'Markets'
}];
window.P21_PODCASTS = [{
  title: 'Data Sovereignty: Who Owns Your Data When AI Runs Your Workflows',
  date: 'Aug 7, 2026',
  duration: '38 min'
}, {
  title: 'The Real Economics of AI: Subsidies, Commodities, and Where the Money Flows',
  date: 'Jun 19, 2026',
  duration: '44 min'
}, {
  title: 'The AI Bubble Is Real, but So Is the Efficiency Wave',
  date: 'May 29, 2026',
  duration: '41 min'
}];
window.P21_FOOTER = {
  columns: [{
    title: 'Businesses',
    links: [{
      label: 'Capital'
    }, {
      label: 'Consulting'
    }, {
      label: 'Academy'
    }]
  }, {
    title: 'Explore',
    links: [{
      label: 'Insights'
    }, {
      label: 'Team'
    }, {
      label: 'Careers'
    }]
  }, {
    title: 'Connect',
    links: [{
      label: 'Investor Inquiries'
    }, {
      label: 'Consulting Inquiries'
    }, {
      label: 'Academy Inquiries'
    }]
  }],
  address: ['4311 Oak Lawn Ave', 'Suite 325', 'Dallas, TX 75219'],
  social: [{
    label: 'X',
    href: '#',
    icon: 'tag'
  }, {
    label: 'LinkedIn',
    href: '#',
    icon: 'work'
  }, {
    label: 'Instagram',
    href: '#',
    icon: 'photo_camera'
  }, {
    label: 'YouTube',
    href: '#',
    icon: 'play_circle'
  }],
  legal: 'Copyright \u00A9 Plutus21 Investment Management, L.L.C., Plutus21 Capital Management, L.L.C., and Plutus21 Holdings, Inc.'
};
window.P21_LEADERSHIP = {
  Investments: [{
    name: 'Hamiz Awan',
    role: 'Managing Partner / Chairman Investments'
  }, {
    name: 'Richard Raizes',
    role: 'Managing Partner / Director Investments'
  }],
  Consulting: [{
    name: 'Daniyal Awan',
    role: 'Managing Partner / Director Consulting'
  }, {
    name: 'Bradley Herman',
    role: 'Managing Partner / Director Consulting'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_parent/data.js", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_partners/CapabilityScreen.jsx
try { (() => {
const {
  Badge,
  Button,
  Card,
  Eyebrow,
  SectionHeading,
  Icon,
  Tabs,
  StatBlock,
  CTABand
} = window.Plutus21DesignSystem_3e7813;
function CapabilityScreen({
  capId,
  onNavigate
}) {
  const caps = window.P21P_CAPABILITIES;
  const cap = caps.find(c => c.id === capId) || caps[1];
  const stages = [{
    t: 'Diagnose',
    b: 'Where growth actually comes from today: outbound, paid, search, social, events, content, referrals and relationships.'
  }, {
    t: 'Decide',
    b: 'Who deserves attention — leadership changes, funding, hiring, website activity, technology changes and other evidence of timing.'
  }, {
    t: 'Coordinate',
    b: 'Channels aligned around those accounts, rather than sales, advertising, content and leadership relationships operating independently.'
  }, {
    t: 'Compound',
    b: 'Replies, pipeline, channel performance, content interaction and account outcomes feed back into the next decision.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PSection, {
    tone: "glow",
    style: {
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "inverse"
  }, "Capability"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-h1)',
      lineHeight: 1.1,
      letterSpacing: '-.03em',
      fontWeight: 600,
      color: 'var(--p21-paper)',
      margin: 'var(--space-5) 0 var(--space-4)',
      maxWidth: '24ch'
    }
  }, cap.title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '62ch',
      fontSize: 'var(--font-size-body-lg)',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)'
    }
  }, cap.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-8)'
    }
  }, caps.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => onNavigate(c.id),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 34,
      padding: '0 14px',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      background: c.id === cap.id ? 'var(--p21-paper)' : 'rgba(255,255,255,.06)',
      color: c.id === cap.id ? 'var(--p21-ink-900)' : 'var(--p21-paper)',
      border: '1px solid ' + (c.id === cap.id ? 'var(--p21-paper)' : 'var(--border-on-dark)')
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 16
  }), c.title)))), /*#__PURE__*/React.createElement(PSection, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Scope"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, "What we build"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, cap.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 16,
      color: 'var(--text-body)',
      paddingBottom: 12,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check_circle",
    size: 20,
    color: "var(--p21-blue-500)"
  }), i)))), /*#__PURE__*/React.createElement(Card, {
    tone: "muted",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, "Operating system"), stages.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      paddingBottom: i === stages.length - 1 ? 0 : 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--p21-blue-600)',
      width: 22,
      flex: '0 0 auto',
      paddingTop: 3
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-.015em',
      color: 'var(--text-heading)'
    }
  }, s.t), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, s.b))))))), /*#__PURE__*/React.createElement(CTABand, {
    tone: "paper",
    eyebrow: "Next",
    title: "Bring us a growth problem, not a brief",
    primary: "Talk to us"
  }));
}
Object.assign(window, {
  CapabilityScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_partners/CapabilityScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_partners/CaseStudyScreen.jsx
try { (() => {
const {
  Badge,
  Card,
  Eyebrow,
  SectionHeading,
  StatBlock,
  Icon,
  PullQuote,
  Tabs,
  Button
} = window.Plutus21DesignSystem_3e7813;
function Phase({
  n,
  title,
  body,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface-accent-soft)',
      color: 'var(--p21-blue-700)',
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 600,
      flex: '0 0 auto'
    }
  }, n), !last ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 1,
      background: 'var(--border-default)',
      marginTop: 6
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: last ? 0 : 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-.015em',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      maxWidth: '58ch'
    }
  }, body)));
}
function CaseStudyScreen() {
  const [which, setWhich] = React.useState('safety');
  const cases = {
    safety: {
      tag: 'PE-backed safety & compliance platform',
      title: 'Three continents, four operating phases, three years',
      lede: 'A private-equity-backed safety and compliance business needed engineering capacity, then integration capability, then a commercial organisation — in that order.',
      stats: [{
        value: '4 → 80',
        label: 'Engineering team'
      }, {
        value: '25',
        label: 'Commercial operation built'
      }, {
        value: '3',
        label: 'Continents',
        note: 'Asia, Africa, LATAM'
      }, {
        value: '3+ yrs',
        label: 'Engagement'
      }],
      phases: [{
        t: 'Phase 1 — Engineering capacity',
        b: 'Stand up a delivery organisation against a product roadmap the internal team could not absorb.'
      }, {
        t: 'Phase 2 — Regional expansion',
        b: 'Expand into Asia, Africa and LATAM based on the company\u2019s talent, integration and time-zone requirements.'
      }, {
        t: 'Phase 3 — Acquisition integration',
        b: 'Fold acquired products and teams into one operating model and delivery cadence.'
      }, {
        t: 'Phase 4 — Commercial build',
        b: 'Build a 25-person commercial operation with the revenue systems to support it.'
      }]
    },
    transport: {
      tag: 'Secure executive transportation, ~$80M revenue',
      title: 'Stabilise engineering, then modernise the whole stack',
      lede: 'A secure executive transportation business growing 25–30% annually needed its technology organisation assessed and rebuilt over an 18-month engagement.',
      stats: [{
        value: '~$80M',
        label: 'Revenue'
      }, {
        value: '25–30%',
        label: 'Annual growth'
      }, {
        value: '18+ mo',
        label: 'Engagement'
      }, {
        value: 'Weekly',
        label: 'Production deployments'
      }],
      phases: [{
        t: 'Assess',
        b: 'Review the technology organisation, delivery practices and architecture.'
      }, {
        t: 'Stabilise',
        b: 'Stabilise engineering, introduce dedicated QA and establish weekly production deployments.'
      }, {
        t: 'Migrate',
        b: 'Move core workloads to AWS and rebuild the customer applications.'
      }, {
        t: 'Modernise',
        b: 'Modernise the underlying stack and add AI-enabled tooling.'
      }]
    }
  };
  const c = cases[which];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PSection, {
    tone: "paper",
    style: {
      paddingTop: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Case studies",
    size: "lg",
    title: "Operating work, in public",
    description: "Two 2026 engagements that show the range of the model."
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'safety',
      label: 'Safety & compliance platform'
    }, {
      id: 'transport',
      label: 'Executive transportation'
    }],
    value: which,
    onChange: setWhich
  })), /*#__PURE__*/React.createElement(PSection, null, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, c.tag), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-5) 0 var(--space-4)',
      maxWidth: '28ch'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      maxWidth: '68ch'
    }
  }, c.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-12) 0'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    columns: 4,
    stats: c.stats
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "How it ran"), c.phases.map((p, i) => /*#__PURE__*/React.createElement(Phase, {
    key: p.t,
    n: '0' + (i + 1),
    title: p.t,
    body: p.b,
    last: i === c.phases.length - 1
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, "What this demonstrates"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, ['Operator oversight connected to globally distributed execution', 'Capacity for both focused builds and larger-scale expansion', 'Engineering execution, not only advisory work', 'Team structures aligned to function, stage and operating need'].map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 15,
      color: 'var(--p21-paper)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--p21-blue-300)"
  }), x))), /*#__PURE__*/React.createElement(PullQuote, {
    tone: "dark",
    style: {
      marginTop: 'var(--space-8)'
    },
    attribution: "Plutus21 Partners"
  }, "We built Plutus21 Partners to help investors achieve those goals."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, "Client names are not disclosed in the public case studies; descriptors are used as published.")));
}
Object.assign(window, {
  CaseStudyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_partners/CaseStudyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_partners/PartnersHomeScreen.jsx
try { (() => {
const {
  Badge,
  Button,
  Card,
  Eyebrow,
  SectionHeading,
  Icon,
  CapabilityCard,
  StatBlock,
  PullQuote,
  CTABand
} = window.Plutus21DesignSystem_3e7813;
function ContrastRow({
  them,
  us
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      padding: 'var(--space-4) 0',
      borderTop: '1px solid var(--border-default)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "remove",
    size: 18,
    color: "var(--text-faint)"
  }), them), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 15,
      color: 'var(--text-heading)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--p21-blue-500)"
  }), us));
}
function PartnersHomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "p21-dark",
    style: {
      background: 'var(--p21-gradient-glow)',
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-24) var(--space-8) var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "inverse"
  }, "Plutus21 Partners"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-display-2)',
      lineHeight: 1.06,
      letterSpacing: '-.03em',
      fontWeight: 600,
      color: 'var(--p21-paper)',
      maxWidth: '26ch',
      margin: 'var(--space-6) 0 0'
    }
  }, "Most firms separate advice from implementation"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 var(--space-10)',
      maxWidth: '64ch',
      fontSize: 'var(--font-size-body-lg)',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)'
    }
  }, "Strategy firms help define the plan. Staffing firms provide people. Development shops build against tickets. Plutus21 Partners combines operator leadership in the US with execution infrastructure across multiple regions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconAfter: "arrow_forward"
  }, "Talk to us"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: 'var(--p21-paper)',
      borderColor: 'var(--border-on-dark)'
    },
    onClick: () => onNavigate('cases')
  }, "See the work")))), /*#__PURE__*/React.createElement(PSection, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Capabilities",
    title: "Six operating areas, one relationship",
    description: "Engagements are structured around the business objective, the complexity of the work and the level of operating support required."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, window.P21P_CAPABILITIES.map(c => /*#__PURE__*/React.createElement(CapabilityCard, {
    key: c.id,
    icon: c.icon,
    title: c.title,
    description: c.description,
    items: c.items.slice(0, 3),
    href: "#"
  })))), /*#__PURE__*/React.createElement(PSection, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Why we exist"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, "Built to improve our own investments first"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      maxWidth: '46ch'
    }
  }, "Partners came out of Capital. We created an internal operating capability because we needed help improving our own private investments and found existing service providers too fragmented. We then offered the model to other private equity firms, investors and management teams."), /*#__PURE__*/React.createElement(PullQuote, {
    style: {
      marginTop: 'var(--space-8)'
    },
    attribution: "Plutus21 Partners",
    role: "Manifesto"
  }, "Through Capital we study how disruption changes markets. Through Partners we help companies respond to it.")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      paddingBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "The usual model"), /*#__PURE__*/React.createElement(Eyebrow, null, "Plutus21 Partners")), /*#__PURE__*/React.createElement(ContrastRow, {
    them: "Strategy defined, then handed off",
    us: "Strategy and execution in one team"
  }), /*#__PURE__*/React.createElement(ContrastRow, {
    them: "People supplied against a headcount",
    us: "Teams structured to the operating need"
  }), /*#__PURE__*/React.createElement(ContrastRow, {
    them: "Engineering built against tickets",
    us: "Operator oversight of the build"
  }), /*#__PURE__*/React.createElement(ContrastRow, {
    them: "Advice priced per deliverable",
    us: "Judged on enterprise value"
  })))), /*#__PURE__*/React.createElement(PSection, {
    tone: "midnight"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "Delivery model",
    title: "US operator leadership, globally distributed execution",
    description: "Access to multiple regions and talent markets, with team structures aligned to the function, stage and operating need."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    columns: 4,
    stats: [{
      value: '200+',
      label: 'Professionals'
    }, {
      value: '7',
      label: 'Global locations'
    }, {
      value: '3',
      label: 'Continents in one engagement',
      note: 'Asia, Africa, LATAM'
    }, {
      value: '4 → 80',
      label: 'Engineering scaled',
      note: 'PE-backed safety & compliance platform'
    }]
  })), /*#__PURE__*/React.createElement(PSection, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who we work with",
    title: "Where the model fits"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, [{
    icon: 'account_balance',
    t: 'Private equity firms',
    b: 'Operating support across diligence, value creation and portfolio execution.'
  }, {
    icon: 'domain',
    t: 'PE-backed portfolio companies',
    b: 'Integration after acquisition, technology modernisation, commercial build-out.'
  }, {
    icon: 'group_work',
    t: 'Middle-market management teams',
    b: 'Companies growing faster than the internal team can absorb.'
  }].map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.t,
    tone: "outline",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: x.icon,
    size: 26,
    color: "var(--p21-blue-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: '-.018em',
      color: 'var(--text-heading)',
      margin: '14px 0 8px'
    }
  }, x.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, x.b))))), /*#__PURE__*/React.createElement(CTABand, {
    eyebrow: "Get in touch",
    title: "Whatever you are building, we can help structure and execute the work",
    description: "Modernising technology, implementing AI, scaling teams, improving operations or strengthening commercial execution.",
    primary: "Talk to us",
    tone: "midnight"
  }));
}
Object.assign(window, {
  PartnersHomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_partners/PartnersHomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_partners/PartnersShell.jsx
try { (() => {
const {
  Navbar,
  Footer
} = window.Plutus21DesignSystem_3e7813;
function PartnersShell({
  route,
  onNavigate,
  dark,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: dark ? {
      background: 'var(--p21-midnight)'
    } : null
  }, /*#__PURE__*/React.createElement(Navbar, {
    logoSrc: dark ? '../../assets/logo-plutus21-white.png' : '../../assets/logo-plutus21-primary.png',
    tone: dark ? 'dark' : 'light',
    items: window.P21P_NAV,
    activeItem: route,
    onNavigate: onNavigate,
    cta: "Talk to us",
    style: dark ? {
      position: 'absolute',
      left: 0,
      right: 0,
      background: 'transparent',
      backdropFilter: 'none',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    } : null
  })), children, /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/logo-plutus21-white.png",
    tagline: "Plutus21 Partners \u2014 strategy and implementation in one operating relationship.",
    columns: window.P21P_FOOTER.columns,
    address: window.P21P_FOOTER.address,
    legal: window.P21P_FOOTER.legal
  }));
}
function PSection({
  tone = 'light',
  children,
  style
}) {
  const g = {
    light: 'var(--surface-page)',
    paper: 'var(--surface-muted)',
    midnight: 'var(--p21-midnight)',
    glow: 'var(--p21-gradient-glow-soft)'
  };
  return /*#__PURE__*/React.createElement("section", {
    className: tone === 'midnight' || tone === 'glow' ? 'p21-dark' : undefined,
    style: {
      background: g[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--space-8)'
    }
  }, children));
}
Object.assign(window, {
  PartnersShell,
  PSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_partners/PartnersShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plutus21_partners/capabilities.js
try { (() => {
window.P21P_NAV = [{
  id: 'home',
  label: 'Overview'
}, {
  id: 'capabilities',
  label: 'Capabilities',
  children: [{
    id: 'cap-ai',
    label: 'AI & ML'
  }, {
    id: 'cap-growth',
    label: 'Commercial Growth'
  }, {
    id: 'cap-tech',
    label: 'Technology & Innovation'
  }, {
    id: 'cap-strategy',
    label: 'Strategy & Transformation'
  }, {
    id: 'cap-people',
    label: 'People & Operations'
  }, {
    id: 'cap-change',
    label: 'Change Management'
  }]
}, {
  id: 'cases',
  label: 'Case Studies'
}, {
  id: 'about',
  label: 'About'
}];
window.P21P_CAPABILITIES = [{
  id: 'cap-ai',
  icon: 'smart_toy',
  title: 'AI & ML',
  description: 'AI strategy and architecture, data foundations, governance, agentic AI and automation.',
  items: ['AI strategy & architecture', 'Data foundations', 'Governance', 'Agentic AI & automation']
}, {
  id: 'cap-growth',
  icon: 'trending_up',
  title: 'Commercial Growth',
  description: 'Go-to-market strategy, market intelligence, revenue operations and growth execution.',
  items: ['Go-to-market strategy', 'Market intelligence & analytics', 'Revenue operations', 'Growth execution']
}, {
  id: 'cap-tech',
  icon: 'code_blocks',
  title: 'Technology & Innovation',
  description: 'Software engineering, product, data infrastructure, modernisation and integration.',
  items: ['Software engineering', 'Product & data infrastructure', 'Modernisation', 'Integration', 'Blockchain']
}, {
  id: 'cap-strategy',
  icon: 'insights',
  title: 'Strategy & Transformation',
  description: 'Business planning, value creation, transformation programmes and decision systems.',
  items: ['Business planning', 'Value creation', 'Transformation programmes', 'Decision systems']
}, {
  id: 'cap-people',
  icon: 'groups',
  title: 'People & Operations',
  description: 'Organisation design, operating models, process improvement and team building.',
  items: ['Organisation design', 'Operating models', 'Process improvement', 'Team building']
}, {
  id: 'cap-change',
  icon: 'change_circle',
  title: 'Change Management & Implementation',
  description: 'Adoption, training, enablement and implementation governance.',
  items: ['Adoption & training', 'Enablement', 'Implementation governance']
}];
window.P21P_FOOTER = {
  columns: [{
    title: 'Explore',
    links: [{
      label: 'Capabilities'
    }, {
      label: 'Case Studies'
    }, {
      label: 'About'
    }, {
      label: 'Careers'
    }]
  }, {
    title: 'Plutus21',
    links: [{
      label: 'Capital'
    }, {
      label: 'Academy'
    }, {
      label: 'Leadership'
    }]
  }],
  address: ['200 Crescent Ct #1430', 'Dallas, TX 75201', 'coms@plutus21.com'],
  legal: 'Copyright \u00A9 Plutus21 Investment Management, L.L.C., Plutus21 Capital Management, L.L.C., and Plutus21 Holdings, Inc.'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plutus21_partners/capabilities.js", error: String((e && e.message) || e) }); }

__ds_ns.Byline = __ds_scope.Byline;

__ds_ns.CTABand = __ds_scope.CTABand;

__ds_ns.CapabilityCard = __ds_scope.CapabilityCard;

__ds_ns.PodcastCard = __ds_scope.PodcastCard;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.ResearchCard = __ds_scope.ResearchCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
