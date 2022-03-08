import { browser } from '$app/env';
import initSqlJs from 'sql.js';
let SQL;
let db;
async function getDb(fetch){
    if(db) return db;
    let SQL;
    if(browser){
        SQL = await initSqlJs({
            locateFile:(file)=>`/Bible/${file}`
        });
    }else{
        SQL = await initSqlJs();
    }
    const data = await fetch('/Bible/bible.sqlite3').then(r=>r.arrayBuffer());
    db = new SQL.Database(new Uint8Array(data));
    return db;
}
function allRowsAsArray(queryResult){
    return [...queryResult.values()][0].values.map(v=>v[0]);
}
class Bible{
    constructor(db,options){
        this._db = db;
        Object.assign(this,options);
    }
    get translations(){
        if(!this._translations)
        this._translations = allRowsAsArray(this._db.exec('SELECT translation FROM available_translations'));
        return this._translations;
    }
    get books(){
        if(!this._books)
        this._books = allRowsAsArray(this._db.exec('SELECT name FROM books'));
        return this._books;
    }
    get booksByTestament(){
        if(!this._books_by_testament){
            const books = [...this._db.exec('SELECT name,testament FROM books').values()][0].values;
            const booksMap = {old:[],new:[]};
            books.forEach(([book,testament])=>booksMap[testament].push(book));
            this._books_by_testament = booksMap;
        }
        return this._books_by_testament;
    }
    set translation(t){
        const statement = db.prepare('SELECT id,translation FROM available_translations WHERE translation=:translation');
        const result = statement.getAsObject({':translation':t});
        this._translation = result.translation;
        this._translation_id = result.id;
    }
    get translation(){
        return this._translation;
    }
    set book(b){
        if(!b){ 
            this._book = '';
        }else{
            const statement = db.prepare('SELECT id,name FROM books WHERE name like :bookName');
            const result = statement.getAsObject({':bookName':`%${b}%`});
            this._book = result.name;
            this._book_id = result.id;
        }
    }
    get book(){
        return this._book;
    }
    get chapters(){
        if(!this._book_id) return [];
        const statement = db.prepare("SELECT id,chapter FROM chapters WHERE book_id=:bookId ORDER BY chapter");
        statement.bind({':bookId':this._book_id});
        const chapters = [];
        while(statement.step()){
            const [id,chapter] = statement.get();
            chapters.push({id,chapter});
        }
        return chapters;
    }
    set chapter(c){
        if(c === undefined){
            this._chapter = '';
        }else{
            const found = this.chapters.filter(ch=>ch.chapter == c).pop();
            if(found){
                this._chapter_id = found.id;
                this._chapter = found.chapter;
            }
           
        }
    }
    get chapter(){
        return this._chapter;
    }
    get verses(){
        if(!this._chapter_id) return [];
        const statement = db.prepare("SELECT id,verse FROM verses WHERE chapter_id=:chapter_id ORDER BY verse");
        statement.bind({':chapter_id':this._chapter_id});
        const verses = [];
        while(statement.step()){
            const [id,verse] = statement.get();
            verses.push({id,verse});
        }
        return verses;
    }
    get translationVerses(){
        if(!this._chapter_id || !this._translation_id) return [];
        const statement = db.prepare(`
        SELECT verses.verse as verse_number, translations.verse FROM translations JOIN verses ON translations.verse_id=verses.id 
        WHERE translations.chapter_id = :chapter_id 
        AND translations.translation_id = :translation_id
        ORDER BY verses.verse;
        `);
        statement.bind({':chapter_id':this._chapter_id,':translation_id':this._translation_id});
        const verses = [];
        while(statement.step()){
            const [verse_number,verse] = statement.get();
            verses.push({verse_number,verse});
        }
        return verses;
    }
    search(text){
        const statement = db.prepare(`    
        SELECT books.name, chapters.chapter, verses.verse as verse_number, translations.verse FROM translations 
        JOIN books ON translations.book_id=books.id
        JOIN chapters ON  translations.chapter_id=chapters.id
        JOIN verses ON translations.verse_id=verses.id 
        WHERE translations.verse LIKE :search_term
        AND translations.translation_id = :translation_id
        ORDER BY books.name,chapters.chapter,verses.verse
        `);
        statement.bind({':search_term':`%${text}%`,':translation_id':this._translation_id});
        const results = [];
        while(statement.step()){
            const [book,chapter,verseNumber,verse] = statement.get();
            
            results.push({book,chapter,verseNumber,verse});
        }
        return results;

    }
}

async function bibleInstance(fetch,options){
    const db = await getDb(fetch);
    const bible = new Bible(db,options);
    return bible;
}
export {bibleInstance};
