use std::net::SocketAddr;
use axum::{routing::get, Router, extract::State, Json, response::Result, Form};
use serde::{Deserialize, Serialize};
use sqlx::MySqlPool;
use tower_http::cors::CorsLayer;

#[allow (unused_imports, unused_variables)  ]
#[tokio::main]
async fn main() -> Result<()> {
    let _ = dotenv::dotenv();
    let url = std::env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env file");
    let pool = MySqlPool::connect(&url).await.unwrap();
    println!("{}",url);
    let app = Router::new().route("/", get(list)).route("/create", get(create)).with_state(pool).layer(CorsLayer::very_permissive());
    let address = SocketAddr::from(([0, 0, 0, 0], 8000));
    let listener = tokio::net::TcpListener::bind(address).await.unwrap();
    println!("Listening on {}", address);
    Ok(axum::serve(listener, app).await.unwrap())
}

#[derive(Serialize, Deserialize)]
struct User {
    id: String,
    username: String,
    password_hash: String
}


async fn list(State(pool): State<MySqlPool>) -> Result<Json<Vec<User>>>  {
    let users = sqlx::query_as!(User, "SELECT id, username, password_hash FROM user ORDER BY id").fetch_all(&pool).await.unwrap();
    Ok(Json(users))
}

async fn create(State(pool) : State<MySqlPool>, Form(user): Form<User>) -> Result<String> {
    sqlx::query!("INSERT INTO user (id, username, password_hash) VALUES (?, ?, ?)", user.id, user.username, user.password_hash,).execute(&pool).await.unwrap();
    Ok("Successfully".to_string())
}
