-- Up
CREATE TABLE Category (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);
INSERT INTO Category (name) VALUES ("Business");
INSERT INTO Category (name) VALUES ("Technology");

CREATE TABLE Post (id INTEGER PRIMARY KEY AUTOINCREMENT, categoryId INTEGER, title TEXT, content TEXT, CONSTRAINT Post_fk_categoryId FOREIGN KEY (categoryId) REFERENCES Category (id));
CREATE INDEX Post_ix_categoryId ON Post (categoryId);
INSERT INTO Post (title, content, categoryId) VALUES ("My first blog post", "A big title\n===\n\My main content", 1);
INSERT INTO Post (title, content, categoryId) VALUES ("How use GraphQL", "How use GraphQL\n===\n\GraphSQL FTW", 2);

CREATE TABLE Comment (id INTEGER PRIMARY KEY AUTOINCREMENT, postId INTEGER, content TEXT, CONSTRAINT Comment_fk_postId FOREIGN KEY (postId) REFERENCES Post (id));
CREATE INDEX Comment_fk_postId ON Comment (postId);
INSERT INTO Comment (content, postId) VALUES ("Congrats for this new blog", 1);
INSERT INTO Comment (content, postId) VALUES ("You new blog is so cool", 1);
INSERT INTO Comment (content, postId) VALUES ("Really nice first technical blog post", 2);

-- Down
DROP INDEX Comment_fk_postId;
DROP TABLE Comment;

DROP INDEX Post_ix_categoryId;
DROP TABLE Post;

DROP TABLE Category;