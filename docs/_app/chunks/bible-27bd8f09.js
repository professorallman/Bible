import{V as _}from"./vendor-81807408.js";let a;async function c(n){if(a)return a;let t;t=await _({locateFile:s=>`/Bible/${s}`});const e=await n("/Bible/bible.sqlite3").then(s=>s.arrayBuffer());return a=new t.Database(new Uint8Array(e)),a}function i(n){return[...n.values()][0].values.map(t=>t[0])}class b{constructor(t,e){this._db=t,Object.assign(this,e)}get translations(){return this._translations||(this._translations=i(this._db.exec("SELECT translation FROM available_translations"))),this._translations}get books(){return this._books||(this._books=i(this._db.exec("SELECT name FROM books"))),this._books}get booksByTestament(){if(!this._books_by_testament){const t=[...this._db.exec("SELECT name,testament FROM books").values()][0].values,e={old:[],new:[]};t.forEach(([s,r])=>e[r].push(s)),this._books_by_testament=e}return this._books_by_testament}set translation(t){const s=a.prepare("SELECT id,translation FROM available_translations WHERE translation=:translation").getAsObject({":translation":t});this._translation=s.translation,this._translation_id=s.id}get translation(){return this._translation}set book(t){if(!t)this._book="";else{const s=a.prepare("SELECT id,name FROM books WHERE name like :bookName").getAsObject({":bookName":`%${t}%`});this._book=s.name,this._book_id=s.id}}get book(){return this._book}get chapters(){if(!this._book_id)return[];const t=a.prepare("SELECT id,chapter FROM chapters WHERE book_id=:bookId ORDER BY chapter");t.bind({":bookId":this._book_id});const e=[];for(;t.step();){const[s,r]=t.get();e.push({id:s,chapter:r})}return e}set chapter(t){if(t===void 0)this._chapter="";else{const e=this.chapters.filter(s=>s.chapter==t).pop();e&&(this._chapter_id=e.id,this._chapter=e.chapter)}}get chapter(){return this._chapter}get verses(){if(!this._chapter_id)return[];const t=a.prepare("SELECT id,verse FROM verses WHERE chapter_id=:chapter_id ORDER BY verse");t.bind({":chapter_id":this._chapter_id});const e=[];for(;t.step();){const[s,r]=t.get();e.push({id:s,verse:r})}return e}get translationVerses(){if(!this._chapter_id||!this._translation_id)return[];const t=a.prepare(`
        SELECT verses.verse as verse_number, translations.verse FROM translations JOIN verses ON translations.verse_id=verses.id 
        WHERE translations.chapter_id = :chapter_id 
        AND translations.translation_id = :translation_id
        ORDER BY verses.verse;
        `);t.bind({":chapter_id":this._chapter_id,":translation_id":this._translation_id});const e=[];for(;t.step();){const[s,r]=t.get();e.push({verse_number:s,verse:r})}return e}search(t){const e=a.prepare(`    
        SELECT books.name, chapters.chapter, verses.verse as verse_number, translations.verse FROM translations 
        JOIN books ON translations.book_id=books.id
        JOIN chapters ON  translations.chapter_id=chapters.id
        JOIN verses ON translations.verse_id=verses.id 
        WHERE translations.verse LIKE :search_term
        AND translations.translation_id = :translation_id
        ORDER BY books.name,chapters.chapter,verses.verse
        `);e.bind({":search_term":`%${t}%`,":translation_id":this._translation_id});const s=[];for(;e.step();){const[r,o,h,l]=e.get();s.push({book:r,chapter:o,verseNumber:h,verse:l})}return s}}async function d(n,t){const e=await c(n);return new b(e,t)}export{d as b};