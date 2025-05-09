CREATE TABLE user (
                      id VARCHAR(255) PRIMARY KEY,
                      username VARCHAR(32) UNIQUE NOT NULL,
                      password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE session (
                         id VARCHAR(255) PRIMARY KEY,
                         user_id VARCHAR(255) NOT NULL,
                         expires_at DATETIME NOT NULL,
                         FOREIGN KEY (user_id) REFERENCES user(id)
);