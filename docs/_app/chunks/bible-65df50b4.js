import{W as p}from"./vendor-94cb3b7b.js";let r;async function d(n){if(r)return r;let t;t=await p({locateFile:s=>`/Bible/${s}`});const e=await n("/Bible/bible.sqlite3").then(s=>s.arrayBuffer());return r=new t.Database(new Uint8Array(e)),r}function c(n){return[...n.values()][0].values.map(t=>t[0])}class u{constructor(t,e){this._db=t,Object.assign(this,e)}get translations(){return this._translations||(this._translations=c(this._db.exec("SELECT translation FROM available_translations"))),this._translations}get books(){return this._books||(this._books=c(this._db.exec("SELECT name FROM books"))),this._books}get booksByTestament(){if(!this._books_by_testament){const t=[...this._db.exec("SELECT name,testament FROM books").values()][0].values,e={old:[],new:[]};t.forEach(([s,a])=>e[a].push(s)),this._books_by_testament=e}return this._books_by_testament}set translation(t){const s=r.prepare("SELECT id,translation FROM available_translations WHERE translation=:translation").getAsObject({":translation":t});this._translation=s.translation,this._translation_id=s.id}get translation(){return this._translation}set book(t){if(!t)this._book="";else{const s=r.prepare("SELECT id,name FROM books WHERE name like :bookName").getAsObject({":bookName":`%${t}%`});this._book=s.name,this._book_id=s.id}}get book(){return this._book}get chapters(){if(!this._book_id)return[];const t=r.prepare("SELECT id,chapter FROM chapters WHERE book_id=:bookId ORDER BY chapter");t.bind({":bookId":this._book_id});const e=[];for(;t.step();){const[s,a]=t.get();e.push({id:s,chapter:a})}return e}set chapter(t){if(t===void 0)this._chapter="";else{const e=this.chapters.filter(s=>s.chapter==t).pop();e&&(this._chapter_id=e.id,this._chapter=e.chapter)}}get chapter(){return this._chapter}get verses(){if(!this._chapter_id)return[];const t=r.prepare("SELECT id,verse FROM verses WHERE chapter_id=:chapter_id ORDER BY verse");t.bind({":chapter_id":this._chapter_id});const e=[];for(;t.step();){const[s,a]=t.get();e.push({id:s,verse:a})}return e}get translationVerses(){if(!this._chapter_id||!this._translation_id)return[];const t=r.prepare(`
        SELECT verses.verse as verse_number, translations.verse FROM translations JOIN verses ON translations.verse_id=verses.id 
        WHERE translations.chapter_id = :chapter_id 
        AND translations.translation_id = :translation_id
        ORDER BY verses.verse;
        `);t.bind({":chapter_id":this._chapter_id,":translation_id":this._translation_id});const e=[];for(;t.step();){const[s,a]=t.get();e.push({verse_number:s,verse:a})}return e}search(t){const e=t.split(" ");let s=`SELECT books.name, chapters.chapter, verses.verse as verse_number, translations.verse FROM translations 
                                JOIN books ON translations.book_id=books.id
                                JOIN chapters ON  translations.chapter_id=chapters.id
                                JOIN verses ON translations.verse_id=verses.id 
                                WHERE
                                `,a={":translation_id":this._translation_id};e.forEach((h,i)=>{a[`:search_term${i}`]=`%${h}%`,s+=`
                   translations.verse LIKE :search_term${i} AND
            `}),s+=`
        translations.translation_id = :translation_id
        ORDER BY books.name,chapters.chapter,verses.verse
        `,console.log(s,a);const o=r.prepare(s);o.bind(a);const l=[];for(;o.step();){const[h,i,_,b]=o.get();l.push({book:h,chapter:i,verseNumber:_,verse:b})}return l}}async function v(n,t){const e=await d(n);return new u(e,t)}export{v as b};
