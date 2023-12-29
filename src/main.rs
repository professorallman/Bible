use axohtml::{html,text};
use dotenv::dotenv;
use sqlx::sqlite::SqlitePoolOptions;
use std::env;

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    dotenv().ok();
    let database_url = env::var("DATABASE_URL").unwrap();
    let conn = SqlitePoolOptions::new()
        .max_connections(4)
        .connect(&database_url)
        .await?;

    let books = sqlx::query!("
    SELECT name, testament FROM books
    ").fetch_all(&conn)
        .await?;

    let mut doc: axohtml::dom::DOMTree<String> = html!(
        <html>
            <head>
                <title>"Hello World!"</title>
            </head>
            <body>
            <h1>"Books of the bible"</h1>
           <ul>
        {
            books.iter().map(|book| html!(
                <li>{text!("{}", book.name)}</li>
    ) ) 
    }
    </ul>

            </body>
        </html>
    );



    println!("{}", doc.to_string());
    Ok(())
}
