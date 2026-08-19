# Golden Base Company — وێبسایتی فەرمی

وێبسایتی کۆمپانیای گۆڵدن بەیس بە React + Vite.
٣ زمان (کوردی / عەرەبی / ئینگلیزی)، دۆخی تاریک و ڕوون، ئەنیمەیشنی نەرم، و ئۆپتیمایزکراو بۆ مۆبایل و تابلێت و دیسکتۆپ.

---

## دەستپێکردن

```bash
npm install
npm run dev
```

پاشان بچۆ بۆ `http://localhost:5173/`

---

## چۆن ناوەڕۆک بگۆڕم

### ١. بەرهەمەکان
فایل: `src/data/site.js`

وێنەکان دابنێ لە:
```
public/images/products/product-1.jpg
public/images/products/product-2.jpg
...
public/images/products/product-9.jpg
```

پاشان لە هەمان فایلدا، بۆ هەر بەرهەمێک ئەمانە بگۆڕە:
- `name` — ناوی بەرهەم بە ٣ زمان
- `desc` — وەسفی کورت بە ٣ زمان
- `grade` — پلە (وەک `5W-30`). ئەگەر `—` بێت، نیشان نادرێت.

### ٢. زانیاری پەیوەندی
فایل: `src/data/site.js` — بەشی `site`
(ژمارە، ئیمەیل، فەیسبووک، ناونیشانی نەخشە)

### ٣. دەقەکانی وێبسایت
فایل: `src/data/translations.js`
هەر سێ زمانەکە لێرەدان — مێژوو، بەهاکان، سەردێڕەکان، هەموویان.

### ٤. لۆگۆ
`public/images/logo/logo.png`

---

## بڵاوکردنەوە (Deploy)

### GitHub Pages
لە `.github/workflows/deploy.yml` ئامادەکراوە.
دوای `git push`، بچۆ بۆ **Settings → Pages → Source: GitHub Actions**.

⚠️ `base` لە `vite.config.js` دەبێت ناوی ڕیپۆزیتۆری بێت.

### Netlify
1. لە `vite.config.js`، `base` بگۆڕە بۆ `'/'`
2. لە Netlify، ڕیپۆزیتۆرییەکە هەڵبژێرە
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## تەکنەلۆجیا
- React 19 + Vite
- React Router
- Framer Motion (ئەنیمەیشن)
- CSS Variables (بۆ دۆخی تاریک/ڕوون)
